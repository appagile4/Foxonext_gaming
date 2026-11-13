"use client";

import React from "react";
import Image from "next/image";
import {
  Boxes,
  Gamepad2,
  Trophy,
  Headphones,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "@/translations/useTranslation";

const FEATURE_ICONS = [Boxes, Gamepad2, Trophy, Headphones, Wrench, ShieldCheck];

export function AggregatorFeatures() {
  const { dict } = useTranslation();

  const features = dict.aggregatorPage?.features || [
    {
      id: "api",
      title: "One API Integration",
      desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    },
    {
      id: "providers",
      title: "80+ Games Providers",
      desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    },
    {
      id: "tournament",
      title: "Tournament Tool",
      desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    },
    {
      id: "support",
      title: "24/7 Customer Service",
      desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    },
    {
      id: "technical",
      title: "Ongoing technical support",
      desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    },
    {
      id: "compliance",
      title: "ISO 27001 Compliant",
      desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 select-none z-10 bg-transparent">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-20 sm:space-y-28">
        {/* Part 2: FOXOnext Aggregator Features */}
        <div className="space-y-8 sm:space-y-12">
          {/* Header with Orange Accent Brush Mark */}
          <div className="relative inline-block">
            <div className="absolute -left-3 -top-2 w-28 sm:w-36 h-12 -z-0 opacity-95 pointer-events-none">
              <Image
                src="/images/why-choose-us-mark.png"
                alt="Accent Mark"
                width={120}
                height={60}
                className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(255,87,34,0.65)]"
              />
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <h2
                className="font-red-rose text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold text-white tracking-tight leading-tight"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
                suppressHydrationWarning
              >
                {dict.aggregatorPage?.featuresTitle || "FOXOnext Aggregator Features"}
              </h2>
              {/* Geometric icon accent */}
              <div className="text-[#FF5722] text-sm opacity-80 hidden sm:block">
                ⊞ ★
              </div>
            </div>
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((item, idx) => {
              const IconComponent = FEATURE_ICONS[idx % FEATURE_ICONS.length] || Boxes;
              return (
                <div
                  key={item.id || idx}
                  className="relative rounded-2xl bg-[#0c0d12]/70 border border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-[#0c0d12] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon Badge + Title */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#E64A19] flex items-center justify-center text-white flex-shrink-0 shadow-[0_4px_16px_rgba(255,87,34,0.35)] group-hover:scale-105 transition-transform duration-200">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>

                      <h3
                        className="font-poppins text-base sm:text-lg font-bold text-white tracking-tight leading-snug"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                        suppressHydrationWarning
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Description Paragraph */}
                    <p
                      className="font-poppins text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed pt-2"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                      suppressHydrationWarning
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
