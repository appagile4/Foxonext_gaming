import React from "react";

export interface BackgroundGlowForContactProps {
  className?: string;
}

export function BackgroundGlowForContact({
  className = "",
}: BackgroundGlowForContactProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
    >
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#07080c]" />

      {/* --- Ambient Radial Highlights --- */}
      {/* Top right ambient warm glow behind the form */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full blur-[160px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.45) 0%, rgba(255, 87, 34, 0.18) 45%, transparent 70%)",
        }}
      />

      {/* Top Left to Bottom Right Sweeping Diagonal Highlight */}
      <div className="absolute -top-[5%] -left-[10%] w-[120%] h-[740px] sm:h-[860px] bg-[radial-gradient(ellipse_at_30%_35%,rgba(255,145,77,0.18),transparent_60%)] pointer-events-none" />

      {/* Bottom Right Warm Ambient Glow */}
      <div
        className="absolute top-[35%] -right-[15%] w-[850px] sm:w-[1100px] h-[850px] sm:h-[1100px] rounded-full blur-[170px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 87, 34, 0.35) 0%, rgba(233, 78, 27, 0.14) 50%, transparent 70%)",
        }}
      />

      {/* --- Cosmic Curved Light Arcs & Rings --- */}
      {/* Flowing cosmic curved ring on Left */}
      <div
        className="absolute -top-[320px] -left-[280px]
          w-[1300px] h-[1300px]
          sm:w-[1600px] sm:h-[1600px]
          lg:w-[2100px] lg:h-[2100px]
          rounded-full border border-white/20
          bg-[radial-gradient(circle,rgba(255,87,34,0.18)_0%,rgba(230,74,12,0.12)_55%,rgba(171,50,3,0.04)_100%)]
          shadow-[0_0_35px_rgba(255,255,255,0.08),inset_0_0_50px_rgba(255,87,34,0.30)]
          pointer-events-none"
      />

      {/* Secondary Outer Cosmic Ring */}
      <div
        className="absolute -top-[290px] -left-[220px]
          w-[1300px] h-[1300px]
          sm:w-[1600px] sm:h-[1600px]
          lg:w-[2100px] lg:h-[2100px]
          rounded-full border border-white/15
          bg-[radial-gradient(circle,rgba(255,120,55,0.14)_0%,rgba(230,74,12,0.08)_60%,transparent_100%)]
          shadow-[0_0_30px_rgba(255,255,255,0.05),inset_0_0_70px_rgba(255,87,34,0.22)]
          pointer-events-none"
      />

      {/* Sweeping diagonal orange blade cut (Right side) */}
      <div
        className="absolute top-[20%] -right-[150px] lg:-right-[100px]
          w-[900px] h-[900px]
          rounded-full border border-white/15
          bg-[radial-gradient(circle,rgba(255,87,34,0.16)_0%,transparent_60%)]
          shadow-[inset_0_0_60px_rgba(255,87,34,0.25)]
          pointer-events-none"
      />
    </div>
  );
}
