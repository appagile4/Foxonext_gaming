import React from "react";
import { CrmHero } from "@/components/crm/CrmHero";
import { TopGameProviders } from "@/components/providers/TopGameProviders";
import { CrmStatistics } from "@/components/crm/CrmStatistics";
import { CrmKeyFeatures } from "@/components/crm/CrmKeyFeatures";
import { CrmFeatures } from "@/components/crm/CrmFeatures";
import { CrmAdvantages } from "@/components/crm/CrmAdvantages";
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
      {/* 1. CRM Hero Section */}
      <CrmHero />

      <TopGameProviders />

      {/* 2. Real-Time Analytics & Smart CRM Statistics */}
      <CrmStatistics />

      {/* 3. FOXOnext CRM Key Features (Interactive Tabs Carousel) */}
      <CrmKeyFeatures />

      {/* 4. CRM & Analytics Features Grid */}
      <CrmFeatures />

      {/* 5. CRM Advantages Section */}
      <CrmAdvantages />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Explore Other Products & Solutions Section */}
      <ExploreOtherProducts />

      {/* 8. Top News & Blogs Section */}
      <TopNewsAndBlogs />

      {/* 9. Frequently Asked Questions Section */}
      <FaqSection />

      {/* 10. Wants to Work With Us CTA Section */}
      <WorkWithUsCta />

      {/* 11. Footer Section */}
      <Footer />
    </main>
  );
}
