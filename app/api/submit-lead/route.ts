/**
 * =============================================================================
 * LEAD SUBMISSION API ROUTE - installleo.com
 * =============================================================================
 *
 * High-performance, conversion-optimized lead capture endpoint.
 *
 * FEATURES:
 * - Zod schema validation with detailed error messages
 * - Rate limiting (IP-based, configurable)
 * - Source/referrer tracking for attribution
 * - Server-side conversion logging (GA4, Meta CAPI ready)
 * - Professional email notifications via Resend
 * - Comprehensive error handling
 *
 * ENVIRONMENT VARIABLES REQUIRED:
 * - RESEND_API_KEY: Resend API key for email sending
 * - NOTIFICATION_EMAIL: Email to receive lead notifications
 * - FROM_EMAIL: Verified sender email in Resend
 * - NEXT_PUBLIC_SITE_URL: Site URL for email links
 *
 * RATE LIMITING:
 * - 5 requests per IP per 15 minutes (configurable)
 * - Uses in-memory store (replace with Redis for production scale)
 *
 * =============================================================================
 */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadFormSchema } from "@/app/lib/validations";
import type { ApiResponse, LeadSubmissionResponse } from "@/app/lib/types";

// =============================================================================
// CONFIGURATION
// =============================================================================

// Lazy initialization to avoid build-time errors when env vars aren't available
let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not configured");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

const NOTIFICATION_EMAIL =
  process.env.NOTIFICATION_EMAIL || "leads@installleo.com";
const FROM_EMAIL =
  process.env.FROM_EMAIL || "InstallLEO <noreply@installleo.com>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://installleo.com";

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 submissions per window

// =============================================================================
// RATE LIMITING (In-Memory Store)
// NOTE: For production at scale, replace with Redis or similar
// =============================================================================

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 10000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetAt < now) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!entry || entry.resetAt < now) {
    // New window
    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    rateLimitStore.set(ip, { count: 1, resetAt });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  // Increment count
  entry.count += 1;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    resetAt: entry.resetAt,
  };
}

// =============================================================================
// LEAD METADATA TYPES
// =============================================================================

interface LeadMetadata {
  leadId: string;
  submittedAt: Date;
  ipAddress: string;
  userAgent: string;
  referrer: string;
  source: string;
  medium: string;
  campaign: string;
  landingPage: string;
}

// =============================================================================
// SERVER-SIDE CONVERSION TRACKING
// =============================================================================

/**
 * Log conversion for analytics
 * This is where you'd integrate:
 * - Google Analytics 4 Measurement Protocol
 * - Meta Conversions API (CAPI)
 * - Your own analytics database
 *
 * @example GA4 Measurement Protocol
 * await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA4_ID}&api_secret=${API_SECRET}`, {
 *   method: 'POST',
 *   body: JSON.stringify({
 *     client_id: clientId,
 *     events: [{
 *       name: 'generate_lead',
 *       params: {
 *         value: 100,
 *         currency: 'USD',
 *         lead_id: metadata.leadId,
 *         property_type: leadData.propertyType,
 *       }
 *     }]
 *   })
 * });
 *
 * @example Meta Conversions API
 * await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
 *   method: 'POST',
 *   body: JSON.stringify({
 *     data: [{
 *       event_name: 'Lead',
 *       event_time: Math.floor(Date.now() / 1000),
 *       action_source: 'website',
 *       user_data: {
 *         em: hashEmail(leadData.email),
 *         ph: hashPhone(leadData.phone),
 *       },
 *       custom_data: {
 *         lead_id: metadata.leadId,
 *         property_type: leadData.propertyType,
 *         value: 100,
 *         currency: 'USD',
 *       }
 *     }]
 *   })
 * });
 */
function logConversion(
  leadData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    propertyType: string;
  },
  metadata: LeadMetadata
): void {
  // Structured log for analytics ingestion
  const conversionLog = {
    event: "lead_submission",
    timestamp: metadata.submittedAt.toISOString(),
    lead: {
      id: metadata.leadId,
      propertyType: leadData.propertyType,
      // Don't log PII in production analytics
      hasEmail: Boolean(leadData.email),
      hasPhone: Boolean(leadData.phone),
      hasAddress: Boolean(leadData.address),
    },
    attribution: {
      source: metadata.source,
      medium: metadata.medium,
      campaign: metadata.campaign,
      referrer: metadata.referrer,
      landingPage: metadata.landingPage,
    },
    context: {
      userAgent: metadata.userAgent,
      // IP is hashed/anonymized in production
      ipPrefix: metadata.ipAddress.split(".").slice(0, 2).join(".") + ".x.x",
    },
  };

  // Log to console (in production, send to your analytics service)
  console.log("[CONVERSION]", JSON.stringify(conversionLog, null, 2));

  // TODO: Implement these for production
  // - Send to GA4 Measurement Protocol
  // - Send to Meta Conversions API
  // - Store in database for custom analytics
  // - Send to webhook (Zapier, Make, etc.)
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Extract lead metadata from request
 */
function extractMetadata(request: NextRequest): LeadMetadata {
  const headers = request.headers;
  const url = new URL(request.url);

  // Get IP address (handles proxies/load balancers)
  const forwardedFor = headers.get("x-forwarded-for");
  const realIp = headers.get("x-real-ip");
  const ipAddress = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";

  // Get referrer and UTM parameters
  const referrer = headers.get("referer") || headers.get("referrer") || "direct";
  const source = url.searchParams.get("utm_source") || parseSourceFromReferrer(referrer);
  const medium = url.searchParams.get("utm_medium") || "organic";
  const campaign = url.searchParams.get("utm_campaign") || "";

  // Generate unique lead ID
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  const leadId = `LEO-${timestamp}-${random}`;

  return {
    leadId,
    submittedAt: new Date(),
    ipAddress,
    userAgent: headers.get("user-agent") || "unknown",
    referrer,
    source,
    medium,
    campaign,
    landingPage: headers.get("referer") || SITE_URL,
  };
}

/**
 * Parse traffic source from referrer URL
 */
function parseSourceFromReferrer(referrer: string): string {
  if (!referrer || referrer === "direct") return "direct";

  try {
    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();

    // Common referrer mappings
    if (hostname.includes("google")) return "google";
    if (hostname.includes("bing")) return "bing";
    if (hostname.includes("facebook") || hostname.includes("fb.")) return "facebook";
    if (hostname.includes("instagram")) return "instagram";
    if (hostname.includes("twitter") || hostname.includes("t.co")) return "twitter";
    if (hostname.includes("linkedin")) return "linkedin";
    if (hostname.includes("youtube")) return "youtube";
    if (hostname.includes("tiktok")) return "tiktok";

    return hostname;
  } catch {
    return "unknown";
  }
}

/**
 * Escape HTML special characters for email safety
 */
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char]);
}

// =============================================================================
// EMAIL TEMPLATES
// =============================================================================

function generateEmailHtml(
  lead: {
    name: string;
    email: string;
    phone: string;
    address: string;
    propertyType: string;
  },
  metadata: LeadMetadata
): string {
  const propertyTypeDisplay =
    lead.propertyType.charAt(0).toUpperCase() + lead.propertyType.slice(1);
  const propertyBgColor =
    lead.propertyType === "residential" ? "#ECFDF5" : "#EFF6FF";
  const propertyBorderColor =
    lead.propertyType === "residential" ? "#A7F3D0" : "#BFDBFE";
  const propertyTextColor =
    lead.propertyType === "residential" ? "#065F46" : "#1E40AF";

  const formattedDate = metadata.submittedAt.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = metadata.submittedAt.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>New Lead: ${escapeHtml(lead.name)}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; -webkit-font-smoothing: antialiased;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
          
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #0A2540 0%, #0d3a5c 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                🛰️ New Installation Lead
              </h1>
              <p style="margin: 10px 0 0; color: #00D9FF; font-size: 14px; font-weight: 500;">
                InstallLEO.com • Amazon LEO Satellite Installation
              </p>
            </td>
          </tr>
          
          <!-- Priority Badge Section -->
          <tr>
            <td style="padding: 24px 40px 0;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <!-- Lead ID -->
                  <td style="width: 48%; background-color: #FFF7ED; border: 1px solid #FED7AA; border-radius: 10px; padding: 14px 18px; vertical-align: top;">
                    <p style="margin: 0; font-size: 11px; color: #9A3412; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Lead ID</p>
                    <p style="margin: 6px 0 0; font-size: 15px; color: #C2410C; font-weight: 700; font-family: 'SF Mono', Monaco, 'Courier New', monospace;">${metadata.leadId}</p>
                  </td>
                  <td style="width: 4%;"></td>
                  <!-- Property Type -->
                  <td style="width: 48%; background-color: ${propertyBgColor}; border: 1px solid ${propertyBorderColor}; border-radius: 10px; padding: 14px 18px; vertical-align: top;">
                    <p style="margin: 0; font-size: 11px; color: ${propertyTextColor}; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Property Type</p>
                    <p style="margin: 6px 0 0; font-size: 15px; color: ${propertyTextColor}; font-weight: 700;">
                      ${lead.propertyType === "residential" ? "🏠" : "🏢"} ${propertyTypeDisplay}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contact Information -->
          <tr>
            <td style="padding: 28px 40px;">
              <h2 style="margin: 0 0 20px; font-size: 16px; color: #0A2540; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; border-bottom: 3px solid #00D9FF; padding-bottom: 10px; display: inline-block;">
                Contact Information
              </h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <!-- Name -->
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #E4E4E7;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 24px; vertical-align: top; padding-right: 12px;">
                          <span style="font-size: 18px;">👤</span>
                        </td>
                        <td>
                          <p style="margin: 0; font-size: 11px; color: #71717A; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Full Name</p>
                          <p style="margin: 4px 0 0; font-size: 17px; color: #18181B; font-weight: 600;">${escapeHtml(lead.name)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Email -->
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #E4E4E7;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 24px; vertical-align: top; padding-right: 12px;">
                          <span style="font-size: 18px;">📧</span>
                        </td>
                        <td>
                          <p style="margin: 0; font-size: 11px; color: #71717A; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Email Address</p>
                          <p style="margin: 4px 0 0; font-size: 17px;">
                            <a href="mailto:${escapeHtml(lead.email)}" style="color: #0A2540; text-decoration: none; font-weight: 600;">${escapeHtml(lead.email)}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Phone -->
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #E4E4E7;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 24px; vertical-align: top; padding-right: 12px;">
                          <span style="font-size: 18px;">📱</span>
                        </td>
                        <td>
                          <p style="margin: 0; font-size: 11px; color: #71717A; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Phone Number</p>
                          <p style="margin: 4px 0 0; font-size: 17px;">
                            <a href="tel:${escapeHtml(lead.phone)}" style="color: #0A2540; text-decoration: none; font-weight: 600;">${escapeHtml(lead.phone)}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Address -->
                <tr>
                  <td style="padding: 14px 0;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 24px; vertical-align: top; padding-right: 12px;">
                          <span style="font-size: 18px;">📍</span>
                        </td>
                        <td>
                          <p style="margin: 0; font-size: 11px; color: #71717A; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Installation Address</p>
                          <p style="margin: 4px 0 0; font-size: 17px; color: #18181B; font-weight: 600; line-height: 1.6;">${escapeHtml(lead.address).replace(/\n/g, "<br>")}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Attribution/Source Information -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <table role="presentation" style="width: 100%; background-color: #F9FAFB; border-radius: 10px; padding: 16px;">
                <tr>
                  <td style="padding: 16px;">
                    <p style="margin: 0 0 12px; font-size: 11px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Lead Source & Attribution</p>
                    <table role="presentation" style="width: 100%; font-size: 13px; color: #4B5563;">
                      <tr>
                        <td style="padding: 4px 0;"><strong>Source:</strong> ${escapeHtml(metadata.source)}</td>
                        <td style="padding: 4px 0;"><strong>Medium:</strong> ${escapeHtml(metadata.medium)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0;" colspan="2"><strong>Referrer:</strong> ${escapeHtml(metadata.referrer.substring(0, 60))}${metadata.referrer.length > 60 ? "..." : ""}</td>
                      </tr>
                      ${metadata.campaign ? `<tr><td style="padding: 4px 0;" colspan="2"><strong>Campaign:</strong> ${escapeHtml(metadata.campaign)}</td></tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- CTA Buttons -->
          <tr>
            <td style="padding: 0 40px 28px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <a href="mailto:${escapeHtml(lead.email)}?subject=Your%20Amazon%20LEO%20Installation%20Quote%20-%20${encodeURIComponent(metadata.leadId)}&body=Hi%20${encodeURIComponent(lead.name)},%0A%0AThank%20you%20for%20your%20interest%20in%20Amazon%20LEO%20satellite%20internet%20installation!%0A%0AWe've%20received%20your%20quote%20request%20and%20would%20love%20to%20discuss%20your%20installation%20at:%0A${encodeURIComponent(lead.address)}%0A%0A" 
                       style="display: inline-block; background: linear-gradient(135deg, #FF9900 0%, #F97316 100%); color: #0A2540; text-decoration: none; padding: 16px 36px; border-radius: 10px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 14px rgba(255, 153, 0, 0.4);">
                      ✉️ Reply to Lead
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding-top: 12px;">
                    <a href="tel:${escapeHtml(lead.phone)}" 
                       style="display: inline-block; background-color: #ffffff; border: 2px solid #0A2540; color: #0A2540; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 600; font-size: 14px;">
                      📞 Call ${escapeHtml(lead.phone)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #F4F4F5; padding: 24px 40px; text-align: center; border-top: 1px solid #E4E4E7;">
              <p style="margin: 0; font-size: 13px; color: #52525B; font-weight: 500;">
                📅 Submitted: ${formattedDate}
              </p>
              <p style="margin: 4px 0 0; font-size: 13px; color: #71717A;">
                🕐 ${formattedTime}
              </p>
              <p style="margin: 16px 0 0; font-size: 12px; color: #A1A1AA;">
                <a href="${SITE_URL}" style="color: #00D9FF; text-decoration: none;">InstallLEO.com</a> • Amazon LEO Satellite Installation Services
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function generateEmailText(
  lead: {
    name: string;
    email: string;
    phone: string;
    address: string;
    propertyType: string;
  },
  metadata: LeadMetadata
): string {
  const propertyTypeDisplay =
    lead.propertyType.charAt(0).toUpperCase() + lead.propertyType.slice(1);

  const formattedDate = metadata.submittedAt.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = metadata.submittedAt.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });

  return `
🛰️ NEW INSTALLATION LEAD - InstallLEO.com
============================================

Lead ID: ${metadata.leadId}
Property Type: ${propertyTypeDisplay}

CONTACT INFORMATION
--------------------
👤 Full Name: ${lead.name}
📧 Email: ${lead.email}
📱 Phone: ${lead.phone}

📍 Installation Address:
${lead.address}

LEAD SOURCE & ATTRIBUTION
--------------------------
Source: ${metadata.source}
Medium: ${metadata.medium}
Referrer: ${metadata.referrer}
${metadata.campaign ? `Campaign: ${metadata.campaign}` : ""}

SUBMISSION DETAILS
-------------------
Date: ${formattedDate}
Time: ${formattedTime}

---
InstallLEO.com - Amazon LEO Satellite Installation Services
${SITE_URL}
  `.trim();
}

// =============================================================================
// API ROUTE HANDLERS
// =============================================================================

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<LeadSubmissionResponse>>> {
  const startTime = Date.now();

  try {
    // Extract metadata first (needed for rate limiting)
    const metadata = extractMetadata(request);

    // ==========================================================================
    // RATE LIMITING
    // ==========================================================================
    const rateLimit = checkRateLimit(metadata.ipAddress);

    if (!rateLimit.allowed) {
      console.warn(`[RATE_LIMIT] IP ${metadata.ipAddress} exceeded limit`);

      return NextResponse.json(
        {
          success: false,
          message:
            "Too many requests. Please wait a few minutes before trying again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.ceil((rateLimit.resetAt - Date.now()) / 1000)
            ),
            "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(Math.ceil(rateLimit.resetAt / 1000)),
          },
        }
      );
    }

    // ==========================================================================
    // PARSE REQUEST BODY
    // ==========================================================================
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON in request body",
        },
        { status: 400 }
      );
    }

    // ==========================================================================
    // VALIDATE WITH ZOD SCHEMA
    // ==========================================================================
    const validationResult = leadFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string[]> = {};

      for (const issue of validationResult.error.issues) {
        const field = issue.path.join(".");
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field].push(issue.message);
      }

      console.log(
        `[VALIDATION_FAILED] Lead ID: ${metadata.leadId}`,
        fieldErrors
      );

      return NextResponse.json(
        {
          success: false,
          message: "Please check your information and try again.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // ==========================================================================
    // LOG CONVERSION (Server-side tracking)
    // ==========================================================================
    logConversion(leadData, metadata);

    // ==========================================================================
    // SEND EMAIL NOTIFICATION
    // ==========================================================================
    const emailHtml = generateEmailHtml(leadData, metadata);
    const emailText = generateEmailText(leadData, metadata);

    try {
      const resend = getResendClient();
      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [NOTIFICATION_EMAIL],
        subject: `🛰️ New LEO Lead: ${leadData.name} (${leadData.propertyType === "residential" ? "🏠 Residential" : "🏢 Commercial"})`,
        html: emailHtml,
        text: emailText,
        tags: [
          { name: "category", value: "lead" },
          { name: "property_type", value: leadData.propertyType },
          { name: "source", value: metadata.source },
        ],
        headers: {
          "X-Lead-ID": metadata.leadId,
        },
      });

      if (error) {
        console.error(`[EMAIL_ERROR] Lead ID: ${metadata.leadId}`, error);

        // Still return success to user - lead data is logged
        // In production, you'd queue the email for retry
        return NextResponse.json(
          {
            success: true,
            message:
              "Your request has been received. We'll contact you within 24 hours.",
            data: {
              leadId: metadata.leadId,
              message:
                "Our team has been notified and will reach out to you soon.",
            },
          },
          {
            status: 201,
            headers: {
              "X-Lead-ID": metadata.leadId,
              "X-RateLimit-Remaining": String(rateLimit.remaining),
            },
          }
        );
      }
    } catch (emailError) {
      console.error(`[EMAIL_EXCEPTION] Lead ID: ${metadata.leadId}`, emailError);

      // Lead is logged, return partial success
      return NextResponse.json(
        {
          success: true,
          message:
            "Your request has been received. We'll contact you within 24 hours.",
          data: {
            leadId: metadata.leadId,
            message: "Our team will reach out to you soon.",
          },
        },
        {
          status: 201,
          headers: {
            "X-Lead-ID": metadata.leadId,
          },
        }
      );
    }

    // ==========================================================================
    // SUCCESS RESPONSE
    // ==========================================================================
    const responseTime = Date.now() - startTime;
    console.log(
      `[LEAD_SUCCESS] ID: ${metadata.leadId} | Time: ${responseTime}ms | Source: ${metadata.source}`
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your quote request has been submitted successfully.",
        data: {
          leadId: metadata.leadId,
          message: "We'll contact you within 24 hours with your personalized quote.",
        },
      },
      {
        status: 201,
        headers: {
          "X-Lead-ID": metadata.leadId,
          "X-Response-Time": `${responseTime}ms`,
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error("[UNEXPECTED_ERROR]", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

// =============================================================================
// OTHER HTTP METHODS
// =============================================================================

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed. Use POST to submit a lead.",
      docs: `${SITE_URL}/api-docs`,
    },
    {
      status: 405,
      headers: {
        Allow: "POST",
      },
    }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
