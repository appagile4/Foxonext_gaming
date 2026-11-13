"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

interface UsecaseItem {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
}

const USECASES: UsecaseItem[] = [
  {
    id: "work-desktop",
    title: "1. Remote Work Desktop",
    description:
      "Windows VPS on RDP provides you with a consistent remote workspace, which will never go offline. You can access any device and store all your files and applications in a safe place.",
    imageAlt: "Remote Desktop Gaming Hardware & Cloud Workspace",
  },
  {
    id: "browser-automation",
    title: "2. Web Tasks and Browser Automation",
    description:
      "You can access any device and store all your files and applications in a safe place. Windows VPS on RDP provides you with a consistent remote workspace, which will never go offline.",
    imageAlt: "Web Tasks and Browser Automation 3D Gear",
  },
  {
    id: "financial-tools",
    title: "3. Financial Tools and Trading Platforms",
    description:
      "Windows VPS on RDP provides you with a consistent remote workspace, which will never go offline. You can access any device and store all your files and applications in a safe place.",
    imageAlt: "Financial Tools and Trading Platforms 3D Composite",
  },
  {
    id: "light-hosting",
    title: "4. Light Application Hosting",
    description:
      "You can access any device and store all your files and applications in a safe place. Windows VPS on RDP provides you with a consistent remote workspace, which will never go offline.",
    imageAlt: "Light Application Hosting 3D Monitor and Server Blades",
  },
];

export function RemoteDesktopUsecases() {
  const [activeId, setActiveId] = useState<string>("work-desktop");

  const toggleAccordion = (id: string) => {
    setActiveId(id);
  };

  return (
    <section className="relative w-full py-18 sm:py-24 lg:py-28 bg-transparent select-none z-10 overflow-hidden">
      <div className="relative z-10 w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto space-y-6 sm:space-y-8">
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
              className="font-red-rose text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-tight sm:whitespace-nowrap"
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

        {/* 2-Column Grid: Left Accordion & Right Dynamic 3D Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Interactive Accordion */}
          <div className="lg:col-span-6 space-y-1 sm:space-y-1.5">
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
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
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

                  {/* Expanded Content with Smooth Animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-48 pb-6 opacity-100"
                        : "max-h-0 pb-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p
                      className="font-poppins text-xs sm:text-sm md:text-[15px] text-zinc-300 font-normal leading-relaxed pr-6"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Dynamic 3D Illustration matching Active Accordion Item */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end relative min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] self-center -translate-y-16 sm:-translate-y-20 lg:-translate-y-28 xl:-translate-y-32">
            {/* 1. Remote Work Desktop: Peach Arcade Joystick + PS5 Controller */}
            {activeId === "work-desktop" && (
              <div className="relative w-full max-w-[600px] sm:max-w-[700px] lg:max-w-[760px] aspect-square flex items-center justify-center animate-fadeIn">
                <div className="relative w-[420px] sm:w-[520px] lg:w-[580px] aspect-square  overflow-hidden flex items-center justify-center  ml-auto mr-2 sm:mr-4">
                  <Image
                    src="/images/remote-desktop/usecase-joystick.png"
                    alt="Remote Desktop Arcade Joystick Hardware"
                    width={500}
                    height={400}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                    priority
                  />
                </div>

                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-left-6 w-[320px] sm:w-[400px] lg:w-[460px] aspect-[390/280] z-20 animate-float">
                  <Image
                    src="/images/remote-desktop/usecase-controller.png"
                    alt="PS5 Gaming Controller Cloud Streaming"
                    width={390}
                    height={280}
                    className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                    priority
                  />
                </div>
              </div>
            )}
            {/* 2. Web Tasks and Browser Automation: 3D Gear */}
            {activeId === "browser-automation" && (
              <div className="relative w-full max-w-[520px] sm:max-w-[600px] lg:max-w-[660px] aspect-square flex items-center justify-center animate-fadeIn">
                <div className="relative w-[380px] sm:w-[480px] lg:w-[560px] xl:w-[620px] aspect-square flex items-center justify-center animate-float">
                  <Image
                    src="/images/remote-desktop/usecase-gear.png"
                    alt="Web Tasks and Browser Automation 3D Gear"
                    width={740}
                    height={740}
                    className="w-full h-full object-contain filter drop-shadow-[0_30px_70px_rgba(255,87,34,0.4)]"
                    priority
                  />
                </div>
              </div>
            )}
            {/* 3. Financial Tools and Trading Platforms: 3D Phone + Candlestick + Coins + Card */}
            {activeId === "financial-tools" && (
              <div className="relative w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[680px] aspect-square flex items-center justify-center animate-fadeIn">
                <div className="relative w-[400px] sm:w-[500px] lg:w-[580px] xl:w-[640px] aspect-square flex items-center justify-center animate-float">
                  <Image
                    src="/images/remote-desktop/usecase-trading.png"
                    alt="Financial Tools and Trading Platforms 3D Composite"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-contain filter drop-shadow-[0_30px_70px_rgba(255,165,0,0.35)]"
                    priority
                  />
                </div>
              </div>
            )}
            {/* 4. Light Application Hosting: 3D Desktop Monitor with Server Blades */}
            {activeId === "light-hosting" && (
              <div className="relative w-full max-w-[520px] sm:max-w-[600px] lg:max-w-[660px] aspect-square flex items-center justify-center animate-fadeIn">
                <div className="relative w-[380px] sm:w-[480px] lg:w-[560px] xl:w-[620px] aspect-square flex items-center justify-center animate-float">
                  <Image
                    src="/images/remote-desktop/usecase-monitor.png"
                    alt="Light Application Hosting 3D Monitor with Server Blades"
                    width={450}
                    height={450}
                    className="w-full h-full object-contain filter drop-shadow-[0_30px_70px_rgba(0,180,255,0.35)]"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
