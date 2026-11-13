"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface KeyFeatureTab {
  id: string;
  tabLabel: string;
  cardTitle: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}

export const KEY_FEATURE_TABS: KeyFeatureTab[] = [
  {
    id: "data-migration",
    tabLabel: "Data Migration & Setup",
    cardTitle: "Data Migration & Setup",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/data-migration.png",
    imageAlt: "Data Migration & Setup - Holographic Engine",
  },
  {
    id: "crm-configuration",
    tabLabel: "CRM Configuration",
    cardTitle: "CRM Configuration",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/crm-configuration.png",
    imageAlt: "CRM Configuration - 3D Dashboard Interface",
  },
  {
    id: "segment-setup",
    tabLabel: "Segment Setup",
    cardTitle: "Segment Tool",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/segment-setup.png",
    imageAlt: "Segment Tool - 3D Analytical Cohort Segmentation",
  },
  {
    id: "bonus-configuration",
    tabLabel: "Bonus Configuration",
    cardTitle: "Bonus Configuration",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/bonus-configuration.png",
    imageAlt: "Bonus Configuration - Gamified Rewards & Promotions",
  },
  {
    id: "campaign-building",
    tabLabel: "Campaign Building",
    cardTitle: "Campaign Building",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/campaign-building.png",
    imageAlt: "Campaign Building - Omnichannel Marketing Megaphone",
  },
  {
    id: "ticketing-support",
    tabLabel: "Ticketing Support",
    cardTitle: "Ticketing Support",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/ticketing-support.png",
    imageAlt: "Ticketing Support - Omnichannel Helpdesk & Player Messaging",
  },
  {
    id: "dashboard-setup",
    tabLabel: "Dashboard Setup",
    cardTitle: "Dashboard Setup",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/dashboard-setup.png",
    imageAlt: "Dashboard Setup - Responsive Multi-Device UI",
  },
  {
    id: "user-role-management",
    tabLabel: "User Role Management",
    cardTitle: "User Role Management",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/user-role-management.png",
    imageAlt: "User Role Management - Permission Trees & Team Hierarchy",
  },
  {
    id: "24-7-crm-support",
    tabLabel: "24/7 CRM Support",
    cardTitle: "24/7 CRM Support",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/24-7-crm-support.png",
    imageAlt: "24/7 CRM Support - Dedicated Technical Assistance",
  },
  {
    id: "attendance-management",
    tabLabel: "Attendance Management",
    cardTitle: "Attendance Management",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    bullets: [
      "Extensive collection of top-tier content",
      "Bonus Management Engine",
      "Compatibility across all devices",
      "Multi-currency Wallet Support",
    ],
    image: "/images/crm/key-features/attendance-management.png",
    imageAlt: "Attendance Management - Shift Scheduling & Calendar",
  },
];

export function CrmKeyFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Automatically scroll the active tab smoothly into view when activeTab changes
  useEffect(() => {
    const activeEl = tabButtonRefs.current[activeTab];
    if (activeEl && tabListRef.current) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  const handlePrev = () => {
    if (activeTab > 0) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeTab < KEY_FEATURE_TABS.length - 1) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const isFirstTab = activeTab === 0;
  const isLastTab = activeTab === KEY_FEATURE_TABS.length - 1;
  const currentTab = KEY_FEATURE_TABS[activeTab];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0a0b0f] select-none z-10 overflow-hidden">
      {/* Background Curved Warm Rust-Brown Backdrop Matching Design Exactly */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      >
        {/* Deep base background */}
        <div className="absolute inset-0 bg-[#0a0b0f]" />

        {/* Right Curved Warm Rust-Brown Backdrop */}
        <svg
          className="absolute top-0 right-0 w-[55%] lg:w-[50%] h-full min-w-[420px] pointer-events-none"
          viewBox="0 0 550 700"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 45,0 C 25,160 -10,310 18,480 C 35,580 75,660 65,700 L 550,700 L 550,0 Z"
            fill="url(#crmRustBrownGrad)"
          />
          <defs>
            <linearGradient id="crmRustBrownGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5d1e08" />
              <stop offset="50%" stopColor="#4c1706" />
              <stop offset="100%" stopColor="#300d02" />
            </linearGradient>
          </defs>
        </svg>

        {/* Soft Ambient Radial Light Accent */}
        <div
          className="absolute top-1/4 right-[5%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-25 mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(233, 78, 27, 0.45) 0%, rgba(255, 87, 34, 0.15) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto space-y-8 sm:space-y-10">
        {/* 1. Header with Orange Accent Brush Mark & Geometric Icons */}
        <div className="relative inline-flex items-center">
          {/* Orange Brush Mark Behind Left Heading Text */}
          <div className="absolute -left-3 sm:-left-4 -top-3 w-32 sm:w-40 h-14 -z-0 opacity-95 pointer-events-none">
            <Image
              src="/images/why-choose-us-mark.png"
              alt="Accent Mark"
              width={140}
              height={70}
              className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(255,87,34,0.7)]"
            />
          </div>

          <div className="relative z-10 flex items-center gap-3.5">
            <h2
              className="font-red-rose text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold text-white tracking-tight leading-tight"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              FOXOnext CRM Key Features
            </h2>

            {/* 2x2 Geometric Indicator Icons (▫ ★ / ▫ ▫) */}
            <div className="hidden sm:grid grid-cols-2 gap-1 text-[#FF5722] opacity-80 pl-1">
              <span className="w-2.5 h-2.5 border border-current rounded-[1px]" />
              <span className="text-[11px] leading-none flex items-center justify-center font-bold">
                ★
              </span>
              <span className="w-2.5 h-2.5 border border-current rounded-[1px]" />
              <span className="w-2.5 h-2.5 border border-current rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* 2. Carousel Tab Bar with Left/Right Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 w-full">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirstTab}
            aria-label="Previous Feature"
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
              isFirstTab
                ? "bg-[#23252d] text-white/40 border border-white/10 cursor-not-allowed opacity-80"
                : "bg-white text-zinc-900 shadow-[0_4px_14px_rgba(0,0,0,0.35)] hover:bg-zinc-100 hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Frosted Glass Tabs Container (Smoothly scrollable, 10 Tabs) */}
          <div
            ref={tabListRef}
            className="flex-1 flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-xl sm:rounded-2xl bg-[#1a1b23]/80 backdrop-blur-md border border-white/10 overflow-x-auto scrollbar-none scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {KEY_FEATURE_TABS.map((tab, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabButtonRefs.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`min-w-max px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-poppins text-center transition-all duration-200 whitespace-nowrap cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-semibold shadow-[0_4px_16px_rgba(255,87,34,0.45)]"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.06] font-normal sm:font-medium"
                  }`}
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={isLastTab}
            aria-label="Next Feature"
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
              isLastTab
                ? "bg-[#23252d] text-white/40 border border-white/10 cursor-not-allowed opacity-80"
                : "bg-white text-zinc-900 shadow-[0_4px_14px_rgba(0,0,0,0.35)] hover:bg-zinc-100 hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* 3. Main Feature Card with Seamless Backdrop */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-[#0c0d12]/35 backdrop-blur-[2px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-7 sm:space-y-8 lg:space-y-9">
              {/* Title with bottom & right orange border frame */}
              <div className="inline-block relative">
                <div className="bg-[#0b0c10] border-b-[4px] border-r-[4px] border-[#FF5722] px-6 py-3.5 sm:px-8 sm:py-4.5 rounded-[2px] shadow-lg">
                  <h3
                    className="font-red-rose text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-white tracking-wide leading-tight whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                    }}
                  >
                    {currentTab.cardTitle}
                  </h3>
                </div>
              </div>

              {/* Description Paragraph */}
              <p
                className="font-poppins text-sm sm:text-base lg:text-[17px] xl:text-[18px] text-zinc-300 font-normal leading-relaxed max-w-xl"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {currentTab.description}
              </p>

              {/* 4 Bullet Points with Diamond Markers */}
              <ul className="space-y-3.5 sm:space-y-4">
                {currentTab.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3.5 sm:gap-4 font-poppins text-sm sm:text-base lg:text-[16px] xl:text-[17px] text-zinc-200"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 border-[1.5px] border-[#FF5722] rotate-45 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button with White Offset Box-Shadow */}
              <div className="pt-2 sm:pt-4">
                <Link
                  href="#contact"
                  className="relative inline-flex items-center justify-center px-7 sm:px-9 py-3 sm:py-3.5 rounded-[2px] bg-[#D84315] hover:bg-[#E64A19] text-white font-poppins font-medium text-sm sm:text-base tracking-wide shadow-[4px_4px_0px_#ffffff] sm:shadow-[5px_5px_0px_#ffffff] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#ffffff] transition-all duration-150"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right 3D Visual Graphic Column (Enlarged) */}
            <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] xl:min-h-[560px]">
              <div className="relative w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[760px] flex items-center justify-center">
                <Image
                  key={currentTab.id}
                  src={currentTab.image}
                  alt={currentTab.imageAlt}
                  width={900}
                  height={900}
                  className="w-full h-auto max-h-[460px] sm:max-h-[520px] lg:max-h-[560px] xl:max-h-[620px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
