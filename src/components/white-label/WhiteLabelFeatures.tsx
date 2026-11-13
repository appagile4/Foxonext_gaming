"use client";

import React from "react";
import Image from "next/image";

interface FeatureCard {
  id: string;
  title: string;
  desc: string;
  iconType: "omnichannel" | "branding" | "analytics" | "localized" | "licensed" | "updates";
}

const FEATURES: FeatureCard[] = [
  {
    id: "omnichannel",
    title: "Omnichannel Support",
    desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    iconType: "omnichannel",
  },
  {
    id: "branding",
    title: "Custom Designs & Branding",
    desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    iconType: "branding",
  },
  {
    id: "analytics",
    title: "Data Analytics & Reporting",
    desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    iconType: "analytics",
  },
  {
    id: "localized",
    title: "Geo-Localized Gameplay",
    desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    iconType: "localized",
  },
  {
    id: "licensed",
    title: "Geo-Licensed Aids",
    desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    iconType: "licensed",
  },
  {
    id: "updates",
    title: "Continuous Updates",
    desc: "Popular casino games come together in one Game Aggregator hub. With our game aggregation platform it is easy and simple to add this massive portfolio to any gaming website through just one API integration.",
    iconType: "updates",
  },
];

function RenderIcon({ type }: { type: FeatureCard["iconType"] }) {
  switch (type) {
    case "omnichannel":
      return (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-300">
          <svg className="w-6 h-6 text-[#FF5722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
            <path d="M12 12l8-4.5" />
            <path d="M12 12v8" />
            <path d="M12 12L4 7.5" />
          </svg>
        </div>
      );
    case "branding":
      return (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#14151f] border border-[#FF5722]/50 flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(255,87,34,0.25)] group-hover:scale-105 transition-transform duration-300">
          <svg className="w-6 h-6 text-[#FF5722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="6" width="20" height="12" rx="4" />
            <path d="M6 12h4m-2-2v4" />
            <circle cx="15" cy="11" r="1" fill="currentColor" />
            <circle cx="18" cy="13" r="1" fill="currentColor" />
          </svg>
        </div>
      );
    case "analytics":
      return (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#E64A19] flex items-center justify-center text-white flex-shrink-0 shadow-[0_4px_14px_rgba(255,87,34,0.35)] group-hover:scale-105 transition-transform duration-300">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 19h20M5 19V9l4 4 4-7 6 6v7" />
          </svg>
        </div>
      );
    case "localized":
      return (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#E64A19] flex items-center justify-center text-white flex-shrink-0 shadow-[0_4px_14px_rgba(255,87,34,0.35)] group-hover:scale-105 transition-transform duration-300">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 11a9 9 0 0 1 18 0v4a3 3 0 0 1-3 3h-1" />
            <path d="M3 11v4a3 3 0 0 0 3 3h1" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      );
    case "licensed":
      return (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-300">
          <svg className="w-6 h-6 text-[#FF5722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
      );
    case "updates":
      return (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#14151f] border border-white/20 flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center justify-center">
            <span className="font-poppins text-[10px] font-bold text-[#FF5722] tracking-wider leading-none">
              ISO
            </span>
            <svg className="w-3.5 h-3.5 text-[#FF5722] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
        </div>
      );
  }
}

export function WhiteLabelFeatures() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 select-none z-10 bg-transparent">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-10 sm:space-y-14">
        {/* Header with Orange Accent Brush Mark & Star Icon */}
        <div className="flex items-center justify-between">
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
                className="font-red-rose text-2xl sm:text-3xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-tight"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                FOXOnext Whitelabel Solution Features
              </h2>
            </div>
          </div>

          {/* Top Right Grid Indicator ⊞ ★ */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#FF5722]">
            <span className="text-base leading-none">⊞</span>
            <span className="text-sm leading-none">★</span>
          </div>
        </div>

        {/* 6 Feature Cards Grid (3 Columns x 2 Rows) with Transparent Blur Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-2xl sm:rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-[#FF5722]/50 p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                {/* Header: Icon Badge + Title */}
                <div className="flex items-center gap-4">
                  <RenderIcon type={feature.iconType} />
                  <h3
                    className="font-red-rose text-base sm:text-lg lg:text-[19px] font-bold text-white tracking-tight leading-snug group-hover:text-[#FF5722] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                    }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description Paragraph */}
                <p
                  className="font-poppins text-xs sm:text-[13px] text-zinc-300/85 font-normal leading-relaxed pt-2"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
