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

export function TopGameProviders() {
  return (
    <section className="relative w-full pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-transparent select-none z-10">
      {/* Soft connecting ambient glow behind provider title */}

      <div className="max-w-6xl mx-auto space-y-9 sm:space-y-11 lg:space-y-12">
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

        {/* 8 Provider Badges Row (Exact same layout as screenshot) */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:gap-4 flex-wrap lg:flex-nowrap">
          {PROVIDERS_LIST.map((provider) => (
            <div
              key={provider.id}
              className="group relative flex items-center justify-center h-10 sm:h-11 px-3 sm:px-4 rounded-[10px] bg-[#13141b] border border-white/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:border-[#FF5722]/60 hover:shadow-[0_0_20px_rgba(255,87,34,0.35)] hover:-translate-y-1"
            >
              <div className="relative h-6 sm:h-7 w-auto flex items-center justify-center">
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={provider.width * 2}
                  height={50}
                  className="h-6 sm:h-7 w-auto object-contain filter brightness-95 group-hover:brightness-110 transition-all duration-200"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Futuristic Chamfered Stats Container (Exact polygon cut corners from reference) */}
        <div className="relative max-w-5xl mx-auto mt-4 sm:mt-6">
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
