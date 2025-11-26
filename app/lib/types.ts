import type { LeadFormData, PropertyType } from "./validations";

/**
 * =============================================================================
 * INSTALLLEO.COM - TYPE DEFINITIONS
 * =============================================================================
 *
 * TypeScript interfaces for all data structures used across the application.
 * These types ensure type safety and improve developer experience.
 *
 * SEO NOTE: Structured data (JSON-LD) types are in seo-config.ts
 * =============================================================================
 */

// =============================================================================
// LEAD MANAGEMENT TYPES
// =============================================================================

/**
 * Lead record as stored in the database
 */
export interface Lead extends LeadFormData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: LeadStatus;
  source: LeadSource;
  notes?: string;
  /** UTM parameters for attribution */
  utm?: UTMParams;
}

/**
 * Lead status for tracking conversion pipeline
 */
export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "scheduled"
  | "installed"
  | "cancelled";

/**
 * Source of the lead for attribution tracking
 */
export type LeadSource =
  | "website"
  | "referral"
  | "google"
  | "facebook"
  | "instagram"
  | "direct";

/**
 * UTM parameters for marketing attribution
 * Track which campaigns drive leads
 */
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

/**
 * API response structure for form submissions
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: FieldErrors;
}

/**
 * Field-level validation errors from API
 */
export interface FieldErrors {
  [fieldName: string]: string[];
}

/**
 * Lead submission response from API
 */
export interface LeadSubmissionResponse {
  leadId: string;
  message: string;
}

/**
 * Email notification payload for Resend
 */
export interface LeadEmailPayload {
  to: string[];
  subject: string;
  lead: LeadFormData;
  submittedAt: Date;
}

/**
 * Service area configuration
 */
export interface ServiceArea {
  id: string;
  name: string;
  state: string;
  zipCodes: string[];
  isActive: boolean;
}

/**
 * Installation service details
 */
export interface InstallationService {
  id: string;
  name: string;
  description: string;
  propertyType: PropertyType;
  features: string[];
  estimatedTime: string;
}

/**
 * FAQ item structure
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  order: number;
}

/**
 * FAQ categories
 */
export type FAQCategory =
  | "general"
  | "installation"
  | "pricing"
  | "technical"
  | "coverage";

/**
 * Testimonial/review structure
 */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  propertyType: PropertyType;
  rating: 1 | 2 | 3 | 4 | 5;
  content: string;
  date: Date;
  isVerified: boolean;
}

/**
 * Site navigation link
 */
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

/**
 * SEO metadata for pages
 */
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

/**
 * Contact information for the business
 */
export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
  hours?: BusinessHours;
}

/**
 * Business operating hours
 */
export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

/**
 * Form field configuration for dynamic forms
 */
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "radio";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

/**
 * Hero section content
 */
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

/**
 * Feature/benefit item for marketing sections
 */
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

/**
 * Pricing tier (if applicable)
 */
export interface PricingTier {
  id: string;
  name: string;
  price: number;
  unit: "month" | "one-time";
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

// =============================================================================
// SEO & STRUCTURED DATA TYPES
// =============================================================================

/**
 * JSON-LD structured data base type
 */
export interface JsonLdBase {
  "@context": "https://schema.org";
  "@type": string;
  "@id"?: string;
}

/**
 * Service area page data for local SEO
 * Used to generate location-specific landing pages
 */
export interface ServiceAreaPage {
  slug: string;
  city: string;
  state: string;
  stateAbbrev: string;
  county?: string;
  population?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
  /** Nearby cities for internal linking */
  nearbyCities?: string[];
  /** Custom content for the page */
  content?: {
    headline?: string;
    description?: string;
    localBenefits?: string[];
  };
}

/**
 * Blog post/article metadata
 */
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  category: string;
  featuredImage?: string;
  readingTime?: number;
}

/**
 * Sitemap entry for dynamic generation
 */
export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

/**
 * Re-export validation types for convenience
 */
export type { LeadFormData, LeadFormInput, PropertyType } from "./validations";
