"use client";

import { Settings } from "lucide-react";
import { AnimatedText } from "./animated-text";
import { FadeIn } from "./fade-in";

interface SectionHeaderProps {
  label: string;
  title: string[];
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ label, title, description, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`space-y-6 ${centered ? "text-center" : ""}`}>
      <FadeIn>
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${light ? "bg-white/10" : "bg-gradient-to-r from-[#1314CC]/10 to-[#070889]/10"}`}>
          <Settings className={`w-3.5 h-3.5 ${light ? "text-white/80" : "text-[#070889]"}`} />
          <span className={`text-xs font-bold tracking-[0.2em] ${light ? "text-white/80" : "text-[#070889]"}`}>
            {label}
          </span>
        </div>
      </FadeIn>
      <h2 className={`text-5xl lg:text-7xl font-[family-name:var(--font-saira)] font-black leading-[0.85] uppercase ${light ? "text-white" : "text-[#070889]"}`}>
        {title.map((line, i) => (
          <AnimatedText key={i} delay={i * 0.1}>{line}</AnimatedText>
        ))}
      </h2>
      {description && (
        <FadeIn delay={0.2}>
          <p className={`text-lg max-w-lg ${light ? "text-white/70" : "text-gray-500"}`}>{description}</p>
        </FadeIn>
      )}
    </div>
  );
}
