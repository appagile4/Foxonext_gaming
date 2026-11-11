"use client";

import React, { useState, useEffect } from "react";
import { MILESTONES } from "@/data/milestones";

export interface MilestonesProps {
  theme?: "orange" | "white";
  className?: string;
}

export function Milestones({ theme = "orange", className = "" }: MilestonesProps) {
  // Start with index 3 ("innovation") or 0 ("expertise") and cycle continuously
  const [activeIndex, setActiveIndex] = useState(3);
  const isWhite = theme === "white";

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MILESTONES.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`w-full max-w-lg sm:max-w-xl lg:max-w-[640px] mx-auto pt-6 sm:pt-8 pb-4 sm:pb-6 select-none pointer-events-none ${className}`}
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
              className="relative flex flex-col items-center z-10 transition-all duration-500 w-28 sm:w-36"
            >
              {/* Milestone Node Dot with continuous automated animation */}
              <div className="relative flex items-center justify-center h-4 w-4">
                {/* Glowing pulsating radar ring when active */}
                {isActive && (
                  <>
                    <span
                      className={`absolute w-7 h-7 rounded-full animate-ping ${
                        isWhite ? "bg-white/30" : "bg-[#E94E1B]/30"
                      }`}
                    />
                    <span
                      className={`absolute w-5 h-5 rounded-full animate-pulse ${
                        isWhite ? "bg-white/40" : "bg-[#E94E1B]/40"
                      }`}
                    />
                  </>
                )}

                <div
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? isWhite
                        ? "bg-white ring-4 ring-white/35 shadow-[0_0_20px_#ffffff] scale-125"
                        : "bg-[#E94E1B] ring-4 ring-[#E94E1B]/35 shadow-[0_0_20px_#E94E1B] scale-125"
                      : isWhite
                      ? "bg-white/40 shadow-sm scale-100"
                      : "bg-zinc-500 shadow-sm scale-100"
                  }`}
                />
              </div>

              {/* Title Label */}
              <span
                className={`mt-4 text-xs sm:text-sm font-poppins tracking-wide transition-all duration-500 text-center ${
                  isActive
                    ? isWhite
                      ? "text-white font-semibold scale-105 drop-shadow-[0_2px_12px_rgba(255,255,255,0.6)]"
                      : "text-[#E94E1B] font-semibold scale-105 drop-shadow-[0_2px_12px_rgba(233,78,27,0.5)]"
                    : isWhite
                    ? "text-white/70 font-normal scale-100"
                    : "text-zinc-400 font-normal scale-100"
                }`}
              >
                {item.label}
              </span>

              {/* Description Text that appears during active cycle */}
              <div
                className={`mt-1.5 transition-all duration-500 ease-out text-center px-2 ${
                  isActive
                    ? "opacity-100 translate-y-0 max-h-20"
                    : "opacity-0 -translate-y-1.5 max-h-0 overflow-hidden"
                }`}
              >
                <p
                  className={`font-poppins text-[11px] sm:text-xs font-light leading-snug ${
                    isWhite ? "text-white/90" : "text-zinc-300/90"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
