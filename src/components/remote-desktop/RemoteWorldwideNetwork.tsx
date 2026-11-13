"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/translations/useTranslation";

/* Circular SVG Country Flag Badges */
function UkFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex-shrink-0 shadow-sm">
      <circle cx="16" cy="16" r="16" fill="#012169" />
      <path d="M0 0 L32 32 M32 0 L0 32" stroke="#ffffff" strokeWidth="4" />
      <path d="M0 0 L32 32 M32 0 L0 32" stroke="#C8102E" strokeWidth="2" />
      <path d="M16 0 V32 M0 16 H32" stroke="#ffffff" strokeWidth="6" />
      <path d="M16 0 V32 M0 16 H32" stroke="#C8102E" strokeWidth="3.5" />
    </svg>
  );
}

function ChinaFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex-shrink-0 shadow-sm">
      <circle cx="16" cy="16" r="16" fill="#DE2910" />
      <polygon points="8 6 9.2 9.5 12.8 9.5 9.9 11.6 11 15 8 13 5 15 6.1 11.6 3.2 9.5 6.8 9.5" fill="#FFDE00" />
      <circle cx="15" cy="6" r="1.2" fill="#FFDE00" />
      <circle cx="17" cy="8.5" r="1.2" fill="#FFDE00" />
      <circle cx="17" cy="12" r="1.2" fill="#FFDE00" />
      <circle cx="15" cy="14.5" r="1.2" fill="#FFDE00" />
    </svg>
  );
}

function ItalyFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
      <rect width="10.6" height="32" x="0" fill="#009246" />
      <rect width="10.8" height="32" x="10.6" fill="#ffffff" />
      <rect width="10.6" height="32" x="21.4" fill="#CE2B37" />
    </svg>
  );
}

function AustriaFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
      <rect width="32" height="10.6" y="0" fill="#ED2939" />
      <rect width="32" height="10.8" y="10.6" fill="#ffffff" />
      <rect width="32" height="10.6" y="21.4" fill="#ED2939" />
    </svg>
  );
}

function FinlandFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
      <circle cx="16" cy="16" r="16" fill="#ffffff" />
      <rect width="6.5" height="32" x="10" fill="#003580" />
      <rect width="32" height="6.5" y="12.7" fill="#003580" />
    </svg>
  );
}

function JapanFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
      <circle cx="16" cy="16" r="16" fill="#ffffff" />
      <circle cx="16" cy="16" r="6" fill="#BC002D" />
    </svg>
  );
}

function BelgiumFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
      <rect width="10.6" height="32" x="0" fill="#000000" />
      <rect width="10.8" height="32" x="10.6" fill="#FDDA24" />
      <rect width="10.6" height="32" x="21.4" fill="#EF3340" />
    </svg>
  );
}

function DenmarkFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
      <circle cx="16" cy="16" r="16" fill="#C60C30" />
      <rect width="5" height="32" x="10.5" fill="#ffffff" />
      <rect width="32" height="5" y="13.5" fill="#ffffff" />
    </svg>
  );
}

const COUNTRIES = [
  { name: "United Kingdom", Flag: UkFlag },
  { name: "China", Flag: ChinaFlag },
  { name: "Austria", Flag: AustriaFlag },
  { name: "Finland", Flag: FinlandFlag },
  { name: "Belgium", Flag: BelgiumFlag },
  { name: "Denmark", Flag: DenmarkFlag },
  { name: "Italy", Flag: ItalyFlag },
  { name: "Japan", Flag: JapanFlag },
];

export function RemoteWorldwideNetwork() {
  const { dict } = useTranslation();

  return (
    <section className="relative w-full py-18 sm:py-24 lg:py-28 bg-transparent select-none z-10 overflow-hidden">
      <div className="relative z-10 w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Heading & Subtitle - Full Width with Single-Line Lock */}
        <div className="space-y-4 w-full">
          <h2
            className="font-red-rose text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-tight sm:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-red-rose), 'Red Rose', serif",
            }}
          >
            <span suppressHydrationWarning>
              {dict.remoteDesktopPage?.worldwideTitle1 || "Virtual"}{" "}
            </span>
            <span className="text-[#FF5722]" suppressHydrationWarning>
              {dict.remoteDesktopPage?.worldwideTitle2 || "Worldwide"}
            </span>{" "}
            <span suppressHydrationWarning>
              {dict.remoteDesktopPage?.worldwideTitle3 || "Server Network"}
            </span>
          </h2>

          <p
            className="font-poppins text-xs sm:text-sm md:text-[15px] text-zinc-300 font-normal leading-relaxed max-w-4xl"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            }}
            suppressHydrationWarning
          >
            {dict.remoteDesktopPage?.worldwideDesc ||
              "FOXOnext provides you with access to high-speed Virtual Servers across the globe to deliver low latency and maximum reliability."}
          </p>
        </div>

        {/* 2-Column Grid: Left Country 2-Column List & Right Dark World Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 8 Countries arranged in 2 columns */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-7 gap-x-8 sm:gap-x-10">
            {COUNTRIES.map((country) => {
              const FlagComponent = country.Flag;
              return (
                <div
                  key={country.name}
                  className="flex items-center gap-3.5 group cursor-pointer transition-transform duration-200 hover:translate-x-1"
                >
                  <FlagComponent />
                  <span
                    className="font-poppins text-sm sm:text-base font-medium text-white group-hover:text-[#FF5722] transition-colors duration-200 whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {country.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: World Map Silhouette */}
          <div className="lg:col-span-7 flex items-center justify-center relative">
            <div className="relative w-full max-w-[820px] aspect-[2372/768] flex items-center justify-center">
              <Image
                src="/images/remote-desktop/world-map.png"
                alt="Virtual Server Global World Map"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 820px"
                className="object-contain filter opacity-85 hover:opacity-100 transition-opacity duration-300"
                priority
              />

              {/* Glowing Server Node Accents overlay on map */}
              <div className="absolute top-[28%] left-[48%] w-3 h-3 rounded-full bg-[#FF5722] shadow-[0_0_12px_#FF5722] animate-ping opacity-75 pointer-events-none" />
              <div className="absolute top-[28%] left-[48%] w-2 h-2 rounded-full bg-[#FF5722] pointer-events-none" />

              <div className="absolute top-[32%] left-[84%] w-3 h-3 rounded-full bg-[#FF5722] shadow-[0_0_12px_#FF5722] animate-ping opacity-75 pointer-events-none delay-300" />
              <div className="absolute top-[32%] left-[84%] w-2 h-2 rounded-full bg-[#FF5722] pointer-events-none" />

              <div className="absolute top-[38%] left-[72%] w-3 h-3 rounded-full bg-[#FF5722] shadow-[0_0_12px_#FF5722] animate-ping opacity-75 pointer-events-none delay-700" />
              <div className="absolute top-[38%] left-[72%] w-2 h-2 rounded-full bg-[#FF5722] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
