import React from "react";
import { BackgroundGlowForRemoteDesktop } from "@/components/remote-desktop/BackgroundGlowForRemoteDesktop";
import { RemoteDesktopHero } from "@/components/remote-desktop/RemoteDesktopHero";
import { RemoteDesktopUsecases } from "@/components/remote-desktop/RemoteDesktopUsecases";
import { RemoteWorldwideNetwork } from "@/components/remote-desktop/RemoteWorldwideNetwork";
import { RemoteWorkplaceBenefits } from "@/components/remote-desktop/RemoteWorkplaceBenefits";
import { RemotePricingTable } from "@/components/remote-desktop/RemotePricingTable";
import { WhyChooseUs } from "@/components/why-choose-us/WhyChooseUs";
import { ExploreOtherProductsForRemoteDesktop } from "@/components/remote-desktop/ExploreOtherProductsForRemoteDesktop";
import { TopNewsAndBlogs } from "@/components/news/TopNewsAndBlogs";
import { FaqSection } from "@/components/faq/FaqSection";
import { WorkWithUsCta } from "@/components/cta/WorkWithUsCta";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title:
    "Remote Desktop Server Rental | High-Performance Windows VPS | FOXONEXT",
  description:
    "We provide high-performance Remote Desktop and Windows VPS server rentals with low latency, dedicated global IP networks, instant setup, and 24/7 technical monitoring.",
};

export default function RemoteDesktopPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#07080c] overflow-x-hidden">
      {/* 5 Remote Desktop Sections wrapped with BackgroundGlowForRemoteDesktop */}
      <div className="relative overflow-hidden">
        {/* Continuous Background Atmosphere */}
        <BackgroundGlowForRemoteDesktop />

        {/* 1. Remote Server Rental Hero Section with Process Cards */}
        <RemoteDesktopHero />

        {/* 2. Flexible Pricing for Every Scale Section (Filterable Table) */}
        <RemotePricingTable />

        {/* 3. Remote Desktop Usecases Section (Accordion + 3D Hardware Composite) */}
        <RemoteDesktopUsecases />

        {/* 4. Remote Workplace - Benefits Section (4 Feature Cards) */}
        <RemoteWorkplaceBenefits />

        {/* 5. Virtual Worldwide Server Network Section (Global Map & Countries) */}
        <RemoteWorldwideNetwork />
      </div>

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Explore Other Products Section */}
      <ExploreOtherProductsForRemoteDesktop />

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
