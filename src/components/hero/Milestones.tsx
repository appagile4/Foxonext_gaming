"use client";

import React, { useState, useEffect } from "react";
import { MILESTONES } from "@/data/milestones";

export function Milestones() {
  // Start with index 3 ("innovation") or 0 ("expertise") and cycle continuously
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MILESTONES.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 select-none pointer-events-none">
      <div className="relative flex items-start justify-between">
        {/* Background connecting timeline track */}
        <div className="absolute top-[8px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-600/70 to-zinc-800 -z-0" />

        {/* 4 Nodes continuously cycling */}
        {MILESTONES.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              className="relative flex flex-col items-center z-10 transition-all duration-500 w-36 sm:w-48 lg:w-56"
            >
              {/* Milestone Node Dot with continuous automated #E94E1B animation */}
              <div className="relative flex items-center justify-center h-4 w-4">
                {/* Glowing pulsating radar ring when active */}
                {isActive && (
                  <>
                    <span className="absolute w-7 h-7 rounded-full bg-[#E94E1B]/30 animate-ping" />
                    <span className="absolute w-5 h-5 rounded-full bg-[#E94E1B]/40 animate-pulse" />
                  </>
                )}

                <div
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? "bg-[#E94E1B] ring-4 ring-[#E94E1B]/35 shadow-[0_0_20px_#E94E1B] scale-125"
                      : "bg-zinc-500 shadow-sm scale-100"
                  }`}
                />
              </div>

              {/* Title Label */}
              <span
                className={`mt-4 text-xs sm:text-sm font-poppins tracking-wide transition-all duration-500 text-center ${
                  isActive
                    ? "text-[#E94E1B] font-semibold scale-105 drop-shadow-[0_2px_12px_rgba(233,78,27,0.5)]"
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
                <p className="font-poppins text-[11px] sm:text-xs text-zinc-300/90 font-light leading-snug">
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
