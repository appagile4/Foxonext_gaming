import React from "react";
import { CrmHero } from "@/components/crm/CrmHero";
import { CrmStatistics } from "@/components/crm/CrmStatistics";
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

      {/* 2. Real-Time Analytics & Smart CRM Statistics */}
      <CrmStatistics />

      {/* 3. CRM & Analytics Features Grid */}
      <CrmFeatures />

      {/* 4. CRM Advantages Section */}
      <CrmAdvantages />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. Explore Other Products & Solutions Section */}
      <ExploreOtherProducts />

      {/* 7. Top News & Blogs Section */}
      <TopNewsAndBlogs />

      {/* 8. Frequently Asked Questions Section */}
      <FaqSection />

      {/* 9. Wants to Work With Us CTA Section */}
      <WorkWithUsCta />

      {/* 10. Footer Section */}
      <Footer />
    </main>
  );
}
