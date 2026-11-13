"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "@/translations/useTranslation";

export function FaqSection() {
  const { dict } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [questionText, setQuestionText] = useState("");

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = dict.faqSection.faqs || [];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 select-none z-10 bg-[#07080c]">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading, Subtitle, Question Input Form */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            {/* Header with Orange Accent Brush Mark */}
            <div className="space-y-4">
              <div className="relative inline-block">
                {/* Accent Brush stroke mark behind heading */}
                <div className="absolute -left-4 -top-3 w-28 sm:w-36 h-14 sm:h-16 -z-0 opacity-95 pointer-events-none">
                  <Image
                    src="/images/why-choose-us-mark.png"
                    alt="Accent Mark"
                    width={140}
                    height={70}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(255,87,34,0.7)]"
                  />
                </div>

                <h2
                  className="relative z-10 font-red-rose text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.15]"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  <span suppressHydrationWarning>{dict.faqSection.title1}</span>
                  <br />
                  <span suppressHydrationWarning>{dict.faqSection.title2}</span>
                </h2>
              </div>

              {/* Description Paragraph */}
              <p
                suppressHydrationWarning
                className="font-poppins text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-md pt-2"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {dict.faqSection.description}
              </p>
            </div>

            {/* Still have questions? Form Box */}
            <div className="space-y-4 pt-2">
              <h3
                suppressHydrationWarning
                className="font-poppins text-lg sm:text-xl font-bold text-white tracking-tight"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {dict.faqSection.stillHaveQuestions}
              </h3>

              <div className="space-y-3">
                <textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder={dict.faqSection.placeholder}
                  rows={4}
                  className="w-full rounded-xl bg-[#0e0f14] border border-white/10 px-4 py-3 font-poppins text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] transition-colors resize-none"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                />

                <div>
                  <button
                    type="button"
                    className="px-6 py-2.5 rounded-lg bg-[#271610] text-[#a05a42] hover:bg-[#FF5722] hover:text-white font-poppins text-sm font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.4)] cursor-pointer"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    <span suppressHydrationWarning>{dict.faqSection.sendNow}</span>
                  </button>
                </div>
              </div>

              {/* Or Mail Info */}
              <div
                className="font-poppins text-xs sm:text-[13px] text-zinc-400 space-y-1.5 pt-3"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                <div suppressHydrationWarning className="text-zinc-400 font-medium">
                  {dict.faqSection.orText}
                </div>
                <div>
                  <span suppressHydrationWarning>{dict.faqSection.sendMailTo}</span>{" "}
                  <a
                    href="mailto:foxonext@mail.com"
                    className="text-white hover:text-[#FF5722] transition-colors underline decoration-white/30 underline-offset-2"
                  >
                    foxonext@mail.com
                  </a>
                </div>
                <p
                  suppressHydrationWarning
                  className="text-zinc-500 text-xs leading-relaxed max-w-sm pt-0.5"
                >
                  {dict.faqSection.supportNote}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`relative rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border border-[#FF5722] bg-[#0c0d12] shadow-[0_0_24px_rgba(255,87,34,0.12)]"
                      : "border border-white/[0.08] bg-[#0c0d12]/50 hover:bg-[#0c0d12] hover:border-white/15"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full p-4 sm:p-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                  >
                    <span
                      className="font-poppins text-sm sm:text-base font-medium text-white tracking-tight"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      <span className="text-[#FF5722] font-semibold mr-2 sm:mr-3">
                        {item.number}.
                      </span>
                      <span suppressHydrationWarning>{item.question}</span>
                    </span>

                    {/* Orange Chevron Badge */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FF5722] flex items-center justify-center text-white flex-shrink-0 shadow-[0_2px_10px_rgba(255,87,34,0.35)] transition-transform duration-200">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Body with Dashed Divider */}
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div className="border-t border-dashed border-zinc-700/70 mb-4" />
                      <p
                        suppressHydrationWarning
                        className="font-poppins text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
