import React from "react";

export function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#07080c]" />

      {/* Top Left Orange Circular Ring */}
      <div
        className="absolute -top-24 -left-24 sm:-top-32 sm:-left-32 lg:-top-36 lg:-left-36 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#FF5722] shadow-[0_0_35px_rgba(255,87,34,0.55),inset_0_0_25px_rgba(255,87,34,0.25)] pointer-events-none"
      />

      {/* Top right purple/indigo ambient glow (behind dashboard) */}
      <div
        className="absolute -top-[5%] right-[-5%] w-[650px] h-[550px] rounded-full blur-[120px] opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
        }}
      />

      {/* Center-left warm orange / amber ambient glow */}
      <div
        className="absolute top-[18%] left-[-10%] w-[700px] h-[500px] rounded-full blur-[140px] opacity-35 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.45) 0%, rgba(255, 115, 0, 0.18) 50%, transparent 75%)",
        }}
      />

      {/* Button ambient glow */}
      <div
        className="absolute top-[42%] left-[6%] w-[260px] h-[160px] rounded-full blur-[70px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Unified Transition Glow (between Timeline & Top Game Providers) */}
      <div
        className="absolute top-[52%] left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full blur-[130px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(233, 78, 27, 0.45) 0%, rgba(255, 140, 0, 0.15) 50%, transparent 75%)",
        }}
      />

      {/* Elegant swooshes & arcs flowing down across both sections */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 1800"
      >
        <defs>
          <linearGradient id="orangeArcGrad1" x1="0%" y1="20%" x2="100%" y2="40%">
            <stop offset="0%" stopColor="#E94E1B" stopOpacity="0.0" />
            <stop offset="35%" stopColor="#E94E1B" stopOpacity="0.55" />
            <stop offset="65%" stopColor="#FF7733" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E94E1B" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="orangeArcGrad2" x1="0%" y1="30%" x2="90%" y2="60%">
            <stop offset="0%" stopColor="#FF5500" stopOpacity="0.0" />
            <stop offset="25%" stopColor="#FF5500" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#FFA040" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF5500" stopOpacity="0.0" />
          </linearGradient>
          <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer glowing curved swoosh */}
        <path
          d="M -100 480 Q 250 180 820 220"
          stroke="url(#orangeArcGrad1)"
          strokeWidth="38"
          fill="none"
          opacity="0.35"
          filter="url(#arcGlow)"
        />

        {/* Thin crisp accent curve */}
        <path
          d="M -50 420 Q 300 160 880 230"
          stroke="url(#orangeArcGrad1)"
          strokeWidth="2"
          fill="none"
          opacity="0.75"
        />

        {/* Secondary lower accent curve flowing towards middle */}
        <path
          d="M -80 540 Q 280 340 840 460"
          stroke="url(#orangeArcGrad2)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.45"
        />
      </svg>

      {/* Continuous Particle Constellation Mesh spanning across Timeline & Top Game Providers */}
      <div
        className="absolute top-[40%] bottom-[15%] left-0 right-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(233, 78, 27, 0.35) 0%, transparent 80%), radial-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
    </div>
  );
}
