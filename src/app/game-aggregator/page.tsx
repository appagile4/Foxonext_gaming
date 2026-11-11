import React from "react";
import { AggregatorHero } from "@/components/aggregator/AggregatorHero";
import { AggregatorFeatures } from "@/components/aggregator/AggregatorFeatures";
import { AggregatorAdvantages } from "@/components/aggregator/AggregatorAdvantages";
import { WorkWithUsCta } from "@/components/cta/WorkWithUsCta";
import { Footer } from "@/components/layout/Footer";
import { WhyChooseUs } from "@/components/why-choose-us/WhyChooseUs";
import { TopNewsAndBlogs } from "@/components/news/TopNewsAndBlogs";
import { FaqSection } from "@/components/faq/FaqSection";
import { TopGameProviders } from "@/components/providers/TopGameProviders";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";

export const metadata = {
  title: "Casino Game Aggregator | FOXONEXT",
  description:
    "Popular casino games come together in one Game Aggregator hub. Seamless API integration with 80+ providers, tournaments, and 24/7 technical support.",
};

export default function GameAggregatorPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#07080c] overflow-x-hidden">
      <div className="relative overflow-hidden">
        <BackgroundGlow />

        {/* 1. Casino Game Aggregator Hero Section */}
        <AggregatorHero />

        {/* Top Game Providers & Statistics Section */}
        <TopGameProviders />

        {/* 2. Top Game Providers & Aggregator Features Section */}
        <AggregatorFeatures />

        {/* 3. Aggregator Advantages Section */}
        <AggregatorAdvantages />
      </div>

      {/* Frequently Asked Questions Section */}
      {/* <FaqSection /> */}

      {/* 4. Wants to Work With Us CTA Section (Reused Component) */}
      <WorkWithUsCta />

      {/* 5. Footer Section (Reused Component) */}
      <Footer />
    </main>
  );
}
