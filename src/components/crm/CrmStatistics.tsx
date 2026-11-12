"use client";

import React from "react";

const CRM_STATS = [
  {
    value: "99.98%",
    line1: "Real-time telemetry",
    line2: "pipeline uptime",
  },
  {
    value: "10M+",
    line1: "Daily player events",
    line2: "ingested & processed",
  },
  {
    value: "38%",
    line1: "Average player LTV",
    line2: "& retention uplift",
  },
  {
    value: "150+",
    line1: "Pre-built analytical",
    line2: "dashboards & KPI reports",
  },
];

export function CrmStatistics() {
  return (
    <section className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#07080c] select-none z-10 overflow-hidden">
      <div className="w-full space-y-10 sm:space-y-12 lg:space-y-16">
        {/* Section Heading & Subtitle */}
        <div className="w-[92%] sm:w-[85%] lg:w-[75%] max-w-[1440px] mx-auto text-center space-y-4 sm:space-y-5">
          <h2
            className="font-red-rose text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
          >
            Real-Time Analytics & Smart CRM
          </h2>
          <p
            className="font-poppins text-sm sm:text-base md:text-lg lg:text-[19px] text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif" }}
          >
            Turn raw gameplay and transaction data into actionable revenue
            strategies. Our data platform helps casino operators understand
            player behaviors, trigger automated retention workflows, and
            maximize player lifetime value.
          </p>
        </div>

        {/* Futuristic Chamfered Stats Container */}
        <div className="w-[92%] sm:w-[85%] lg:w-[75%] max-w-[1440px] mx-auto">
          <div className="relative w-full mt-2 sm:mt-4">
            {/* Border layer with polygon clip-path */}
            <div
              className="p-[1px] bg-white/[0.09] shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
              }}
            >
              {/* Inner card content */}
              <div
                className="w-full bg-[#0a0c13]/90 backdrop-blur-md px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
                }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                  {CRM_STATS.map((stat, index) => (
                    <div
                      key={index}
                      className="space-y-2 text-left sm:text-left"
                    >
                      <div className="font-poppins text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#E94E1B] tracking-tight leading-none">
                        {stat.value}
                      </div>
                      <div className="font-poppins text-xs sm:text-sm text-zinc-300 font-normal leading-snug">
                        <p>{stat.line1}</p>
                        <p>{stat.line2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
