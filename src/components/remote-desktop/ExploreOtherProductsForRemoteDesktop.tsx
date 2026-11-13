"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ExploreOtherProductsForRemoteDesktop() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 select-none z-10 bg-[#07080c]">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Header with Orange Accent Brush Mark & Hand Star Icon */}
        <div className="relative inline-flex items-center gap-3 sm:gap-4">
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

            <h2
              className="relative z-10 font-red-rose text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-tight"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              Explore Other Products
            </h2>
          </div>

          {/* Star in hand icon */}
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 opacity-90 hidden sm:block">
            <Image
              src="/images/crm/star-in-hand.png"
              alt="Icon"
              width={32}
              height={32}
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,87,34,0.5)]"
            />
          </div>
        </div>

        {/* Products & Solutions Grid */}
        <div className="space-y-6 sm:space-y-8">
          {/* Top Row: Equal 2 Cards (Game Aggregator & CRM - Data Analytics) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Game Aggregator */}
            <div className="group relative rounded-2xl sm:rounded-3xl bg-[#0e1017] border border-white/[0.08] hover:border-[#FF5722]/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)] p-6 sm:p-8 lg:p-9 flex flex-col justify-between overflow-hidden transition-all duration-300">
              {/* Card Title */}
              <h3
                className="font-red-rose text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                Game Aggregator
              </h3>

              {/* 3D Visual Graphic */}
              <div className="relative w-full my-4 sm:my-6 flex items-center justify-center flex-1">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-square drop-shadow-[0_20px_45px_rgba(233,78,27,0.3)] group-hover:scale-105 transition-transform duration-500 ease-out">
                  <Image
                    src="/images/products/game-aggregator.png"
                    alt="Game Aggregator 3D Cubes"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description + Arrow Button */}
              <div className="flex items-end justify-between gap-4 mt-auto pt-2">
                <p
                  className="font-poppins text-xs sm:text-sm text-zinc-300/90 font-normal leading-relaxed max-w-sm"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our White Label solutions, seeking complete control
                  with a customizable Turnkey package.
                </p>

                <Link
                  href="/game-aggregator"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-tr from-[#E94E1B] to-[#FF5722] hover:brightness-110 text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(233,78,27,0.4)] transition-all duration-200 group-hover:scale-105"
                  aria-label="View Game Aggregator"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Card 2: CRM - Data Analytics */}
            <div className="group relative rounded-2xl sm:rounded-3xl bg-[#0e1017] border border-white/[0.08] hover:border-[#FF5722]/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)] p-6 sm:p-8 lg:p-9 flex flex-col justify-between overflow-hidden transition-all duration-300">
              {/* Card Title */}
              <h3
                className="font-red-rose text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                CRM - Data Analytics
              </h3>

              {/* 3D Visual Graphic */}
              <div className="relative w-full my-4 sm:my-6 flex items-center justify-center flex-1">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-square drop-shadow-[0_20px_45px_rgba(233,78,27,0.3)] group-hover:scale-105 transition-transform duration-500 ease-out">
                  <Image
                    src="/images/products/crm-analytics.png"
                    alt="CRM - Data Analytics 3D Dashboard"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description + Arrow Button */}
              <div className="flex items-end justify-between gap-4 mt-auto pt-2">
                <p
                  className="font-poppins text-xs sm:text-sm text-zinc-300/90 font-normal leading-relaxed max-w-sm"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our White Label solutions, seeking complete control
                  with a customizable Turnkey package.
                </p>

                <Link
                  href="/crm-data-analysis"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-tr from-[#E94E1B] to-[#FF5722] hover:brightness-110 text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(233,78,27,0.4)] transition-all duration-200 group-hover:scale-105"
                  aria-label="View CRM Analytics"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Card 3 - White-Label Solution (Full Width) */}
          <div className="group relative rounded-2xl sm:rounded-3xl bg-[#0e1017] border border-white/[0.08] hover:border-[#FF5722]/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)] p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300">
            {/* Cyber Grid mesh on bottom-right floor */}
            <div
              className="absolute inset-y-0 right-0 w-3/5 pointer-events-none opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
                maskImage:
                  "radial-gradient(ellipse at 75% 65%, black 35%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 75% 65%, black 35%, transparent 80%)",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Heading, Description, Bullets & Buttons (6 cols) */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-7">
                <h3
                  className="font-red-rose text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-white tracking-tight leading-[1.15]"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  White-Label Solution
                </h3>

                <p
                  className="font-poppins text-xs sm:text-sm md:text-[15px] text-zinc-300/90 font-normal leading-relaxed max-w-xl"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our White Label solutions, seeking complete control
                  with a customizable Turnkey package.
                </p>

                {/* 4 Feature Bullets with orange outline diamond ◇ */}
                <div className="space-y-2.5 sm:space-y-3 pt-1">
                  {[
                    "Bonus Management Engine",
                    "Extensive collection of top-tier content",
                    "Multi-currency Wallet Support",
                    "Compatibility across all devices",
                  ].map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-3 font-poppins text-xs sm:text-sm text-zinc-200"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      <span className="text-[#FF5722] text-sm sm:text-base flex-shrink-0">
                        ◇
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons: [Get Quote] & [Know More] */}
                <div className="flex items-center gap-4 pt-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded bg-gradient-to-r from-[#FF5722] to-[#E94E1B] hover:brightness-110 text-white font-poppins text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_rgba(233,78,27,0.35)] transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Get Quote
                  </Link>

                  <Link
                    href="#white-label"
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded bg-black/60 hover:bg-zinc-900 text-white border border-white/20 hover:border-white/50 font-poppins text-xs sm:text-sm font-medium tracking-wide transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Know More
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Isometric White-Label Brand Hub with 'YOUR BRAND HERE' ribbon (6 cols) */}
              <div className="lg:col-span-6 flex items-center justify-center relative">
                <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] aspect-square drop-shadow-[0_25px_55px_rgba(233,78,27,0.35)] group-hover:scale-105 transition-transform duration-500 ease-out">
                  <Image
                    src="/images/solutions/white-label.png"
                    alt="White-Label Solution 3D Brand Hub"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
