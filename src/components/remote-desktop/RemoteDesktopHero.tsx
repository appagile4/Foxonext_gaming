"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings as GearIcon } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { useTranslation } from "@/translations/useTranslation";

export function RemoteDesktopHero() {
  const { dict } = useTranslation();

  const stepCards = [
    {
      step: "01",
      title: "Choose Your Plan",
      description:
        "Pick a virtual desktop plan that fits your business needs and budget. Transparent pricing, no hidden fees.",
    },
    {
      step: "02",
      title: "Quick Setup",
      description:
        "Pick a virtual desktop plan that fits your business needs and budget. Transparent pricing, no hidden fees.",
    },
    {
      step: "03",
      title: "Connect & Work",
      description:
        "Pick a virtual desktop plan that fits your business needs and budget. Transparent pricing, no hidden fees.",
    },
  ];

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-transparent select-none z-10 pb-12 sm:pb-16 lg:pb-20">
      {/* Scoped Top Navbar */}
      <div className="relative z-30">
        <Navbar logoSrc="/images/logo.png" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-20 w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto pt-10 sm:pt-16 lg:pt-20 flex-1 flex flex-col justify-between">
        {/* Split Grid: Left Content & Right Isometric Server Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, Bullets & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <h1
              suppressHydrationWarning
              className="font-red-rose text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[48px] 2xl:text-[54px] text-white tracking-tight leading-tight sm:whitespace-nowrap"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              {dict.subpages.remoteDesktop.title1}{" "}
              <span className="font-bold text-[#FF5722]">
                {dict.subpages.remoteDesktop.title2}
              </span>
            </h1>

            <p
              suppressHydrationWarning
              className="font-poppins text-xs sm:text-sm md:text-[15px] text-white/85 font-normal leading-relaxed max-w-xl"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              {dict.subpages.remoteDesktop.desc}
            </p>

            {/* 3 Bullet Points with Orange Gear Icons */}
            <ul className="space-y-3.5 sm:space-y-4 pt-1">
              <li className="flex items-center gap-3.5 text-xs sm:text-sm md:text-[15px] text-white/90 font-poppins">
                <GearIcon className="w-5 h-5 text-[#FF5722] flex-shrink-0 filter drop-shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
                <span suppressHydrationWarning>{dict.subpages.remoteDesktop.point1}</span>
              </li>
              <li className="flex items-center gap-3.5 text-xs sm:text-sm md:text-[15px] text-white/90 font-poppins">
                <GearIcon className="w-5 h-5 text-[#FF5722] flex-shrink-0 filter drop-shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
                <span suppressHydrationWarning>{dict.subpages.remoteDesktop.point2}</span>
              </li>
              <li className="flex items-center gap-3.5 text-xs sm:text-sm md:text-[15px] text-white/90 font-poppins">
                <GearIcon className="w-5 h-5 text-[#FF5722] flex-shrink-0 filter drop-shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
                <span suppressHydrationWarning>{dict.subpages.remoteDesktop.point3}</span>
              </li>
            </ul>

            {/* CTA Button with Bottom & Right Orange L-Bracket Frame */}
            <div className="pt-3 sm:pt-5">
              <div className="inline-block relative">
                <div className="border-b-2 border-r-2 border-[#FF5722] pr-6 sm:pr-8 pb-2 sm:pb-2.5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center font-bold text-white text-base sm:text-lg tracking-wide hover:text-[#FF5722] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    <span suppressHydrationWarning>{dict.subpages.remoteDesktop.ctaText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Isometric 3D Server Center */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[620px] aspect-[1/1] flex items-center justify-center">
              <Image
                src="/images/remote-desktop/hero-servers-cloud.png"
                alt="High Performance Remote Desktop Server Infrastructure"
                width={800}
                height={800}
                priority
                className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Process Step Cards (3 Horizontal Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-10 sm:pt-14">
          {stepCards.map((card) => (
            <div
              key={card.step}
              className="relative rounded-2xl bg-[#0d0f17]/80 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between space-y-3 backdrop-blur-xs shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-red-rose text-2xl sm:text-3xl font-bold text-[#FF5722]"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  {card.step}
                </span>
              </div>
              <h3
                className="font-red-rose text-base sm:text-lg font-bold text-white"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-poppins text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
