"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { NAV_ITEMS, CONTACT_CTA } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  logoSrc?: string;
}

export function Navbar({ logoSrc = "/images/logo.png" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  return (
    <header className="relative w-[92%] sm:w-[85%] lg:w-[75%] mx-auto z-40 pt-5 pb-4 transition-all duration-300">
      <div className="w-full flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90 py-1"
        >
          <div className="relative h-9 sm:h-11 md:h-12 w-auto min-w-[180px] sm:min-w-[210px] md:min-w-[240px] flex items-center">
            {/* The user can provide logo image */}
            <Image
              src={logoSrc}
              alt="FOXONEXT"
              width={320}
              height={64}
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Center: Navigation Pill (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-14 md:gap-16 lg:gap-20 xl:gap-24 px-10 lg:px-14 py-3 sm:py-3.5 rounded-[10px] bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-[family-name:var(--font-poppins)] text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions (Language + CTA) */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              type="button"
              className="font-[family-name:var(--font-poppins)] flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2 px-1 focus:outline-none cursor-pointer"
              aria-expanded={langDropdownOpen}
              aria-label="Select language"
            >
              {/* Custom translation symbol 文A icon */}
              <span className="flex items-center gap-1 text-sm font-medium tracking-tight">
                <span className="text-zinc-400 text-xs">文</span>
                <span className="text-white text-xs font-semibold">A</span>
              </span>
              <span className="tracking-wide ml-0.5">{language}</span>
              <ChevronDown
                size={14}
                className={`text-zinc-400 transition-transform duration-200 ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-xl bg-[#14151f] border border-white/10 shadow-xl py-1.5 z-50 backdrop-blur-md">
                {["EN", "ES", "PT", "DE"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      language === lang
                        ? "text-[#E94E1B] bg-white/5"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Button
            href={CONTACT_CTA.href}
            variant="primary"
            size="md"
            className="!px-7 !py-2.5 sm:!py-4 !rounded-[10px] !text-sm font-medium tracking-wide shadow-[0_2px_14px_rgba(233,78,27,0.4)]"
          >
            {CONTACT_CTA.label}
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <Button
            href={CONTACT_CTA.href}
            variant="primary"
            size="sm"
            className="!px-3.5 !py-2 !text-xs !rounded-[10px]"
          >
            Contact
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#11121a]/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between px-3">
            <span className="text-xs text-zinc-400">Language</span>
            <div className="flex gap-2">
              {["EN", "ES", "PT"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-xs px-2.5 py-1 rounded-md ${
                    language === lang
                      ? "bg-[#E94E1B] text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
