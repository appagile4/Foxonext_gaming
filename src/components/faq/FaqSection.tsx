"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    number: "1",
    question: "DO you have any Question like I have with this life ?",
    answer:
      "Yes, I also have the same questions like you did at your younger age, and still don't have proper a answers and even some questions are still unanswered, so I'm also like you searching for the answers and also don't know where to find",
  },
  {
    id: 2,
    number: "2",
    question: "What motivates you to keep pushing forward every day?",
    answer:
      "Our commitment to empowering gaming operators with state-of-the-art iGaming infrastructure, zero downtime, and seamless scalable technology keeps us motivated every single day.",
  },
  {
    id: 3,
    number: "3",
    question: "How do you find balance between work and personal life?",
    answer:
      "By architecting automated, highly reliable systems and collaborating with an agile, high-performing team that ensures 24/7 operational resilience without constant firefighting.",
  },
  {
    id: 4,
    number: "4",
    question: "What is a lesson you learned the hard way but are grateful for?",
    answer:
      "Prioritizing high platform security, multi-jurisdiction compliance, and scalable server architecture from day one is vastly superior to troubleshooting legacy debt later.",
  },
  {
    id: 5,
    number: "5",
    question: "If you could change one thing about the world, what would it be?",
    answer:
      "Democratizing access to high-technology digital gaming solutions and fostering transparent, player-first entertainment ecosystems across global markets.",
  },
  {
    id: 6,
    number: "6",
    question: "What is a lesson you learned the hard way but are grateful for?",
    answer:
      "Always listening to operator feedback. Direct user insights have repeatedly driven our finest software innovations and modular feature rollouts.",
  },
  {
    id: 7,
    number: "7",
    question: "If you could change one thing about the world, what would it be?",
    answer:
      "Eliminating the technical complexities that prevent ambitious casino brands from launching fast, compliant, and universally scalable digital platforms.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [questionText, setQuestionText] = useState("");

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                  Frequently Asked
                  <br />
                  Questions
                </h2>
              </div>

              {/* Description Paragraph */}
              <p
                className="font-poppins text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-md pt-2"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                Yes, I also have the same questions like you did at your even
                some questions are still unanswered, so I&apos;m also like you
                searching for the to find I&apos;m also like you searching for the
                to find
              </p>
            </div>

            {/* Still have questions? Form Box */}
            <div className="space-y-4 pt-2">
              <h3
                className="font-poppins text-lg sm:text-xl font-bold text-white tracking-tight"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                Still have questions?
              </h3>

              <div className="space-y-3">
                <textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Type your question here"
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
                    Send now
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
                <div className="text-zinc-400 font-medium">Or,</div>
                <div>
                  Send mail us to{" "}
                  <a
                    href="mailto:foxonext@mail.com"
                    className="text-white hover:text-[#FF5722] transition-colors underline decoration-white/30 underline-offset-2"
                  >
                    foxonext@mail.com
                  </a>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed max-w-sm pt-0.5">
                  Our team will answer you within 24 hours. Till then be patient
                  and Have a Great Day!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Accordion Questions */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {FAQ_ITEMS.map((item, index) => {
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
                      {item.question}
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
