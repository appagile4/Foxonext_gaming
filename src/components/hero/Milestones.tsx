"use client";

import React, { useState } from "react";
import { MILESTONES } from "@/data/milestones";

export function Milestones() {
  const [activeId, setActiveId] = useState<string>("innovation");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 select-none">
      <div className="relative flex items-start justify-between">
        {/* Background connecting timeline track */}
        <div className="absolute top-[8px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-600/70 to-zinc-800 pointer-events-none -z-0" />

        {/* 4 Nodes */}
        {MILESTONES.map((item) => {
          // Highlight if hovered, or if nothing is hovered, highlight active
          const isHovered = hoveredId === item.id;
          const isSelected = activeId === item.id;
          const isHighlighted = isHovered || (hoveredId === null && isSelected);

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveId(item.id)}
              className="group relative flex flex-col items-center cursor-pointer focus:outline-none z-10 transition-all duration-300 w-36 sm:w-48 lg:w-56"
            >
              {/* Milestone Node Dot with #E94E1B hover animation */}
              <div className="relative flex items-center justify-center h-4 w-4">
                {/* Glowing pulsating radar ring on hover / active */}
                {isHighlighted && (
                  <>
                    <span className="absolute w-6 h-6 rounded-full bg-[#E94E1B]/25 animate-ping pointer-events-none" />
                    <span className="absolute w-5 h-5 rounded-full bg-[#E94E1B]/35 animate-pulse pointer-events-none" />
                  </>
                )}

                <div
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    isHighlighted
                      ? "bg-[#E94E1B] ring-4 ring-[#E94E1B]/30 shadow-[0_0_18px_#E94E1B] scale-125"
                      : "bg-zinc-400 group-hover:bg-[#E94E1B] group-hover:ring-4 group-hover:ring-[#E94E1B]/20 group-hover:scale-110 shadow-sm"
                  }`}
                />
              </div>

              {/* Title Label */}
              <span
                className={`mt-4 text-xs sm:text-sm font-poppins tracking-wide transition-all duration-300 text-center select-none ${
                  isHighlighted
                    ? "text-[#E94E1B] font-semibold scale-105 drop-shadow-[0_2px_12px_rgba(233,78,27,0.45)]"
                    : "text-zinc-400 font-normal group-hover:text-[#E94E1B]"
                }`}
              >
                {item.label}
              </span>

              {/* Description Text that appears on hover / selection */}
              <div
                className={`mt-1.5 transition-all duration-300 ease-out text-center px-2 ${
                  isHighlighted
                    ? "opacity-100 translate-y-0 max-h-20"
                    : "opacity-0 -translate-y-1.5 max-h-0 overflow-hidden pointer-events-none"
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
