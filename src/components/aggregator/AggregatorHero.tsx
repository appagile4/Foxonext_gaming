"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export function AggregatorHero() {
  const milestones = ["Expertise", "Service", "Security", "Innovation"];

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-[900px] xl:min-h-[960px] flex flex-col justify-between overflow-hidden bg-[#07080c] select-none">
      {/* Dynamic warm diagonal gradient backdrop matching reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#200802] via-[#ab3203] to-[#e64a0c] pointer-events-none" />

      {/* Sweeping diagonal curved light highlights */}
      <div className="absolute -top-[30%] -left-[10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,145,77,0.35),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_35%,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />
      <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-[#07080c] to-transparent pointer-events-none" />

      {/* Scoped Top Navbar */}
      <div className="relative z-30">
        <Navbar logoSrc="/images/logo.png" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto pt-12 sm:pt-20 lg:pt-28 xl:pt-32 pb-18 sm:pb-22 lg:pb-28 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto">
          {/* Left Column: Heading, Description & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h1
              className="font-red-rose text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-bold text-white tracking-tight leading-[1.15]"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              Casino Game Aggregator
            </h1>

            <div
              className="font-poppins text-xs sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed space-y-4 max-w-xl"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              <p>
                Popular casino games come together in one Game Aggregator hub.
                With our game aggregation platform it is easy and simple to add
                this massive portfolio to any gaming website through just one
                API integration.
              </p>
              <p>
                The FOXONEXT Game Aggregator team assists at each step of
                integration and works together with the game content providers,
                to offer technical support after the games go live.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Link
                href="#contact"
                className="inline-block px-7 sm:px-8 py-3 sm:py-3.5 rounded bg-white text-[#d84315] font-poppins font-semibold text-sm sm:text-base tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:bg-zinc-100 hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                Get Casino Games
              </Link>
            </div>
          </div>

          {/* Right Column: Floating 3D Glossy White Dice */}
          <div className="lg:col-span-5 flex items-center justify-center xl:justify-end relative">
            <div className="relative w-[380px] sm:w-[500px] md:w-[580px] lg:w-[620px] xl:w-[720px] 2xl:w-[780px] aspect-[945/462] drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)] lg:-mr-6 xl:-mr-12">
              <Image
                src="/images/aggregator/hero-dice-rotated.png"
                alt="Casino Game Aggregator 3D Dice"
                fill
                className="object-contain animate-float"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Milestones Line: Expertise · Service · Security · Innovation */}
        <div className="relative w-full mt-18 sm:mt-24 lg:mt-32 pt-8 sm:pt-10 border-t border-white/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {milestones.map((item, idx) => (
              <div
                key={item}
                className="relative flex items-center justify-center gap-2.5 font-poppins text-xs sm:text-sm font-medium text-white/90"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {/* Milestone dot */}
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
