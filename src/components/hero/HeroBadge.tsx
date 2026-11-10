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
      className={`inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#E94E1B]/60 bg-[#E94E1B]/10 backdrop-blur-md shadow-[0_0_20px_rgba(233,78,27,0.15)] ${className}`}
    >
      {/* Glowing orange dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
      </span>

      {/* Badge label */}
      <span className="text-xs sm:text-[13px] font-normal text-zinc-300 tracking-wide select-none">
        {text}
      </span>
    </div>
  );
}
