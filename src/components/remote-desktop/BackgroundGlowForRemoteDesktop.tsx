import React from "react";

export interface BackgroundGlowForRemoteDesktopProps {
  className?: string;
}

export function BackgroundGlowForRemoteDesktop({
  className = "",
}: BackgroundGlowForRemoteDesktopProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
    >
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#07080c]" />

      {/* --- Region 1: Hero Sweeping Curved Light & Atmosphere --- */}
      {/* Top right ambient warm glow behind host server diagram */}
      <div
        className="absolute -top-[10%] right-[-5%] w-[750px] sm:w-[950px] h-[750px] sm:h-[950px] rounded-full blur-[150px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.45) 0%, rgba(255, 87, 34, 0.18) 45%, transparent 70%)",
        }}
      />

      {/* Hero Sweeping Diagonal Curved Light Highlights */}
      <div className="absolute -top-[5%] -left-[10%] w-[120%] h-[740px] sm:h-[800px] lg:h-[860px] bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,145,77,0.22),transparent_60%)] pointer-events-none" />

      {/* Signature Cosmic Rings (Top Left) */}
      <div
        className="absolute -top-64 -left-64 sm:-top-80 sm:-left-80 lg:-top-96 lg:-left-96
          w-[750px] h-[750px] sm:w-[1000px] sm:h-[1000px] lg:w-[1300px] lg:h-[1300px]
          rounded-full border border-white/10
          shadow-[0_0_35px_rgba(255,255,255,0.06),inset_0_0_50px_rgba(255,87,34,0.15)]
          pointer-events-none"
      />

      {/* --- Region 2: Usecases & Network Atmosphere --- */}
      {/* Mid Left Warm Ambient Glow */}
      <div
        className="absolute top-[1600px] lg:top-[1900px] left-[-8%] w-[650px] h-[550px] rounded-full blur-[140px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.35) 0%, rgba(255, 87, 34, 0.12) 50%, transparent 70%)",
        }}
      />

      {/* Mid Right Subtle Ambient Glow */}
      <div
        className="absolute top-[2300px] lg:top-[2600px] right-[-10%] w-[600px] h-[500px] rounded-full blur-[140px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.35) 0%, rgba(255, 87, 34, 0.12) 50%, transparent 70%)",
        }}
      />

      {/* Continuous Particle Constellation Mesh */}
      <div
        className="absolute top-[1800px] h-[1400px] left-0 right-0 opacity-15 pointer-events-none"
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

      {/* --- Region 3: Pricing Ambient Highlight --- */}
      <div
        className="absolute bottom-[1100px] right-[10%] w-[550px] h-[450px] rounded-full blur-[140px] opacity-15 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.40) 0%, rgba(255, 87, 34, 0.10) 50%, transparent 70%)",
        }}
      />
    </div>
  );
}
