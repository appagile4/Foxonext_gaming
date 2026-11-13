"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Globe,
  Gamepad2,
  Sparkles,
  Filter,
  ChevronDown,
  Check,
  ArrowRight,
  ShieldCheck,
  Flame,
  Layers,
  Loader2,
  X,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundGlowForContact } from "@/components/contact/BackgroundGlowForContact";
import { useTranslation } from "@/translations/useTranslation";
import { getApiUrl } from "@/lib/api";

interface Provider {
  _id: string;
  name: string;
  slug?: string;
  logo?: string;
  category: string;
  gamesCount: number;
  priority?: number;
  status: "active" | "inactive" | "testing" | "maintenance";
  apiStatus?: "connected" | "degraded" | "offline";
  rtpRange?: string;
  countries?: string[];
  description?: string;
}

const COUNTRIES = [
  { code: "ALL", name: "All Countries & Regions", flag: "🌍" },
  { code: "GLOBAL", name: "Global", flag: "🌐" },
  { code: "UAE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "MALTA", name: "Malta", flag: "🇲🇹" },
  { code: "CURACAO", name: "Curacao", flag: "🇨🇼" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
];

const CATEGORIES = [
  "All",
  "Slots",
  "Live Casino",
  "Crash Games",
  "Fishing Games",
  "Table Games",
  "Multi-Product",
];

export default function ProvidersPage() {
  const { dict } = useTranslation();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries & Regions");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Fetch Company Providers from dedicated backend API via .env API URL
  const fetchProviders = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(getApiUrl("/company-providers"));
      const data = await res.json();
      if (data.success && data.providers) {
        // Show active providers, sorted by priority (1 is highest)
        const activeOnly = data.providers.filter(
          (p: Provider) => p.status === "active"
        );
        const list = activeOnly.length > 0 ? activeOnly : data.providers;
        list.sort((a: Provider, b: Provider) => (a.priority || 99) - (b.priority || 99));
        setProviders(list);
      } else {
        setError("Unable to load providers from backend.");
      }
    } catch (err) {
      console.error("Error fetching providers:", err);
      setError("Network error connecting to backend service.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  // Close country dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(e.target as Node)
      ) {
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtered Providers Calculation
  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      // 1. Search Query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        provider.name.toLowerCase().includes(q) ||
        (provider.description && provider.description.toLowerCase().includes(q)) ||
        provider.category.toLowerCase().includes(q);

      // 2. Category Filter
      const matchesCategory =
        selectedCategory === "All" || provider.category === selectedCategory;

      // 3. Country Filter
      let matchesCountry = true;
      if (selectedCountry !== "All Countries & Regions") {
        const provCountries = provider.countries || ["Global"];
        matchesCountry =
          provCountries.includes("Global") ||
          provCountries.includes(selectedCountry);
      }

      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [providers, searchQuery, selectedCategory, selectedCountry]);

  const selectedCountryObj = useMemo(() => {
    return (
      COUNTRIES.find((c) => c.name === selectedCountry) || COUNTRIES[0]
    );
  }, [selectedCountry]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedCountry("All Countries & Regions");
  };

  return (
    <main className="relative min-h-screen flex flex-col bg-[#07080c] text-white overflow-x-hidden select-none font-poppins">
      {/* Background Atmosphere */}
      <BackgroundGlowForContact />

      {/* Global Header / Navbar */}
      <Navbar />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-10 z-10">
        <div className="w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto text-center space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 shadow-[0_0_20px_rgba(255,87,34,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
            <span suppressHydrationWarning className="font-medium tracking-wide">
              {dict.providersPage?.heroBadge || "TIER-1 GAMING CONTENT ECOSYSTEM"}
            </span>
          </div>

          {/* Main Title */}
          <h1
            suppressHydrationWarning
            className="font-red-rose text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
          >
            {dict.providersPage.heroTitle}
          </h1>

          {/* Subtitle */}
          <p
            suppressHydrationWarning
            className="font-poppins text-xs sm:text-sm lg:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            {dict.providersPage.heroSubtitle}
          </p>

          {/* Key Metrics Row */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <span suppressHydrationWarning className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                {dict.providersPage?.providersCount ? `${dict.providersPage.providersCount.toUpperCase()} STUDIOS` : "INTEGRATED STUDIOS"}
              </span>
              <p className="font-red-rose text-2xl sm:text-3xl font-bold text-white mt-1">
                {providers.length > 0 ? `${providers.length}+` : "8+"}
              </p>
              <span suppressHydrationWarning className="text-[10px] text-zinc-500">
                {dict.providersPage?.countriesLabel?.replace(/:$/, "") || "Global content creators"}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <span suppressHydrationWarning className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                {dict.providersPage?.gamesLabel || "Certified Titles"}
              </span>
              <p className="font-red-rose text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                {providers.reduce((acc, p) => acc + (p.gamesCount || 0), 0)}+
              </p>
              <span suppressHydrationWarning className="text-[10px] text-zinc-500">
                Slots, live &amp; crash
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <span suppressHydrationWarning className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                {dict.providersPage?.rtpLabel || "Average RTP"}
              </span>
              <p className="font-red-rose text-2xl sm:text-3xl font-bold text-[#FF5722] mt-1">
                96.8%
              </p>
              <span suppressHydrationWarning className="text-[10px] text-zinc-500">
                Player retention math
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <span suppressHydrationWarning className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                {dict.providersPage?.requestIntegration || "Integration Speed"}
              </span>
              <p className="font-red-rose text-2xl sm:text-3xl font-bold text-white mt-1">
                24 Hours
              </p>
              <span suppressHydrationWarning className="text-[10px] text-zinc-500">
                Single unified API
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTROLS & FILTER SECTION ===================== */}
      <section className="relative z-20 py-6">
        <div className="w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto space-y-5">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0e1017]/90 border border-white/[0.08] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={dict.providersPage.searchPlaceholder}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF5722] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Country Selector Dropdown */}
            <div className="relative" ref={countryDropdownRef}>
              <button
                type="button"
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="w-full sm:w-64 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-white hover:border-[#FF5722]/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="text-base">{selectedCountryObj.flag}</span>
                  <span suppressHydrationWarning className="truncate">
                    {selectedCountryObj.code === "ALL"
                      ? (dict.providersPage?.allCountries || selectedCountryObj.name)
                      : selectedCountryObj.name}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                    countryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {countryDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 rounded-xl bg-[#12141d] border border-white/15 shadow-2xl py-2 z-50 backdrop-blur-xl max-h-72 overflow-y-auto">
                  <div suppressHydrationWarning className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 border-b border-white/[0.06]">
                    {dict.providersPage?.filterRegion || dict.providersPage?.allCountries || "Filter by Licensing Region"}
                  </div>
                  {COUNTRIES.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(c.name);
                        setCountryDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors cursor-pointer text-left ${
                        selectedCountry === c.name
                          ? "text-[#FF5722] bg-[#FF5722]/10 font-semibold"
                          : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-base">{c.flag}</span>
                        <span suppressHydrationWarning>
                          {c.code === "ALL" ? (dict.providersPage?.allCountries || c.name) : c.name}
                        </span>
                      </span>
                      {selectedCountry === c.name && (
                        <Check className="w-3.5 h-3.5 text-[#FF5722]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Filter Pills & Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  suppressHydrationWarning
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#FF5722] to-[#E94E1B] text-white shadow-[0_2px_12px_rgba(255,87,34,0.35)]"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                  }`}
                >
                  {cat === "All"
                    ? (dict.common?.exploreMore ? dict.providersPage?.allCountries?.split(" ")[0] || "All" : "All")
                    : cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <span suppressHydrationWarning className="text-zinc-400 text-xs">
                {dict.providersPage.showing}{" "}
                <span className="text-white font-semibold">
                  {filteredProviders.length}
                </span>{" "}
                {dict.providersPage.of} {providers.length} {dict.providersPage.providersCount}
              </span>

              {(searchQuery ||
                selectedCategory !== "All" ||
                selectedCountry !== "All Countries & Regions") && (
                <button
                  onClick={resetFilters}
                  suppressHydrationWarning
                  className="text-xs text-[#FF5722] hover:underline cursor-pointer"
                >
                  {dict.providersPage.resetFilters}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROVIDERS GRID ===================== */}
      <section className="relative z-10 py-8 flex-1">
        <div className="w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto">
          {loading ? (
            <div className="py-28 flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 text-[#FF5722] animate-spin" />
              <p suppressHydrationWarning className="font-poppins text-sm text-zinc-400">
                {dict.providersPage.loading || "Loading live gaming providers..."}
              </p>
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-[#0e1017] border border-red-500/20 p-10 text-center space-y-3">
              <p className="text-red-400 text-sm">{error}</p>
              <button
                onClick={fetchProviders}
                className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-white transition-colors"
              >
                Retry Connection
              </button>
            </div>
          ) : filteredProviders.length === 0 ? (
            <div className="rounded-2xl bg-[#0e1017] border border-white/10 p-16 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 mx-auto">
                <Gamepad2 className="w-7 h-7" />
              </div>
              <h3
                suppressHydrationWarning
                className="font-red-rose text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
              >
                {dict.providersPage.noMatchingTitle || "No Matching Providers Found"}
              </h3>
              <p suppressHydrationWarning className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                {dict.providersPage.noMatchingDesc || "No studios match your search query or selected country jurisdiction."}
              </p>
              <button
                onClick={resetFilters}
                suppressHydrationWarning
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#E94E1B] text-white text-xs font-medium shadow-[0_4px_16px_rgba(255,87,34,0.35)] transition-all cursor-pointer"
              >
                {dict.providersPage.clearFilters || "Clear All Filters"}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredProviders.map((provider) => (
                <div
                  key={provider._id}
                  className="group rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-[#FF5722]/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(255,87,34,0.14)] hover:-translate-y-0.5 flex flex-col md:flex-row md:items-center gap-6 sm:gap-8"
                >
                  {/* Left: Studio Logo Container */}
                  <div className="w-full md:w-56 lg:w-64 h-28 sm:h-32 rounded-xl bg-[#08090e] border border-white/[0.08] flex items-center justify-center p-4 relative overflow-hidden flex-shrink-0 group-hover:border-[#FF5722]/30 transition-colors">
                    <Image
                      src={provider.logo || "/images/providers/pg-soft.png"}
                      alt={provider.name || "Provider"}
                      width={180}
                      height={75}
                      unoptimized
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Right: Description Only */}
                  <div className="flex-1 min-w-0">
                    <p className="font-poppins text-sm sm:text-base text-zinc-300/90 leading-relaxed">
                      {provider.description ||
                        "Premier iGaming provider certified for global operators with high player retention."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===================== BOTTOM CTA BANNER ===================== */}
      <section className="relative z-10 py-16">
        <div className="w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-[#0d0f17] via-[#141624] to-[#0d0f17] border border-white/10 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            {/* Background Glow within card */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,87,34,0.6) 0%, transparent 70%)",
              }}
            />

            <h2
              suppressHydrationWarning
              className="font-red-rose text-2xl sm:text-4xl font-bold text-white relative z-10"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              {dict.providersPage.bottomCtaTitle}
            </h2>

            <p suppressHydrationWarning className="font-poppins text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto relative z-10 leading-relaxed">
              {dict.providersPage.bottomCtaSubtitle}
            </p>

            <div className="pt-2 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#E94E1B] hover:brightness-110 text-white font-medium text-xs sm:text-sm shadow-[0_4px_25px_rgba(255,87,34,0.45)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span suppressHydrationWarning>{dict.providersPage.bottomCtaButton}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/game-aggregator"
                suppressHydrationWarning
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                {dict.common?.learnMore || "Learn More"} - {dict.nav?.gameAggregator || "Game Aggregator"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
