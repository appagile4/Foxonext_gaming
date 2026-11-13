"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/translations/useTranslation";

export function ExploreOtherProductsForWhiteLabel() {
  const { dict } = useTranslation();
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 select-none z-10 bg-[#07080c]">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Header with Orange Accent Brush Mark & Star in Hand Icon */}
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
              suppressHydrationWarning
              className="relative z-10 font-red-rose text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-tight"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              {dict.exploreOtherProducts?.title || "Explore Other Products"}
            </h2>
          </div>

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

        {/* Products Grid */}
        <div className="space-y-6 sm:space-y-8">
          <style>{`
            .card-hover-blur-overlay {
              clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%);
              opacity: 0;
              pointer-events: none;
              transition: clip-path 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out;
            }
            .group:hover .card-hover-blur-overlay {
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              opacity: 1;
              pointer-events: auto;
            }
          `}</style>

          {/* Top Row: Equal 2 Cards (Game Aggregator & CRM - Data Analytics) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Game Aggregator */}
            <div className="group relative rounded-2xl sm:rounded-3xl bg-[#0c0d12] border border-white/[0.08] hover:border-[#FF5722]/50 shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(255,87,34,0.25)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[460px] sm:min-h-[500px] lg:min-h-[520px]">
              {/* Card Top Title */}
              <div className="p-6 sm:p-7 lg:p-8 z-30 pointer-events-none">
                <h3
                  className="font-red-rose text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  Game Aggregator
                </h3>
              </div>

              {/* 3D Visual Graphic in Center */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 pt-10 pb-24 pointer-events-none z-0">
                <div className="relative w-full h-full max-h-[360px] flex items-center justify-center">
                  <Image
                    src="/images/products/game-aggregator.png"
                    alt="Game Aggregator 3D Floating Modular Cubes"
                    width={720}
                    height={720}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(233,78,27,0.3)] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>

              {/* Default Unhovered Bottom Container */}
              <div className="relative z-10 p-5 sm:p-6 lg:p-7 bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-[2px] flex items-end justify-between gap-4 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none mt-auto">
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

              {/* Animated Square Blur Hover Overlay */}
              <div className="card-hover-blur-overlay absolute top-[76px] sm:top-[88px] inset-x-0 bottom-0 z-20 backdrop-blur-xl bg-[#090a0f]/85 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                <p
                  className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our White Label solutions, seeking complete control
                  with a customizable Turnkey package.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-y-4 sm:gap-x-6 my-auto py-3">
                  {[
                    "Extensive collection of top-tier content",
                    "Compatibility across all devices",
                    "Bonus Management Engine",
                    "Multi-currency Wallet Support",
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5">
                      <span className="text-[#FF5722] text-xs">◇</span>
                      <span
                        className="font-poppins text-[11px] sm:text-xs text-zinc-200"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-[#FF5722] hover:bg-[#ff6e3d] text-white text-xs sm:text-sm font-medium shadow-[0_4px_16px_rgba(255,87,34,0.35)] transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Get Quote
                  </Link>

                  <Link
                    href="/game-aggregator"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-black/95 hover:bg-zinc-900 text-white border border-white/60 hover:border-white text-xs sm:text-sm font-medium transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: CRM - Data Analytics */}
            <div className="group relative rounded-2xl sm:rounded-3xl bg-[#0c0d12] border border-white/[0.08] hover:border-[#FF5722]/50 shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(255,87,34,0.25)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[460px] sm:min-h-[500px] lg:min-h-[520px]">
              {/* Card Top Title */}
              <div className="p-6 sm:p-7 lg:p-8 z-30 pointer-events-none">
                <h3
                  className="font-red-rose text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  CRM - Data Analytics
                </h3>
              </div>

              {/* 3D Visual Graphic in Center */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 pt-10 pb-24 pointer-events-none z-0">
                <div className="relative w-full h-full max-h-[360px] flex items-center justify-center">
                  <Image
                    src="/images/products/crm-analytics.png"
                    alt="CRM Data Analytics 3D Glass Dashboard & Charts"
                    width={720}
                    height={720}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(233,78,27,0.3)] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>

              {/* Default Unhovered Bottom Container */}
              <div className="relative z-10 p-5 sm:p-6 lg:p-7 bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-[2px] flex items-end justify-between gap-4 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none mt-auto">
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

              {/* Animated Square Blur Hover Overlay */}
              <div className="card-hover-blur-overlay absolute top-[76px] sm:top-[88px] inset-x-0 bottom-0 z-20 backdrop-blur-xl bg-[#090a0f]/85 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                <p
                  className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our White Label solutions, seeking complete control
                  with a customizable Turnkey package.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-y-4 sm:gap-x-6 my-auto py-3">
                  {[
                    "Extensive collection of top-tier content",
                    "Compatibility across all devices",
                    "Bonus Management Engine",
                    "Multi-currency Wallet Support",
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5">
                      <span className="text-[#FF5722] text-xs">◇</span>
                      <span
                        className="font-poppins text-[11px] sm:text-xs text-zinc-200"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-[#FF5722] hover:bg-[#ff6e3d] text-white text-xs sm:text-sm font-medium shadow-[0_4px_16px_rgba(255,87,34,0.35)] transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Get Quote
                  </Link>

                  <Link
                    href="/crm-data-analysis"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-black/95 hover:bg-zinc-900 text-white border border-white/60 hover:border-white text-xs sm:text-sm font-medium transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Card 3 - Remote Desktop (Full Width) */}
          <div className="group relative rounded-2xl sm:rounded-3xl bg-[#0c0d12] border border-white/[0.08] hover:border-[#FF5722]/50 shadow-[0_12px_40px_rgba(0,0,0,0.85)] p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300">
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
              <div className="lg:col-span-6 space-y-6 sm:space-y-7">
                <h3
                  className="font-red-rose text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-white tracking-tight leading-[1.15]"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  Remote Desktop Server Rental
                </h3>

                <p
                  className="font-poppins text-xs sm:text-sm md:text-[15px] text-zinc-300/90 font-normal leading-relaxed max-w-xl"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  High-performance Windows VPS server rentals with ultra-low
                  latency, dedicated global IP networks, instant setup, and
                  24/7 technical monitoring.
                </p>

                <div className="space-y-2.5 sm:space-y-3 pt-1">
                  {[
                    "Low latency global IP network",
                    "Windows VPS on dedicated RDP",
                    "Full administrator access & instant provisioning",
                    "24/7 technical monitoring & support",
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

                <div className="flex items-center gap-4 pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded bg-gradient-to-r from-[#FF5722] to-[#E94E1B] hover:brightness-110 text-white font-poppins text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_rgba(233,78,27,0.35)] transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Get Quote
                  </Link>

                  <Link
                    href="/remote-desktop"
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded bg-black/60 hover:bg-zinc-900 text-white border border-white/20 hover:border-white/50 font-poppins text-xs sm:text-sm font-medium tracking-wide transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Know More
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex items-center justify-center relative">
                <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[580px] aspect-square drop-shadow-[0_25px_55px_rgba(233,78,27,0.35)] group-hover:scale-105 transition-transform duration-500 ease-out">
                  <Image
                    src="/images/solutions/remote-desktop.png"
                    alt="Remote Desktop Server Rental"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
