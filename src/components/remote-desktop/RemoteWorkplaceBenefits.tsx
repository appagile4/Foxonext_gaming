"use client";

import React from "react";

interface BenefitItem {
  number: string;
  title: string;
  description: string;
}

const BENEFITS: BenefitItem[] = [
  {
    number: "01",
    title: "A ready-made solution in just 3 seconds.",
    description: "Pre-installed Windows and a browser at your request, instant start.",
  },
  {
    number: "02",
    title: "Using popular browsers and extensions.",
    description: "Pre-installed Windows and a browser at your request, instant start.",
  },
  {
    number: "03",
    title: "Data security.",
    description: "Pre-installed Windows and a browser at your request, instant start.",
  },
  {
    number: "04",
    title: "Possibility of regular backups.",
    description: "Pre-installed Windows and a browser at your request, instant start.",
  },
];

export function RemoteWorkplaceBenefits() {
  return (
    <section className="relative w-full py-18 sm:py-24 lg:py-28 bg-transparent select-none z-10 overflow-hidden">
      <div className="relative z-10 w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Centered Heading & Subtitle */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2
            className="font-red-rose text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-tight sm:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-red-rose), 'Red Rose', serif",
            }}
          >
            Remote Workplace - Benefits
          </h2>

          <p
            className="font-poppins text-xs sm:text-sm md:text-[15px] text-zinc-300 font-normal leading-relaxed"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            }}
          >
            DodgeVPN provides you with access to a huge selection of high-speed
            Virtual Servers across the globe to provide you with a secure and
            private connection to the Internet.
          </p>
        </div>

        {/* 4 Cards Grid with Clean Vertical Dividers matching screenshot */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0f1015]/75 border border-white/10 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="p-7 sm:p-8 lg:p-9 space-y-5 transition-all duration-300 hover:bg-white/[0.03] group"
            >
              {/* Dark Rounded Badge with Orange Number */}
              <div>
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#20222a] text-[#FF5722] font-semibold text-sm border border-white/5 shadow-inner group-hover:border-[#FF5722]/50 transition-colors duration-200">
                  {item.number}
                </span>
              </div>

              {/* Benefit Title */}
              <h3
                className="font-poppins text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#FF5722] transition-colors duration-200 min-h-[50px] flex items-center"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {item.title}
              </h3>

              {/* Benefit Description */}
              <p
                className="font-poppins text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
