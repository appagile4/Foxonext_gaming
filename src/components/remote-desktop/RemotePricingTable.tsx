"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface PlanRow {
  id: string;
  planName: string;
  cpu: string;
  coreCounts: string;
  memory: string;
  diskSpace: string;
  portSpeed: string;
  basePrice: number;
}

const BASE_PLANS: PlanRow[] = [
  {
    id: "plan-1",
    planName: "Optimal AMD",
    cpu: "NVME | 35 GB",
    coreCounts: "8 Core",
    memory: "5 DDR5 | 32 GB",
    diskSpace: "NVME | 35 GB",
    portSpeed: "500 Mbps",
    basePrice: 3200.98,
  },
  {
    id: "plan-2",
    planName: "Optimal AMD",
    cpu: "NVME | 35 GB",
    coreCounts: "8 Core",
    memory: "5 DDR5 | 32 GB",
    diskSpace: "NVME | 35 GB",
    portSpeed: "500 Mbps",
    basePrice: 3200.98,
  },
  {
    id: "plan-3",
    planName: "Optimal AMD",
    cpu: "NVME | 35 GB",
    coreCounts: "8 Core",
    memory: "5 DDR5 | 32 GB",
    diskSpace: "NVME | 35 GB",
    portSpeed: "500 Mbps",
    basePrice: 3200.98,
  },
  {
    id: "plan-4",
    planName: "Optimal AMD",
    cpu: "NVME | 35 GB",
    coreCounts: "8 Core",
    memory: "5 DDR5 | 32 GB",
    diskSpace: "NVME | 35 GB",
    portSpeed: "500 Mbps",
    basePrice: 3200.98,
  },
  {
    id: "plan-5",
    planName: "Optimal AMD",
    cpu: "NVME | 35 GB",
    coreCounts: "8 Core",
    memory: "5 DDR5 | 32 GB",
    diskSpace: "NVME | 35 GB",
    portSpeed: "500 Mbps",
    basePrice: 3200.98,
  },
];

const DURATIONS = [
  { label: "1 Month", discount: 1.0 },
  { label: "3 Month", discount: 0.95 },
  { label: "6 Month", discount: 0.9 },
  { label: "12 Month", discount: 0.8 },
];

export function RemotePricingTable() {
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedIpVersion, setSelectedIpVersion] = useState("IPV6");
  const [selectedDuration, setSelectedDuration] = useState("1 Month");
  const [cpuType, setCpuType] = useState<"CPU" | "vCPU">("CPU");
  const [selectedCores, setSelectedCores] = useState("2 Core");
  const [memoryType, setMemoryType] = useState<"DDR4" | "DDR5">("DDR4");
  const [selectedRam, setSelectedRam] = useState("4 GB");
  const [selectedDisk, setSelectedDisk] = useState("IPV6");
  const [selectedPortSpeed, setSelectedPortSpeed] = useState("IPV6");

  const activeDurationObj =
    DURATIONS.find((d) => d.label === selectedDuration) || DURATIONS[0];

  return (
    <section className="relative w-full py-18 sm:py-24 lg:py-28 bg-transparent select-none z-10 overflow-hidden">
      <div className="relative z-10 w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[80%] max-w-[1440px] mx-auto space-y-10 sm:space-y-12">
        {/* Centered Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2
            className="font-red-rose text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold text-white tracking-tight leading-tight"
            style={{
              fontFamily: "var(--font-red-rose), 'Red Rose', serif",
            }}
          >
            <span className="text-[#FF5722]">Flexible</span> Pricing for Every Scale
          </h2>
        </div>

        {/* Main Outer Pricing Card Container matching Figma screenshot */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0f1015]/90 border border-white/10 p-5 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-md space-y-6 sm:space-y-8">
          {/* Row 1: Country, Currency, IP Version, Duration Tabs */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-6 pb-2">
            {/* Left 3 Select Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 max-w-2xl">
              {/* Country */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs text-zinc-400 font-poppins block">
                  Country
                </label>
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full appearance-none rounded-lg bg-[#181920] border border-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#FF5722] cursor-pointer"
                  >
                    <option value="United States">Select your Country</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Currency */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs text-zinc-400 font-poppins block">
                  Currency
                </label>
                <div className="relative">
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full appearance-none rounded-lg bg-[#181920] border border-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#FF5722] cursor-pointer"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* IP Version */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs text-zinc-400 font-poppins block">
                  IP Version
                </label>
                <div className="relative">
                  <select
                    value={selectedIpVersion}
                    onChange={(e) => setSelectedIpVersion(e.target.value)}
                    className="w-full appearance-none rounded-lg bg-[#181920] border border-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#FF5722] cursor-pointer"
                  >
                    <option value="IPV6">IPV6</option>
                    <option value="IPV4">IPV4</option>
                    <option value="Dual Stack">Dual Stack</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right: Duration Pill Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-2 lg:pt-0">
              {DURATIONS.map((dur) => {
                const isActive = selectedDuration === dur.label;
                return (
                  <button
                    key={dur.label}
                    type="button"
                    onClick={() => setSelectedDuration(dur.label)}
                    className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-poppins transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "border border-[#FF5722] text-white bg-[#FF5722]/15 shadow-[0_0_15px_rgba(255,87,34,0.3)] font-semibold"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.04] border border-white/5"
                    }`}
                  >
                    {dur.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Sub-filter Controls (CPU, Memory, Disk, Port Speed) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2 border-t border-white/[0.06]">
            {/* CPU Toggle + Core dropdown */}
            <div className="space-y-1.5">
              <label className="text-[11px] sm:text-xs text-zinc-400 font-poppins block">
                CPU
              </label>
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-lg bg-[#181920] border border-white/10 p-0.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setCpuType("CPU")}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      cpuType === "CPU"
                        ? "border border-[#FF5722] text-[#FF5722] bg-[#FF5722]/10"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    CPU
                  </button>
                  <button
                    type="button"
                    onClick={() => setCpuType("vCPU")}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      cpuType === "vCPU"
                        ? "border border-[#FF5722] text-[#FF5722] bg-[#FF5722]/10"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    vCPU
                  </button>
                </div>
                <div className="relative flex-1">
                  <select
                    value={selectedCores}
                    onChange={(e) => setSelectedCores(e.target.value)}
                    className="w-full appearance-none rounded-lg bg-[#181920] border border-white/10 px-3 py-2 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#FF5722] cursor-pointer"
                  >
                    <option value="2 Core">2 Core</option>
                    <option value="4 Core">4 Core</option>
                    <option value="8 Core">8 Core</option>
                    <option value="16 Core">16 Core</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Memory Toggle + RAM dropdown */}
            <div className="space-y-1.5">
              <label className="text-[11px] sm:text-xs text-zinc-400 font-poppins block">
                Memory
              </label>
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-lg bg-[#181920] border border-white/10 p-0.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setMemoryType("DDR4")}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      memoryType === "DDR4"
                        ? "border border-[#FF5722] text-[#FF5722] bg-[#FF5722]/10"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    DDR4
                  </button>
                  <button
                    type="button"
                    onClick={() => setMemoryType("DDR5")}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      memoryType === "DDR5"
                        ? "border border-[#FF5722] text-[#FF5722] bg-[#FF5722]/10"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    DDR5
                  </button>
                </div>
                <div className="relative flex-1">
                  <select
                    value={selectedRam}
                    onChange={(e) => setSelectedRam(e.target.value)}
                    className="w-full appearance-none rounded-lg bg-[#181920] border border-white/10 px-3 py-2 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#FF5722] cursor-pointer"
                  >
                    <option value="4 GB">4 GB</option>
                    <option value="8 GB">8 GB</option>
                    <option value="16 GB">16 GB</option>
                    <option value="32 GB">32 GB</option>
                    <option value="64 GB">64 GB</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Disk Dropdown */}
            <div className="space-y-1.5">
              <label className="text-[11px] sm:text-xs text-zinc-400 font-poppins block">
                Disk
              </label>
              <div className="relative">
                <select
                  value={selectedDisk}
                  onChange={(e) => setSelectedDisk(e.target.value)}
                  className="w-full appearance-none rounded-lg bg-[#181920] border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#FF5722] cursor-pointer"
                >
                  <option value="IPV6">IPV6</option>
                  <option value="NVME 35 GB">NVME 35 GB</option>
                  <option value="NVME 70 GB">NVME 70 GB</option>
                  <option value="NVME 140 GB">NVME 140 GB</option>
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Port Speed Dropdown */}
            <div className="space-y-1.5">
              <label className="text-[11px] sm:text-xs text-zinc-400 font-poppins block">
                Port Speed
              </label>
              <div className="relative">
                <select
                  value={selectedPortSpeed}
                  onChange={(e) => setSelectedPortSpeed(e.target.value)}
                  className="w-full appearance-none rounded-lg bg-[#181920] border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#FF5722] cursor-pointer"
                >
                  <option value="IPV6">IPV6</option>
                  <option value="100 Mbps">100 Mbps</option>
                  <option value="500 Mbps">500 Mbps</option>
                  <option value="1 Gbps">1 Gbps</option>
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <div className="min-w-[880px]">
              {/* White Table Header matching Figma screenshot */}
              <div className="bg-white text-zinc-900 font-poppins font-bold text-xs sm:text-sm px-6 py-4 grid grid-cols-12 items-center">
                <div className="col-span-2">Plan Name</div>
                <div className="col-span-2">CPU</div>
                <div className="col-span-1">Core Counts</div>
                <div className="col-span-2">Memory</div>
                <div className="col-span-1">Disk space</div>
                <div className="col-span-1">Port Speed</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-1 text-right">Action</div>
              </div>

              {/* Table Body Rows */}
              <div className="divide-y divide-white/[0.08] bg-[#0c0d12]">
                {BASE_PLANS.map((plan, idx) => {
                  const finalPrice = (plan.basePrice * activeDurationObj.discount).toFixed(2);
                  return (
                    <div
                      key={`${plan.id}-${idx}`}
                      className="px-6 py-4 sm:py-5 grid grid-cols-12 items-center text-xs sm:text-sm font-poppins text-zinc-300 hover:bg-white/[0.03] transition-colors"
                    >
                      <div className="col-span-2 font-medium text-white">
                        {plan.planName}
                      </div>
                      <div className="col-span-2 text-zinc-300">{plan.cpu}</div>
                      <div className="col-span-1 text-zinc-300">{plan.coreCounts}</div>
                      <div className="col-span-2 text-zinc-300">{plan.memory}</div>
                      <div className="col-span-1 text-zinc-300">{plan.diskSpace}</div>
                      <div className="col-span-1 text-zinc-300">{plan.portSpeed}</div>
                      <div className="col-span-2 text-center font-bold text-white text-sm sm:text-base">
                        $ {finalPrice}
                      </div>
                      <div className="col-span-1 text-right">
                        <Link
                          href="#contact"
                          className="inline-block px-5 py-2 rounded-lg border border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,87,34,0.4)]"
                        >
                          Buy
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
