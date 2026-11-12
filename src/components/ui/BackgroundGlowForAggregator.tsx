import React from "react";
import Image from "next/image";

export function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#07080c]" />

      {/* Top Left Orange Circular Ring - Main */}
      <div
        className="absolute top-32 left-32 sm:top-40 sm:left-40 lg:-top-328 lg:-left-278
    w-[960px] h-[960px]
    sm:w-[1240px] sm:h-[1240px]
    lg:w-[1960px] lg:h-[1960px]
    rounded-full border-2 border-transparent
    shadow-[inset_0_0_45px_rgba(255,87,34,0.10),inset_0_0_90px_rgba(255,87,34,0.10)]
    pointer-events-none"
      />

      {/* Top Left Orange Circular Ring - Outer */}
      <div
        className="absolute top-16 left-16 sm:top-20 sm:left-20 lg:-top-314 lg:-left-199
    w-[960px] h-[960px]
    sm:w-[1240px] sm:h-[1240px]
    lg:w-[1960px] lg:h-[1960px]
    rounded-full border-2 border-transparent
    shadow-[inset_0_0_70px_rgba(255,87,34,0.10),inset_0_0_140px_rgba(255,87,34,0.10)]
    pointer-events-none"
      />
    </div>
  );
}
