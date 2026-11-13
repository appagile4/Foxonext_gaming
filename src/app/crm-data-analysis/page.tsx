import React from "react";
import { BackgroundGlowForCrm } from "@/components/crm/BackgroundGlowForCrm";
import { CrmHero } from "@/components/crm/CrmHero";
import { TopGameProviders } from "@/components/providers/TopGameProviders";
import { CrmKeyFeatures } from "@/components/crm/CrmKeyFeatures";
import { CrmAdvantagesGrid } from "@/components/crm/CrmAdvantagesGrid";
import { WhyChooseUs } from "@/components/why-choose-us/WhyChooseUs";
import { ExploreOtherProducts } from "@/components/aggregator/ExploreOtherProducts";
import { TopNewsAndBlogs } from "@/components/news/TopNewsAndBlogs";
import { FaqSection } from "@/components/faq/FaqSection";
import { WorkWithUsCta } from "@/components/cta/WorkWithUsCta";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "CRM & Data Analytics Platform | FOXONEXT",
  description:
    "Transform player data into revenue growth. Real-time iGaming CRM with RFM segmentation, automated VIP loyalty journeys, fraud detection, and predictive churn analytics.",
};

export default function CrmDataAnalysisPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#07080c] overflow-x-hidden">
      {/* 4 Combined Sections Sharing BackgroundGlowForCrm */}
      <div className="relative overflow-hidden">
        {/* Continuous CRM Background Glow & Atmosphere */}
        <BackgroundGlowForCrm />

        {/* 1. CRM Hero Section */}
        <CrmHero />

        {/* Top Game Providers & Statistics Section */}
        <TopGameProviders />

        {/* 2. FOXOnext CRM Key Features (Interactive Tabs Carousel) */}
        <CrmKeyFeatures />

        {/* 3. Advantages of our CRM Section */}
        <CrmAdvantagesGrid />
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Explore Other Products & Solutions Section */}
      <ExploreOtherProducts />

      {/* Top News & Blogs Section */}
      <TopNewsAndBlogs />

      {/* Frequently Asked Questions Section */}
      <FaqSection />

      {/* 4. Wants to Work With Us CTA Section */}
      <WorkWithUsCta />

      {/* 5. Footer Section */}
      <Footer />
    </main>
  );
}
