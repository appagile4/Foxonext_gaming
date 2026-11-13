"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export function WhiteLabelHero() {
  const points = [
    "Fast setup and dependable performance.",
    "Private Windows desktop environment.",
    "Business support, billing help, and service monitoring.",
  ];

  return (
    <section className="relative w-full overflow-hidden select-none z-10">
      {/* Universal Floating Glass Navigation Header */}
      <Navbar />

      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto pt-10 sm:pt-14 lg:pt-20 pb-20 sm:pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Description, Points, CTA Button (6 cols) */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-9">
            {/* Title in Red Rose font */}
            <h1
              className="font-red-rose text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-white tracking-tight leading-[1.12]"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              White Label Solution
            </h1>

            {/* Description */}
            <p
              className="font-poppins text-sm sm:text-base lg:text-[17px] text-zinc-300/90 font-normal leading-relaxed max-w-xl"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Popular casino games come together in one Game Aggregator hub.
              With our game aggregation platform it is easy and simple to add
              this massive portfolio to any gaming website through just one API
              integration.
            </p>

            {/* 3 Key Feature Points with 8-Point Sunburst / Badge Icon */}
            <div className="space-y-3.5 sm:space-y-4 pt-1">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3.5">
                  <span className="flex-shrink-0 text-[#FF5722] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FF5722]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2l2.3 2.3 3.3-.9.9 3.3 3.3.9-1 3.2 2 2.7-2.4 2.4.9 3.3-3.3.9-.9 3.3-3.3-1-2.7 1.9-2.4-2.4-3.3.9-.9-3.3-3.3-.9 1-3.2-2-2.7 2.4-2.4-.9-3.3 3.3-.9.9-3.3 3.3 1z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  <span
                    className="font-poppins text-xs sm:text-sm lg:text-[15px] text-zinc-200 font-medium"
                    style={{
                      fontFamily:
                        "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button: Request a Demo with solid white offset shadow */}
            <div className="pt-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-[2px] bg-[#FF5722] hover:bg-[#ff6e3d] text-white font-poppins font-semibold text-sm sm:text-base tracking-wide shadow-[3px_3px_0px_#ffffff] hover:shadow-[4px_4px_0px_#ffffff] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Hardware & Device Mockup (6 cols) */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[700px] flex items-center justify-center">
              <Image
                src="/images/white-label/white-label-hero.png"
                alt="White Label Solution Box, Dashboard Laptop and Mobile App"
                width={798}
                height={630}
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_45px_rgba(233,78,27,0.35)] hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
