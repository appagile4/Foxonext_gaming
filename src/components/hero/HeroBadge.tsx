import React from "react";

interface HeroBadgeProps {
  text?: string;
  className?: string;
}

export function HeroBadge({
  text = "Online Casinos Software Provider",
  className = "",
}: HeroBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#E94E1B]/60 bg-[#E94E1B]/10 backdrop-blur-md shadow-[0_0_20px_rgba(233,78,27,0.15)] ${className}`}
    >
      {/* Glowing orange dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
      </span>

      {/* Badge label */}
      <span className="font-[family-name:var(--font-poppins)] text-xs sm:text-sm font-medium text-zinc-200 tracking-wide select-none">
        {text}
      </span>
    </div>
  );
}
