"use client";

/**
 * LEAD FORM COMPONENT - Clean White Theme Design
 * High-converting, accessible lead capture form
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

// Tracking functions (implement with your analytics)
function trackFormStart() {
  console.log("[Analytics] Form Start");
}

function trackFormSubmission(data: { propertyType: string }) {
  console.log("[Analytics] Form Submission", data);
}

function trackFormError(errorType: string, errorMessage: string) {
  console.log("[Analytics] Form Error", { errorType, errorMessage });
}

export default function LeadForm() {
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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

  const handleFirstInteraction = useCallback(() => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackFormStart();
    }
  }, [hasStartedForm]);

  const onSubmit = async (data: LeadFormInput) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      trackFormSubmission({ propertyType: data.propertyType });
      setSubmitStatus("success");

      setTimeout(() => {
        router.push("/thank-you");
      }, 1500);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      trackFormError("submission_error", message);
      setSubmitStatus("error");
      setErrorMessage(message);
    }
  };

  // Input styling
  const inputBaseStyles =
    "w-full rounded-xl border bg-white px-4 py-4 pl-12 text-[#0A2540] placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 text-base shadow-sm";
  const inputNormalStyles =
    "border-gray-200 focus:border-[#0066FF] focus:ring-[#0066FF]/20";
  const inputErrorStyles =
    "border-red-300 focus:border-red-500 focus:ring-red-500/20";

  return (
    <section
      id="lead-form"
      className="relative bg-gray-50 py-20 lg:py-28"
      aria-labelledby="form-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            contactType: "sales",
            availableLanguage: "English",
            areaServed: "US",
            description: "Request a free quote for professional Amazon LEO satellite internet installation",
          }),
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 text-center">
          <h2
            id="form-heading"
            className="mb-4 text-3xl font-bold text-[#0A2540] sm:text-4xl lg:text-5xl"
          >
            Get Your{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
              Free Quote
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-lg text-gray-600">
            Professional Amazon LEO satellite internet installation. We'll contact you within{" "}
            <strong className="text-[#0A2540]">24 hours</strong> with your personalized quote.
          </p>
        </header>

        {/* Trust signals */}
        <ul className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          <li className="flex items-center gap-2 text-gray-600">
            <Shield className="h-5 w-5 text-green-500" aria-hidden="true" />
            <span>100% Free Quote</span>
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <BadgeCheck className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
            <span>No Obligation</span>
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <Clock className="h-5 w-5 text-[#FF9900]" aria-hidden="true" />
            <span>Response in 24hrs</span>
          </li>
        </ul>

        {/* Form card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-8">
          {/* Success state */}
          {submitStatus === "success" && (
            <output className="flex min-h-[400px] flex-col items-center justify-center py-12 text-center" aria-live="polite">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-[#0A2540]">Quote Request Submitted!</h3>
              <p className="text-gray-600">Redirecting you to the confirmation page...</p>
            </output>
          )}

          {/* Form */}
          {submitStatus !== "success" && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {/* Error banner */}
              <div className="min-h-[1px]" role="alert" aria-live="polite">
                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" aria-hidden="true" />
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  </div>
                )}
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    autoComplete="name"
                    placeholder="John Smith"
                    onFocus={handleFirstInteraction}
                    className={`${inputBaseStyles} ${errors.name ? inputErrorStyles : inputNormalStyles}`}
                  />
                </div>
                <div className="mt-1 min-h-[20px]">
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    onFocus={handleFirstInteraction}
                    className={`${inputBaseStyles} ${errors.email ? inputErrorStyles : inputNormalStyles}`}
                  />
                </div>
                <div className="mt-1 min-h-[20px]">
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    placeholder="(555) 123-4567"
                    onFocus={handleFirstInteraction}
                    className={`${inputBaseStyles} ${errors.phone ? inputErrorStyles : inputNormalStyles}`}
                  />
                </div>
                <div className="mt-1 min-h-[20px]">
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
                  Installation Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <textarea
                    {...register("address")}
                    id="address"
                    rows={3}
                    autoComplete="street-address"
                    placeholder="123 Main Street, City, State 12345"
                    onFocus={handleFirstInteraction}
                    className={`${inputBaseStyles} resize-none ${errors.address ? inputErrorStyles : inputNormalStyles}`}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">Enter the address where you want LEO satellite installed</p>
                <div className="min-h-[20px]">
                  {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
                </div>
              </div>

              {/* Property Type */}
              <fieldset>
                <legend className="mb-3 block text-sm font-medium text-gray-700">
                  Property Type <span className="text-red-500">*</span>
                </legend>
                <div className="grid grid-cols-2 gap-4">
                  {propertyTypes.map((type) => (
                    <label
                      key={type}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all duration-200 ${
                        selectedPropertyType === type
                          ? "border-[#0066FF] bg-[#0066FF]/5 ring-2 ring-[#0066FF]/20"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      } ${errors.propertyType && !selectedPropertyType ? "border-red-300" : ""}`}
                    >
                      <input
                        {...register("propertyType")}
                        type="radio"
                        value={type}
                        onFocus={handleFirstInteraction}
                        className="sr-only"
                      />
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
                          selectedPropertyType === type
                            ? "bg-[#0066FF]/10 text-[#0066FF]"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {type === "residential" ? <Home className="h-6 w-6" /> : <Building2 className="h-6 w-6" />}
                      </div>
                      <span
                        className={`text-lg font-medium capitalize ${
                          selectedPropertyType === type ? "text-[#0A2540]" : "text-gray-600"
                        }`}
                      >
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="mt-1 min-h-[20px]">
                  {errors.propertyType && <p className="text-sm text-red-500">{errors.propertyType.message}</p>}
                </div>
              </fieldset>

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0066FF] px-6 py-4 text-lg font-bold text-white shadow-lg shadow-[#0066FF]/25 transition-all duration-300 hover:bg-[#0052CC] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    <span>Submitting Your Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    <span>Get My Free Quote</span>
                  </>
                )}
              </button>

              {/* Privacy */}
              <p className="text-center text-xs leading-relaxed text-gray-500">
                🔒 Your information is secure. By submitting, you agree to be contacted about Amazon LEO installation.{" "}
                <a href="/privacy" className="underline hover:text-[#0066FF]">Privacy Policy</a>
              </p>
            </form>
          )}
        </div>

        {/* Trust badges */}
        <footer className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
            <span>No obligation quote</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
            <span>Certified LEO installers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#FF9900]" aria-hidden="true" />
            <span>Same-week installation</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
