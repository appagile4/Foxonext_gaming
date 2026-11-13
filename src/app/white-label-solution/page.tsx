import React from "react";
import { BackgroundGlowForWhiteLabel } from "@/components/white-label/BackgroundGlowForWhiteLabel";
import { WhiteLabelHero } from "@/components/white-label/WhiteLabelHero";
import { WhiteLabelFeatures } from "@/components/white-label/WhiteLabelFeatures";
import { WhiteLabelKeyFeatures } from "@/components/white-label/WhiteLabelKeyFeatures";
import { WhyChooseUs } from "@/components/why-choose-us/WhyChooseUs";
import { ExploreOtherProductsForWhiteLabelSolutions } from "@/components/white-label/ExploreOtherProductsForWhiteLabelSolutions";
import { TopNewsAndBlogs } from "@/components/news/TopNewsAndBlogs";
import { FaqSection } from "@/components/faq/FaqSection";
import { WorkWithUsCta } from "@/components/cta/WorkWithUsCta";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "White-Label Casino Solution | Turnkey Gaming Platform | FOXONEXT",
  description:
    "Launch your online casino brand with FOXONEXT's White Label solution. We power the technology, you own the brand with omnichannel support, custom design, and back-office tools.",
};

export default function WhiteLabelSolutionPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#07080c] overflow-x-hidden">
      {/* Background glow and hero + feature sections */}
      <div className="relative overflow-hidden">
        {/* Continuous Background Atmosphere */}
        <BackgroundGlowForWhiteLabel />

        {/* 1. White Label Solution Hero Section */}
        <WhiteLabelHero />

        {/* 2. FOXOnext Whitelabel Solution Features (6 Grid Cards) */}
        <WhiteLabelFeatures />

        {/* 3. Interactive Key Features Tab Component */}
        <WhiteLabelKeyFeatures />
      </div>

      {/* 4. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 5. Explore Other Products & Solutions Section */}
      <ExploreOtherProductsForWhiteLabelSolutions />

      {/* 6. Top News & Blogs Section (Without Featured Banner) */}
      <TopNewsAndBlogs showBanner={false} />

      {/* 7. Frequently Asked Questions Section */}
      <FaqSection />

      {/* 8. Wants to Work With Us CTA Section */}
      <WorkWithUsCta />

      {/* 9. Footer Section */}
      <Footer />
    </main>
  );
}
