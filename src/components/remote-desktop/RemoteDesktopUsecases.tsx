"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

interface UsecaseItem {
  id: string;
  title: string;
  description: string;
}

const USECASES: UsecaseItem[] = [
  {
    id: "work-desktop",
    title: "1. Remote Work Desktop",
    description:
      "Windows VPS on RDP provides you with a consistent remote workspace, which will never go offline. You can access any device and store all your files and applications in a safe place.",
  },
  {
    id: "browser-automation",
    title: "2. Web Tasks and Browser Automation",
    description:
      "Run heavy web automation, multi-account management, anti-detect browser profiles, and continuous scraping workloads seamlessly with dedicated low-latency IP addresses.",
  },
  {
    id: "financial-tools",
    title: "3. Financial Tools and Trading Platforms",
    description:
      "Deploy MetaTrader 4/5, automated algorithmic trading bots, and high-frequency execution scripts with 99.99% uptime and zero jitter across top global exchanges.",
  },
  {
    id: "light-hosting",
    title: "4. Light Application Hosting",
    description:
      "Host development sandbox environments, staging APIs, lightweight databases, and background services without the overhead of heavy dedicated cloud instances.",
  },
];

export function RemoteDesktopUsecases() {
  const [activeId, setActiveId] = useState<string>("work-desktop");

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="relative w-full py-18 sm:py-24 lg:py-28 bg-transparent select-none z-10 overflow-hidden">
      <div className="relative z-10 w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Header with Orange Brush Mark Accent */}
        <div className="relative inline-flex items-center">
          <div className="absolute -left-3 sm:-left-4 -top-3 w-32 sm:w-40 h-14 -z-0 opacity-95 pointer-events-none">
            <Image
              src="/images/why-choose-us-mark.png"
              alt="Accent Mark"
              width={140}
              height={70}
              className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(255,87,34,0.7)]"
            />
          </div>

          <div className="relative z-10 flex items-center gap-3.5">
            <h2
              className="font-red-rose text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold text-white tracking-tight leading-tight"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              Remote Desktop Usecases
            </h2>

            {/* 2x2 Geometric Indicator Icons (▫ ★ / ▫ ▫) */}
            <div className="hidden sm:grid grid-cols-2 gap-1 text-[#FF5722] opacity-80 pl-1">
              <span className="w-2.5 h-2.5 border border-current rounded-[1px]" />
              <span className="text-[11px] leading-none flex items-center justify-center">
                ★
              </span>
              <span className="w-2.5 h-2.5 border border-current rounded-[1px]" />
              <span className="w-2.5 h-2.5 border border-current rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Left Accordion & Right 3D Gaming Hardware Composite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-2">
            {USECASES.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-white/10 transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span
                      className="font-poppins text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-[#FF5722] transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {item.title}
                    </span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors duration-200 ml-4 flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </span>
                  </button>

                  {/* Expanded Content with Smooth Collapse Animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p
                      className="font-poppins text-xs sm:text-sm md:text-[15px] text-zinc-300 font-normal leading-relaxed pr-6"
                      style={{
                        fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: 3D Hardware Composite (Peach Arcade Joystick + PS5 Controller) */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-square flex items-center justify-center">
              {/* Peach Arcade Joystick Card in Background */}
              <div className="relative w-[300px] sm:w-[350px] aspect-square rounded-[32px] overflow-hidden flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.6)] ml-auto mr-4">
                <Image
                  src="/images/remote-desktop/usecase-joystick.png"
                  alt="Remote Desktop Arcade Joystick Hardware"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                />
              </div>

              {/* PS5 Wireless Controller in Foreground (overlapping left/bottom) */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-6 w-[220px] sm:w-[260px] md:w-[280px] aspect-[390/280] z-20 animate-float">
                <Image
                  src="/images/remote-desktop/usecase-controller.png"
                  alt="PS5 Gaming Controller Cloud Streaming"
                  width={390}
                  height={280}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
