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
    href: "#game-aggregator",
  },
  {
    title: "CRM - Data Analytics",
    imageSrc: "/images/products/crm-analytics.png?v=real-3d-v2",
    imageAlt: "CRM Data Analytics 3D Glass Dashboard & Charts",
    description:
      "Whether you're interested in rapidly launching a brand through our White Label solutions, seeking complete control with a customizable Turnkey package.",
    href: "#crm-analytics",
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
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.title}
              className="group relative rounded-2xl sm:rounded-3xl bg-[#0c0d12] border border-white/[0.08] hover:border-[#FF5722]/50 shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(255,87,34,0.25)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] lg:min-h-[490px]"
            >
              {/* Card Top Title */}
              <div className="p-6 sm:p-7 lg:p-8 z-10">
                <h3
                  className="font-poppins text-xl sm:text-2xl font-bold text-white tracking-tight"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {product.title}
                </h3>
              </div>

              {/* Card 3D Illustration Graphic in Center */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 pt-10 pb-24 pointer-events-none">
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

              {/* Bottom Frosted Glass Container with Description in Poppins font and Orange Arrow Action Button */}
              <div className="relative z-10 p-5 sm:p-6 lg:p-7 bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-[2px] flex items-end justify-between gap-4">
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

                <a
                  href={product.href}
                  aria-label={`View details about ${product.title}`}
                  className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF5722] hover:bg-[#ff6e3d] text-white flex items-center justify-center shadow-[0_0_18px_rgba(255,87,34,0.45)] group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(255,87,34,0.6)] transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
