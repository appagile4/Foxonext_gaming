import React from "react";
import Image from "next/image";

export interface BackgroundGlowForAggregatorProps {
  className?: string;
}

export function BackgroundGlowForAggregator({
  className = "",
}: BackgroundGlowForAggregatorProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
    >
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#07080c]" />

      {/* --- Region 1: Hero Top Warm Diagonal Gradient Backdrop (Decreased height - strictly above Top Game Providers) --- */}
      <div className="absolute top-0 left-0 right-0 h-[680px] sm:h-[740px] lg:h-[820px] xl:h-[945px] bg-gradient-to-br from-[#200802] via-[#ab3203] to-[#e64a0c] pointer-events-none" />

      {/* Hero Sweeping Diagonal Curved Light Highlights (Contained above Top Game Providers) */}
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

      {/* --- Region 2: Lower Ambient Atmosphere & Constellation Mesh (Features & Advantages) --- */}
      {/* Soft ambient orange glow behind Features */}
      <div
        className="absolute top-[1600px] lg:top-[1800px] right-[-10%] w-[650px] h-[550px] rounded-full blur-[140px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.35) 0%, rgba(255, 87, 34, 0.12) 50%, transparent 70%)",
        }}
      />

      {/* Continuous Particle Constellation Mesh spanning across Features & Advantages */}
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

      {/* --- Region 3: Advantages Ambient Atmosphere & Globe --- */}
      {/* Lower left ambient orange glow */}
      <div
        className="absolute bottom-[900px] left-[-8%] w-[600px] h-[500px] rounded-full blur-[140px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.35) 0%, rgba(255, 87, 34, 0.12) 50%, transparent 70%)",
        }}
      />

      {/* Bottom Right Glowing Network Globe behind Advantages */}
      <div
        className="absolute -bottom-48 -right-48 w-[1200px] sm:w-[1550px] lg:w-[1950px] h-auto pointer-events-none select-none opacity-15"
        style={{
          transform: "rotate(315deg)",
          transformOrigin: "bottom right",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 25% 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 25% 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 88%)",
        }}
      >
        <Image
          src="/images/globe-network.png"
          alt="Glowing Network Globe Background"
          width={2048}
          height={1148}
          className="w-full h-auto object-contain filter drop-shadow-[0_0_40px_rgba(233,78,27,0.3)]"
          priority
        />
      </div>

      {/* Bottom Right Signature Cosmic Ring */}
      <div
        className="absolute -bottom-[450px] -right-[450px]
    w-[1100px] h-[1100px]
    sm:w-[1400px] sm:h-[1400px]
    lg:w-[1800px] lg:h-[1800px]
    rounded-full border border-white/20
    shadow-[0_0_35px_rgba(255,255,255,0.10),inset_0_0_55px_rgba(255,87,34,0.30),inset_0_0_110px_rgba(255,87,34,0.16)]
    pointer-events-none"
      />
    </div>
  );
}
