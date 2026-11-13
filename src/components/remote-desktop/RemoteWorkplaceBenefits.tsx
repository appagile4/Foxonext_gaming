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
    description:
      "Pre-installed Windows and a browser at your request, instant start.",
  },
  {
    number: "01",
    title: "Using popular browsers and extensions.",
    description:
      "Pre-installed Windows and a browser at your request, instant start.",
  },
  {
    number: "01",
    title: "Data security.",
    description:
      "Pre-installed Windows and a browser at your request, instant start.",
  },
  {
    number: "01",
    title: "Possibility of regular backups.",
    description:
      "Pre-installed Windows and a browser at your request, instant start.",
  },
];

export function RemoteWorkplaceBenefits() {
  return (
    <section className="relative w-full py-18 sm:py-24 lg:py-28 bg-transparent select-none z-10 overflow-hidden">
      {/* Background Curved Orange Cosmic Ray in Top-Right matching screenshot */}
      <div
        className="absolute -top-20 -right-20 w-[600px] sm:w-[750px] lg:w-[900px] h-[600px] sm:h-[750px] lg:h-[900px] pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 75% 35%, rgba(255, 87, 34, 0.42) 0%, rgba(216, 67, 21, 0.18) 35%, transparent 65%)",
        }}
      />

      <div className="relative z-10 w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Centered Heading & Subtitle */}
        <div className="text-center space-y-4 max-w-2xl sm:max-w-3xl mx-auto">
          <h2
            className="font-red-rose text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-tight sm:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-red-rose), 'Red Rose', serif",
            }}
          >
            Remote Workplace - Benefits
          </h2>

          <p
            className="font-poppins text-xs sm:text-sm md:text-[14px] text-zinc-300 font-normal leading-relaxed"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            }}
          >
            DodgeVPN provides you with access to a huge selection of high-speed
            Virtual Servers across the globe to provide you with a secure and
            private connection to the Internet.
          </p>
        </div>

        {/* 4 Cards Container with Extended Vertical Dividing Lines matching screenshot */}
        <div className="relative pt-6 sm:pt-8">
          {/* Extended vertical dividing lines (extending above and below the box) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            {/* Divider 1 (at 25%) */}
            <div className="absolute left-[25%] -top-12 sm:-top-16 -bottom-6 sm:-bottom-8 w-[1px] bg-white/[0.10]" />
            {/* Divider 2 (at 50%) */}
            <div className="absolute left-[50%] -top-16 sm:-top-20 -bottom-8 sm:-bottom-10 w-[1px] bg-white/[0.10]" />
            {/* Divider 3 (at 75%) */}
            <div className="absolute left-[75%] -top-12 sm:-top-16 -bottom-6 sm:-bottom-8 w-[1px] bg-white/[0.10]" />
          </div>

          {/* Main Cards Grid Box */}
          <div className="relative z-10 rounded-xl sm:rounded-2xl bg-[#0b0c10]/70 border border-white/[0.10] backdrop-blur-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-white/[0.10]">
            {BENEFITS.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.02] group"
              >
                {/* Top Row: [01] Dark Grey Badge + Bold Title Horizontally Aligned */}
                <div className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[#20222a] text-[#FF5722] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 border border-white/[0.08] shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)] group-hover:border-[#FF5722]/50 transition-colors duration-200">
                    {item.number}
                  </div>

                  <h3
                    className="font-poppins text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] font-bold text-white leading-snug group-hover:text-[#FF5722] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Row: Description */}
                <p
                  className="font-poppins text-[11px] sm:text-xs text-zinc-400 font-normal leading-relaxed"
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
      </div>
    </section>
  );
}
