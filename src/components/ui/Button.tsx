import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-poppins font-medium transition-all duration-200 cursor-pointer select-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#E94E1B] via-[#F25722] to-[#FF6229] hover:from-[#f05724] hover:to-[#ff6d36] text-white shadow-[0_4px_24px_rgba(233,78,27,0.38)] hover:shadow-[0_6px_32px_rgba(233,78,27,0.55)] border border-white/10",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-md",
    ghost:
      "text-zinc-300 hover:text-white hover:bg-white/5",
  };

  const sizeStyles = {
    sm: "text-xs px-4 py-2 rounded-lg",
    md: "text-sm px-5 py-2.5 rounded-xl font-medium",
    lg: "text-base px-8 py-3.5 rounded-2xl font-semibold tracking-wide",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", ...props.style }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", ...props.style }}
      {...props}
    >
      {children}
    </button>
  );
}
