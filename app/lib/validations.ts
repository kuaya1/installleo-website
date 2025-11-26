import { z } from "zod";

/**
 * =============================================================================
 * INSTALLLEO.COM - FORM VALIDATION SCHEMAS
 * =============================================================================
 *
 * Zod validation schemas for all forms on the site.
 * These ensure data quality and provide user-friendly error messages.
 *
 * SEO IMPACT:
 * - Clean data improves email deliverability (verified emails = better sender reputation)
 * - Valid phone numbers enable callback tracking
 * - Complete addresses help with local SEO and service area targeting
 *
 * CONVERSION OPTIMIZATION:
 * - Validation messages are written to guide users, not frustrate them
 * - Real-time validation reduces form abandonment
 * - Progressive validation (onBlur) feels less intrusive
 * =============================================================================
 */

/**
 * Property type options for lead form
 * Used for segmentation and targeted follow-up
 */
export const propertyTypes = ["residential", "business"] as const;
export type PropertyType = (typeof propertyTypes)[number];

/**
 * Phone number regex pattern
 * Supports formats: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
 */
const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

/**
 * Lead form validation schema
 * Validates all fields required for Amazon LEO satellite installation leads
 */
export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim()
    .refine((val) => val.split(" ").filter(Boolean).length >= 1, {
      message: "Please enter your full name",
    }),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email is required")
    .max(254, "Email must be less than 254 characters")
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number is too long")
    .regex(phoneRegex, "Please enter a valid US phone number")
    .trim(),

  address: z
    .string()
    .min(10, "Please enter a complete address")
    .max(500, "Address must be less than 500 characters")
    .trim()
    .refine((val) => val.includes(" "), {
      message: "Please enter a complete street address",
    }),

  propertyType: z.enum(propertyTypes, {
    message: "Please select a property type",
  }),
});

/**
 * Lead form input type (before validation transforms)
 */
export type LeadFormInput = z.input<typeof leadFormSchema>;

/**
 * Lead form output type (after validation transforms)
 */
export type LeadFormData = z.output<typeof leadFormSchema>;

/**
 * Contact form schema for general inquiries (optional future use)
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email is required")
    .max(254, "Email must be less than 254 characters")
    .toLowerCase()
    .trim(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Email validation helper schema
 */
export const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .toLowerCase()
  .trim();

/**
 * Phone validation helper schema
 */
export const phoneSchema = z
  .string()
  .regex(phoneRegex, "Please enter a valid US phone number")
  .trim();
