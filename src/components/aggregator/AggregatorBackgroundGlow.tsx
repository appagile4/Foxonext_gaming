import React from "react";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";

export function AggregatorBackgroundGlow({
  className = "",
}: {
  className?: string;
}) {
  return <BackgroundGlow variant="aggregator" className={className} />;
}
