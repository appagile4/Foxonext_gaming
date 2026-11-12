"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageOnLeft?: boolean;
}

const CRM_ADVANTAGES: AdvantageItem[] = [
  {
    id: "realtime-intelligence",
    title: "Real-Time Player Intelligence",
    description:
      "Gain unprecedented clarity into player engagement. Monitor deposits, live wagers, GGR velocity, and session duration in real time with intuitive cohort visualization tools.",
    bullets: [
      "Microsecond event telemetry across all game providers",
      "Automated RFM player tier categorization",
      "Customizable real-time executive & ops dashboards",
      "Historical trend modeling and instant CSV/API exports",
    ],
    image: "/images/products/crm-analytics.png",
    imageAlt: "FOXONEXT Real-Time CRM Analytics & 3D Dashboard",
    imageOnLeft: false,
  },
  {
    id: "campaign-orchestration",
    title: "Autonomous Campaign Orchestration",
    description:
      "Transform passive players into devoted brand advocates. Build multi-step automated journeys that deliver tailored bonus offers, tournament invitations, and VIP rewards without manual oversight.",
    bullets: [
      "Drag-and-drop visual player journey workflow builder",
      "Event-driven dynamic bonus and cashback triggers",
      "Tiered VIP loyalty ladders with gamified milestone rewards",
      "Cross-provider tournament & leaderboard sync",
    ],
    image: "/images/aggregator/advantage-tournament.png",
    imageAlt: "Autonomous Player Retention & Tournament Tool",
    imageOnLeft: true,
  },
  {
    id: "omnichannel-messaging",
    title: "Omnichannel Smart Messaging",
    description:
      "Reach players on their terms across web, mobile, and native messaging channels. Synchronize push notifications, SMS alerts, and in-game banners for maximum conversion.",
    bullets: [
      "High-deliverability WebPush & native mobile notifications",
      "Smart timing optimization driven by player active hours",
      "Dynamic personalization tokens for tailored offers",
      "A/B test campaign messaging and conversion tracking",
    ],
    image: "/images/aggregator/advantage-content.png",
    imageAlt: "Omnichannel Messaging & Communication Hub",
    imageOnLeft: false,
  },
  {
    id: "predictive-risk",
    title: "Predictive AI & Fraud Shield",
    description:
      "Protect bottom-line profits with cutting-edge risk mitigation. Our predictive algorithms forecast player churn and identify arbitrage, bonus abuse, and multi-accounting before payouts are made.",
    bullets: [
      "Preemptive churn risk scoring & automated retention flows",
      "Continuous multi-accounting & syndicate bet detection",
      "Automated risk flagging and withdrawal verification holds",
      "Enterprise ISO 27001 & GDPR data compliance",
    ],
    image: "/images/aggregator/advantage-api.png",
    imageAlt: "Predictive AI Analytics & Risk Mitigation Platform",
    imageOnLeft: true,
  },
];

export function CrmAdvantages() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#07080c] select-none z-10">
      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
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
              FOXOnext CRM Advantages
            </h2>
            <Sparkles className="w-6 h-6 text-[#FF5722] opacity-80 hidden sm:block" />
          </div>
        </div>

        {/* Advantages Stack (Alternating Layouts) */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {CRM_ADVANTAGES.map((adv) => (
            <div
              key={adv.id}
              className="relative rounded-2xl sm:rounded-3xl bg-[#0e1017]/90 border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden"
            >
              {/* Outer Glow Decor */}
              <div
                className={`absolute -top-32 ${
                  adv.imageOnLeft ? "-left-32" : "-right-32"
                } w-96 h-96 bg-[#FF5722]/10 rounded-full blur-[100px] pointer-events-none`}
              />

              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  adv.imageOnLeft ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content Column */}
                <div
                  className={`space-y-6 sm:space-y-8 ${
                    adv.imageOnLeft
                      ? "lg:col-span-6 lg:order-2"
                      : "lg:col-span-6 lg:order-1"
                  }`}
                >
                  {/* Title with left orange border indicator */}
                  <div className="border-l-4 border-[#FF5722] pl-4 sm:pl-5">
                    <h3
                      className="font-red-rose text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight"
                      style={{
                        fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                      }}
                    >
                      {adv.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="font-poppins text-xs sm:text-sm lg:text-[15px] text-zinc-300 font-normal leading-relaxed"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {adv.description}
                  </p>

                  {/* Bullet Points with Diamond Icons */}
                  <ul className="space-y-3 sm:space-y-3.5">
                    {adv.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 font-poppins text-xs sm:text-sm text-zinc-200"
                        style={{
                          fontFamily:
                            "var(--font-poppins), 'Poppins', sans-serif",
                        }}
                      >
                        <span className="w-2 h-2 rotate-45 bg-[#FF5722] flex-shrink-0 shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button with Bidirectional Sweep */}
                  <div className="pt-2 sm:pt-4">
                    <Link
                      href="#contact"
                      className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded bg-[#E94E1B] text-white overflow-hidden shadow-[0_4px_16px_rgba(233,78,27,0.35)] hover:shadow-[0_8px_24px_rgba(233,78,27,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                      />
                      <span className="relative z-10 font-semibold text-xs sm:text-sm tracking-wide text-white group-hover:text-[#E94E1B] transition-colors duration-300">
                        Learn More
                      </span>
                    </Link>
                  </div>
                </div>

                {/* 3D Visual Graphic Column */}
                <div
                  className={`relative flex items-center justify-center ${
                    adv.imageOnLeft
                      ? "lg:col-span-6 lg:order-1"
                      : "lg:col-span-6 lg:order-2"
                  }`}
                >
                  <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
                    <Image
                      src={adv.image}
                      alt={adv.imageAlt}
                      width={520}
                      height={520}
                      className="w-full h-auto max-h-[420px] object-contain drop-shadow-[0_20px_45px_rgba(233,78,27,0.3)] hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
