"use client";

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  href?: string;
}

const PRODUCTS_DATA: ProductCardProps[] = [
  {
    title: "Game Aggregator",
    imageSrc: "/images/products/game-aggregator.png?v=real-3d-v2",
    imageAlt: "Game Aggregator 3D Floating Modular Cubes",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    href: "/game-aggregator",
  },
  {
    title: "CRM - Data Analytics",
    imageSrc: "/images/products/crm-analytics.png?v=real-3d-v2",
    imageAlt: "CRM Data Analytics 3D Glass Dashboard & Charts",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    href: "/crm-data-analysis",
  },
];

export function IGamingProducts() {
  return (
    <section className="relative w-[92%] sm:w-[85%] lg:w-[75%] mx-auto pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 select-none z-10">
      <div className="w-full space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Section Header: Title on Left, Description & Know More on Right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
          {/* Left: Bold 2-Line Headline in Red Rose font */}
          <div className="max-w-xl">
            <h2
              className="font-red-rose text-3xl sm:text-5xl lg:text-[84px] font-[400] text-white tracking-tight leading-[1.08]"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              Our iGaming
              <br />
              Products
            </h2>
          </div>

          {/* Right: Paragraph + Know More Bordered Button in Poppins font */}
          <div className="flex flex-col items-start space-y-5 sm:space-y-6 max-w-lg lg:max-w-xl">
            <p
              className="font-poppins text-sm sm:text-base lg:text-[18px] text-zinc-300/90 font-normal leading-[1.65]"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Whether you&apos;re interested in rapidly launching a brand
              through our White Label solutions, seeking complete control with a
              customizable Turnkey package.
            </p>

            <a
              href="#products"
              className="font-poppins inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 border border-white/25 hover:border-[#FF5722] text-sm sm:text-[15px] font-medium text-white tracking-wide transition-all duration-300 hover:bg-white/[0.05]"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              Know More
            </a>
          </div>
        </div>

        {/* 2 Big Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          <style>{`
            .card-hover-blur-overlay {
              clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%);
              opacity: 0;
              pointer-events: none;
              transition: clip-path 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out;
            }
            .group:hover .card-hover-blur-overlay {
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              opacity: 1;
              pointer-events: auto;
            }
          `}</style>

          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.title}
              className="group relative rounded-2xl sm:rounded-3xl bg-[#0c0d12] border border-white/[0.08] hover:border-[#FF5722]/50 shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(255,87,34,0.25)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[460px] sm:min-h-[500px] lg:min-h-[520px]"
            >
              {/* Card Top Title in Red Rose font (Permanently visible on z-30, not covered by blur) */}
              <div className="p-6 sm:p-7 lg:p-8 z-30 pointer-events-none">
                <h3
                  className="font-red-rose text-2xl sm:text-3xl font-bold text-white tracking-tight"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  {product.title}
                </h3>
              </div>

              {/* Card 3D Illustration Graphic in Center */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 pt-10 pb-24 pointer-events-none z-0">
                <div className="relative w-full h-full max-h-[380px] flex items-center justify-center">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={1024}
                    height={1024}
                    unoptimized
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>

              {/* Default Unhovered Bottom Container: Description in Poppins font and Orange Arrow Action Button */}
              <div className="relative z-10 p-5 sm:p-6 lg:p-7 bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-[2px] flex items-end justify-between gap-4 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                <p
                  className="font-poppins text-[11px] sm:text-xs text-zinc-300 font-normal leading-relaxed max-w-[82%] sm:max-w-[85%]"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our{" "}
                  <span className="text-zinc-100 font-medium">White Label</span>{" "}
                  solutions, seeking complete control with a customizable{" "}
                  <span className="text-zinc-100 font-medium">Turnkey</span>{" "}
                  package.
                </p>

                <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF5722] text-white flex items-center justify-center shadow-[0_0_18px_rgba(255,87,34,0.45)] transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>

              {/* Animated Square Blur Hover Overlay: Smoothly expands from bottom-right corner up, covering the card below title */}
              <div className="card-hover-blur-overlay absolute top-[76px] sm:top-[88px] inset-x-0 bottom-0 z-20 backdrop-blur-xl bg-[#090a0f]/85 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                {/* Description in Poppins font */}
                <p
                  className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  Whether you&apos;re interested in rapidly launching a brand
                  through our White Label solutions, seeking complete control
                  with a customizable Turnkey package.
                </p>

                {/* 4 Feature Bullet Points in 2x2 Grid with Orange Diamond Icon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-y-4 sm:gap-x-6 my-auto py-3">
                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M6 1.5 L10.5 6 L6 10.5 L1.5 6 Z" />
                    </svg>
                    <span
                      className="font-poppins text-[11px] sm:text-xs text-zinc-200"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      Extensive collection of top-tier content
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M6 1.5 L10.5 6 L6 10.5 L1.5 6 Z" />
                    </svg>
                    <span
                      className="font-poppins text-[11px] sm:text-xs text-zinc-200"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      Compatibility across all devices
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M6 1.5 L10.5 6 L6 10.5 L1.5 6 Z" />
                    </svg>
                    <span
                      className="font-poppins text-[11px] sm:text-xs text-zinc-200"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      Bonus Management Engine
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M6 1.5 L10.5 6 L6 10.5 L1.5 6 Z" />
                    </svg>
                    <span
                      className="font-poppins text-[11px] sm:text-xs text-zinc-200"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      Multi-currency Wallet Support
                    </span>
                  </div>
                </div>

                {/* 2 Action Buttons Side-by-Side: Get Quote & Know More */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="#quote"
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-[#FF5722] hover:bg-[#ff6e3d] text-white text-xs sm:text-sm font-medium shadow-[0_4px_16px_rgba(255,87,34,0.35)] hover:shadow-[0_4px_22px_rgba(255,87,34,0.55)] transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Get Quote
                  </a>

                  <a
                    href={product.href}
                    className="font-poppins inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-black/95 hover:bg-zinc-900 text-white border border-white/60 hover:border-white text-xs sm:text-sm font-medium transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
