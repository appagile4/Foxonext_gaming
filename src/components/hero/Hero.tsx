"use client";

import React from "react";
import { HeroBadge } from "./HeroBadge";
import { Milestones } from "./Milestones";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/translations/useTranslation";

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
  badgeText,
  headlineLine1,
  headlineLine2,
  description,
  ctaText,
  ctaHref = "/contact",
  iphoneImage = "/images/newiphone.png",
  dashboardImage = "/images/newdesktop.png",
}: HeroProps) {
  const { dict } = useTranslation();

  const activeBadgeText = badgeText ?? dict.hero.badgeText;
  const activeHeadlineLine1 = headlineLine1 ?? dict.hero.headlineLine1;
  const activeHeadlineLine2 = headlineLine2 ?? dict.hero.headlineLine2;
  const activeDescription = description ?? dict.hero.description;
  const activeCtaText = ctaText ?? dict.hero.ctaText;

  return (
    <main className="relative w-[92%] sm:w-[85%] lg:w-[75%] mx-auto flex-1 flex flex-col justify-between pt-6 sm:pt-10 lg:pt-12 z-10">
      {/* Top / Mid Split Content Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1">
        {/* LEFT COLUMN: HEADINGS & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-8 z-10">
          {/* Category Badge */}
          <HeroBadge text={activeBadgeText} />

          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-[family-name:var(--font-red-rose)] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-bold text-white tracking-tight leading-[1.1]">
              {activeHeadlineLine1}
              <br />
              <span className="text-white">{activeHeadlineLine2}</span>
            </h1>
          </div>

          {/* Description */}
          <p className="font-[family-name:var(--font-poppins)] text-zinc-300/90 text-sm sm:text-base lg:text-[17px] xl:text-[18px] leading-[1.65] max-w-xl font-normal tracking-normal">
            {activeDescription}
          </p>

          {/* CTA BUTTON */}
          <div className="relative inline-flex items-center pt-2 group w-fit">
            {/* Button Glow */}
            <div className="absolute inset-x-0 inset-y-1 bg-[#E94E1B] blur-lg opacity-35 rounded-xl scale-95 pointer-events-none transition-opacity duration-300 group-hover:opacity-55" />

            <Button
              href={ctaHref}
              variant="primary"
              size="md"
              className="font-poppins relative !px-8 !py-3.5 sm:!px-9 sm:!py-4 !rounded-xl !text-sm sm:!text-base font-medium tracking-wide shadow-[0_4px_18px_rgba(233,78,27,0.45)] hover:shadow-[0_6px_26px_rgba(233,78,27,0.65)]"
            >
              {activeCtaText}
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN: OVERLAPPING IMAGES */}
        <div
          className="
          lg:col-span-6
          relative
          w-full
          min-h-[420px]
          sm:min-h-[480px]
          lg:min-h-[520px]
          xl:min-h-[560px]
          z-10
          mt-6
          lg:mt-0
          overflow-visible
        "
        >
          {/* DASHBOARD IMAGE */}
          <img
            src={dashboardImage}
            alt="Gaming Dashboard Preview"
            draggable={false}
            className="
              absolute
              w-[115%]
              sm:w-[125%]
              lg:w-[700px]
              xl:w-[760px]
              max-w-none
              h-auto
              object-contain
              top-0
              left-[4%]
              sm:left-[8%]
              lg:left-[110px]
              xl:left-[120px]
              z-10
            "
          />

          {/* IPHONE IMAGE */}
          <img
            src={iphoneImage}
            alt="Mobile Casino App Preview"
            draggable={false}
            className="
              absolute
              w-[145px]
              sm:w-[180px]
              md:w-[205px]
              lg:w-[225px]
              xl:w-[240px]
              max-w-none
              h-auto
              object-contain
              top-[45px]
              sm:top-[50px]
              lg:top-[55px]
              xl:top-[60px]
              left-0
              z-20
              drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
            "
          />
        </div>
      </div>

      {/* BOTTOM MILESTONES */}
      <div className="w-full mt-8 lg:mt-12 z-10">
        <Milestones />
      </div>
    </main>
  );
}
