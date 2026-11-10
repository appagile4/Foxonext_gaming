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

      {/* Top Left Orange Accent Curve (Replaces Circular Rings) */}
      <svg
        className="absolute top-0 left-0 w-[340px] sm:w-[460px] lg:w-[600px] xl:w-[720px] h-auto pointer-events-none select-none z-10 overflow-visible drop-shadow-[0_0_16px_rgba(255,87,34,0.65)]"
        viewBox="0 -60 360 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topLeftOrangeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5722" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF5722" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF7043" stopOpacity="0.9" />
          </linearGradient>
          <filter id="svgCurveGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Glow Stroke Behind */}
        <path
          d="M.36 176.652C96.146 173.438 270.681 101.759 354.574-58.955"
          stroke="#FF5722"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.45"
          filter="url(#svgCurveGlow)"
        />

        {/* Sharp Core Accent Curve */}
        <path
          d="M.36 176.652C96.146 173.438 270.681 101.759 354.574-58.955"
          stroke="url(#topLeftOrangeGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

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

      {/* Bottom Right Glowing Network Globe (Rotated 45 degrees to left / 315deg with bottom & right fade) */}
      <div
        className="absolute bottom-190 -right-50 w-[1250px] sm:w-[1650px] lg:w-[2100px] xl:w-[2600px] h-auto pointer-events-none select-none opacity-10"
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
          className="w-full h-auto object-contain filter drop-shadow-[0_0_40px_rgba(233,78,27,0.2)]"
          priority
        />
      </div>

      {/* Smooth bottom fade overlay to seamless #07080c */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(7, 8, 12, 0.7) 45%, #07080c 100%)",
        }}
      />

      {/* Smooth right side fade overlay to seamless #07080c */}
      <div
        className="absolute inset-y-0 right-0 w-36 sm:w-56 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(7, 8, 12, 0.7) 45%, #07080c 100%)",
        }}
      />
    </div>
  );
}
