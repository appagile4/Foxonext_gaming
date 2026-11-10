"use client";

import React from "react";
import Image from "next/image";

const BULLET_POINTS = [
  "Bonus Management Engine",
  "Extensive collection of top-tier content",
  "Multi-currency Wallet Support",
  "Compatibility across all devices",
];

export function IGamingSolutions() {
  return (
    <section className="relative w-[92%] sm:w-[85%] lg:w-[75%] mx-auto pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-36 select-none z-10">
      <div className="w-full space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Section Header: Title on Left, Description & Know More on Right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
          {/* Left: Bold 2-Line Headline in Red Rose font */}
          <div className="max-w-xl">
            <h2
              className="font-red-rose text-3xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.08]"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              Our iGaming
              <br />
              Solutions
            </h2>
          </div>

          {/* Right: Paragraph + Know More Bordered Button in Poppins font */}
          <div className="flex flex-col items-start space-y-5 sm:space-y-6 max-w-lg lg:max-w-xl">
            <p
              className="font-poppins text-sm sm:text-base lg:text-[18px] text-zinc-300/90 font-normal leading-[1.65]"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Whether you&apos;re interested in rapidly launching a brand
              through our White Label solutions, seeking complete control with a
              customizable Turnkey package.
            </p>

            <a
              href="#solutions"
              className="font-poppins inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 border border-white/25 hover:border-[#FF5722] text-sm sm:text-[15px] font-medium text-white tracking-wide transition-all duration-300 hover:bg-white/[0.05]"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Know More
            </a>
          </div>
        </div>

        {/* 2 Big Full-Width Solution Cards Stacked */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Card 1: White-Label Solution */}
          <div className="group relative rounded-2xl sm:rounded-3xl bg-[#0c0d12] border border-white/[0.08] hover:border-[#FF5722]/40 shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(255,87,34,0.22)] overflow-hidden transition-all duration-500">
            {/* Subtle Cyber Grid mesh on bottom-right */}
            <div
              className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
                maskImage:
                  "radial-gradient(ellipse at 75% 65%, black 20%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 75% 65%, black 20%, transparent 80%)",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 p-6 sm:p-10 lg:p-14 relative z-10">
              {/* Left Column: Heading, Description, Bullets & Buttons */}
              <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-7">
                <h3
                  className="font-red-rose text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-tight"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  White-Label Solution
                </h3>

                <p
                  className="font-poppins text-xs sm:text-[13px] lg:text-sm text-zinc-400 font-normal leading-relaxed max-w-lg"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our White Label solutions, seeking complete control
                  with a customizable Turnkey package.
                </p>

                {/* 4 Feature Bullets */}
                <div className="space-y-3 pt-1">
                  {BULLET_POINTS.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path d="M6 1.5 L10.5 6 L6 10.5 L1.5 6 Z" />
                      </svg>
                      <span
                        className="font-poppins text-xs sm:text-[13px] text-zinc-300"
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

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="#quote"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-[#FF5722] hover:bg-[#ff6e3d] text-white text-xs sm:text-sm font-medium shadow-[0_4px_16px_rgba(255,87,34,0.35)] hover:shadow-[0_4px_22px_rgba(255,87,34,0.55)] transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Get Quote
                  </a>

                  <a
                    href="#white-label"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-black/95 hover:bg-zinc-900 text-white border border-white/60 hover:border-white text-xs sm:text-sm font-medium transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Know More
                  </a>
                </div>
              </div>

              {/* Right Column: 3D White Label Core Illustration */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-square flex items-center justify-center">
                  <Image
                    src="/images/solutions/white-label.png"
                    alt="White-Label Solution 3D Isometric Brand Illustration"
                    width={1024}
                    height={1024}
                    unoptimized
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(233,78,27,0.22)] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Remote-Desktop */}
          <div className="group relative rounded-2xl sm:rounded-3xl bg-[#0c0d12] border border-white/[0.08] hover:border-[#FF5722]/40 shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(255,87,34,0.22)] overflow-hidden transition-all duration-500">
            {/* Subtle Cyber Grid mesh on bottom-left */}
            <div
              className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
                maskImage:
                  "radial-gradient(ellipse at 25% 65%, black 20%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 25% 65%, black 20%, transparent 80%)",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 p-6 sm:p-10 lg:p-14 relative z-10">
              {/* Left Column: 3D PlayStation Gaming Controller Illustration */}
              <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-[440px] lg:max-w-[500px] flex items-center justify-center">
                  <Image
                    src="/images/solutions/remote-desktop.png"
                    alt="Remote-Desktop Gaming Controller Illustration"
                    width={1024}
                    height={735}
                    unoptimized
                    className="w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(233,78,27,0.25)] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Heading, Description, Bullets & Buttons */}
              <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-7 order-1 lg:order-2">
                <h3
                  className="font-red-rose text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-tight"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  Remote-Desktop
                </h3>

                <p
                  className="font-poppins text-xs sm:text-[13px] lg:text-sm text-zinc-400 font-normal leading-relaxed max-w-lg"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our White Label solutions, seeking complete control
                  with a customizable Turnkey package.
                </p>

                {/* 4 Feature Bullets */}
                <div className="space-y-3 pt-1">
                  {BULLET_POINTS.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path d="M6 1.5 L10.5 6 L6 10.5 L1.5 6 Z" />
                      </svg>
                      <span
                        className="font-poppins text-xs sm:text-[13px] text-zinc-300"
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

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="#quote"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-[#FF5722] hover:bg-[#ff6e3d] text-white text-xs sm:text-sm font-medium shadow-[0_4px_16px_rgba(255,87,34,0.35)] hover:shadow-[0_4px_22px_rgba(255,87,34,0.55)] transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Get Quote
                  </a>

                  <a
                    href="#remote-desktop"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-black/95 hover:bg-zinc-900 text-white border border-white/60 hover:border-white text-xs sm:text-sm font-medium transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
