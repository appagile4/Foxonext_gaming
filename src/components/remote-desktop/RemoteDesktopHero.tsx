"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings as GearIcon } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

const STEP_CARDS = [
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

export function RemoteDesktopHero() {
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
              className="font-red-rose text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[48px] 2xl:text-[54px] text-white tracking-tight leading-tight sm:whitespace-nowrap"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              We Provide <span className="font-bold">Remote Server Rental</span>
            </h1>

            <p
              className="font-poppins text-xs sm:text-sm md:text-[15px] text-white/85 font-normal leading-relaxed max-w-xl"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Popular casino games come together in one Game Aggregator hub.
              With our game aggregation platform it is easy and simple to add
              this massive portfolio to any gaming website through just one API
              integration.
            </p>

            {/* 3 Bullet Points with Orange Gear Icons */}
            <ul className="space-y-3.5 sm:space-y-4 pt-1">
              <li className="flex items-center gap-3.5 text-xs sm:text-sm md:text-[15px] text-white/90 font-poppins">
                <GearIcon className="w-5 h-5 text-[#FF5722] flex-shrink-0 filter drop-shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
                <span>Fast setup and dependable performance.</span>
              </li>
              <li className="flex items-center gap-3.5 text-xs sm:text-sm md:text-[15px] text-white/90 font-poppins">
                <GearIcon className="w-5 h-5 text-[#FF5722] flex-shrink-0 filter drop-shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
                <span>Private Windows desktop environment.</span>
              </li>
              <li className="flex items-center gap-3.5 text-xs sm:text-sm md:text-[15px] text-white/90 font-poppins">
                <GearIcon className="w-5 h-5 text-[#FF5722] flex-shrink-0 filter drop-shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
                <span>
                  Business support, billing help, and service monitoring.
                </span>
              </li>
            </ul>

            {/* CTA Button with Bottom & Right Orange L-Bracket Frame */}
            <div className="pt-3 sm:pt-5">
              <div className="inline-block relative">
                <div className="border-b-2 border-r-2 border-[#FF5722] pr-6 sm:pr-8 pb-2 sm:pb-2.5">
                  <Link
                    href="#contact"
                    className="inline-flex items-center font-bold text-white text-base sm:text-lg tracking-wide hover:text-[#FF5722] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Talk With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Isometric Server & Cloud Infrastructure */}
          <div className="lg:col-span-5 flex items-center justify-center xl:justify-end relative">
            <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] aspect-square flex items-center justify-center">
              <Image
                src="/images/remote-desktop/hero-servers-cloud.png"
                alt="Remote Server Rental Infrastructure"
                fill
                className="object-contain filter drop-shadow-[0_20px_60px_rgba(255,87,34,0.22)] animate-float"
                priority
              />
            </div>
          </div>
        </div>

        {/* 3 Step Process Cards Row (Choose Your Plan, Quick Setup, Connect & Work) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-18 lg:mt-22">
          {STEP_CARDS.map((card) => (
            <div
              key={card.step}
              className="relative rounded-2xl bg-[#0f1015]/85 backdrop-blur-md border border-white/10 p-6 sm:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.65)] space-y-3 transition-all duration-300 hover:border-[#FF5722]/50 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between">
                <h3
                  className="font-poppins text-base sm:text-lg font-bold text-white group-hover:text-[#FF5722] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {card.title}
                </h3>
                <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#1e2029] text-[#FF5722] font-semibold text-xs border border-white/[0.06]">
                  {card.step}
                </span>
              </div>
              <p
                className="font-poppins text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed"
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
