"use client";

import React, { useState, useEffect } from "react";
import { MILESTONES } from "@/data/milestones";
import { useTranslation } from "@/translations/useTranslation";

export interface MilestonesProps {
  theme?: "orange" | "white";
  className?: string;
}

export function Milestones({ theme = "orange", className = "" }: MilestonesProps) {
  // Start with index 3 ("innovation") or 0 ("expertise") and cycle continuously
  const [activeIndex, setActiveIndex] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const isWhite = theme === "white";
  const { dict } = useTranslation();

  const getMilestoneData = (id: string, fallbackLabel: string, fallbackDesc: string) => {
    switch (id) {
      case "expertise":
        return {
          label: dict.milestones?.expertiseLabel || fallbackLabel,
          desc: dict.milestones?.expertiseDesc || fallbackDesc,
        };
      case "service":
        return {
          label: dict.milestones?.serviceLabel || fallbackLabel,
          desc: dict.milestones?.serviceDesc || fallbackDesc,
        };
      case "security":
        return {
          label: dict.milestones?.securityLabel || fallbackLabel,
          desc: dict.milestones?.securityDesc || fallbackDesc,
        };
      case "innovation":
        return {
          label: dict.milestones?.innovationLabel || fallbackLabel,
          desc: dict.milestones?.innovationDesc || fallbackDesc,
        };
      default:
        return { label: fallbackLabel, desc: fallbackDesc };
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MILESTONES.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className={`w-full max-w-lg sm:max-w-xl lg:max-w-[640px] mx-auto pt-6 sm:pt-8 pb-2 sm:pb-4 select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex items-start justify-between">
        {/* Background connecting timeline track */}
        <div
          className={`absolute top-[8px] left-[10%] right-[10%] h-[1px] -z-0 ${
            isWhite
              ? "bg-gradient-to-r from-white/10 via-white/40 to-white/10"
              : "bg-gradient-to-r from-zinc-800 via-zinc-600/70 to-zinc-800"
          }`}
        />

        {/* 4 Nodes continuously cycling */}
        {MILESTONES.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className="relative flex flex-col items-center z-10 w-28 sm:w-36 cursor-pointer group"
            >
              {/* Milestone Node Dot with smooth ambient glow ring */}
              <div className="relative flex items-center justify-center h-4 w-4">
                {/* Ambient glow ring */}
                <span
                  className={`absolute w-7 h-7 rounded-full transition-all duration-300 ease-out pointer-events-none ${
                    isActive
                      ? isWhite
                        ? "bg-white/20 ring-2 ring-white/40 scale-100 opacity-100"
                        : "bg-[#E94E1B]/20 ring-2 ring-[#E94E1B]/40 scale-100 opacity-100 shadow-[0_0_16px_rgba(233,78,27,0.5)]"
                      : "scale-50 opacity-0"
                  }`}
                />

                {/* Center dot */}
                <div
                  className={`relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? isWhite
                        ? "bg-white ring-2 ring-white/60 shadow-[0_0_14px_#ffffff]"
                        : "bg-[#E94E1B] ring-2 ring-[#E94E1B]/60 shadow-[0_0_14px_#E94E1B]"
                      : isWhite
                      ? "bg-white/40 group-hover:bg-white/70"
                      : "bg-zinc-500 group-hover:bg-zinc-400"
                  }`}
                />
              </div>

              {/* Title Label - Stable font rendering without scale transform */}
              <span
                suppressHydrationWarning
                className={`mt-3.5 text-xs sm:text-sm font-poppins tracking-wide transition-colors duration-300 text-center ${
                  isActive
                    ? isWhite
                      ? "text-white font-semibold drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
                      : "text-[#E94E1B] font-semibold drop-shadow-[0_2px_10px_rgba(233,78,27,0.4)]"
                    : isWhite
                    ? "text-white/60 font-normal group-hover:text-white"
                    : "text-zinc-400 font-normal group-hover:text-zinc-200"
                }`}
              >
                {getMilestoneData(item.id, item.label, item.description).label}
              </span>

              {/* Fixed-height description container: zero layout shift (CLS = 0) */}
              <div className="mt-1.5 h-14 sm:h-16 w-full flex items-start justify-center overflow-hidden">
                <p
                  suppressHydrationWarning
                  className={`font-poppins text-[11px] sm:text-xs font-light leading-snug text-center px-1 transition-all duration-300 ease-out ${
                    isActive
                      ? isWhite
                        ? "opacity-100 text-white/90 translate-y-0"
                        : "opacity-100 text-zinc-300/90 translate-y-0"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  {getMilestoneData(item.id, item.label, item.description).desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
