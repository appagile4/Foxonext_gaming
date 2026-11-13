"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface KeyFeatureTab {
  id: string;
  tabLabel: string;
  cardTitle: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}

const TABS: KeyFeatureTab[] = [
  {
    id: "back-office",
    tabLabel: "Back-Office Management",
    cardTitle: "Back-Office Management",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/white-label/feature-back-office.png",
    imageAlt: "Back-Office Management 3D Folder with Documents",
  },
  {
    id: "marketing-tools",
    tabLabel: "Marketing & Bonus Tools",
    cardTitle: "Marketing & Bonus Tools",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/white-label/feature-marketing.png",
    imageAlt: "Marketing & Bonus Tools 3D Megaphone",
  },
  {
    id: "gamification",
    tabLabel: "Gamification/Games Management",
    cardTitle: "Gamification/Games Management",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/white-label/feature-gamification.png",
    imageAlt: "Gamification/Games Management 3D Joker and Ace Cards",
  },
  {
    id: "payment-systems",
    tabLabel: "Payment Systems",
    cardTitle: "Payment Systems",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/white-label/feature-payment.png",
    imageAlt: "Payment Systems 3D Multi-Currency Rewards Box",
  },
];

export function WhiteLabelKeyFeatures() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const prevTab = () => {
    setActiveTabIdx((prev) => (prev === 0 ? TABS.length - 1 : prev - 1));
  };

  const nextTab = () => {
    setActiveTabIdx((prev) => (prev === TABS.length - 1 ? 0 : prev + 1));
  };

  const currentTab = TABS[activeTabIdx];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 select-none z-10 bg-transparent">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-10 sm:space-y-12">
        {/* Section Header: Brush Mark + Heading + Indicator */}
        <div className="flex items-center justify-between">
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

            <div className="relative z-10 flex items-center gap-3">
              <h2
                className="font-red-rose text-2xl sm:text-3xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-tight"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                FOXOnext Whitelabel Solution Key Features
              </h2>
            </div>
          </div>

          {/* Indicator ⊞ ★ */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#FF5722]">
            <span className="text-base leading-none">⊞</span>
            <span className="text-sm leading-none">★</span>
          </div>
        </div>

        {/* Tab Switcher Bar with Left/Right Arrow Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Left Arrow Button */}
          <button
            onClick={prevTab}
            type="button"
            aria-label="Previous Feature Tab"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-300" />
          </button>

          {/* Tabs Container */}
          <div className="flex-1 flex items-center gap-2 p-1.5 rounded-xl sm:rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 overflow-x-auto scrollbar-none">
            {TABS.map((tab, idx) => {
              const isActive = idx === activeTabIdx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabIdx(idx)}
                  type="button"
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-white text-zinc-950 font-bold shadow-[0_4px_16px_rgba(255,255,255,0.2)]"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                  style={{
                    fontFamily:
                      "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button (Vibrant Orange CTA button) */}
          <button
            onClick={nextTab}
            type="button"
            aria-label="Next Feature Tab"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] hover:brightness-110 text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(255,87,34,0.4)]"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Active Tab Card Container (Frosted Glass Transparent Blur) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Title with L-Bracket, Description, Bullets, CTA Button */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7">
              {/* Title with Orange L-Shape Bracket */}
              <div className="relative inline-block border-l-2 border-t-2 border-[#FF5722] pl-4 pt-2 pr-8">
                <h3
                  className="font-red-rose text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-white tracking-tight leading-tight"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  {currentTab.cardTitle}
                </h3>
              </div>

              {/* Description Paragraph */}
              <p
                className="font-poppins text-sm sm:text-base md:text-[17px] text-zinc-200 font-normal leading-relaxed max-w-xl"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {currentTab.description}
              </p>

              {/* 4 Feature Bullet Points with Orange Hollow Diamond Icon ◇ */}
              <div
                className="space-y-3 pt-1 font-poppins text-sm sm:text-base text-zinc-200"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {currentTab.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3">
                    <span className="text-[#FF5722] text-base sm:text-lg flex-shrink-0">
                      ◇
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Action Button: Learn More */}
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-block px-7 sm:px-8 py-3 sm:py-3.5 rounded bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-poppins font-semibold text-sm sm:text-base tracking-wide shadow-[0_4px_16px_rgba(255,87,34,0.4)] hover:shadow-[0_6px_22px_rgba(255,87,34,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Column: 3D Visual Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-square flex items-center justify-center">
                <Image
                  key={currentTab.id}
                  src={currentTab.image}
                  alt={currentTab.imageAlt}
                  width={520}
                  height={520}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(233,78,27,0.35)] transition-all duration-500 animate-in fade-in zoom-in-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
