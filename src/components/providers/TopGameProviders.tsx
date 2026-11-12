"use client";

import React from "react";
import Image from "next/image";

interface ProviderItem {
  id: string;
  name: string;
  logo: string;
  width: number;
}

const PROVIDERS_LIST: ProviderItem[] = [
  {
    id: "pg-soft",
    name: "PG Soft",
    logo: "/images/providers/pg-soft.png",
    width: 72,
  },
  {
    id: "jdb",
    name: "JDB Gaming",
    logo: "/images/providers/jdb.png",
    width: 72,
  },
  {
    id: "pragmatic",
    name: "Pragmatic Play",
    logo: "/images/providers/pragmatic.png",
    width: 120,
  },
  {
    id: "db-gaming",
    name: "DB Gaming",
    logo: "/images/providers/db-gaming.png",
    width: 72,
  },
  {
    id: "spribe",
    name: "SPRIBE",
    logo: "/images/providers/spribe.png",
    width: 78,
  },
  {
    id: "in-out",
    name: "IN OUT",
    logo: "/images/providers/in-out.png",
    width: 72,
  },
  {
    id: "pescaria",
    name: "Pescaria",
    logo: "/images/providers/pescaria.png",
    width: 72,
  },
  { id: "cq9", name: "CQ9", logo: "/images/providers/cq9.png", width: 72 },
];

const STATS_DATA = [
  {
    value: "3000+",
    line1: "Years of technology",
    line2: "leadership",
  },
  {
    value: "140+",
    line1: "Industry awards for",
    line2: "product excellence",
  },
  {
    value: "32+",
    line1: "iGaming brands rely on",
    line2: "our software",
  },
  {
    value: "32+",
    line1: "Employees",
    line2: "contributing globally",
  },
];

const MARQUEE_PROVIDERS = [
  ...PROVIDERS_LIST,
  ...PROVIDERS_LIST,
  ...PROVIDERS_LIST,
  ...PROVIDERS_LIST,
];

export function TopGameProviders() {
  return (
    <section className="relative w-full pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 bg-transparent select-none z-10 overflow-hidden">
      <div className="w-full space-y-10 sm:space-y-12 lg:space-y-16">
        {/* Section Heading & Subtitle (Centered container) */}
        <div className="w-[92%] sm:w-[85%] lg:w-[75%] max-w-[1440px] mx-auto text-center space-y-4 sm:space-y-5">
          <h2
            className="font-red-rose text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
          >
            Top Game Providers
          </h2>
          <p
            className="font-poppins text-sm sm:text-base md:text-lg lg:text-[19px] text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif" }}
          >
            Popular casino games come together in one Game Aggregator hub. With
            our game aggregation platform it is easy and simple to add this
            massive portfolio to any gaming website through just one API
            integration.
          </p>
        </div>

        {/* Auto-scrolling Infinite Marquee (100% Full Width Edge-to-Edge with Larger Cards) */}
        <div
          className="relative w-full overflow-hidden py-4 sm:py-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <style>{`
            @keyframes marqueeContinuous {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-scroll {
              display: flex !important;
              width: max-content !important;
              animation: marqueeContinuous 32s linear infinite !important;
              will-change: transform;
            }
            .animate-marquee-scroll:hover {
              animation-play-state: paused !important;
            }
          `}</style>
          <div className="animate-marquee-scroll flex items-center gap-5 sm:gap-7">
            {MARQUEE_PROVIDERS.map((provider, index) => (
              <div
                key={`${provider.id}-${index}`}
                className="group flex-shrink-0 flex items-center justify-center h-16 sm:h-20 md:h-[84px] lg:h-[92px] px-8 sm:px-10 lg:px-12 rounded-2xl bg-[#13141b]/95 border border-white/[0.08] shadow-[0_6px_24px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 hover:border-[#FF5722]/70 hover:shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:-translate-y-1.5 select-none cursor-pointer"
                style={{
                  minWidth: provider.width
                    ? `${provider.width * 2.6}px`
                    : "180px",
                }}
              >
                <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex items-center justify-center">
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    width={provider.width * 4}
                    height={90}
                    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain filter brightness-95 group-hover:brightness-110 transition-all duration-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Futuristic Chamfered Stats Container (Centered container) */}
        <div className="w-[92%] sm:w-[85%] lg:w-[75%] max-w-[1440px] mx-auto">
          <div className="relative w-full mt-2 sm:mt-4">
          {/* Border layer with polygon clip-path */}
          <div
            className="p-[1px] bg-white/[0.09] shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
            }}
          >
            {/* Inner Dark Surface */}
            <div
              className="bg-[#0e0f15] py-8 sm:py-9 lg:py-10 px-6 sm:px-12 lg:px-16"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
              }}
            >
              {/* 4 Stats Grid Columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                {STATS_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-start space-y-1.5 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {/* Big Orange Stat Number */}
                    <span className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#FF5722] tracking-tight leading-none drop-shadow-[0_2px_12px_rgba(255,87,34,0.35)]">
                      {item.value}
                    </span>

                    {/* 2-Line Subtitle Label */}
                    <div className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-normal leading-[1.35] pt-0.5">
                      <p>{item.line1}</p>
                      <p>{item.line2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
