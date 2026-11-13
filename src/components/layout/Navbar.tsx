"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { NAV_ITEMS, CONTACT_CTA } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/translations/useTranslation";

interface NavbarProps {
  logoSrc?: string;
}

export function Navbar({ logoSrc = "/images/logo.png" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const { dict, currentLanguage, languageCode, setLanguage, supportedLanguages } =
    useTranslation();

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileItem((prev) => (prev === label ? null : label));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getTranslatedLabel = (label: string): string => {
    const normalized = label.toLowerCase().replace(/[-_]/g, " ").replace(/\s+/g, " ").trim();
    switch (normalized) {
      case "products":
        return dict.nav.products;
      case "solutions":
        return dict.nav.solutions;
      case "company":
        return dict.nav.company;
      case "news":
        return dict.nav.news;
      case "contact us":
        return dict.nav.contactUs;
      case "game aggregator":
        return dict.nav.gameAggregator;
      case "white label solution":
      case "white label solutions":
        return dict.nav.whiteLabelSolution;
      case "crm & data analysis":
      case "crm data analysis":
        return dict.nav.crmDataAnalysis;
      case "remote desktop":
        return dict.nav.remoteDesktop;
      case "turnkey casino":
        return dict.nav.turnkeyCasino;
      case "crypto casino":
        return dict.nav.cryptoCasino;
      case "sweepstakes casino":
        return dict.nav.sweepstakesCasino;
      case "telegram casino":
        return dict.nav.telegramCasino;
      case "about us":
        return dict.nav.aboutUs;
      case "providers":
        return dict.nav.providers;
      case "blogs & news":
      case "blogs news":
      case "knowledge resources":
        return dict.nav.blogs;
      case "media kit":
        return dict.nav.mediaKit;
      case "events & expos":
      case "events expos":
      case "events":
        return dict.nav.events;
      case "terms & conditions":
      case "terms conditions":
        return dict.footer.terms;
      case "cookie policy":
        return dict.footer.cookiePolicy;
      case "privacy policy":
        return dict.footer.privacyPolicy;
      default:
        return label;
    }
  };

  return (
    <header className="relative w-[92%] sm:w-[85%] lg:w-[75%] mx-auto z-40 pt-5 pb-4 transition-all duration-300">
      <div className="w-full flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90 py-1"
        >
          <div className="relative h-9 sm:h-11 md:h-12 w-auto min-w-[180px] sm:min-w-[210px] md:min-w-[240px] flex items-center">
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

        {/* Center: Navigation Pill (Desktop) with Animated Dropdowns */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-11 md:gap-14 lg:gap-16 xl:gap-20 px-9 lg:px-12 py-3 sm:py-3.5 rounded-[10px] bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        >
          {NAV_ITEMS.map((item) => {
            const hasSub = item.subItems && item.subItems.length > 0;
            const translatedMainLabel = getTranslatedLabel(item.label);
            return (
              <div key={item.label} className="relative group py-1">
                <Link
                  href={item.href}
                  className="font-[family-name:var(--font-poppins)] text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200 tracking-wide inline-flex items-center gap-1.5"
                >
                  <span suppressHydrationWarning>{translatedMainLabel}</span>
                  {hasSub && (
                    <ChevronDown
                      size={13}
                      className="text-zinc-400 group-hover:text-white group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </Link>

                {/* Animated Dropdown Menu for Subtabs */}
                {hasSub && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 sm:pt-6 z-50 pointer-events-none opacity-0 -translate-y-2 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <div className="min-w-[220px] rounded-[10px] bg-[#0e1017]/95 backdrop-blur-md border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.35)] p-2 space-y-1">
                      {item.subItems!.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="group/sub flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-[13px] font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 whitespace-nowrap"
                        >
                          <span suppressHydrationWarning className="group-hover/sub:translate-x-1 transition-transform duration-200">
                            {getTranslatedLabel(sub.label)}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200 ml-3 shadow-[0_0_8px_#FF5722]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Actions (Language + CTA) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              type="button"
              className="font-[family-name:var(--font-poppins)] flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2 px-2.5 rounded-lg hover:bg-white/[0.04] border border-transparent hover:border-white/10 focus:outline-none cursor-pointer"
              aria-expanded={langDropdownOpen}
              aria-label="Select language"
            >
              <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider">
                <Globe size={14} className="text-[#FF5722]" />
                <span suppressHydrationWarning className="text-zinc-200 uppercase">{languageCode}</span>
              </span>
              <ChevronDown
                size={13}
                className={`text-zinc-400 transition-transform duration-200 ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 max-h-80 overflow-y-auto rounded-xl bg-[#0d0f17] border border-white/10 shadow-2xl p-1.5 z-50 backdrop-blur-xl space-y-0.5 custom-scrollbar">
                {supportedLanguages.map((lang) => {
                  const isSelected = currentLanguage === lang.name;
                  return (
                    <button
                      key={lang.name}
                      onClick={() => {
                        setLanguage(lang.name);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "text-[#FF5722] bg-[#FF5722]/10 border border-[#FF5722]/20 font-semibold"
                          : "text-zinc-300 hover:text-white hover:bg-white/[0.06] border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 font-normal">
                        {lang.nativeName}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Button
            href={CONTACT_CTA.href}
            variant="primary"
            size="md"
            className="!px-7 !py-2.5 sm:!py-3.5 !rounded-[10px] !text-sm font-medium tracking-wide shadow-[0_2px_14px_rgba(233,78,27,0.4)]"
          >
            <span suppressHydrationWarning>{dict.nav.contactUs}</span>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2.5">
          <Button
            href={CONTACT_CTA.href}
            variant="primary"
            size="sm"
            className="!px-3.5 !py-2 !text-xs !rounded-[10px]"
          >
            <span suppressHydrationWarning>{dict.nav.contactUs}</span>
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
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0d0f17]/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const hasSub = item.subItems && item.subItems.length > 0;
              const isExpanded = expandedMobileItem === item.label;
              const translatedMainLabel = getTranslatedLabel(item.label);

              return (
                <div key={item.label} className="border-b border-white/5 pb-1">
                  {hasSub ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
                      >
                        <span suppressHydrationWarning>{translatedMainLabel}</span>
                        <ChevronDown
                          size={15}
                          className={`text-zinc-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#FF5722]" : ""
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="pl-4 pr-2 py-1 space-y-1 bg-white/[0.02] rounded-lg mt-1 animate-in fade-in duration-150">
                          {item.subItems!.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                            >
                              <span suppressHydrationWarning>{getTranslatedLabel(sub.label)}</span>
                              <span className="w-1 h-1 rounded-full bg-[#FF5722]" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <span suppressHydrationWarning>{translatedMainLabel}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Language Selector */}
          <div className="pt-2 border-t border-white/10 space-y-2 px-1">
            <span className="text-xs text-zinc-400 block font-medium">
              {dict.common.language} ({currentLanguage})
            </span>
            <div className="grid grid-cols-3 gap-1.5 max-h-40 overflow-y-auto p-1 bg-white/[0.02] rounded-xl border border-white/5">
              {supportedLanguages.map((lang) => (
                <button
                  key={lang.name}
                  onClick={() => setLanguage(lang.name)}
                  className={`text-[11px] px-2 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 font-medium ${
                    currentLanguage === lang.name
                      ? "bg-[#FF5722] text-white shadow-md font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="truncate">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
