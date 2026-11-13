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
      {/* Base deep background */}
      {/* <div className="absolute inset-0 bg-[#07080c]" /> */}

      {/* --- Region 1: Hero Top Warm Diagonal Gradient Backdrop --- */}
      <div className="absolute top-0 left-0 right-0 h-[680px] sm:h-[740px] lg:h-[820px] xl:h-[960px] bg-gradient-to-br from-[#200802] via-[#ab3203] to-[#e64a0c] pointer-events-none" />

      {/* Hero Sweeping Diagonal Curved Light Highlights */}
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[740px] sm:h-[800px] lg:h-[860px] bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,145,77,0.35),transparent_60%)] pointer-events-none" />

      <div className="absolute top-0 right-0 w-full h-[740px] sm:h-[800px] lg:h-[860px] bg-[radial-gradient(circle_at_85%_35%,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />

      {/* --- Top Left Signature Cosmic Circular Rings --- */}

      {/* Main Inner Ring */}
      <div
        className="absolute top-32 left-32 sm:top-40 sm:left-40 lg:-top-328 lg:-left-278
          w-[960px] h-[960px]
          sm:w-[1240px] sm:h-[1240px]
          lg:w-[1960px] lg:h-[1960px]
          rounded-full border border-white/20 sm:border-white/25
          shadow-[0_0_35px_rgba(255,255,255,0.12),inset_0_0_45px_rgba(255,87,34,0.35),inset_0_0_90px_rgba(255,87,34,0.22)]
          pointer-events-none"
      />

      {/* Outer Ring */}
      <div
        className="absolute top-16 left-16 sm:top-20 sm:left-20 lg:-top-314 lg:-left-199
          w-[960px] h-[960px]
          sm:w-[1240px] sm:h-[1240px]
          lg:w-[1960px] lg:h-[1960px]
          rounded-full border border-white/15 sm:border-white/20
          shadow-[0_0_30px_rgba(255,255,255,0.08),inset_0_0_70px_rgba(255,87,34,0.28),inset_0_0_140px_rgba(255,87,34,0.18)]
          pointer-events-none"
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

      {/* --- Region 3: Advantages Ambient Atmosphere & Cosmic Ring --- */}

      {/* Lower Left Ambient Orange Glow */}
      <div
        className="absolute bottom-[900px] left-[-8%] w-[600px] h-[500px] rounded-full blur-[140px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.35) 0%, rgba(255, 87, 34, 0.12) 50%, transparent 70%)",
        }}
      />

      {/* Right Large Signature Cosmic Ring */}
      <div
        className="absolute top-[550px] sm:top-[650px] lg:top-[720px] -right-[1200px] sm:-right-[1550px] lg:-right-[1950px]
          w-[1700px] h-[1700px]
          sm:w-[2100px] sm:h-[2100px]
          lg:w-[2700px] lg:h-[2700px]
          rounded-full border border-white/20
          shadow-[0_0_35px_rgba(255,255,255,0.10),inset_0_0_55px_rgba(255,87,34,0.30),inset_0_0_110px_rgba(255,87,34,0.16)]
          pointer-events-none"
      />
    </div>
  );
}
