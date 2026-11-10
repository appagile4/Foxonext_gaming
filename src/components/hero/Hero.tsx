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
    <main className="relative w-[92%] sm:w-[85%] lg:w-[75%] mx-auto flex-1 flex flex-col justify-between pt-6 sm:pt-10 lg:pt-12 z-10">
      {/* Top / Mid Split Content Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1">
        {/* Left Column: Headlines & Call to Action */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-8 z-10">
          {/* Top category pill */}
          <HeroBadge text={badgeText} />

          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-[family-name:var(--font-red-rose)] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-bold text-white tracking-tight leading-[1.1]">
              {headlineLine1}
              <br />
              <span className="text-white">{headlineLine2}</span>
            </h1>
          </div>

          {/* Subtitle / Description */}
          <p className="font-[family-name:var(--font-poppins)] text-zinc-300/90 text-sm sm:text-base lg:text-[17px] xl:text-[18px] leading-[1.65] max-w-xl font-normal tracking-normal">
            {description}
          </p>

          {/* Primary Action Button with seamless glow */}
          <div className="relative inline-flex items-center pt-2 group w-fit">
            {/* Soft, centered, natural button glow (no clipping, exact button bounds) */}
            <div className="absolute inset-x-0 inset-y-1 bg-[#E94E1B] blur-lg opacity-35 rounded-xl scale-95 pointer-events-none transition-opacity duration-300 group-hover:opacity-55" />

            <Button
              href={ctaHref}
              variant="primary"
              size="md"
              className="font-poppins relative !px-8 !py-3.5 sm:!px-9 sm:!py-4 !rounded-xl !text-sm sm:!text-base font-medium tracking-wide shadow-[0_4px_18px_rgba(233,78,27,0.45)] hover:shadow-[0_6px_26px_rgba(233,78,27,0.65)]"
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
