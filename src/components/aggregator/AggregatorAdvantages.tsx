"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageOnLeft?: boolean;
}

const ADVANTAGES: AdvantageItem[] = [
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/aggregator/advantage-api.png",
    imageAlt: "FOXONEXT Holographic API Integration Sphere",
    imageOnLeft: false,
  },
  {
    id: "content-management",
    title: "Content Management",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/aggregator/advantage-content.png",
    imageAlt: "Isometric Digital Content Management Tree Hub",
    imageOnLeft: true,
  },
  {
    id: "tournament-tool",
    title: "Tournament Tool",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/aggregator/advantage-tournament.png",
    imageAlt: "3D Championship Trophy with Wings and Swords",
    imageOnLeft: false,
  },
  {
    id: "game-portfolio",
    title: "Game Portfolio",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/aggregator/advantage-portfolio.png",
    imageAlt: "3D Game Controller with Connected Ecosystem Assets",
    imageOnLeft: true,
  },
];

export function AggregatorAdvantages() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 select-none z-10 bg-transparent">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Header with Orange Accent Brush Mark */}
        <div className="relative inline-block">
          <div className="absolute -left-3 -top-2 w-28 sm:w-36 h-12 -z-0 opacity-95 pointer-events-none">
            <Image
              src="/images/why-choose-us-mark.png"
              alt="Accent Mark"
              width={120}
              height={60}
              className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(255,87,34,0.65)]"
            />
          </div>

          <div className="relative z-10 flex items-center justify-center gap-3">
            <h2
              className="font-red-rose text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold text-white tracking-tight leading-tight"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              FOXOnext Aggregator Advantages
            </h2>
            <Sparkles className="w-6 h-6 text-[#FF5722] opacity-90 hidden sm:block" />
          </div>
        </div>

        {/* Outer Wrapper with Orange Circuit Line Details */}
        <div className="relative space-y-10 sm:space-y-14">
          {/* Subtle side decorative orange line with diamond node (Desktop) */}
          <div className="hidden xl:block absolute -left-8 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-[#FF5722]/40 to-transparent pointer-events-none">
            <div className="sticky top-1/2 -left-2 w-4 h-4 -translate-x-[7px] text-[#FF5722] text-xs">
              ✦
            </div>
          </div>
          <div className="hidden xl:block absolute -right-8 top-24 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-[#FF5722]/40 to-transparent pointer-events-none">
            <div className="sticky top-1/2 -right-2 w-4 h-4 translate-x-[7px] text-[#FF5722] text-xs">
              ✦
            </div>
          </div>

          {/* 4 Cards */}
          {ADVANTAGES.map((adv) => {
            return (
              <div
                key={adv.id}
                className="relative rounded-2xl sm:rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    adv.imageOnLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Column */}
                  <div
                    className={`space-y-6 sm:space-y-7 ${
                      adv.imageOnLeft
                        ? "lg:col-span-6 lg:order-2"
                        : "lg:col-span-6 lg:order-1"
                    }`}
                  >
                    {/* Title with Orange L-Shape Bracket */}
                    <div className="relative inline-block border-l-2 border-t-2 border-[#FF5722] pl-4 pt-2 pr-8">
                      <h3
                        className="font-red-rose text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-white tracking-tight leading-tight"
                        style={{
                          fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                        }}
                      >
                        {adv.title}
                      </h3>
                    </div>

                    {/* Paragraph */}
                    <p
                      className="font-poppins text-sm sm:text-base md:text-[17px] text-zinc-200 font-normal leading-relaxed max-w-xl"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {adv.description}
                    </p>

                    {/* Bullet Points with Orange Hollow Diamond */}
                    <div
                      className="space-y-3 pt-1 font-poppins text-sm sm:text-base md:text-[16px] text-zinc-200"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {adv.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-3">
                          <span className="text-[#FF5722] text-base sm:text-lg">
                            ◇
                          </span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Link
                        href="#contact"
                        className="inline-block px-7 sm:px-8 py-3 sm:py-3.5 rounded bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-poppins font-semibold text-sm sm:text-base tracking-wide shadow-[0_4px_16px_rgba(255,87,34,0.4)] hover:shadow-[0_6px_22px_rgba(255,87,34,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`flex items-center justify-center ${
                      adv.imageOnLeft
                        ? "lg:col-span-6 lg:order-1"
                        : "lg:col-span-6 lg:order-2"
                    }`}
                  >
                    <div className="relative w-full max-w-[440px] sm:max-w-[520px] lg:max-w-[560px] xl:max-w-[620px] aspect-square flex items-center justify-center">
                      <Image
                        src={adv.image}
                        alt={adv.imageAlt}
                        width={640}
                        height={640}
                        className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(255,87,34,0.3)] hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
