import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundGlowForContact } from "@/components/contact/BackgroundGlowForContact";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Contact Us | FOXONEXT - Let's Talk About Your Future Success",
  description:
    "Get in touch with FOXONEXT for Game Aggregator, CRM Analytics, White-Label Solutions, and Remote Desktop server infrastructure.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#07080c] overflow-x-hidden">
      {/* Background Atmosphere */}
      <BackgroundGlowForContact />

      {/* Global Header / Navbar */}
      <Navbar />

      {/* Main Contact Section */}
      <div className="flex-1 flex flex-col justify-center">
        <ContactSection />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
