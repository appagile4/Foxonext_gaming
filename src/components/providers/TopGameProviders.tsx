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

const MARQUEE_PROVIDERS = [...PROVIDERS_LIST, ...PROVIDERS_LIST];

export function TopGameProviders() {
  return (
    <section className="relative w-[92%] sm:w-[85%] lg:w-[75%] mx-auto pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 bg-transparent select-none z-10">
      <div className="w-full space-y-9 sm:space-y-11 lg:space-y-12">
        {/* Section Heading & Subtitle */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-normal font-poppins">
            Top Game Providers
          </h2>
          <p className="font-poppins text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto">
            Popular casino games come together in one Game Aggregator hub. With
            our game aggregation platform it is easy and simple to add this
            massive portfolio to any gaming website through just one API
            integration.
          </p>
        </div>

        {/* Auto-scrolling Infinite Marquee with Wider & Prominent Cards */}
        <div
          className="relative w-full overflow-hidden py-3"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div className="animate-marquee flex items-center gap-4 sm:gap-6">
            {MARQUEE_PROVIDERS.map((provider, index) => (
              <div
                key={`${provider.id}-${index}`}
                className="group flex-shrink-0 flex items-center justify-center h-14 sm:h-16 md:h-[66px] px-6 sm:px-8 rounded-xl bg-[#13141b]  shadow-[0_4px_16px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 hover:border-[#FF5722]/60 hover:shadow-[0_0_24px_rgba(255,87,34,0.35)] hover:-translate-y-1 select-none"
                style={{
                  minWidth: provider.width
                    ? `${provider.width * 2}px`
                    : "140px",
                }}
              >
                <div className="relative h-8 sm:h-9 md:h-10 w-auto flex items-center justify-center">
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    width={provider.width * 3}
                    height={70}
                    className="h-8 sm:h-9 md:h-10 w-auto object-contain filter brightness-95 group-hover:brightness-110 transition-all duration-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Futuristic Chamfered Stats Container (Exact polygon cut corners from reference) */}
        <div className="relative w-full mt-4 sm:mt-6">
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
    </section>
  );
}
