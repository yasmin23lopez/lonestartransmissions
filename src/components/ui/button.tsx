"use client";

import { Phone, ArrowRight } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: "phone" | "arrow" | "none";
  external?: boolean;
}

const variants = {
  primary: "bg-[#DC2626] text-white hover:bg-[#b91c1c]",
  secondary: "bg-[#1314CC] text-white hover:bg-[#0e0ea0]",
  outline: "border-2 border-[#1314CC] text-[#070889] hover:bg-[#1314CC] hover:text-white",
  ghost: "border-2 border-white text-white hover:bg-white hover:text-[#070889]",
};

const sizes = {
  sm: "px-6 py-3 text-sm",
  md: "px-8 py-4",
  lg: "px-10 py-5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  icon = "none",
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-3 font-bold tracking-wider rounded-full transition-all ${variants[variant]} ${sizes[size]} ${className}`;

  const iconElement = icon === "phone" ? (
    <Phone className="w-5 h-5" />
  ) : icon === "arrow" ? (
    <ArrowRight className="w-5 h-5" />
  ) : null;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {icon === "phone" && iconElement}
        <span>{children}</span>
        {icon === "arrow" && iconElement}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {icon === "phone" && iconElement}
      <span>{children}</span>
      {icon === "arrow" && iconElement}
    </button>
  );
}
