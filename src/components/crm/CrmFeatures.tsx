"use client";

import React from "react";
import Image from "next/image";
import {
  LineChart,
  Users,
  Gift,
  BellRing,
  ShieldAlert,
  Cpu,
} from "lucide-react";

const CRM_FEATURES = [
  {
    id: "realtime-telemetry",
    title: "Real-Time Telemetry & Tracking",
    icon: LineChart,
    desc: "Ingest every bet, spin, deposit, and cash-out with sub-second latency. Get continuous visibility into active player sessions, GGR fluctuations, and high-roller activity across all devices.",
  },
  {
    id: "rfm-segmentation",
    title: "Dynamic RFM Segmentation",
    icon: Users,
    desc: "Automatically cluster players into high-precision cohorts based on Recency, Frequency, Monetary value, and preferred game volatility. Deliver the right incentive at the perfect moment.",
  },
  {
    id: "bonus-loyalty",
    title: "Automated Bonus & VIP Engine",
    icon: Gift,
    desc: "Deploy personalized reward drops, wager milestones, cashback tiers, and gamified loyalty quests with zero manual operational overhead. Boost repeat visits and retention curves effortlessly.",
  },
  {
    id: "omnichannel-messaging",
    title: "Omnichannel Player Engagement",
    icon: BellRing,
    desc: "Trigger high-converting push notifications, SMS campaigns, in-app banners, and transactional emails dynamically based on real-time on-site player milestones and inactivity triggers.",
  },
  {
    id: "fraud-risk",
    title: "AI Fraud & Bonus Abuse Shield",
    icon: ShieldAlert,
    desc: "Prevent multi-accounting, syndicate betting patterns, and promotional exploitation before withdrawals are processed. Machine learning heuristics safeguard your gaming operation around the clock.",
  },
  {
    id: "predictive-ltv",
    title: "Predictive Churn & LTV Modeling",
    icon: Cpu,
    desc: "Leverage advanced machine learning algorithms to identify churn probability early. Re-engage at-risk high-value players with preemptive VIP offers and customized retention flows.",
  },
];

export function CrmFeatures() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#07080c] select-none z-10">
      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Header with Orange Accent Brush Mark */}
        <div className="relative inline-block">
          <div className="absolute -left-3 -top-2 w-28 sm:w-36 h-12 -z-0 opacity-95 pointer-events-none">
            <Image
              src="/images/why-choose-us-mark.png"
              alt="Accent Mark"
              width={120}
              height={60}
              className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(255,87,34,0.65)]"
            />
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <h2
              className="font-red-rose text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold text-white tracking-tight leading-tight"
              style={{
                fontFamily: "var(--font-red-rose), 'Red Rose', serif",
              }}
            >
              FOXOnext CRM & Analytics Features
            </h2>
            <div className="text-[#FF5722] text-sm opacity-80 hidden sm:block">
              ⊞ ★
            </div>
          </div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CRM_FEATURES.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="relative rounded-2xl bg-[#0c0d12]/70 border border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-[#0c0d12] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
              >
                <div className="space-y-4">
                  {/* Top Row: Icon Badge + Title */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#E64A19] flex items-center justify-center text-white flex-shrink-0 shadow-[0_4px_16px_rgba(255,87,34,0.35)] group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3
                      className="font-red-rose text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#FF5722] transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="font-poppins text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
