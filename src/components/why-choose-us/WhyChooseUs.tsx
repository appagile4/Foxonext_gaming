"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Rocket } from "lucide-react";

/**
 * AnimatedCounter component:
 * Smoothly counts from 0 to the target number when visible in the viewport using requestAnimationFrame
 * with an easeOutCubic curve.
 */
function AnimatedCounter({
  target,
  suffix = "+",
  duration = 2200,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth easeOutCubic easing curve
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeProgress * target);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden select-none z-10">
      {/* Faceted Geometric Background (user-provided ae6cb7712121e7db827caec067b955d83c4c9b7d.jpg) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/images/why-choose-us-bg.jpg"
          alt="Why Choose Us Faceted Geometric Background"
          fill
          priority
          className="object-cover object-center brightness-[0.22] contrast-[1.35] opacity-70"
        />

        {/* Deep ambient dark gradient overlays to seamlessly match site theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080c] via-black/35 to-[#07080c]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,87,34,0.06)_0%,rgba(7,8,12,0.85)_75%)]" />
      </div>

      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Top Section: Left Intro & Right 5-Card Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column: Heading, Description & Cyber Know More Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 sm:space-y-8">
            {/* Title with Orange Splash Mark and Rocket Icon */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/why-choose-us-mark.png"
                  alt="Accent Mark"
                  width={64}
                  height={60}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(255,87,34,0.65)]"
                />
              </div>

              <h2
                className="font-red-rose text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-bold text-white tracking-tight leading-[1.1] flex items-center gap-3 sm:gap-3.5"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                <span>Why Choose Us ?</span>
                <Rocket
                  className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-300 inline-block -rotate-12 flex-shrink-0"
                  strokeWidth={1.8}
                />
              </h2>
            </div>

            {/* Paragraph Description with Larger Text Size */}
            <p
              className="font-poppins text-sm sm:text-base lg:text-[17px] xl:text-[18px] text-zinc-300 font-normal leading-[1.72] max-w-lg xl:max-w-xl"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Whether you&apos;re interested in rapidly launching a brand through
              our White Label solutions, seeking complete control with a
              customizable Turnkey package, acquiring leading software through
              Software.
            </p>

            {/* Know More with Bottom-Right L-Frame Border (No hover state) */}
            <div className="pt-2">
              <a
                href="#know-more"
                className="relative inline-flex items-center px-7 py-3 sm:px-8 sm:py-3.5 font-poppins text-sm sm:text-base font-semibold text-white cursor-pointer"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                }}
              >
                {/* L-shaped corner accent lines - static, no hover changes */}
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/45" />
                <span className="absolute bottom-0 right-0 top-1 w-[1.5px] bg-white/45" />

                <span>Know More</span>
              </a>
            </div>
          </div>

          {/* Right Column: 5 Feature Cards Grid (2x2 + 1 Tall Card - No hover effects) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {/* Card 1: Quick Launch */}
              <div className="relative rounded-xl p-6 sm:p-7 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.55)] flex flex-col justify-between min-h-[155px] sm:min-h-[165px]">
                {/* Top-Right: Fast Cube Speed Lines Icon */}
                <div className="flex justify-end">
                  <svg
                    className="w-11 h-11 sm:w-12 sm:h-12 text-white"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Speed motion lines */}
                    <line x1="4" y1="18" x2="14" y2="18" />
                    <line x1="2" y1="24" x2="12" y2="24" />
                    <line x1="4" y1="30" x2="14" y2="30" />
                    {/* Rounded Cube Hexagon */}
                    <path d="M30 6 L42 13 L42 27 L30 34 L18 27 L18 13 Z" />
                    {/* Internal Y Vertices */}
                    <path d="M30 20 L30 34" />
                    <path d="M30 20 L18 13" />
                    <path d="M30 20 L42 13" />
                  </svg>
                </div>

                {/* Bottom-Left: Label with Larger Font Size */}
                <div
                  className="font-poppins text-base sm:text-lg lg:text-[20px] xl:text-[22px] font-bold leading-tight pt-2"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  <span className="text-white">Quick</span>
                  <br />
                  <span className="text-[#FF5722]">Launch</span>
                </div>
              </div>

              {/* Card 2: Scalable By Design */}
              <div className="relative rounded-xl p-6 sm:p-7 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.55)] flex flex-col justify-between min-h-[155px] sm:min-h-[165px]">
                {/* Top-Right: Scalable Network Node Icon */}
                <div className="flex justify-end">
                  <svg
                    className="w-11 h-11 sm:w-12 sm:h-12 text-white"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Central vertical stem */}
                    <line x1="22" y1="10" x2="22" y2="38" />
                    <circle cx="22" cy="10" r="2.2" fill="currentColor" />
                    <circle cx="22" cy="38" r="2.2" fill="currentColor" />
                    {/* Diagonal spoke 1 */}
                    <line x1="10" y1="16" x2="34" y2="32" />
                    <circle cx="10" cy="16" r="2.2" fill="currentColor" />
                    <circle cx="34" cy="32" r="2.2" fill="currentColor" />
                    {/* Diagonal spoke 2 */}
                    <line x1="10" y1="32" x2="34" y2="16" />
                    <circle cx="10" cy="32" r="2.2" fill="currentColor" />
                    {/* Center node */}
                    <circle cx="22" cy="24" r="2.8" fill="currentColor" />
                    {/* Orbiting arc on right */}
                    <path d="M33 11 A 14 14 0 0 1 35 37" />
                    <circle cx="35" cy="37" r="2.2" fill="currentColor" />
                  </svg>
                </div>

                {/* Bottom-Left: Label with Larger Font Size */}
                <div
                  className="font-poppins text-base sm:text-lg lg:text-[20px] xl:text-[22px] font-bold leading-tight pt-2"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  <span className="text-[#FF5722]">Scalable</span>
                  <br />
                  <span className="text-white">By Design</span>
                </div>
              </div>

              {/* Card 5 (Tall Card on the Right): 100% Bespoke Development */}
              <div className="relative rounded-xl p-7 sm:p-8 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.55)] flex flex-col justify-between sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1 min-h-[260px] lg:min-h-[350px]">
                {/* Large Code Brackets </ > */}
                <div className="pt-2 flex items-center justify-center lg:justify-start">
                  <svg
                    className="w-20 h-20 sm:w-24 sm:h-24 text-white"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Left bracket < */}
                    <polyline points="20 20 8 32 20 44" />
                    {/* Center slash / */}
                    <line x1="36" y1="16" x2="28" y2="48" />
                    {/* Right bracket > */}
                    <polyline points="44 20 56 32 44 44" />
                  </svg>
                </div>

                {/* Bottom Label: 100% Bespoke Development with Larger Sizes */}
                <div
                  className="space-y-1 pt-6"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  <div className="font-poppins text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-none pb-1">
                    100%
                  </div>
                  <div className="font-poppins text-xl sm:text-2xl lg:text-[26px] font-bold text-[#FF5722] leading-tight">
                    Bespoke
                  </div>
                  <div className="font-poppins text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-tight">
                    Development
                  </div>
                </div>
              </div>

              {/* Card 3: Flexible Launch */}
              <div className="relative rounded-xl p-6 sm:p-7 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.55)] flex flex-col justify-between min-h-[155px] sm:min-h-[165px] lg:col-start-1 lg:row-start-2">
                {/* Top-Right: 4-Way Swivel Arrows Icon */}
                <div className="flex justify-end">
                  <svg
                    className="w-11 h-11 sm:w-12 sm:h-12 text-white"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Center ring */}
                    <circle cx="24" cy="24" r="7.5" />
                    {/* Arrow 1: UP on right */}
                    <path d="M31.5 24 L31.5 9" />
                    <polyline points="27 13.5 31.5 9 36 13.5" />
                    {/* Arrow 2: LEFT on top */}
                    <path d="M24 16.5 L9 16.5" />
                    <polyline points="13.5 12 9 16.5 13.5 21" />
                    {/* Arrow 3: DOWN on left */}
                    <path d="M16.5 24 L16.5 39" />
                    <polyline points="12 34.5 16.5 39 21 34.5" />
                    {/* Arrow 4: RIGHT on bottom */}
                    <path d="M24 31.5 L39 31.5" />
                    <polyline points="34.5 27 39 31.5 34.5 36" />
                  </svg>
                </div>

                {/* Bottom-Left: Label with Larger Font Size */}
                <div
                  className="font-poppins text-base sm:text-lg lg:text-[20px] xl:text-[22px] font-bold leading-tight pt-2"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  <span className="text-[#FF5722]">Flexible</span>
                  <br />
                  <span className="text-white">Launch</span>
                </div>
              </div>

              {/* Card 4: All-In-One Platform */}
              <div className="relative rounded-xl p-6 sm:p-7 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.55)] flex flex-col justify-between min-h-[155px] sm:min-h-[165px] lg:col-start-2 lg:row-start-2">
                {/* Top-Right: Isometric Stacked Layers Icon */}
                <div className="flex justify-end">
                  <svg
                    className="w-11 h-11 sm:w-12 sm:h-12 text-white"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Top layer */}
                    <path d="M24 8 L39 16 L24 24 L9 16 Z" />
                    {/* Middle layer */}
                    <path d="M9 22 L24 30 L39 22" />
                    {/* Bottom layer */}
                    <path d="M9 28 L24 36 L39 28" />
                  </svg>
                </div>

                {/* Bottom-Left: Label with Larger Font Size */}
                <div
                  className="font-poppins text-base sm:text-lg lg:text-[20px] xl:text-[22px] font-bold leading-tight pt-2"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  <span className="text-white">All-In-One</span>
                  <br />
                  <span className="text-[#FF5722]">Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: 4 Distinct Statistics Cards with Animated Counting (No hover) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2 sm:pt-4">
          {/* Stat 1: 3000+ Games */}
          <div className="relative rounded-xl p-6 sm:p-7 lg:p-8 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.55)] flex flex-col justify-center space-y-2">
            <div
              className="font-red-rose text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-[#FF5722] tracking-tight leading-none"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              <AnimatedCounter target={3000} suffix="+" duration={2200} />
            </div>
            <div
              className="font-poppins text-sm sm:text-base lg:text-[17px] font-medium text-zinc-200 tracking-wide"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Games
            </div>
          </div>

          {/* Stat 2: 140+ Game Providers */}
          <div className="relative rounded-xl p-6 sm:p-7 lg:p-8 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.55)] flex flex-col justify-center space-y-2">
            <div
              className="font-red-rose text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-[#FF5722] tracking-tight leading-none"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              <AnimatedCounter target={140} suffix="+" duration={1800} />
            </div>
            <div
              className="font-poppins text-sm sm:text-base lg:text-[17px] font-medium text-zinc-200 tracking-wide"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Game Providers
            </div>
          </div>

          {/* Stat 3: 32+ Years of Exp. */}
          <div className="relative rounded-xl p-6 sm:p-7 lg:p-8 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.55)] flex flex-col justify-center space-y-2">
            <div
              className="font-red-rose text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-[#FF5722] tracking-tight leading-none"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              <AnimatedCounter target={32} suffix="+" duration={1500} />
            </div>
            <div
              className="font-poppins text-sm sm:text-base lg:text-[17px] font-medium text-zinc-200 tracking-wide"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Years of Exp.
            </div>
          </div>

          {/* Stat 4: 32+ Years of Exp. */}
          <div className="relative rounded-xl p-6 sm:p-7 lg:p-8 bg-[#120a06]/55 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.55)] flex flex-col justify-center space-y-2">
            <div
              className="font-red-rose text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-[#FF5722] tracking-tight leading-none"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              <AnimatedCounter target={32} suffix="+" duration={1500} />
            </div>
            <div
              className="font-poppins text-sm sm:text-base lg:text-[17px] font-medium text-zinc-200 tracking-wide"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Years of Exp.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
