"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Gamepad2,
  ShieldCheck,
  LogOut,
  Plus,
  Search,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Trash2,
  Globe,
  Menu,
  X,
  Power,
  User,
  KeyRound,
  UserPlus,
  Share2,
  Phone,
  Mail,
  MapPin,
  Building,
  Inbox,
  MessageSquare,
  Clock,
  Eye,
  RefreshCw,
  Layers,
  Edit2,
  Check,
  ArrowUpDown,
} from "lucide-react";
import { getApiUrl } from "@/lib/api";

interface Provider {
  _id: string;
  name: string;
  slug?: string;
  logo?: string;
  category: string;
  gamesCount: number;
  status: "active" | "inactive" | "testing" | "maintenance";
  apiStatus?: "connected" | "degraded" | "offline";
  rtpRange?: string;
  description?: string;
}

interface CompanyProviderItem {
  _id: string;
  name: string;
  logo: string;
  description: string;
  priority: number;
  countries: string[];
  category: string;
  gamesCount: number;
  status: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

interface InquiryItem {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
  enquiryType: string;
  message?: string;
  status: "new" | "read" | "in-progress" | "resolved" | "archived";
  createdAt: string;
  updatedAt?: string;
}

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

const COMMON_COUNTRIES = [
  "Global",
  "United Arab Emirates",
  "United Kingdom",
  "Malta",
  "Curacao",
  "Philippines",
  "Brazil",
  "United States",
  "Singapore",
  "India",
  "Canada",
  "Germany",
  "Australia",
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "providers" | "directory" | "inquiries" | "contact" | "social" | "admin"
  >("providers");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  // Top Gaming Providers (Home Marquee)
  const [providers, setProviders] = useState<Provider[]>([]);
  const [providersLoading, setProvidersLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Company Providers Directory State (for the /providers page)
  const [companyProviders, setCompanyProviders] = useState<CompanyProviderItem[]>([]);
  const [companyProvidersLoading, setCompanyProvidersLoading] = useState(false);
  const [companySearchQuery, setCompanySearchQuery] = useState("");
  const [companyCountryFilter, setCompanyCountryFilter] = useState("All");

  // Add / Edit Company Provider Modal State
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [editingCompanyProvider, setEditingCompanyProvider] = useState<CompanyProviderItem | null>(null);
  const [companyFormSubmitting, setCompanyFormSubmitting] = useState(false);
  const [companyFormError, setCompanyFormError] = useState<string | null>(null);
  const [customCountryInput, setCustomCountryInput] = useState("");
  const [companyFormData, setCompanyFormData] = useState({
    name: "",
    logo: "/images/providers/pg-soft.png",
    description: "",
    priority: 1,
    countries: ["Global", "United Arab Emirates", "United Kingdom", "Malta", "Curacao"],
    category: "Slots",
    gamesCount: 100,
    status: "active" as "active" | "inactive",
  });

  // Add Top Provider Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [newProvider, setNewProvider] = useState({
    name: "",
    logo: "/images/providers/pg-soft.png",
    category: "Slots",
    gamesCount: 50,
    rtpRange: "96.5% - 97.8%",
    description: "",
  });

  // Inquiries State
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState<string>("all");
  const [inquirySearch, setInquirySearch] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);
  const [inquiriesMetrics, setInquiriesMetrics] = useState({
    total: 0,
    new: 0,
    inProgress: 0,
    resolved: 0,
  });

  // Contact Info State
  const [contactForm, setContactForm] = useState({
    phone: "+971 58 191 0073",
    email: "sales@cloudzy.com",
    companyName: "Cloudzy AI Information Technology LLC.",
    addressLine1: "Bin Dasmal Building 1, Office 80",
    addressLine2: "Al Goze Industrial First, Dubai · United Arab Emirates",
  });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  // Social Links State
  const [socialLinks, setSocialLinks] = useState({
    instagram: "https://instagram.com",
    threads: "https://threads.net",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    x: "https://x.com",
  });
  const [socialLoading, setSocialLoading] = useState(false);
  const [socialStatus, setSocialStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  // Admin Change Password State
  const [passData, setPassData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passStatus, setPassStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });
  const [passLoading, setPassLoading] = useState(false);

  // Admin Register New Admin State
  const [newAdminData, setNewAdminData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const [adminRegStatus, setAdminRegStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });
  const [adminRegLoading, setAdminRegLoading] = useState(false);

  // Auth verification on mount
  useEffect(() => {
    const token = localStorage.getItem("foxo_admin_token");
    const storedUser = localStorage.getItem("foxo_admin_user");

    if (!token) {
      router.push("/admin");
      return;
    }

    if (storedUser) {
      try {
        setAdminUser(JSON.parse(storedUser));
      } catch {
        // ignore
      }
    }

    // Verify token with backend
    fetch(getApiUrl("/admin/me"), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.admin) {
          setAdminUser(data.admin);
        } else {
          handleLogout();
        }
      })
      .catch(() => {
        // network issue: continue with local user session
      })
      .finally(() => {
        setLoading(false);
      });

    // Fetch All Data
    fetchProviders();
    fetchCompanyProviders();
    fetchInquiries();
    fetchSocialLinks();
    fetchContactInfo();
  }, [router]);

  // ===================== COMPANY PROVIDERS (Providers Tab) =====================
  const fetchCompanyProviders = async () => {
    setCompanyProvidersLoading(true);
    try {
      const res = await fetch(getApiUrl("/company-providers"));
      const data = await res.json();
      if (data.success && data.providers) {
        setCompanyProviders(data.providers);
      }
    } catch (err) {
      console.error("Error fetching company providers:", err);
    } finally {
      setCompanyProvidersLoading(false);
    }
  };

  const handleToggleCompanyProviderStatus = async (id: string) => {
    const token = localStorage.getItem("foxo_admin_token");
    try {
      setCompanyProviders((prev) =>
        prev.map((p) =>
          p._id === id
            ? { ...p, status: p.status === "active" ? "inactive" : "active" }
            : p
        )
      );

      await fetch(getApiUrl(`/company-providers/${id}/toggle`), {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCompanyProviders();
    } catch {
      fetchCompanyProviders();
    }
  };

  const handleDeleteCompanyProvider = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}" from Providers?`)) {
      return;
    }
    const token = localStorage.getItem("foxo_admin_token");
    try {
      setCompanyProviders((prev) => prev.filter((p) => p._id !== id));
      await fetch(getApiUrl(`/company-providers/${id}`), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCompanyProviders();
    } catch (err) {
      console.error("Error deleting company provider:", err);
      fetchCompanyProviders();
    }
  };

  const openAddCompanyModal = () => {
    setEditingCompanyProvider(null);
    setCompanyFormError(null);
    setCustomCountryInput("");
    setCompanyFormData({
      name: "",
      logo: "/images/providers/pg-soft.png",
      description: "",
      priority: (companyProviders.length + 1),
      countries: ["Global", "United Arab Emirates", "United Kingdom", "Malta", "Curacao"],
      category: "Slots",
      gamesCount: 100,
      status: "active",
    });
    setIsCompanyModalOpen(true);
  };

  const openEditCompanyModal = (provider: CompanyProviderItem) => {
    setEditingCompanyProvider(provider);
    setCompanyFormError(null);
    setCustomCountryInput("");
    setCompanyFormData({
      name: provider.name,
      logo: provider.logo || "/images/providers/pg-soft.png",
      description: provider.description || "",
      priority: provider.priority || 1,
      countries: provider.countries && provider.countries.length > 0 ? provider.countries : ["Global"],
      category: provider.category || "Slots",
      gamesCount: provider.gamesCount || 50,
      status: provider.status || "active",
    });
    setIsCompanyModalOpen(true);
  };

  const toggleCountryInForm = (countryName: string) => {
    setCompanyFormData((prev) => {
      const exists = prev.countries.includes(countryName);
      if (exists) {
        return {
          ...prev,
          countries: prev.countries.filter((c) => c !== countryName),
        };
      } else {
        return {
          ...prev,
          countries: [...prev.countries, countryName],
        };
      }
    });
  };

  const addCustomCountry = () => {
    const trimmed = customCountryInput.trim();
    if (!trimmed) return;
    if (!companyFormData.countries.includes(trimmed)) {
      setCompanyFormData((prev) => ({
        ...prev,
        countries: [...prev.countries, trimmed],
      }));
    }
    setCustomCountryInput("");
  };

  const removeCountryFromForm = (countryName: string) => {
    setCompanyFormData((prev) => ({
      ...prev,
      countries: prev.countries.filter((c) => c !== countryName),
    }));
  };

  const handleSaveCompanyProvider = async (e: React.FormEvent) => {
    e.preventDefault();
    setCompanyFormError(null);

    if (!companyFormData.name.trim()) {
      setCompanyFormError("Provider name is required.");
      return;
    }

    setCompanyFormSubmitting(true);
    const token = localStorage.getItem("foxo_admin_token");

    try {
      const endpoint = editingCompanyProvider
        ? getApiUrl(`/company-providers/${editingCompanyProvider._id}`)
        : getApiUrl("/company-providers");
      const method = editingCompanyProvider ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(companyFormData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsCompanyModalOpen(false);
        fetchCompanyProviders();
      } else {
        setCompanyFormError(data.message || "Failed to save provider.");
      }
    } catch {
      setCompanyFormError("Failed to communicate with backend server.");
    } finally {
      setCompanyFormSubmitting(false);
    }
  };

  // Filtered Company Providers for Directory
  const filteredCompanyProviders = useMemo(() => {
    return companyProviders.filter((p) => {
      const q = companySearchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        p.countries.some((c) => c.toLowerCase().includes(q));

      const matchesCountry =
        companyCountryFilter === "All" ||
        p.countries.includes(companyCountryFilter) ||
        p.countries.includes("Global");

      return matchesSearch && matchesCountry;
    });
  }, [companyProviders, companySearchQuery, companyCountryFilter]);

  // ===================== TOP GAMING PROVIDERS (Marquee Tab) =====================
  const fetchProviders = async () => {
    setProvidersLoading(true);
    try {
      const res = await fetch(getApiUrl("/providers"));
      const data = await res.json();
      if (data.success && data.providers) {
        setProviders(data.providers);
      }
    } catch (err) {
      console.error("Failed to fetch providers:", err);
    } finally {
      setProvidersLoading(false);
    }
  };

  const handleToggleStatus = async (id: string) => {
    const token = localStorage.getItem("foxo_admin_token");
    try {
      setProviders((prev) =>
        prev.map((p) =>
          p._id === id
            ? { ...p, status: p.status === "active" ? "inactive" : "active" }
            : p
        )
      );

      const res = await fetch(getApiUrl(`/providers/${id}/toggle`), {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!data.success) fetchProviders();
    } catch {
      fetchProviders();
    }
  };

  const handleDeleteProvider = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to remove "${name}" from top providers?`)) {
      return;
    }
    const token = localStorage.getItem("foxo_admin_token");
    try {
      setProviders((prev) => prev.filter((p) => p._id !== id));
      await fetch(getApiUrl(`/providers/${id}`), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProviders();
    } catch (err) {
      console.error("Error deleting provider:", err);
      fetchProviders();
    }
  };

  const handleCreateProvider = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!newProvider.name.trim()) {
      setFormError("Provider name is required.");
      return;
    }
    setIsSubmitting(true);
    const token = localStorage.getItem("foxo_admin_token");
    try {
      const res = await fetch(getApiUrl("/providers"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProvider),
      });
      const data = await res.json();
      if (data.success && data.provider) {
        setProviders((prev) => [data.provider, ...prev]);
        setIsAddModalOpen(false);
        setNewProvider({
          name: "",
          logo: "/images/providers/pg-soft.png",
          category: "Slots",
          gamesCount: 50,
          rtpRange: "96.5% - 97.8%",
          description: "",
        });
      } else {
        setFormError(data.message || "Failed to add provider.");
      }
    } catch {
      setFormError("Unable to connect to backend server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===================== INQUIRIES =====================
  const fetchInquiries = async () => {
    setInquiriesLoading(true);
    const token = localStorage.getItem("foxo_admin_token");
    try {
      const res = await fetch(getApiUrl("/inquiries"), {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success && data.inquiries) {
        setInquiries(data.inquiries);
        if (data.metrics) setInquiriesMetrics(data.metrics);
      }
    } catch (err) {
      console.error("Error fetching inquiries:", err);
    } finally {
      setInquiriesLoading(false);
    }
  };

  const handleUpdateInquiryStatus = async (
    id: string,
    newStatus: "new" | "read" | "in-progress" | "resolved" | "archived"
  ) => {
    const token = localStorage.getItem("foxo_admin_token");
    try {
      setInquiries((prev) =>
        prev.map((inq) => (inq._id === id ? { ...inq, status: newStatus } : inq))
      );
      if (selectedInquiry && selectedInquiry._id === id) {
        setSelectedInquiry({ ...selectedInquiry, status: newStatus });
      }

      await fetch(getApiUrl(`/inquiries/${id}/status`), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchInquiries();
    } catch {
      fetchInquiries();
    }
  };

  const handleDeleteInquiry = async (id: string, name: string) => {
    if (!window.confirm(`Delete inquiry lead from "${name}"?`)) return;
    const token = localStorage.getItem("foxo_admin_token");
    try {
      setInquiries((prev) => prev.filter((inq) => inq._id !== id));
      if (selectedInquiry && selectedInquiry._id === id) {
        setSelectedInquiry(null);
      }
      await fetch(getApiUrl(`/inquiries/${id}`), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchInquiries();
    } catch (err) {
      console.error("Error deleting inquiry:", err);
      fetchInquiries();
    }
  };

  // ===================== CONTACT INFO =====================
  const fetchContactInfo = async () => {
    try {
      const res = await fetch(getApiUrl("/contact-info"));
      const data = await res.json();
      if (data.success && data.contactInfo) {
        setContactForm({
          phone: data.contactInfo.phone || "",
          email: data.contactInfo.email || "",
          companyName: data.contactInfo.companyName || "",
          addressLine1: data.contactInfo.addressLine1 || "",
          addressLine2: data.contactInfo.addressLine2 || "",
        });
      }
    } catch {
      // fallback
    }
  };

  const handleSaveContactInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setContactStatus({ type: null, msg: "" });
    const token = localStorage.getItem("foxo_admin_token");

    try {
      const res = await fetch(getApiUrl("/contact-info"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setContactStatus({
          type: "success",
          msg: "Contact details updated successfully and now live across the website!",
        });
      } else {
        setContactStatus({
          type: "error",
          msg: data.message || "Failed to update contact info.",
        });
      }
    } catch {
      setContactStatus({ type: "error", msg: "Server communication error." });
    } finally {
      setContactLoading(false);
    }
  };

  // ===================== SOCIAL LINKS =====================
  const fetchSocialLinks = async () => {
    try {
      const res = await fetch(getApiUrl("/social-links"));
      const data = await res.json();
      if (data.success && data.socialLinks) {
        setSocialLinks({
          instagram: data.socialLinks.instagram || "",
          threads: data.socialLinks.threads || "",
          linkedin: data.socialLinks.linkedin || "",
          facebook: data.socialLinks.facebook || "",
          x: data.socialLinks.x || "",
        });
      }
    } catch {
      // fallback
    }
  };

  const handleSaveSocialLinks = async (e: React.FormEvent) => {
    e.preventDefault();
    setSocialLoading(true);
    setSocialStatus({ type: null, msg: "" });
    const token = localStorage.getItem("foxo_admin_token");

    try {
      const res = await fetch(getApiUrl("/social-links"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(socialLinks),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSocialStatus({
          type: "success",
          msg: "Social links updated successfully and now live on website footer!",
        });
      } else {
        setSocialStatus({
          type: "error",
          msg: data.message || "Failed to update social links.",
        });
      }
    } catch {
      setSocialStatus({ type: "error", msg: "Server communication error." });
    } finally {
      setSocialLoading(false);
    }
  };

  // ===================== ADMIN AUTH ACTIONS =====================
  const handleLogout = () => {
    localStorage.removeItem("foxo_admin_token");
    localStorage.removeItem("foxo_admin_user");
    router.push("/admin");
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassStatus({ type: null, msg: "" });
    if (passData.newPassword !== passData.confirmPassword) {
      setPassStatus({ type: "error", msg: "New passwords do not match." });
      return;
    }
    setPassLoading(true);
    const token = localStorage.getItem("foxo_admin_token");
    try {
      const res = await fetch(getApiUrl("/admin/change-password"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: passData.currentPassword,
          newPassword: passData.newPassword,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setPassStatus({ type: "success", msg: "Password changed successfully." });
        setPassData({ currentPassword: "", newPassword: "", confirmPassword: "" });
      } else {
        setPassStatus({ type: "error", msg: data.message || "Failed to change password." });
      }
    } catch {
      setPassStatus({ type: "error", msg: "Server communication error." });
    } finally {
      setPassLoading(false);
    }
  };

  const handleRegisterAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminRegStatus({ type: null, msg: "" });
    setAdminRegLoading(true);
    const token = localStorage.getItem("foxo_admin_token");
    try {
      const res = await fetch(getApiUrl("/admin/register"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newAdminData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAdminRegStatus({
          type: "success",
          msg: `New admin (${newAdminData.email}) registered successfully!`,
        });
        setNewAdminData({ name: "", email: "", password: "", role: "admin" });
      } else {
        setAdminRegStatus({ type: "error", msg: data.message || "Failed to register new admin." });
      }
    } catch {
      setAdminRegStatus({ type: "error", msg: "Server communication error." });
    } finally {
      setAdminRegLoading(false);
    }
  };

  // Filtered Top Gaming Providers
  const filteredProviders = useMemo(() => {
    return providers.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [providers, searchQuery, selectedCategory]);

  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inq) => {
      const matchesStatus =
        inquiryStatusFilter === "all" || inq.status === inquiryStatusFilter;
      const q = inquirySearch.toLowerCase().trim();
      const matchesSearch =
        !q ||
        inq.fullName.toLowerCase().includes(q) ||
        inq.email.toLowerCase().includes(q) ||
        (inq.phone && inq.phone.toLowerCase().includes(q)) ||
        inq.enquiryType.toLowerCase().includes(q) ||
        (inq.message && inq.message.toLowerCase().includes(q));

      return matchesStatus && matchesSearch;
    });
  }, [inquiries, inquiryStatusFilter, inquirySearch]);

  const categories = [
    "All",
    "Slots",
    "Live Casino",
    "Crash Games",
    "Fishing Games",
    "Table Games",
    "Multi-Product",
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#07080c] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#FF5722] animate-spin" />
          <p className="text-sm font-poppins text-zinc-400">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07080c] text-white flex flex-col md:flex-row antialiased font-poppins select-none">
      {/* ===================== SIDEBAR / SIDEMENU BAR ===================== */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 lg:w-72 bg-[#090b10] border-r border-white/[0.08] flex flex-col justify-between transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Brand / Logo Section */}
        <div>
          <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo.png"
                alt="FOXONEXT"
                width={160}
                height={38}
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-2">
            <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              Admin Menu
            </div>

            {/* TAB 1: TOP GAMING PROVIDERS (Home Marquee) */}
            <button
              onClick={() => {
                setActiveTab("providers");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === "providers"
                  ? "bg-gradient-to-r from-[#E94E1B] to-[#FF6229] text-white shadow-[0_4px_20px_rgba(233,78,27,0.35)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Gamepad2 className="w-4 h-4 flex-shrink-0" />
                <span>Top Gaming Providers</span>
              </div>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                  activeTab === "providers"
                    ? "bg-white/20 text-white"
                    : "bg-white/[0.06] text-zinc-400"
                }`}
              >
                {providers.length}
              </span>
            </button>

            {/* TAB 2: PROVIDERS DIRECTORY (For Public /providers Page) */}
            <button
              onClick={() => {
                setActiveTab("directory");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === "directory"
                  ? "bg-gradient-to-r from-[#E94E1B] to-[#FF6229] text-white shadow-[0_4px_20px_rgba(233,78,27,0.35)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 flex-shrink-0" />
                <span>Providers Directory</span>
              </div>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                  activeTab === "directory"
                    ? "bg-white/20 text-white"
                    : "bg-white/[0.06] text-zinc-400"
                }`}
              >
                {companyProviders.length}
              </span>
            </button>

            {/* TAB 3: CUSTOMER INQUIRIES & LEADS */}
            <button
              onClick={() => {
                setActiveTab("inquiries");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === "inquiries"
                  ? "bg-gradient-to-r from-[#E94E1B] to-[#FF6229] text-white shadow-[0_4px_20px_rgba(233,78,27,0.35)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Inbox className="w-4 h-4 flex-shrink-0" />
                <span>Customer Inquiries</span>
              </div>
              {inquiriesMetrics.new > 0 ? (
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-500 text-white animate-pulse">
                  {inquiriesMetrics.new} NEW
                </span>
              ) : (
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                    activeTab === "inquiries"
                      ? "bg-white/20 text-white"
                      : "bg-white/[0.06] text-zinc-400"
                  }`}
                >
                  {inquiries.length}
                </span>
              )}
            </button>

            {/* TAB 4: CONTACT US DETAILS */}
            <button
              onClick={() => {
                setActiveTab("contact");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === "contact"
                  ? "bg-gradient-to-r from-[#E94E1B] to-[#FF6229] text-white shadow-[0_4px_20px_rgba(233,78,27,0.35)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>Contact Details</span>
            </button>

            {/* TAB 5: OUR SOCIAL LINKS */}
            <button
              onClick={() => {
                setActiveTab("social");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === "social"
                  ? "bg-gradient-to-r from-[#E94E1B] to-[#FF6229] text-white shadow-[0_4px_20px_rgba(233,78,27,0.35)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Share2 className="w-4 h-4 flex-shrink-0" />
              <span>Our Social Links</span>
            </button>

            {/* TAB 6: ADMIN PROFILE & SECURITY */}
            <button
              onClick={() => {
                setActiveTab("admin");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === "admin"
                  ? "bg-gradient-to-r from-[#E94E1B] to-[#FF6229] text-white shadow-[0_4px_20px_rgba(233,78,27,0.35)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Admin &amp; Security</span>
            </button>
          </nav>
        </div>

        {/* Footer Admin Profile & Actions */}
        <div className="p-4 border-t border-white/[0.08] space-y-3 bg-[#07080c]/60">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-9 h-9 rounded-lg bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] font-bold text-xs">
              {adminUser?.email?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">
                {adminUser?.email || "admin@foxo.com"}
              </p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                {adminUser?.role || "superadmin"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>View Site</span>
            </Link>

            <button
              onClick={handleLogout}
              title="Logout"
              className="flex items-center justify-center p-2 rounded-xl text-red-400 hover:bg-red-500/10 border border-red-500/20 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Background Overlay for Mobile Sidebar */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* ===================== MAIN CONTENT AREA ===================== */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 bg-[#07080c]/90 backdrop-blur-md border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-zinc-400 hover:text-white p-1"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="font-red-rose text-xl sm:text-2xl font-bold text-white tracking-tight capitalize">
                {activeTab === "providers"
                  ? "Top Gaming Providers (Marquee)"
                  : activeTab === "directory"
                  ? "Providers Directory (Public Page)"
                  : activeTab === "inquiries"
                  ? "Customer Inquiries & Leads"
                  : activeTab === "contact"
                  ? "Contact Information"
                  : activeTab === "social"
                  ? "Our Social Links"
                  : "Admin Management & Security"}
              </h1>
              <p className="text-xs text-zinc-400 hidden sm:block">
                {activeTab === "providers"
                  ? "Manage providers rotating in the website homepage carousel"
                  : activeTab === "directory"
                  ? "Manage providers displayed on the /providers page (Logo, Description, Priority, Countries)"
                  : activeTab === "inquiries"
                  ? "Review and manage incoming enquiries submitted through the website contact form"
                  : activeTab === "contact"
                  ? "Update phone number, email address, and office headquarters"
                  : activeTab === "social"
                  ? "Manage official social media links displayed across the footer"
                  : "Administrator accounts, permissions, and security"}
              </p>
            </div>
          </div>

          {/* Quick Actions & Status */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live API Connected</span>
            </div>

            {activeTab === "providers" && (
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white text-xs font-medium shadow-[0_4px_16px_rgba(233,78,27,0.35)] transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Marquee Provider</span>
              </button>
            )}

            {activeTab === "directory" && (
              <button
                onClick={openAddCompanyModal}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white text-xs font-medium shadow-[0_4px_16px_rgba(233,78,27,0.35)] transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Directory Provider</span>
              </button>
            )}

            {activeTab === "inquiries" && (
              <button
                onClick={fetchInquiries}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-medium transition-all cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${inquiriesLoading ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>
            )}
          </div>
        </header>

        {/* ===================== TAB 1: TOP GAMING PROVIDERS (HOME MARQUEE) ===================== */}
        {activeTab === "providers" && (
          <main className="p-6 sm:p-8 space-y-6 flex-1">
            {/* Providers Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Total Marquee Providers</span>
                <p className="font-red-rose text-2xl font-bold text-white">
                  {providers.length}
                </p>
                <span className="text-[11px] text-zinc-500">Homepage carousel</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Active in Carousel</span>
                <p className="font-red-rose text-2xl font-bold text-emerald-400">
                  {providers.filter((p) => p.status === "active").length}
                </p>
                <span className="text-[11px] text-emerald-500/80">Live in marquee</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Total Integrated Games</span>
                <p className="font-red-rose text-2xl font-bold text-white">
                  {providers.reduce((acc, p) => acc + (p.gamesCount || 0), 0)}+
                </p>
                <span className="text-[11px] text-zinc-500">Slots, crash &amp; live</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Average RTP</span>
                <p className="font-red-rose text-2xl font-bold text-[#FF5722]">
                  96.8%
                </p>
                <span className="text-[11px] text-zinc-500">Standard retention</span>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-[#FF5722] text-white shadow-[0_2px_10px_rgba(255,87,34,0.35)]"
                        : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search marquee providers..."
                  className="w-full pl-9 pr-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-lg text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#FF5722]"
                />
              </div>
            </div>

            {/* Providers Grid */}
            {providersLoading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 text-[#FF5722] animate-spin" />
                <p className="text-xs text-zinc-400">Loading marquee providers...</p>
              </div>
            ) : filteredProviders.length === 0 ? (
              <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 mx-auto">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <h4 className="font-red-rose text-base font-bold text-white">
                  No Providers Found
                </h4>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProviders.map((provider) => (
                  <div
                    key={provider._id}
                    className="group rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-[#FF5722]/50 p-5 space-y-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,87,34,0.12)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center p-2 relative overflow-hidden group-hover:border-[#FF5722]/30 transition-colors">
                          <Image
                            src={provider.logo || "/images/providers/pg-soft.png"}
                            alt={provider.name}
                            width={56}
                            height={56}
                            unoptimized
                            className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all"
                          />
                        </div>

                        <div className="flex flex-col items-end gap-1.5">
                          <button
                            onClick={() => handleToggleStatus(provider._id)}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                              provider.status === "active"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                                : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/30 hover:bg-zinc-500/20"
                            }`}
                          >
                            <Power className="w-2.5 h-2.5" />
                            <span>{provider.status}</span>
                          </button>
                          <span className="text-[10px] text-zinc-500 font-medium">
                            {provider.category}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h4 className="font-red-rose text-base font-bold text-white group-hover:text-[#FF5722] transition-colors">
                          {provider.name}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                          {provider.description ||
                            "High performance integrated gaming provider available across FOXONEXT Aggregator."}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
                      <div>
                        <span className="text-zinc-500 block text-[10px] uppercase font-semibold">
                          Games
                        </span>
                        <span className="text-white font-medium">
                          {provider.gamesCount || 50}+ titles
                        </span>
                      </div>
                      <button
                        onClick={() => handleDeleteProvider(provider._id, provider.name)}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        )}

        {/* ===================== TAB 2: PROVIDERS DIRECTORY (FOR /providers PAGE) ===================== */}
        {activeTab === "directory" && (
          <main className="p-6 sm:p-8 space-y-6 flex-1">
            {/* Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Total Directory Providers</span>
                <p className="font-red-rose text-2xl font-bold text-white">
                  {companyProviders.length}
                </p>
                <span className="text-[11px] text-zinc-500">Connected to /providers</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Live on Website</span>
                <p className="font-red-rose text-2xl font-bold text-emerald-400">
                  {companyProviders.filter((p) => p.status === "active").length}
                </p>
                <span className="text-[11px] text-emerald-500/80">Active visibility</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Top Priority (1-3)</span>
                <p className="font-red-rose text-2xl font-bold text-[#FF5722]">
                  {companyProviders.filter((p) => (p.priority || 99) <= 3).length}
                </p>
                <span className="text-[11px] text-zinc-500">Featured at top</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Jurisdictions</span>
                <p className="font-red-rose text-2xl font-bold text-blue-400">
                  Global
                </p>
                <span className="text-[11px] text-zinc-500">All countries mapped</span>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={companySearchQuery}
                  onChange={(e) => setCompanySearchQuery(e.target.value)}
                  placeholder="Search by provider name, description, or country..."
                  className="w-full pl-10 pr-4 py-2 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#FF5722]"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400">Country:</span>
                  <select
                    value={companyCountryFilter}
                    onChange={(e) => setCompanyCountryFilter(e.target.value)}
                    className="px-3 py-1.5 bg-[#12141d] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="All">All Countries</option>
                    {COMMON_COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={openAddCompanyModal}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white text-xs font-medium shadow-[0_2px_12px_rgba(233,78,27,0.35)] transition-all cursor-pointer whitespace-nowrap"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Provider</span>
                </button>
              </div>
            </div>

            {/* Providers Directory Cards Grid */}
            {companyProvidersLoading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 text-[#FF5722] animate-spin" />
                <p className="text-xs text-zinc-400">Loading directory providers...</p>
              </div>
            ) : filteredCompanyProviders.length === 0 ? (
              <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 mx-auto">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="font-red-rose text-base font-bold text-white">
                  No Directory Providers Found
                </h4>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  No providers match your search or filter. Click &ldquo;Add Provider&rdquo; to add a new studio to the public Providers page.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredCompanyProviders.map((provider) => (
                  <div
                    key={provider._id}
                    className="rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-[#FF5722]/40 p-5 space-y-4 transition-all duration-300 flex flex-col justify-between shadow-lg"
                  >
                    <div className="space-y-3">
                      {/* Top Bar: Priority Pill & Status Switch */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30 flex items-center gap-1">
                            <ArrowUpDown className="w-3 h-3" />
                            <span>Priority #{provider.priority || 1}</span>
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                            {provider.category || "Slots"}
                          </span>
                        </div>

                        {/* Status Toggle Switch */}
                        <button
                          onClick={() => handleToggleCompanyProviderStatus(provider._id)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                            provider.status === "active"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                              : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/30 hover:bg-zinc-500/20"
                          }`}
                        >
                          <Power className="w-2.5 h-2.5" />
                          <span>{provider.status}</span>
                        </button>
                      </div>

                      {/* Middle: Logo & Title */}
                      <div className="flex items-center gap-3.5 pt-1">
                        <div className="w-16 h-16 rounded-xl bg-[#08090e] border border-white/[0.08] flex items-center justify-center p-2 relative overflow-hidden flex-shrink-0">
                          <Image
                            src={provider.logo || "/images/providers/pg-soft.png"}
                            alt={provider.name}
                            width={64}
                            height={64}
                            unoptimized
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-red-rose text-lg font-bold text-white truncate">
                            {provider.name}
                          </h4>
                          <span className="text-[11px] text-zinc-400 block mt-0.5">
                            {provider.gamesCount || 50}+ Games Available
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold mb-1">
                          Short Description:
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                          {provider.description || "No description provided."}
                        </p>
                      </div>

                      {/* All Country Names Display */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold flex items-center gap-1">
                          <Globe className="w-3 h-3 text-[#FF5722]" />
                          <span>Supported Countries ({provider.countries?.length || 0}):</span>
                        </span>
                        <div className="flex items-center gap-1.5 flex-wrap max-h-24 overflow-y-auto">
                          {(provider.countries && provider.countries.length > 0
                            ? provider.countries
                            : ["Global"]
                          ).map((country) => (
                            <span
                              key={country}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-[11px] text-zinc-500">
                        Live on /providers
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditCompanyModal(provider)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteCompanyProvider(provider._id, provider.name)}
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                          title="Delete Provider"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        )}

        {/* ===================== TAB 3: CUSTOMER INQUIRIES & LEADS ===================== */}
        {activeTab === "inquiries" && (
          <main className="p-6 sm:p-8 space-y-6 flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Total Submissions</span>
                <p className="font-red-rose text-2xl font-bold text-white">
                  {inquiriesMetrics.total}
                </p>
                <span className="text-[11px] text-zinc-500">Contact leads received</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">New / Unread Leads</span>
                <p className="font-red-rose text-2xl font-bold text-emerald-400 flex items-center gap-2">
                  <span>{inquiriesMetrics.new}</span>
                  {inquiriesMetrics.new > 0 && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  )}
                </p>
                <span className="text-[11px] text-emerald-500/80">Require follow up</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">In Discussion</span>
                <p className="font-red-rose text-2xl font-bold text-amber-400">
                  {inquiriesMetrics.inProgress}
                </p>
                <span className="text-[11px] text-zinc-500">Sales pipeline</span>
              </div>

              <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-5 space-y-1">
                <span className="text-xs text-zinc-400">Resolved / Closed</span>
                <p className="font-red-rose text-2xl font-bold text-blue-400">
                  {inquiriesMetrics.resolved}
                </p>
                <span className="text-[11px] text-zinc-500">Completed inquiries</span>
              </div>
            </div>

            <div className="rounded-xl bg-[#0d0f17] border border-white/10 p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={inquirySearch}
                  onChange={(e) => setInquirySearch(e.target.value)}
                  placeholder="Search by lead name, email, phone, or keyword..."
                  className="w-full pl-10 pr-4 py-2 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#FF5722]"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
                {(["all", "new", "in-progress", "resolved"] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setInquiryStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap capitalize ${
                      inquiryStatusFilter === st
                        ? "bg-[#FF5722] text-white shadow-[0_2px_10px_rgba(255,87,34,0.35)]"
                        : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {st === "all" ? "All Leads" : st.replace("-", " ")}
                    {st === "new" && inquiriesMetrics.new > 0 && (
                      <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-emerald-500 text-white text-[10px]">
                        {inquiriesMetrics.new}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {inquiriesLoading && inquiries.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 text-[#FF5722] animate-spin" />
                <p className="text-xs text-zinc-400">Loading customer submissions...</p>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 mx-auto">
                  <Inbox className="w-6 h-6" />
                </div>
                <h4 className="font-red-rose text-base font-bold text-white">
                  No Inquiries Found
                </h4>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredInquiries.map((inq) => (
                  <div
                    key={inq._id}
                    className={`rounded-2xl bg-[#0d0f17] border transition-all p-5 space-y-4 hover:border-white/20 ${
                      inq.status === "new"
                        ? "border-emerald-500/30 bg-[#0d1017]/90 shadow-[0_4px_25px_rgba(16,185,129,0.06)]"
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#E94E1B] flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                          {inq.fullName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-red-rose text-base font-bold text-white">
                              {inq.fullName}
                            </h4>
                            <span
                              className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border ${
                                inq.status === "new"
                                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                                  : inq.status === "in-progress"
                                  ? "bg-amber-500/10 text-amber-400 border-amber-500/25"
                                  : inq.status === "resolved"
                                  ? "bg-blue-500/10 text-blue-400 border-blue-500/25"
                                  : "bg-zinc-500/10 text-zinc-400 border-zinc-500/25"
                              }`}
                            >
                              {inq.status}
                            </span>
                          </div>
                          <span className="text-[11px] text-zinc-500 flex items-center gap-1.5 mt-0.5">
                            <Clock className="w-3 h-3" />
                            {new Date(inq.createdAt).toLocaleString(undefined, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap">
                        {inq.status !== "in-progress" && (
                          <button
                            onClick={() => handleUpdateInquiryStatus(inq._id, "in-progress")}
                            className="px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 text-[11px] font-medium transition-colors cursor-pointer"
                          >
                            Mark In Progress
                          </button>
                        )}
                        {inq.status !== "resolved" && (
                          <button
                            onClick={() => handleUpdateInquiryStatus(inq._id, "resolved")}
                            className="px-2.5 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 text-[11px] font-medium transition-colors cursor-pointer"
                          >
                            Mark Resolved
                          </button>
                        )}
                        {inq.status !== "new" && (
                          <button
                            onClick={() => handleUpdateInquiryStatus(inq._id, "new")}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 text-[11px] font-medium transition-colors cursor-pointer"
                          >
                            Reopen
                          </button>
                        )}

                        <button
                          onClick={() => setSelectedInquiry(inq)}
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors cursor-pointer ml-1"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteInquiry(inq._id, inq.fullName)}
                          className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1 border-t border-white/[0.06]">
                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <Mail className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0" />
                        <a
                          href={`mailto:${inq.email}?subject=Re: Your FOXONEXT Inquiry`}
                          className="text-zinc-300 hover:text-white truncate hover:underline"
                        >
                          {inq.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <Phone className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0" />
                        <span className="text-zinc-300 truncate">
                          {inq.phone || "Not provided"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <MessageSquare className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0" />
                        <span className="text-zinc-300 truncate font-medium">
                          {inq.enquiryType || "General Enquiry"}
                        </span>
                      </div>
                    </div>

                    {inq.message && (
                      <div className="p-3 rounded-xl bg-[#08090e] border border-white/[0.06] text-xs text-zinc-300 leading-relaxed">
                        <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold mb-1">
                          Message Body:
                        </span>
                        <p className="line-clamp-3 whitespace-pre-line">{inq.message}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </main>
        )}

        {/* ===================== TAB 4: CONTACT DETAILS ===================== */}
        {activeTab === "contact" && (
          <main className="p-6 sm:p-8 space-y-8 flex-1 max-w-4xl">
            <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-red-rose text-lg font-bold text-white">
                    Contact Us Details
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Manage telephone, email, and location shown across the website
                  </p>
                </div>
              </div>
            </div>

            {/* Live Website Preview Card */}
            <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Live Website Appearance Preview
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  Synced with Footer &amp; Contact Page
                </span>
              </div>

              <div className="p-6 rounded-xl bg-[#07080c] border border-white/[0.07] max-w-md space-y-4">
                <h4
                  className="font-red-rose text-lg sm:text-xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
                >
                  Contact Us
                </h4>

                <div className="space-y-3 font-poppins text-xs sm:text-sm text-zinc-400">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#FF5722] flex-shrink-0" />
                    <span className="text-zinc-200">{contactForm.phone || "No phone set"}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#FF5722] flex-shrink-0" />
                    <span className="text-zinc-200">{contactForm.email || "No email set"}</span>
                  </div>
                  <div className="flex items-start gap-2.5 pt-1">
                    <MapPin className="w-4 h-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed text-zinc-400">
                      <p className="text-zinc-200 font-medium">{contactForm.companyName}</p>
                      <p>{contactForm.addressLine1}</p>
                      <p>{contactForm.addressLine2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Contact Form */}
            <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-[#FF5722]" />
                <h3 className="font-red-rose text-base font-bold text-white">
                  Edit Contact Information
                </h3>
              </div>

              {contactStatus.msg && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-medium flex items-center gap-2.5 ${
                    contactStatus.type === "success"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
                      : "bg-red-500/10 text-red-400 border border-red-500/25"
                  }`}
                >
                  {contactStatus.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{contactStatus.msg}</span>
                </div>
              )}

              <form onSubmit={handleSaveContactInfo} className="space-y-5 text-xs">
                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="text"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, phone: e.target.value })
                    }
                    placeholder="+971 58 191 0073"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>Inquiry &amp; Support Email</span>
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    placeholder="sales@cloudzy.com"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>Company Name / Entity</span>
                  </label>
                  <input
                    type="text"
                    value={contactForm.companyName}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, companyName: e.target.value })
                    }
                    placeholder="Cloudzy AI Information Technology LLC."
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>Address Line 1</span>
                  </label>
                  <input
                    type="text"
                    value={contactForm.addressLine1}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, addressLine1: e.target.value })
                    }
                    placeholder="Bin Dasmal Building 1, Office 80"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>Address Line 2</span>
                  </label>
                  <input
                    type="text"
                    value={contactForm.addressLine2}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, addressLine2: e.target.value })
                    }
                    placeholder="Al Goze Industrial First, Dubai · United Arab Emirates"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={contactLoading}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white text-xs font-medium shadow-[0_4px_16px_rgba(233,78,27,0.35)] transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                  >
                    {contactLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>Save Contact Details</span>
                  </button>
                </div>
              </form>
            </div>
          </main>
        )}

        {/* ===================== TAB 5: OUR SOCIAL LINKS ===================== */}
        {activeTab === "social" && (
          <main className="p-6 sm:p-8 space-y-6 flex-1 max-w-4xl">
            <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF5722]">
                    Live Website Preview
                  </span>
                  <h3 className="font-red-rose text-lg font-bold text-white">
                    Our Social Links
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap pt-2">
                {/* 5 icons */}
                <div className="w-12 h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300">
                  <span className="text-xs font-bold">IG</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300">
                  <span className="text-xs font-bold">TH</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300">
                  <span className="text-xs font-bold">IN</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300">
                  <span className="text-xs font-bold">FB</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center text-zinc-300">
                  <span className="text-xs font-bold">X</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#FF5722]" />
                <h3 className="font-red-rose text-base font-bold text-white">
                  Update Social Profile Links
                </h3>
              </div>

              {socialStatus.msg && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-medium flex items-center gap-2.5 ${
                    socialStatus.type === "success"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
                      : "bg-red-500/10 text-red-400 border border-red-500/25"
                  }`}
                >
                  {socialStatus.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{socialStatus.msg}</span>
                </div>
              )}

              <form onSubmit={handleSaveSocialLinks} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium">Instagram URL</label>
                  <input
                    type="url"
                    value={socialLinks.instagram}
                    onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
                    placeholder="https://instagram.com/foxonext"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium">Threads URL</label>
                  <input
                    type="url"
                    value={socialLinks.threads}
                    onChange={(e) => setSocialLinks({ ...socialLinks, threads: e.target.value })}
                    placeholder="https://threads.net/@foxonext"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium">LinkedIn URL</label>
                  <input
                    type="url"
                    value={socialLinks.linkedin}
                    onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/company/foxonext"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium">Facebook URL</label>
                  <input
                    type="url"
                    value={socialLinks.facebook}
                    onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
                    placeholder="https://facebook.com/foxonext"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium">X (Twitter) URL</label>
                  <input
                    type="url"
                    value={socialLinks.x}
                    onChange={(e) => setSocialLinks({ ...socialLinks, x: e.target.value })}
                    placeholder="https://x.com/foxonext"
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={socialLoading}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white text-xs font-medium shadow-[0_4px_16px_rgba(233,78,27,0.35)] transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                  >
                    {socialLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>Save Social Links</span>
                  </button>
                </div>
              </form>
            </div>
          </main>
        )}

        {/* ===================== TAB 6: ADMIN & SECURITY ===================== */}
        {activeTab === "admin" && (
          <main className="p-6 sm:p-8 space-y-6 flex-1 max-w-4xl">
            <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-red-rose text-lg font-bold text-white">
                    Administrator Profile
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Logged in account credentials and privileges
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-semibold">
                    Admin Name
                  </span>
                  <span className="text-white text-sm font-medium mt-1 block">
                    {adminUser?.name || "Foxo Administrator"}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-semibold">
                    Email Address
                  </span>
                  <span className="text-white text-sm font-medium mt-1 block">
                    {adminUser?.email || "admin@foxo.com"}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-semibold">
                    Role &amp; Permission
                  </span>
                  <span className="text-[#FF5722] text-sm font-semibold uppercase mt-1 block">
                    {adminUser?.role || "superadmin"}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300">
                  <KeyRound className="w-5 h-5 text-[#FF5722]" />
                </div>
                <div>
                  <h3 className="font-red-rose text-base font-bold text-white">
                    Change Password
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Update current administrator login password
                  </p>
                </div>
              </div>

              {passStatus.msg && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium flex items-center gap-2 ${
                    passStatus.type === "success"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
                      : "bg-red-500/10 text-red-400 border border-red-500/25"
                  }`}
                >
                  {passStatus.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{passStatus.msg}</span>
                </div>
              )}

              <form onSubmit={handleChangePassword} className="space-y-4 max-w-md text-xs">
                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Current Password</label>
                  <input
                    type="password"
                    required
                    value={passData.currentPassword}
                    onChange={(e) => setPassData({ ...passData, currentPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">New Password</label>
                  <input
                    type="password"
                    required
                    value={passData.newPassword}
                    onChange={(e) => setPassData({ ...passData, newPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Confirm New Password</label>
                  <input
                    type="password"
                    required
                    value={passData.confirmPassword}
                    onChange={(e) => setPassData({ ...passData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={passLoading}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white text-xs font-medium transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {passLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Update Password</span>
                </button>
              </form>
            </div>

            <div className="rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300">
                  <UserPlus className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-red-rose text-base font-bold text-white">
                    Register New Administrator
                  </h3>
                </div>
              </div>

              {adminRegStatus.msg && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium flex items-center gap-2 ${
                    adminRegStatus.type === "success"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
                      : "bg-red-500/10 text-red-400 border border-red-500/25"
                  }`}
                >
                  <span>{adminRegStatus.msg}</span>
                </div>
              )}

              <form onSubmit={handleRegisterAdmin} className="space-y-4 max-w-md text-xs">
                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={newAdminData.name}
                    onChange={(e) => setNewAdminData({ ...newAdminData, name: e.target.value })}
                    placeholder="e.g. John Operator"
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Email Address</label>
                  <input
                    type="email"
                    required
                    value={newAdminData.email}
                    onChange={(e) => setNewAdminData({ ...newAdminData, email: e.target.value })}
                    placeholder="e.g. team@foxo.com"
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Initial Password</label>
                  <input
                    type="password"
                    required
                    value={newAdminData.password}
                    onChange={(e) => setNewAdminData({ ...newAdminData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={adminRegLoading}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white text-xs font-medium transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {adminRegLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Register Admin</span>
                </button>
              </form>
            </div>
          </main>
        )}
      </div>

      {/* ===================== MODAL: ADD / EDIT COMPANY PROVIDER (FOR /providers PAGE) ===================== */}
      {isCompanyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#0d0f17] border border-white/10 p-6 sm:p-7 space-y-5 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#FF5722]" />
                <h3 className="font-red-rose text-lg font-bold text-white">
                  {editingCompanyProvider ? "Edit Directory Provider" : "Add Directory Provider"}
                </h3>
              </div>
              <button
                onClick={() => setIsCompanyModalOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {companyFormError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-xs">
                {companyFormError}
              </div>
            )}

            <form onSubmit={handleSaveCompanyProvider} className="space-y-4 text-xs font-poppins">
              {/* Row 1: Provider Name & Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-zinc-300 font-medium">Provider Name *</label>
                  <input
                    type="text"
                    required
                    value={companyFormData.name}
                    onChange={(e) =>
                      setCompanyFormData({ ...companyFormData, name: e.target.value })
                    }
                    placeholder="e.g. PG Soft"
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium flex items-center justify-between">
                    <span>Priority Order</span>
                    <span className="text-[10px] text-[#FF5722]">1 = Highest</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={companyFormData.priority}
                    onChange={(e) =>
                      setCompanyFormData({
                        ...companyFormData,
                        priority: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
              </div>

              {/* Row 2: Logo image path & preset picker with live preview */}
              <div className="space-y-1.5">
                <label className="text-zinc-300 font-medium">Provider Logo</label>
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-10 rounded-lg bg-[#08090e] border border-white/10 flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
                    <Image
                      src={companyFormData.logo || "/images/providers/pg-soft.png"}
                      alt="Logo preview"
                      width={40}
                      height={40}
                      unoptimized
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <input
                    type="text"
                    value={companyFormData.logo}
                    onChange={(e) =>
                      setCompanyFormData({ ...companyFormData, logo: e.target.value })
                    }
                    placeholder="/images/providers/pg-soft.png or URL"
                    className="flex-1 px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        setCompanyFormData({ ...companyFormData, logo: e.target.value });
                      }
                    }}
                    className="px-2.5 py-2 bg-[#12141d] border border-white/10 rounded-lg text-zinc-300 focus:outline-none text-[11px]"
                  >
                    <option value="">Presets...</option>
                    <option value="/images/providers/pg-soft.png">PG Soft</option>
                    <option value="/images/providers/pragmatic.png">Pragmatic</option>
                    <option value="/images/providers/jdb.png">JDB</option>
                    <option value="/images/providers/spribe.png">SPRIBE</option>
                    <option value="/images/providers/db-gaming.png">DB Gaming</option>
                    <option value="/images/providers/in-out.png">IN OUT</option>
                    <option value="/images/providers/pescaria.png">Pescaria</option>
                    <option value="/images/providers/cq9.png">CQ9</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Short Description */}
              <div className="space-y-1">
                <label className="text-zinc-300 font-medium">Short Description</label>
                <textarea
                  rows={2}
                  value={companyFormData.description}
                  onChange={(e) =>
                    setCompanyFormData({ ...companyFormData, description: e.target.value })
                  }
                  placeholder="Studio overview and key game mechanics..."
                  className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                />
              </div>

              {/* Row 4: Countries Supported (Show All Country Names) */}
              <div className="space-y-2 pt-1 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>Countries Supported ({companyFormData.countries.length} selected)</span>
                  </label>
                  <span className="text-[10px] text-zinc-500">
                    Click tags to toggle
                  </span>
                </div>

                {/* Common country toggle chips */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {COMMON_COUNTRIES.map((country) => {
                    const selected = companyFormData.countries.includes(country);
                    return (
                      <button
                        key={country}
                        type="button"
                        onClick={() => toggleCountryInForm(country)}
                        className={`text-[10px] px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer border ${
                          selected
                            ? "bg-[#FF5722] text-white border-[#FF5722]"
                            : "bg-white/[0.03] text-zinc-400 hover:text-white border-white/[0.08]"
                        }`}
                      >
                        {selected ? "✓ " : "+ "}
                        {country}
                      </button>
                    );
                  })}
                </div>

                {/* Custom country add input */}
                <div className="flex gap-2 pt-1">
                  <input
                    type="text"
                    value={customCountryInput}
                    onChange={(e) => setCustomCountryInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addCustomCountry();
                      }
                    }}
                    placeholder="Type custom country name and press Enter..."
                    className="flex-1 px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-[#FF5722]"
                  />
                  <button
                    type="button"
                    onClick={addCustomCountry}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-white transition-colors cursor-pointer"
                  >
                    Add Country
                  </button>
                </div>

                {/* List of all active selected countries */}
                <div className="p-2.5 rounded-lg bg-[#08090e] border border-white/[0.06] flex items-center gap-1.5 flex-wrap max-h-24 overflow-y-auto">
                  {companyFormData.countries.length === 0 ? (
                    <span className="text-[11px] text-zinc-500">
                      No countries selected. Click chips above to select.
                    </span>
                  ) : (
                    companyFormData.countries.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-zinc-300 border border-white/10"
                      >
                        <span>{c}</span>
                        <button
                          type="button"
                          onClick={() => removeCountryFromForm(c)}
                          className="hover:text-red-400 text-zinc-500"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Row 5: Category, Games Count & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Category</label>
                  <select
                    value={companyFormData.category}
                    onChange={(e) =>
                      setCompanyFormData({ ...companyFormData, category: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#12141d] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="Slots">Slots</option>
                    <option value="Live Casino">Live Casino</option>
                    <option value="Crash Games">Crash Games</option>
                    <option value="Fishing Games">Fishing Games</option>
                    <option value="Table Games">Table Games</option>
                    <option value="Multi-Product">Multi-Product</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Games Count</label>
                  <input
                    type="number"
                    value={companyFormData.gamesCount}
                    onChange={(e) =>
                      setCompanyFormData({
                        ...companyFormData,
                        gamesCount: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Visibility Status</label>
                  <select
                    value={companyFormData.status}
                    onChange={(e) =>
                      setCompanyFormData({
                        ...companyFormData,
                        status: e.target.value as "active" | "inactive",
                      })
                    }
                    className="w-full px-3 py-2 bg-[#12141d] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="active">Active (Visible)</option>
                    <option value="inactive">Inactive (Hidden)</option>
                  </select>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setIsCompanyModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={companyFormSubmitting}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white font-medium transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  {companyFormSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>{editingCompanyProvider ? "Update Provider" : "Save Provider"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== MODAL: ADD TOP MARQUEE PROVIDER ===================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-[#FF5722]" />
                <h3 className="font-red-rose text-lg font-bold text-white">
                  Add Marquee Provider
                </h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-xs">
                {formError}
              </div>
            )}

            <form onSubmit={handleCreateProvider} className="space-y-4 text-xs font-poppins">
              <div className="space-y-1">
                <label className="text-zinc-300 font-medium">Provider Name *</label>
                <input
                  type="text"
                  required
                  value={newProvider.name}
                  onChange={(e) =>
                    setNewProvider({ ...newProvider, name: e.target.value })
                  }
                  placeholder="e.g. Evolution Gaming"
                  className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-zinc-300 font-medium">Logo Image Path or URL</label>
                <input
                  type="text"
                  value={newProvider.logo}
                  onChange={(e) =>
                    setNewProvider({ ...newProvider, logo: e.target.value })
                  }
                  placeholder="/images/providers/pg-soft.png"
                  className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Category</label>
                  <select
                    value={newProvider.category}
                    onChange={(e) =>
                      setNewProvider({ ...newProvider, category: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#12141d] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="Slots">Slots</option>
                    <option value="Live Casino">Live Casino</option>
                    <option value="Crash Games">Crash Games</option>
                    <option value="Fishing Games">Fishing Games</option>
                    <option value="Table Games">Table Games</option>
                    <option value="Multi-Product">Multi-Product</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-300 font-medium">Games Count</label>
                  <input
                    type="number"
                    value={newProvider.gamesCount}
                    onChange={(e) =>
                      setNewProvider({
                        ...newProvider,
                        gamesCount: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-300 font-medium">Description</label>
                <textarea
                  rows={2}
                  value={newProvider.description}
                  onChange={(e) =>
                    setNewProvider({ ...newProvider, description: e.target.value })
                  }
                  placeholder="Brief overview..."
                  className="w-full px-3 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF5722]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white font-medium transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Marquee Provider</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== VIEW INQUIRY DETAILS MODAL ===================== */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0d0f17] border border-white/10 p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Inbox className="w-5 h-5 text-[#FF5722]" />
                <h3 className="font-red-rose text-lg font-bold text-white">
                  Customer Inquiry Details
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[10px] uppercase font-semibold">
                    Full Name
                  </span>
                  <span className="text-white text-sm font-medium mt-0.5 block">
                    {selectedInquiry.fullName}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[10px] uppercase font-semibold">
                    Current Status
                  </span>
                  <span className="text-[#FF5722] text-sm font-semibold uppercase mt-0.5 block">
                    {selectedInquiry.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[10px] uppercase font-semibold">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="text-white text-xs font-medium mt-0.5 block hover:underline hover:text-[#FF5722] truncate"
                  >
                    {selectedInquiry.email}
                  </a>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[10px] uppercase font-semibold">
                    Phone Number
                  </span>
                  <span className="text-white text-xs font-medium mt-0.5 block">
                    {selectedInquiry.phone || "Not provided"}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-zinc-500 block text-[10px] uppercase font-semibold">
                  Enquiry Subject / Type
                </span>
                <span className="text-white text-sm font-medium mt-0.5 block">
                  {selectedInquiry.enquiryType}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#08090e] border border-white/[0.06] space-y-1.5">
                <span className="text-zinc-500 block text-[10px] uppercase font-semibold">
                  Full Customer Message
                </span>
                <p className="text-white text-xs leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {selectedInquiry.message || "No message body provided."}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-zinc-400">
                <span>Submitted Date:</span>
                <span className="text-white font-medium">
                  {new Date(selectedInquiry.createdAt).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                {(["new", "in-progress", "resolved"] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => handleUpdateInquiryStatus(selectedInquiry._id, st)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize transition-all cursor-pointer ${
                      selectedInquiry.status === st
                        ? "bg-[#FF5722] text-white"
                        : "bg-white/[0.04] text-zinc-400 hover:text-white"
                    }`}
                  >
                    {st.replace("-", " ")}
                  </button>
                ))}
              </div>

              <a
                href={`mailto:${selectedInquiry.email}?subject=Re: FOXONEXT Inquiry - ${selectedInquiry.enquiryType}&body=Hi ${selectedInquiry.fullName},%0D%0A%0D%0A`}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#E94E1B] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white text-xs font-medium shadow-[0_4px_16px_rgba(233,78,27,0.35)] transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Reply by Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
