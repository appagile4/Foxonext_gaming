"use client";

import React from "react";
import Image from "next/image";

interface DeviceShowcaseProps {
  iphoneImage?: string;
  dashboardImage?: string;
  compositeImage?: string;
  useComposite?: boolean;
}

export function DeviceShowcase({
  iphoneImage = "/images/iphone-rounded.png",
  dashboardImage = "/images/dashboard-screen.png",
  compositeImage = "/images/hero-composite.png",
  useComposite = true,
}: DeviceShowcaseProps) {
  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end select-none">
      {/* Ambient background glows specifically around the showcase */}
      <div
        className="absolute -top-10 right-0 w-[420px] h-[340px] rounded-full blur-[90px] opacity-40 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(147, 51, 234, 0.25) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute bottom-4 left-4 w-[280px] h-[220px] rounded-full blur-[80px] opacity-35 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 78, 27, 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Primary Showcase View: High fidelity composite */}
      {useComposite ? (
        <div className="relative group max-w-[560px] lg:max-w-[620px] w-full transition-transform duration-500 hover:scale-[1.01]">
          {/* Subtle reflection overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/[0.08]">
            <Image
              src={compositeImage}
              alt="Foxonext iGaming Platform on Mobile and Desktop"
              width={620}
              height={440}
              className="w-full h-auto object-contain"
              priority
            />
            {/* Glossy gradient sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />
          </div>
        </div>
      ) : (
        /* Layered Mockup View (Individual iPhone + Dashboard) */
        <div className="relative w-full max-w-[640px] h-[380px] sm:h-[420px]">
          {/* Desktop Dashboard Screen (Behind) */}
          <div className="absolute right-0 top-2 w-[75%] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm group transition-transform duration-300 hover:-translate-y-1">
            <Image
              src={dashboardImage}
              alt="iGaming Desktop Tournament Dashboard"
              width={520}
              height={340}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* iPhone Mockup (In Front, Left-Aligned) */}
          <div className="absolute left-[5%] top-6 w-[34%] z-20 group transition-transform duration-300 hover:-translate-y-2">
            <div className="relative rounded-[28px] p-1.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/15">
              {/* Dynamic Island Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-full z-30" />
              <div className="rounded-[22px] overflow-hidden">
                <Image
                  src={iphoneImage}
                  alt="Foxonext Casino Mobile App on iPhone"
                  width={200}
                  height={420}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
