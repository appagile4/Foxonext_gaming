"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, AtSign, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#07080c] text-white pt-16 sm:pt-20 lg:pt-24 overflow-hidden border-t border-white/[0.06] z-10 select-none">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Products */}
          <div className="space-y-4">
            <h3
              className="font-red-rose text-lg sm:text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              Products
            </h3>
            <ul
              className="space-y-2.5 font-poppins text-xs sm:text-sm text-zinc-400"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              <li>
                <Link
                  href="/game-aggregator"
                  className="hover:text-white transition-colors duration-200"
                >
                  Game Aggregator
                </Link>
              </li>
              <li>
                <Link
                  href="/crm-data-analysis"
                  className="hover:text-white transition-colors duration-200"
                >
                  CRM - Data Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h3
              className="font-red-rose text-lg sm:text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              Solutions
            </h3>
            <ul
              className="space-y-2.5 font-poppins text-xs sm:text-sm text-zinc-400"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              <li>
                <Link
                  href="#white-label"
                  className="hover:text-white transition-colors duration-200"
                >
                  White-Label Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#remote-desktop"
                  className="hover:text-white transition-colors duration-200"
                >
                  Remote Desktop
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3
              className="font-red-rose text-lg sm:text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              Company
            </h3>
            <ul
              className="space-y-2.5 font-poppins text-xs sm:text-sm text-zinc-400"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              <li>
                <Link
                  href="#terms"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#cookies"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: News */}
          <div className="space-y-4">
            <h3
              className="font-red-rose text-lg sm:text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              News
            </h3>
            <ul
              className="space-y-2.5 font-poppins text-xs sm:text-sm text-zinc-400"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              <li>
                <Link
                  href="#events"
                  className="hover:text-white transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#resources"
                  className="hover:text-white transition-colors duration-200"
                >
                  Knowledge Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="space-y-4 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h3
              className="font-red-rose text-lg sm:text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              Contact Us
            </h3>
            <div
              className="space-y-3 font-poppins text-xs sm:text-sm text-zinc-400"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5722] flex-shrink-0" />
                <a
                  href="tel:+971581910073"
                  className="hover:text-white transition-colors duration-200"
                >
                  +971 58 191 0073
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <AtSign className="w-4 h-4 text-[#FF5722] flex-shrink-0" />
                <a
                  href="mailto:sales@cloudzy.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  sales@cloudzy.com
                </a>
              </div>

              {/* Location Address */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-zinc-400">
                  <p className="text-zinc-300">Cloudzy AI Information Technology LLC.</p>
                  <p>Bin Dasmal Building 1, Office 80</p>
                  <p>Al Goze Industrial First, Dubai · United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Social Links Section */}
        <div className="mt-10 sm:mt-12 space-y-4">
          <h4
            className="font-red-rose text-base sm:text-lg font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
          >
            Our Social Links
          </h4>

          <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#FF5722] hover:bg-[#181a23] hover:shadow-[0_0_15px_rgba(255,87,34,0.35)] transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Threads */}
            <a
              href="https://threads.net"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#FF5722] hover:bg-[#181a23] hover:shadow-[0_0_15px_rgba(255,87,34,0.35)] transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12.186 24C5.467 24 0 18.533 0 11.814 0 5.095 5.467 0 12.186 0c6.643 0 11.97 5.23 12.062 11.814h-2.502c-.09-5.205-4.305-9.312-9.56-9.312-5.32 0-9.684 4.364-9.684 9.684s4.364 9.684 9.684 9.684c3.483 0 6.536-1.85 8.196-4.634l2.164 1.25C20.375 21.848 16.538 24 12.186 24zm4.848-11.814c0-2.827-2.175-5.127-4.848-5.127s-4.848 2.3-4.848 5.127c0 2.828 2.175 5.128 4.848 5.128 1.49 0 2.83-.715 3.714-1.836l1.838 1.424c-1.373 1.748-3.468 2.914-5.552 2.914-4.053 0-7.35-3.297-7.35-7.63 0-4.333 3.297-7.63 7.35-7.63s7.35 3.297 7.35 7.63c0 .34-.022.673-.065 1.002l-2.487-.317c.033-.226.052-.455.052-.685z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#FF5722] hover:bg-[#181a23] hover:shadow-[0_0_15px_rgba(255,87,34,0.35)] transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#FF5722] hover:bg-[#181a23] hover:shadow-[0_0_15px_rgba(255,87,34,0.35)] transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.8C10.5 0 9 1.5 9 4.8V8z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#FF5722] hover:bg-[#181a23] hover:shadow-[0_0_15px_rgba(255,87,34,0.35)] transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4.5 h-4.5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Giant Foxonext Logo Wordmark at the Bottom */}
      <div className="relative w-full pt-12 sm:pt-16 lg:pt-20 overflow-hidden">
        <div className="relative w-full aspect-[5965/774] max-w-full">
          <Image
            src="/images/footer-logo.png"
            alt="FOXONEXT"
            fill
            className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_0_35px_rgba(255,87,34,0.15)]"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
