"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Milestones } from "@/components/hero/Milestones";

export function CrmHero() {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-[900px] xl:min-h-[960px] flex flex-col justify-between overflow-hidden bg-[#07080c] select-none z-10">
      {/* Dynamic warm diagonal gradient backdrop matching reference */}
      <div className="absolute top-0 left-0 right-0 h-[680px] sm:h-[740px] lg:h-[820px] xl:h-[945px] bg-gradient-to-br from-[#200802] via-[#ab3203] to-[#e64a0c] pointer-events-none" />

      {/* Sweeping diagonal curved light highlights */}
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[740px] sm:h-[800px] lg:h-[860px] bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,145,77,0.35),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[740px] sm:h-[800px] lg:h-[860px] bg-[radial-gradient(circle_at_85%_35%,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />

      {/* Scoped Top Navbar */}
      <div className="relative z-30">
        <Navbar logoSrc="/images/logo.png" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto pt-12 sm:pt-20 lg:pt-28 xl:pt-32 pb-14 sm:pb-18 lg:pb-22 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto">
          {/* Left Column: Heading, Description & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 ">
            <h1
              className="font-red-rose text-xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[54px] 2xl:text-[60px] font-bold text-white tracking-tight leading-tight whitespace-nowrap"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              CRM for Smart Management
            </h1>

            <div
              className="font-poppins text-xs sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed space-y-4 max-w-2xl"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              <p>
                Popular casino games come together in one Game Aggregator hub.
                With our game aggregation platform it is easy and simple to add
                this massive portfolio to any gaming website through just one
                API integration.
              </p>
              <p>
                The SOFTSWISS Game Aggregator team assists at each step of
                integration and works together with the game content providers,
                to offer technical support after the games go live.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded bg-white overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_28px_rgba(216,67,21,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 select-none"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {/* Sliding Orange Background (Left-to-Right on Hover, Right-to-Left on Leave) */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#d84315] to-[#ff5722] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />

                {/* Button Text (Orange initially, transitions smoothly to White on Hover) */}
                <span className="relative z-10 font-semibold text-sm sm:text-base tracking-wide text-[#d84315] group-hover:text-white transition-colors duration-300">
                  Get Casino Games
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Isometric CRM Dashboard Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center xl:justify-end relative">
            <div className="relative w-[430px] sm:w-[560px] md:w-[650px] lg:w-[700px] xl:w-[800px] aspect-[500/380] drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)] lg:-mr-6 xl:-mr-10">
              <Image
                src="/images/crm/cards-dashboard.png"
                alt="CRM for Smart Management 3D Dashboard"
                fill
                className="object-contain animate-float"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Milestones Line: Animated white timeline matching <Milestones /> */}
        <div className="relative w-full mt-12 sm:mt-16 lg:mt-20 pt-2 sm:pt-4">
          <Milestones theme="white" className="max-w-2xl lg:max-w-3xl" />
        </div>
      </div>
    </section>
  );
}
