"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WorkWithUsCta() {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden select-none z-10 bg-[#07080c]">
      {/* Subtle ambient warm backlight behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] bg-[#FF5722]/15 blur-[120px] rounded-full pointer-events-none -z-0" />

      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8 z-10">
        {/* Giant Watermark Headline */}
        <h2
          className="font-red-rose text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[125px] font-bold text-[#2e3038] tracking-tight leading-[1.08] select-none"
          style={{
            fontFamily: "var(--font-red-rose), 'Red Rose', serif",
          }}
        >
          Wants to Work
          <br />
          With Us?
        </h2>

        {/* Subtitle */}
        <p
          className="font-poppins text-xs sm:text-sm md:text-base text-zinc-400 font-normal tracking-wide max-w-2xl px-4"
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
          }}
        >
          Your White LABEL IGAMING Platform provider and B2B Online Casino
          Software
        </p>

        {/* Glowing Pill Button with Circular Arrow */}
        <div className="pt-2 sm:pt-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 sm:gap-6 pl-7 pr-3 py-3 rounded-full bg-gradient-to-r from-[#FF5722] via-[#FF6A00] to-[#FF5722] text-white font-poppins font-semibold text-sm sm:text-base shadow-[0_0_35px_rgba(255,87,34,0.45)] hover:shadow-[0_0_50px_rgba(255,87,34,0.65)] hover:scale-105 transition-all duration-300"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            }}
          >
            {/* Small subtle accent crescent or highlight */}
            <span className="absolute left-3.5 top-3 w-2.5 h-2.5 rounded-full border border-white/40 border-t-white/80 pointer-events-none opacity-60" />

            <span className="tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              Book a Free Demo
            </span>

            {/* Circular White Badge with Arrow */}
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-black shadow-md group-hover:translate-x-0.5 transition-transform duration-200">
              <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
