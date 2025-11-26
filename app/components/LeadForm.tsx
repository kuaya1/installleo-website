"use client";

/**
 * =============================================================================
 * LEAD FORM COMPONENT - HIGH-CONVERTING, SEO-OPTIMIZED LEAD CAPTURE
 * =============================================================================
 *
 * CONVERSION OPTIMIZATION:
 * - Clear value proposition above form
 * - Trust signals (free, no obligation, fast response)
 * - Minimal required fields (reduce friction)
 * - Large touch targets (48px minimum for mobile)
 * - Real-time validation (immediate feedback)
 * - Progress indication (loading states)
 * - Success confirmation before redirect
 *
 * SEO/ACCESSIBILITY:
 * - Semantic HTML (form, fieldset, legend, label)
 * - ARIA attributes for screen readers
 * - Proper heading hierarchy (H2 for section)
 * - id="lead-form" for anchor linking from CTAs
 *
 * TRACKING INTEGRATION POINTS:
 * - Form view tracking (intersection observer ready)
 * - Form start tracking (first field focus)
 * - Form submission tracking (success event)
 * - Error tracking (for debugging)
 *
 * CLS PREVENTION:
 * - Fixed heights for error messages (min-height)
 * - Reserved space for loading states
 * - No dynamic content that shifts layout
 * =============================================================================
 */

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Home,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  Shield,
  Clock,
  BadgeCheck,
} from "lucide-react";
import {
  leadFormSchema,
  type LeadFormInput,
  propertyTypes,
} from "@/app/lib/validations";

/**
 * =============================================================================
 * TRACKING HELPER FUNCTIONS
 * =============================================================================
 * These functions wrap analytics calls. Implement based on your setup.
 * Supports: Google Analytics 4, Meta Pixel, Google Tag Manager
 */

/**
 * Track form view - Call when form enters viewport
 * GA4 Event: form_view
 * Meta Pixel: ViewContent
 *
 * USAGE: Call from useEffect with IntersectionObserver
 * @example
 * useEffect(() => {
 *   const observer = new IntersectionObserver(([entry]) => {
 *     if (entry.isIntersecting) trackFormView();
 *   }, { threshold: 0.5 });
 *   observer.observe(formRef.current);
 *   return () => observer.disconnect();
 * }, []);
 */
export function trackFormView() {
  // Google Analytics 4
  // window.gtag?.('event', 'form_view', {
  //   form_name: 'leo_installation_quote',
  //   form_location: 'homepage',
  // });

  // Meta Pixel
  // window.fbq?.('track', 'ViewContent', {
  //   content_name: 'LEO Installation Quote Form',
  //   content_category: 'Lead Form',
  // });

  console.log("[Analytics] Form View");
}

/**
 * Track form start - Call on first field interaction
 * GA4 Event: form_start
 */
function trackFormStart() {
  // window.gtag?.('event', 'form_start', {
  //   form_name: 'leo_installation_quote',
  // });

  console.log("[Analytics] Form Start");
}

/**
 * Track successful form submission
 * GA4 Event: generate_lead
 * Meta Pixel: Lead
 */
function trackFormSubmission(data: { propertyType: string }) {
  // Google Analytics 4 - Lead event
  // window.gtag?.('event', 'generate_lead', {
  //   currency: 'USD',
  //   value: 100, // Estimated lead value
  //   form_name: 'leo_installation_quote',
  //   property_type: data.propertyType,
  // });

  // Meta Pixel - Lead event
  // window.fbq?.('track', 'Lead', {
  //   content_name: 'LEO Installation Quote',
  //   content_category: data.propertyType,
  //   value: 100,
  //   currency: 'USD',
  // });

  // Google Ads Conversion (if using)
  // window.gtag?.('event', 'conversion', {
  //   send_to: 'AW-XXXXXXXXXX/XXXXXXXXXXXX',
  //   value: 100,
  //   currency: 'USD',
  // });

  console.log("[Analytics] Form Submission", data);
}

/**
 * Track form errors for debugging
 * GA4 Event: form_error
 */
function trackFormError(errorType: string, errorMessage: string) {
  // window.gtag?.('event', 'form_error', {
  //   form_name: 'leo_installation_quote',
  //   error_type: errorType,
  //   error_message: errorMessage,
  // });

  console.log("[Analytics] Form Error", { errorType, errorMessage });
}

export default function LeadForm() {
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [hasStartedForm, setHasStartedForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LeadFormInput>({
    resolver: zodResolver(leadFormSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      propertyType: undefined,
    },
  });

  const selectedPropertyType = watch("propertyType");

  /**
   * Track first interaction with form
   */
  const handleFirstInteraction = useCallback(() => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackFormStart();
    }
  }, [hasStartedForm]);

  /**
   * Handle form submission with tracking
   */
  const onSubmit = async (data: LeadFormInput) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      // Track successful submission
      trackFormSubmission({ propertyType: data.propertyType });

      setSubmitStatus("success");

      // Redirect after short delay to show success state
      setTimeout(() => {
        router.push("/thank-you");
      }, 1500);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      // Track error
      trackFormError("submission_error", message);

      setSubmitStatus("error");
      setErrorMessage(message);
    }
  };

  // Input styling classes
  const inputBaseStyles =
    "w-full rounded-xl border bg-white/5 px-4 py-4 pl-12 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 text-base";
  const inputNormalStyles =
    "border-white/20 focus:border-accent focus:ring-accent/20";
  const inputErrorStyles =
    "border-red-500/50 focus:border-red-500 focus:ring-red-500/20";

  return (
    <section
      id="lead-form"
      className="relative bg-primary py-20 lg:py-28"
      aria-labelledby="form-heading"
    >
      {/* 
        JSON-LD ContactPoint Schema
        Helps search engines understand this is a contact/lead form
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            contactType: "sales",
            availableLanguage: "English",
            areaServed: "US",
            description:
              "Request a free quote for professional Amazon LEO satellite internet installation",
          }),
        }}
      />

      {/* Background effects - CSS only, no CLS */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amazon/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/*
          SECTION HEADER
          H2 with keywords: "Free LEO Installation Quote"
          Supporting text reinforces value proposition
        */}
        <header className="mb-10 text-center">
          <h2
            id="form-heading"
            className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Get Your{" "}
            <span className="text-amazon">Free LEO Installation Quote</span>
          </h2>
          <p className="mx-auto max-w-lg text-lg text-gray-300">
            Professional Amazon LEO satellite internet installation. Fill out
            the form and we'll contact you within{" "}
            <strong className="text-white">24 hours</strong> with your
            personalized quote.
          </p>
        </header>

        {/*
          TRUST SIGNALS - Above the form
          Reduces friction by addressing common objections upfront
        */}
        <ul
          className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
          aria-label="Why request a quote"
        >
          <li className="flex items-center gap-2 text-gray-300">
            <Shield className="h-5 w-5 text-green-400" aria-hidden="true" />
            <span>100% Free Quote</span>
          </li>
          <li className="flex items-center gap-2 text-gray-300">
            <BadgeCheck className="h-5 w-5 text-accent" aria-hidden="true" />
            <span>No Obligation</span>
          </li>
          <li className="flex items-center gap-2 text-gray-300">
            <Clock className="h-5 w-5 text-amazon" aria-hidden="true" />
            <span>Response in 24hrs</span>
          </li>
        </ul>

        {/* Form card with glass morphism effect */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
          {/* Success state - Fixed height to prevent CLS */}
          {submitStatus === "success" && (
            <output
              className="flex min-h-[400px] flex-col items-center justify-center py-12 text-center"
              aria-live="polite"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">
                Quote Request Submitted!
              </h3>
              <p className="text-gray-300">
                Redirecting you to the confirmation page...
              </p>
            </output>
          )}

          {/* Form */}
          {submitStatus !== "success" && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
              aria-describedby="form-description"
            >
              {/* Screen reader description */}
              <p id="form-description" className="sr-only">
                Request a free quote for Amazon LEO satellite internet
                installation. All fields marked with asterisk are required.
              </p>

              {/* Error banner - Fixed min-height to prevent CLS */}
              <div
                className="min-h-[1px]"
                role="alert"
                aria-live="polite"
              >
                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                    <AlertCircle
                      className="h-5 w-5 flex-shrink-0 text-red-500"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  </div>
                )}
              </div>

              {/*
                NAME FIELD
                - autocomplete="name" for better UX
                - Large touch target (py-4 = 48px+ height)
              */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Full Name <span className="text-amazon" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    autoComplete="name"
                    placeholder="John Smith"
                    onFocus={handleFirstInteraction}
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`${inputBaseStyles} ${errors.name ? inputErrorStyles : inputNormalStyles}`}
                  />
                </div>
                {/* Error message with fixed height container */}
                <div className="mt-1 min-h-[20px]">
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-400" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              {/*
                EMAIL FIELD
                - type="email" for mobile keyboard
                - autocomplete="email" for autofill
              */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address <span className="text-amazon" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    onFocus={handleFirstInteraction}
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${inputBaseStyles} ${errors.email ? inputErrorStyles : inputNormalStyles}`}
                  />
                </div>
                <div className="mt-1 min-h-[20px]">
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-400" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/*
                PHONE FIELD
                - type="tel" for phone keyboard on mobile
                - autocomplete="tel" for autofill
              */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Phone Number <span className="text-amazon" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    placeholder="(555) 123-4567"
                    onFocus={handleFirstInteraction}
                    aria-required="true"
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`${inputBaseStyles} ${errors.phone ? inputErrorStyles : inputNormalStyles}`}
                  />
                </div>
                <div className="mt-1 min-h-[20px]">
                  {errors.phone && (
                    <p id="phone-error" className="text-sm text-red-400" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/*
                ADDRESS FIELD
                - Textarea for full address
                - autocomplete="street-address" for autofill
              */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Installation Address <span className="text-amazon" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <textarea
                    {...register("address")}
                    id="address"
                    rows={3}
                    autoComplete="street-address"
                    placeholder="123 Main Street, City, State 12345"
                    onFocus={handleFirstInteraction}
                    aria-required="true"
                    aria-invalid={errors.address ? "true" : "false"}
                    aria-describedby={errors.address ? "address-error" : "address-hint"}
                    className={`${inputBaseStyles} resize-none ${errors.address ? inputErrorStyles : inputNormalStyles}`}
                  />
                </div>
                <p id="address-hint" className="mt-1 text-xs text-gray-500">
                  Enter the address where you want LEO satellite installed
                </p>
                <div className="min-h-[20px]">
                  {errors.address && (
                    <p id="address-error" className="text-sm text-red-400" role="alert">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>

              {/*
                PROPERTY TYPE FIELD
                - Semantic fieldset/legend for radio group
                - Large touch targets (p-4 = 48px+)
                - Visual selection state
              */}
              <fieldset>
                <legend className="mb-3 block text-sm font-medium text-gray-300">
                  Property Type <span className="text-amazon" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </legend>
                <div className="grid grid-cols-2 gap-4">
                  {propertyTypes.map((type) => (
                    <label
                      key={type}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all duration-200 ${
                        selectedPropertyType === type
                          ? "border-accent bg-accent/10 ring-2 ring-accent/20"
                          : "border-white/20 bg-white/5 hover:border-white/40"
                      } ${errors.propertyType && !selectedPropertyType ? "border-red-500/50" : ""}`}
                    >
                      <input
                        {...register("propertyType")}
                        type="radio"
                        value={type}
                        onFocus={handleFirstInteraction}
                        className="sr-only"
                        aria-describedby={
                          errors.propertyType ? "propertyType-error" : undefined
                        }
                      />
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
                          selectedPropertyType === type
                            ? "bg-accent/20 text-accent"
                            : "bg-white/10 text-gray-400"
                        }`}
                        aria-hidden="true"
                      >
                        {type === "residential" ? (
                          <Home className="h-6 w-6" />
                        ) : (
                          <Building2 className="h-6 w-6" />
                        )}
                      </div>
                      <span
                        className={`text-lg font-medium capitalize ${
                          selectedPropertyType === type
                            ? "text-white"
                            : "text-gray-300"
                        }`}
                      >
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="mt-1 min-h-[20px]">
                  {errors.propertyType && (
                    <p
                      id="propertyType-error"
                      className="text-sm text-red-400"
                      role="alert"
                    >
                      {errors.propertyType.message}
                    </p>
                  )}
                </div>
              </fieldset>

              {/*
                SUBMIT BUTTON
                - Large touch target (py-4)
                - Loading state with spinner
                - Disabled state styling
                - Descriptive text (not just "Submit")
              */}
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amazon to-orange-500 px-6 py-4 text-lg font-bold text-primary shadow-lg shadow-amazon/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amazon/30 focus:outline-none focus:ring-2 focus:ring-amazon focus:ring-offset-2 focus:ring-offset-primary disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                aria-describedby="submit-description"
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2
                      className="h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                    <span>Submitting Your Request...</span>
                  </>
                ) : (
                  <>
                    <Send
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                    <span>Get My Free LEO Installation Quote</span>
                  </>
                )}
              </button>
              <p id="submit-description" className="sr-only">
                Submit your information to receive a free, no-obligation quote
                for Amazon LEO satellite internet installation.
              </p>

              {/*
                PRIVACY REASSURANCE
                - Addresses privacy concerns (reduces abandonment)
                - Link to privacy policy for compliance
              */}
              <p className="text-center text-xs leading-relaxed text-gray-400">
                🔒 Your information is secure. By submitting, you agree to be
                contacted about Amazon LEO installation services.{" "}
                <a
                  href="/privacy"
                  className="underline transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </p>
            </form>
          )}
        </div>

        {/*
          TRUST BADGES - Below form
          Reinforces credibility after form completion
        */}
        {/* Trust badges below form */}
        <footer className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
            <span>No obligation quote</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
            <span>Certified LEO installers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-amazon" aria-hidden="true" />
            <span>Same-week installation</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
