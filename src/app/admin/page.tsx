"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  LogIn,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { getApiUrl, API_BASE_URL } from "@/lib/api";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    // If authenticated token exists and not logging out, redirect to dashboard
    const token = localStorage.getItem("foxo_admin_token");
    const params = new URLSearchParams(window.location.search);
    if (token && !params.get("logout")) {
      window.location.href = "/admin/dashboard";
      return;
    }

    const storedUser = localStorage.getItem("foxo_admin_user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user?.email) {
          setEmail(user.email);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(getApiUrl("/admin/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(
          data.message || "Invalid credentials. Please verify your email and password."
        );
        setLoading(false);
        return;
      }

      if (data.token) {
        localStorage.setItem("foxo_admin_token", data.token);
      }
      if (data.admin) {
        localStorage.setItem("foxo_admin_user", JSON.stringify(data.admin));
      }

      setSuccessMessage(
        `Login successful! Redirecting to Dashboard...`
      );
      setTimeout(() => {
        window.location.href = "/admin/dashboard";
      }, 600);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unable to connect to backend.";
      setErrorMessage(`${msg} (API: ${API_BASE_URL})`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("foxo_admin_token");
    localStorage.removeItem("foxo_admin_user");
    setSuccessMessage(null);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-b from-[#E94E1B]/20 to-transparent blur-[130px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-[#FF5722]/10 blur-[110px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto space-y-6">
        {/* Brand Logo & Title */}
        <div className="text-center space-y-3">
          <Link
            href="/"
            className="inline-block transition-transform duration-200 hover:scale-105"
          >
            <Image
              src="/images/logo.png"
              alt="FOXONEXT"
              width={220}
              height={50}
              className="h-10 w-auto mx-auto object-contain"
              priority
            />
          </Link>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 text-[#FF5722] text-xs font-medium mb-2 font-poppins">
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin Portal
            </div>
            <h1 className="font-red-rose text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Admin Login
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-poppins mt-1">
              Enter your email and password to access the backend
            </p>
          </div>
        </div>

        {/* Login Card */}
        <div className="relative rounded-2xl bg-[#0d0f17]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {/* Success Notification */}
          {successMessage && (
            <div className="mb-5 flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-poppins">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{successMessage}</span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="text-[11px] underline hover:text-emerald-300 ml-2 cursor-pointer font-medium"
              >
                Logout
              </button>
            </div>
          )}

          {/* Error Alert */}
          {errorMessage && (
            <div className="mb-5 flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-poppins leading-relaxed">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-zinc-300 font-poppins"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@foxonext.com"
                  required
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] transition-colors font-poppins"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-zinc-300 font-poppins"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-10 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] transition-colors font-poppins"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E94E1B] via-[#F25722] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white font-poppins font-medium text-sm flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(233,78,27,0.4)] hover:shadow-[0_6px_32px_rgba(233,78,27,0.55)] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Return to website */}
        <div className="text-center font-poppins">
          <Link
            href="/"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
          >
            ← Return to FOXONEXT Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
