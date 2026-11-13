import React from "react";

export interface BackgroundGlowForCrmProps {
  className?: string;
}

export function BackgroundGlowForCrm({
  className = "",
}: BackgroundGlowForCrmProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
    >
      {/* Base deep black background */}
      <div className="absolute inset-0 bg-[#07080c]" />

      {/* --- Region 1: Hero Cosmic Atmospheric Glows (Black with Subtle Cosmic Accents) --- */}

      {/* Top Left Cosmic Circular Rings (Delicate transparent borders) */}
      <div
        className="absolute top-32 left-32 sm:top-40 sm:left-40 lg:-top-328 lg:-left-278
          w-[960px] h-[960px]
          sm:w-[1240px] sm:h-[1240px]
          lg:w-[1960px] lg:h-[1960px]
          rounded-full border border-white/10 sm:border-white/15
          shadow-[0_0_35px_rgba(255,255,255,0.05),inset_0_0_45px_rgba(255,87,34,0.12)]
          pointer-events-none"
      />

      <div
        className="absolute top-16 left-16 sm:top-20 sm:left-20 lg:-top-314 lg:-left-199
          w-[960px] h-[960px]
          sm:w-[1240px] sm:h-[1240px]
          lg:w-[1960px] lg:h-[1960px]
          rounded-full border border-white/[0.08] sm:border-white/10
          shadow-[0_0_30px_rgba(255,255,255,0.04),inset_0_0_60px_rgba(255,87,34,0.08)]
          pointer-events-none"
      />

      {/* Subtle ambient light accent behind 3D dashboard */}
      <div
        className="absolute top-[8%] right-[5%] w-[600px] h-[500px] rounded-full blur-[140px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.25) 0%, rgba(255, 87, 34, 0.08) 50%, transparent 70%)",
        }}
      />

      {/* --- Region 2: Lower Ambient Atmosphere & Constellation Mesh --- */}

      {/* Soft Ambient Orange Glow Behind Features */}
      <div
        className="absolute top-[1600px] lg:top-[1800px] right-[-10%] w-[650px] h-[550px] rounded-full blur-[140px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.35) 0%, rgba(255, 87, 34, 0.12) 50%, transparent 70%)",
        }}
      />

      {/* Continuous Particle Constellation Mesh */}
      <div
        className="absolute top-[1500px] h-[1200px] left-0 right-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 145, 77, 0.35) 0%, transparent 80%), radial-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 32px 32px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
    </div>
  );
}
