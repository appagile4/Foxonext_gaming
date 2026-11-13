"use client";

import React from "react";
import Image from "next/image";
import {
  Newspaper,
  Database,
  CalendarClock,
  PieChart,
  Mail,
} from "lucide-react";

interface AdvantageGridItem {
  id: string;
  title: string;
  description: string;
  borderColor: "orange" | "white";
  iconColor: "white" | "orange";
  iconType:
    | "template"
    | "database"
    | "calendar"
    | "piechart"
    | "userNodes"
    | "mail";
}

const ADVANTAGES_DATA: AdvantageGridItem[] = [
  {
    id: "template-builder",
    title: "Communication Template Builder",
    description:
      "Create and manage SMS, email, push and Telegram templates for multi-channel communication.",
    borderColor: "orange",
    iconColor: "white",
    iconType: "template",
  },
  {
    id: "custom-data-views",
    title: "Custom Data Views",
    description:
      "Create and manage SMS, email, push and Telegram templates for multi-channel communication.",
    borderColor: "white",
    iconColor: "orange",
    iconType: "database",
  },
  {
    id: "marketing-calendar",
    title: "Marketing Calendar",
    description:
      "Create and manage SMS, email, push and Telegram templates for multi-channel communication.",
    borderColor: "orange",
    iconColor: "white",
    iconType: "calendar",
  },
  {
    id: "advanced-analytics",
    title: "Advanced Analytics and Dashboards",
    description:
      "Create and manage SMS, email, push and Telegram templates for multi-channel communication.",
    borderColor: "white",
    iconColor: "orange",
    iconType: "piechart",
  },
  {
    id: "user-role-builder",
    title: "User Role Builder",
    description:
      "Create and manage SMS, email, push and Telegram templates for multi-channel communication.",
    borderColor: "orange",
    iconColor: "white",
    iconType: "userNodes",
  },
  {
    id: "spam-email-blacklist",
    title: "Spam & Email Blacklist Controls",
    description:
      "Create and manage SMS, email, push and Telegram templates for multi-channel communication.",
    borderColor: "white",
    iconColor: "orange",
    iconType: "mail",
  },
];

/* Custom Star in Hand Icon matching design exactly */
function StarInHandIcon({
  className = "w-8 h-8 sm:w-9 sm:h-9 text-white/90",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Radiating sparkle rays around star */}
      <line x1="19" y1="1.5" x2="19" y2="3.5" />
      <line x1="14" y1="3" x2="15" y2="4.5" />
      <line x1="24" y1="3" x2="23" y2="4.5" />
      <line x1="10" y1="6.5" x2="11.5" y2="8" />
      <line x1="28" y1="6.5" x2="26.5" y2="8" />
      <line x1="7.5" y1="11.5" x2="9.5" y2="12" />
      <line x1="30.5" y1="11.5" x2="28.5" y2="12" />
      <line x1="7.5" y1="16.5" x2="9.5" y2="16" />
      <line x1="30.5" y1="16.5" x2="28.5" y2="16" />

      {/* 5-pointed star */}
      <polygon
        points="19,5.5 20.8,9.8 25.5,10.2 22,13.6 23.2,18.5 19,15.8 14.8,18.5 16,13.6 12.5,10.2 17.2,9.8"
        strokeWidth="1.5"
      />

      {/* Hand cupping underneath */}
      <path
        d="M6.5 25.5 L9 20.5 C9.5 19.5 11 19 12 19.5 L15.5 20.5 C17 21 19.5 20.5 21 20 L25.5 18 C26.5 17.5 28 18 28.5 19 C29 20 28.5 21 27.5 21.5 L22.5 24.5 L18.5 27.5 C15.5 29.5 11.5 29.5 8.5 27.5 Z"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 25.5 C5 24.5 4 22.5 4 20.5 C4 18.5 5.5 17.5 7 18 L9.5 19"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* Custom User inside Orbital Nodes icon matching design */
function UserNodesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="10" r="2.5" />
      <path d="M8.5 16 C8.5 14.3 10 13.5 12 13.5 C14 13.5 15.5 14.3 15.5 16" />
      <path d="M6 8 A7.5 7.5 0 0 1 18 8" strokeDasharray="1.5 2" />
      <path d="M19 13 A7.5 7.5 0 0 1 12 19.5 A7.5 7.5 0 0 1 5 13" />
      <circle cx="12" cy="4.5" r="1.3" fill="currentColor" />
      <circle cx="19.5" cy="11.5" r="1.3" fill="currentColor" />
      <circle cx="4.5" cy="11.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function CrmAdvantagesGrid() {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-transparent select-none z-10 overflow-hidden">
      <div className="relative z-10 w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto space-y-14 sm:space-y-16 lg:space-y-20">
        {/* 1. Header with Orange Accent Brush Mark & Star in Hand Icon */}
        <div className="flex items-center justify-center">
          <div className="relative inline-flex items-center">
            {/* Orange Brush Mark behind 'Advantages' */}
            <div className="absolute -left-4 -top-3 w-36 sm:w-44 h-14 -z-0 opacity-95 pointer-events-none">
              <Image
                src="/images/why-choose-us-mark.png"
                alt="Accent Mark"
                width={160}
                height={80}
                className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(255,87,34,0.7)]"
              />
            </div>

            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <h2
                className="font-red-rose text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-tight text-center"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                Advantages of our CRM
              </h2>

              {/* Hand Holding Star Icon */}
              <div className="relative pl-1">
                <StarInHandIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white/90 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. 6 Advantages Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:gap-y-16 gap-x-8 sm:gap-x-10 lg:gap-x-12 items-start">
          {ADVANTAGES_DATA.map((item) => {
            const isOrangeBorder = item.borderColor === "orange";
            const isOrangeIcon = item.iconColor === "orange";

            return (
              <div
                key={item.id}
                className="flex items-start gap-4 sm:gap-5 group"
              >
                {/* Circular Icon Badge with alternating border and icon styling */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-[#0c0d12]/70 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 ${
                    isOrangeBorder
                      ? "border border-[#FF5722] shadow-[0_0_16px_rgba(255,87,34,0.3)]"
                      : "border border-white/50 shadow-[0_0_16px_rgba(255,255,255,0.12)]"
                  }`}
                >
                  {item.iconType === "template" && (
                    <Newspaper
                      className={`w-6 h-6 stroke-[2] ${
                        isOrangeIcon ? "text-[#FF5722]" : "text-white"
                      }`}
                    />
                  )}
                  {item.iconType === "database" && (
                    <Database
                      className={`w-6 h-6 stroke-[2] ${
                        isOrangeIcon ? "text-[#FF5722]" : "text-white"
                      }`}
                    />
                  )}
                  {item.iconType === "calendar" && (
                    <CalendarClock
                      className={`w-6 h-6 stroke-[2] ${
                        isOrangeIcon ? "text-[#FF5722]" : "text-white"
                      }`}
                    />
                  )}
                  {item.iconType === "piechart" && (
                    <PieChart
                      className={`w-6 h-6 stroke-[2] ${
                        isOrangeIcon ? "text-[#FF5722]" : "text-white"
                      }`}
                    />
                  )}
                  {item.iconType === "userNodes" && (
                    <UserNodesIcon
                      className={`w-6 h-6 ${
                        isOrangeIcon ? "text-[#FF5722]" : "text-white"
                      }`}
                    />
                  )}
                  {item.iconType === "mail" && (
                    <Mail
                      className={`w-6 h-6 stroke-[2] ${
                        isOrangeIcon ? "text-[#FF5722]" : "text-white"
                      }`}
                    />
                  )}
                </div>

                {/* Text Content */}
                <div className="space-y-1.5 flex-1">
                  <h3
                    className="font-red-rose text-base sm:text-lg lg:text-[18px] xl:text-[19px] font-bold text-white tracking-wide leading-snug group-hover:text-[#FF5722] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-poppins text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed"
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
      </div>
    </section>
  );
}
