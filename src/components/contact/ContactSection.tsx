"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "@/translations/useTranslation";
import { getApiUrl } from "@/lib/api";

const ENQUIRY_OPTIONS = [
  "Game Aggregator Integration",
  "CRM - Data Analytics Platform",
  "White-Label Casino Solution",
  "Remote Desktop Server Rental",
  "Partnership & Affiliates",
  "General Business Enquiry",
];

export function ContactSection() {
  const { dict } = useTranslation();
  const [contactInfo, setContactInfo] = useState({
    phone: "+971 58 191 0073",
    email: "sales@cloudzy.com",
    companyName: "Cloudzy AI Information Technology LLC.",
    addressLine1: "Bin Dasmal Building 1, Office 80",
    addressLine2: "Al Goze Industrial First, Dubai · United Arab Emirates",
  });

  React.useEffect(() => {
    fetch(getApiUrl("/contact-info"))
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.contactInfo) {
          setContactInfo((prev) => ({
            ...prev,
            ...data.contactInfo,
          }));
        }
      })
      .catch(() => {});
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
    consent: false,
    isHuman: false,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formData.fullName.trim()) {
      setSubmitError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim()) {
      setSubmitError("Please enter your email address.");
      return;
    }
    if (!formData.consent) {
      setSubmitError("Please confirm your consent before submitting.");
      return;
    }
    if (!formData.isHuman) {
      setSubmitError("Please verify you are human.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl("/inquiries"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          enquiryType: formData.enquiryType || "General Business Enquiry",
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.message || "Failed to submit enquiry. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-20 select-none z-10">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* ================= LEFT COLUMN: INFO & 3D ASSETS ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-10 lg:space-y-12">
            {/* 1. Main Heading & Subtitle */}
            <div className="space-y-5 sm:space-y-6">
              <h1
                suppressHydrationWarning
                className="font-red-rose text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-normal text-white tracking-tight leading-[1.18]"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                {dict.contact.title}
              </h1>

              <p
                suppressHydrationWarning
                className="font-poppins text-xs sm:text-sm lg:text-[15px] text-zinc-400 font-normal leading-[1.7] max-w-lg"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {dict.contact.subtitle}
              </p>
            </div>

            {/* 2. Middle Row: Phone & Email Cards + 3D Chat Bubbles */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              {/* Left Side: Stacked Phone & Email Cards (sm:col-span-6) */}
              <div className="sm:col-span-6 space-y-4">
                {/* Phone Card */}
                <div className="rounded-xl sm:rounded-2xl bg-[#0e1017]/90 border border-white/[0.07] p-4 sm:p-5 space-y-1.5 transition-all duration-300 hover:border-[#FF5722]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-2 text-[#FF5722]">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                    <span
                      suppressHydrationWarning
                      className="font-poppins text-xs sm:text-[13px] font-medium text-[#FF5722]"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {dict.contact.phone}
                    </span>
                  </div>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="font-poppins text-xs sm:text-sm md:text-[15px] text-white font-medium hover:text-[#FF5722] transition-colors block tracking-wide"
                    style={{
                      fontFamily:
                        "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                {/* Email Card */}
                <div className="rounded-xl sm:rounded-2xl bg-[#0e1017]/90 border border-white/[0.07] p-4 sm:p-5 space-y-1.5 transition-all duration-300 hover:border-[#FF5722]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-2 text-[#FF5722]">
                    <span
                      suppressHydrationWarning
                      className="font-poppins text-xs sm:text-[13px] font-medium text-[#FF5722]"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      @ {dict.contact.email}
                    </span>
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-poppins text-xs sm:text-sm md:text-[15px] text-white font-medium hover:text-[#FF5722] transition-colors block tracking-wide"
                    style={{
                      fontFamily:
                        "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Right Side: 3D Glossy Yellow & Blue Speech Chat Bubbles (sm:col-span-6) */}
              <div className="sm:col-span-6 flex items-center justify-center sm:justify-start">
                <div className="relative w-44 sm:w-52 lg:w-60 aspect-square flex items-center justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500 ease-out">
                  <Image
                    src="/images/contact/chat-bubbles.png"
                    alt="3D Chat Bubbles"
                    width={752}
                    height={752}
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(255,180,0,0.25)]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* 3. Bottom Row: Location Card with Blue Map Preview */}
            <div className="rounded-xl sm:rounded-2xl bg-[#0e1017]/90 border border-white/[0.07] p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 transition-all duration-300 hover:border-[#FF5722]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {/* Map Preview Image */}
              <div className="relative w-full sm:w-36 h-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-inner">
                <Image
                  src="/images/contact/map-preview.png"
                  alt="Office Map Location - Dubai UAE"
                  fill
                  sizes="(max-width: 640px) 100vw, 150px"
                  className="object-cover"
                />
              </div>

              {/* Location Details */}
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 text-[#FF5722]">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                  <span
                    className="font-poppins text-xs sm:text-[13px] font-medium text-[#FF5722]"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Location
                  </span>
                </div>
                <p
                  className="font-poppins text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {contactInfo.companyName}
                  <br />
                  {contactInfo.addressLine1}
                  <br />
                  {contactInfo.addressLine2}
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTACT FORM ================= */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl sm:rounded-3xl bg-[#0c0d12]/95 border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-5 sm:space-y-6 relative z-10">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF5722]/20 border border-[#FF5722] text-[#FF5722] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,87,34,0.35)]">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3
                    className="font-red-rose text-2xl sm:text-3xl font-bold text-white tracking-tight"
                    style={{
                      fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                    }}
                  >
                    {dict.contact.successTitle}
                  </h3>
                  <p
                    className="font-poppins text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {dict.contact.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        enquiryType: "",
                        message: "",
                        consent: false,
                        isHuman: false,
                      });
                    }}
                    className="font-poppins mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Field 1: Your Full Name */}
                  <div className="space-y-2">
                    <label
                      className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-medium block"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {dict.contact.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder={dict.contact.fullNamePlaceholder}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-[#14151c] border border-white/[0.06] focus:border-[#FF5722] text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition-all"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    />
                  </div>

                  {/* Field 2 & 3: Email and Phone Number Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-medium block"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        {dict.contact.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={dict.contact.emailPlaceholder}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-[#14151c] border border-white/[0.06] focus:border-[#FF5722] text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition-all"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label
                        className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-medium block"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        {dict.contact.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-[#14151c] border border-white/[0.06] focus:border-[#FF5722] text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition-all"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      />
                    </div>
                  </div>

                  {/* Field 4: What type of enquiries do you have? */}
                  <div className="space-y-2 relative">
                    <label
                      className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-medium block"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {dict.contact.inquiryType}
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-[#14151c] border border-white/[0.06] focus:border-[#FF5722] text-xs sm:text-sm text-left flex items-center justify-between transition-all cursor-pointer"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        <span
                          className={
                            formData.enquiryType
                              ? "text-white"
                              : "text-zinc-500"
                          }
                        >
                          {formData.enquiryType || dict.contact.inquiryPlaceholder}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 rounded-lg bg-[#181a24] border border-white/10 shadow-2xl py-1.5 z-50 backdrop-blur-md">
                          {[
                            dict.contact.inquiryAggregator,
                            dict.contact.inquiryCrm,
                            dict.contact.inquiryWhiteLabel,
                            dict.contact.inquiryCustom,
                            dict.contact.inquiryGeneral,
                          ].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  enquiryType: opt,
                                });
                                setDropdownOpen(false);
                              }}
                              className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                              style={{
                                fontFamily:
                                  "var(--font-poppins), 'Poppins', sans-serif",
                              }}
                            >
                              <span suppressHydrationWarning>{opt}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Field 5: Message Textarea */}
                  <div className="space-y-2">
                    <label
                      className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-medium block"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {dict.contact.message}
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={dict.contact.messagePlaceholder}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-[#14151c] border border-white/[0.06] focus:border-[#FF5722] text-white placeholder-zinc-500 text-xs sm:text-sm outline-none resize-none transition-all"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    />
                  </div>

                  {/* Field 6: Consent Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) =>
                        setFormData({ ...formData, consent: e.target.checked })
                      }
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-[#FF5722] cursor-pointer"
                    />
                    <span
                      className="font-poppins text-xs text-zinc-400 leading-normal"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {dict.contact.consent}
                    </span>
                  </label>

                  {/* Field 7: "I am human" Captcha Container */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg bg-[#14151c] border border-white/[0.08] shadow-inner">
                      <input
                        type="checkbox"
                        id="captcha"
                        checked={formData.isHuman}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isHuman: e.target.checked,
                          })
                        }
                        className="w-4 h-4 rounded border-white/20 bg-white/5 accent-[#FF5722] cursor-pointer"
                      />
                      <label
                        htmlFor="captcha"
                        className="font-poppins text-xs sm:text-sm text-zinc-300 cursor-pointer select-none"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        {dict.contact.humanCheck}
                      </label>
                    </div>
                  </div>

                  {/* Error Notification */}
                  {submitError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-poppins text-xs">
                      {submitError}
                    </div>
                  )}

                  {/* Field 8: Submit Form Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 rounded-lg bg-gradient-to-r from-[#FF5722] to-[#E94E1B] hover:brightness-110 active:scale-[0.99] disabled:opacity-70 text-white font-poppins text-sm sm:text-base font-semibold tracking-wide shadow-[0_4px_22px_rgba(255,87,34,0.45)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{dict.contact.submitting}</span>
                        </>
                      ) : (
                        dict.contact.submit
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
