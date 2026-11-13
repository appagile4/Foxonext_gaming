import React from "react";

export interface BackgroundGlowForWhiteLabelProps {
  className?: string;
}

export function BackgroundGlowForWhiteLabel({
  className = "",
}: BackgroundGlowForWhiteLabelProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
    >
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#07080c]" />

      {/* --- Region 1: Hero Sweeping Curved Light & Atmosphere --- */}
      {/* Top right ambient warm glow behind white-label hardware mockup */}
      <div
        className="absolute -top-[10%] right-[-5%] w-[750px] sm:w-[950px] h-[750px] sm:h-[950px] rounded-full blur-[150px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.45) 0%, rgba(255, 87, 34, 0.18) 45%, transparent 70%)",
        }}
      />

      {/* Hero Sweeping Diagonal Curved Light Highlights */}
      <div className="absolute -top-[5%] -left-[10%] w-[120%] h-[740px] sm:h-[800px] lg:h-[860px] bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,145,77,0.22),transparent_60%)] pointer-events-none" />

      {/* --- Top Left Signature Cosmic Circular Rings --- */}

      {/* Main Inner Ring */}
      <div
        className="absolute top-32 left-32 sm:top-40 sm:left-40 lg:-top-328 lg:-left-278
          w-[960px] h-[960px]
          sm:w-[1240px] sm:h-[1240px]
          lg:w-[1960px] lg:h-[1960px]
          rounded-full border border-white/25
          bg-[radial-gradient(circle,rgba(255,87,34,0.28)_0%,rgba(230,74,12,0.20)_55%,rgba(171,50,3,0.08)_100%)]
          shadow-[0_0_35px_rgba(255,255,255,0.12),inset_0_0_45px_rgba(255,87,34,0.45),inset_0_0_90px_rgba(255,87,34,0.30)]
          pointer-events-none"
      />

      {/* Outer Ring */}
      <div
        className="absolute top-16 left-16 sm:top-20 sm:left-20 lg:-top-314 lg:-left-199
          w-[960px] h-[960px]
          sm:w-[1240px] sm:h-[1240px]
          lg:w-[1960px] lg:h-[1960px]
          rounded-full border border-white/20
          bg-[radial-gradient(circle,rgba(255,120,55,0.22)_0%,rgba(230,74,12,0.16)_60%,rgba(171,50,3,0.06)_100%)]
          shadow-[0_0_30px_rgba(255,255,255,0.08),inset_0_0_70px_rgba(255,87,34,0.38),inset_0_0_140px_rgba(255,87,34,0.25)]
          pointer-events-none"
      />

      {/* Right Signature Cosmic Ring (Contained in Hero & Top region) */}
      <div
        className="absolute top-[80px] sm:top-[120px] lg:top-[160px] -right-[1450px] sm:-right-[2050px] lg:-right-[2700px]
          w-[2300px] h-[2300px]
          sm:w-[3000px] sm:h-[3000px]
          lg:w-[3800px] lg:h-[3800px]
          rounded-full border border-white/25
          bg-[radial-gradient(circle,rgba(255,87,34,0.30)_0%,rgba(230,74,12,0.20)_55%,rgba(171,50,3,0.08)_100%)]
          shadow-[0_0_35px_rgba(255,255,255,0.10),inset_0_0_55px_rgba(255,87,34,0.45),inset_0_0_110px_rgba(255,87,34,0.25)]
          pointer-events-none"
      />

      {/* --- Region 2: Key Features & Lower Atmosphere --- */}
      <div
        className="absolute top-[1400px] lg:top-[1600px] right-[-10%] w-[650px] h-[550px] rounded-full blur-[140px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.35) 0%, rgba(255, 87, 34, 0.12) 50%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-[2200px] lg:top-[2500px] left-[-10%] w-[650px] h-[550px] rounded-full blur-[140px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.30) 0%, rgba(255, 87, 34, 0.10) 50%, transparent 70%)",
        }}
      />
    </div>
  );
}
