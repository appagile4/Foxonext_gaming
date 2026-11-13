import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import { TopGameProviders } from "@/components/providers/TopGameProviders";
import { IGamingProducts } from "@/components/products/IGamingProducts";
import { IGamingSolutions } from "@/components/solutions/IGamingSolutions";
import { WhyChooseUs } from "@/components/why-choose-us/WhyChooseUs";
import { TopNewsAndBlogs } from "@/components/news/TopNewsAndBlogs";
import { FaqSection } from "@/components/faq/FaqSection";
import { WorkWithUsCta } from "@/components/cta/WorkWithUsCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#07080c]">
      {/* Hero & Game Providers Section (BackgroundGlow scoped strictly to this container) */}
      <div className="relative overflow-hidden">
        {/* Background glowing swooshes, ambient lights, and mesh */}
        <BackgroundGlow />

        {/* Top Navigation Component */}
        <Navbar logoSrc="/images/logo.png" />

        {/* Main Hero Component */}
        <Hero
          ctaHref="/contact"
          iphoneImage="/images/newiphone.png"
          dashboardImage="/images/newdesktop.png"
        />

        {/* Top Game Providers & Statistics Section */}
        <TopGameProviders />
      </div>

      {/* Our iGaming Products Section */}
      <IGamingProducts />

      {/* Our iGaming Solutions Section */}
      <IGamingSolutions />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Top News & Blogs Section */}
      <TopNewsAndBlogs />

      {/* Frequently Asked Questions Section */}
      <FaqSection />

      {/* Work With Us CTA Section */}
      <WorkWithUsCta />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
