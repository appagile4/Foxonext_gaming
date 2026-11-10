"use client";

import React from "react";
import { HeroBadge } from "./HeroBadge";
import { DeviceShowcase } from "./DeviceShowcase";
import { Milestones } from "./Milestones";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  badgeText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  iphoneImage?: string;
  dashboardImage?: string;
  useComposite?: boolean;
}

export function Hero({
  badgeText = "Online Casinos Software Provider",
  headlineLine1 = "Modular iGaming Products",
  headlineLine2 = "Built for Scale",
  description = "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
  ctaText = "Book a Free Demo",
  ctaHref = "#demo",
  iphoneImage = "/images/iphone-rounded.png",
  dashboardImage = "/images/dashboard-screen.png",
  useComposite = true,
}: HeroProps) {
  return (
    <main className="relative w-full flex-1 flex flex-col justify-between pt-6 sm:pt-10 lg:pt-12 px-4 sm:px-8 lg:px-16 overflow-hidden z-10">
      {/* Top / Mid Split Content Section */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1">
        {/* Left Column: Headlines & Call to Action */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-7 z-10">
          {/* Top category pill */}
          <HeroBadge text={badgeText} />

          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-[family-name:var(--font-red-rose)] text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-white tracking-normal leading-[1.12]">
              {headlineLine1}
              <br />
              <span className="text-white">{headlineLine2}</span>
            </h1>
          </div>

          {/* Subtitle / Description */}
          <p className="font-[family-name:var(--font-poppins)] text-zinc-400 text-xs sm:text-[14px] leading-relaxed max-w-md font-normal tracking-normal">
            {description}
          </p>

          {/* Primary Action Button with ambient glow */}
          <div className="relative pt-2">
            {/* Button localized orange glow */}
            <div className="absolute inset-0 bg-[#E94E1B] blur-2xl opacity-40 rounded-full scale-90 pointer-events-none" />

            <Button
              href={ctaHref}
              variant="primary"
              size="md"
              className="font-poppins relative !px-7 !py-3 !rounded-xl !text-sm font-medium tracking-wide shadow-[0_6px_28px_rgba(233,78,27,0.5)] hover:shadow-[0_8px_36px_rgba(233,78,27,0.7)]"
            >
              {ctaText}
            </Button>
          </div>
        </div>

        {/* Right Column: Devices Mockup (iPhone + Dashboard) */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end z-10 w-full mt-4 lg:mt-0">
          <DeviceShowcase
            iphoneImage={iphoneImage}
            dashboardImage={dashboardImage}
            useComposite={useComposite}
          />
        </div>
      </div>

      {/* Bottom Horizontal Timeline Component */}
      <div className="w-full mt-8 lg:mt-12 z-10">
        <Milestones />
      </div>
    </main>
  );
}
