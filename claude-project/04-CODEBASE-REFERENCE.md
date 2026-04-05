# FullStackGrowth — Complete Codebase Reference

> This document contains the complete source code for every file in the FullStackGrowth website.
> GitHub Repo: Mce0822/FSG
> Branch: claude/fullstackgrowth-website-UxSAZ

---

## Configuration Files

### package.json
```json
{
  "name": "fullstackgrowth",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.2.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e5ff",
          200: "#bcd2ff",
          300: "#8eb5ff",
          400: "#598dff",
          500: "#3366ff",
          600: "#1a44f5",
          700: "#1333e1",
          800: "#162bb6",
          900: "#18298f",
          950: "#141b57",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
```

### postcss.config.js
```javascript
/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### .eslintrc.json
```json
{
  "extends": "next/core-web-vitals"
}
```

---

## App Files

### src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-slate-950 text-white;
  }

  ::selection {
    @apply bg-brand-500/30 text-white;
  }
}

@layer components {
  .glass {
    @apply bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-xl;
  }

  .glass-strong {
    @apply bg-white/[0.07] backdrop-blur-2xl border border-white/[0.12] shadow-2xl;
  }

  .glass-card {
    @apply glass rounded-2xl p-6 transition-all duration-300;
  }

  .glass-card:hover {
    @apply bg-white/[0.07] border-white/[0.15] shadow-2xl;
  }

  .gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-300;
  }

  .gradient-text-brand {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-300;
  }

  .section-padding {
    @apply py-24 md:py-32 px-4 sm:px-6 lg:px-8;
  }

  .container-max {
    @apply max-w-7xl mx-auto;
  }

  .glow {
    box-shadow: 0 0 60px -12px rgba(51, 102, 255, 0.25);
  }

  .glow-sm {
    box-shadow: 0 0 30px -8px rgba(51, 102, 255, 0.2);
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
```

### src/app/layout.tsx
```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FullStackGrowth — All-in-One CRM, Marketing & Advertising Platform",
  description:
    "Stop juggling tools. FullStackGrowth combines CRM, marketing automation, and advertising in one simple platform built for busy business owners.",
  keywords: [
    "CRM",
    "marketing automation",
    "advertising platform",
    "small business",
    "customer management",
  ],
  openGraph: {
    title: "FullStackGrowth — All-in-One CRM, Marketing & Advertising Platform",
    description:
      "Stop juggling tools. FullStackGrowth combines CRM, marketing automation, and advertising in one simple platform built for busy business owners.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### src/app/page.tsx
```typescript
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PainPoints />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
```

---

## UI Components

### src/components/ui/Button.tsx
```typescript
"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-400/30 hover:shadow-xl",
    secondary:
      "glass hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-white/[0.2]",
    ghost: "text-slate-300 hover:text-white hover:bg-white/[0.05]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-3",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
```

### src/components/ui/GlassCard.tsx
```typescript
"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  );
}
```

### src/components/ui/GridBackground.tsx
```typescript
export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
    </div>
  );
}
```

### src/components/ui/SectionHeading.tsx
```typescript
"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`max-w-3xl mb-16 ${alignment}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
```

---

## Page Section Components


### src/components/Navbar.tsx
```typescript
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

      {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 3v18h18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 16l4-8 4 4 5-9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                FullStack<span className="text-brand-400">Growth</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button href="#contact" size="sm">
                Book Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-16 left-4 right-4 glass-strong rounded-2xl p-6"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-3 pt-3 border-t border-white/[0.08]">
                  <Button
                    href="#contact"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

### src/components/Hero.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Button from "./ui/Button";
import GridBackground from "./ui/GridBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <GridBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max mx-auto section-padding pt-32 md:pt-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by 500+ small businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">Stop Juggling Tools.</span>
            <br />
            <span className="gradient-text-brand">Start Growing.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CRM, marketing, and advertising — all in one platform that&apos;s
            actually easy to use. Built for business owners who&apos;d rather
            run their business than wrestle with technology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="#contact" size="lg">
              Book Your Free Consultation
              <ArrowRight size={18} />
            </Button>
            <Button href="#process" variant="secondary" size="lg">
              <Play size={16} />
              See How It Works
            </Button>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            className="mt-16 glass rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "500+", label: "Businesses served" },
                { value: "3.2x", label: "Avg. ROI increase" },
                { value: "45%", label: "Time saved weekly" },
                { value: "98%", label: "Client satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

### src/components/PainPoints.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Puzzle,
  TrendingDown,
  DollarSign,
  AlertTriangle,
  Frown,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";

const painPoints = [
  {
    icon: Clock,
    title: "No Time for Tech",
    description:
      "You're spending hours learning software instead of serving customers and growing your business.",
  },
  {
    icon: Puzzle,
    title: "Too Many Disconnected Tools",
    description:
      "Your CRM doesn't talk to your email tool, which doesn't talk to your ads — creating gaps where leads fall through.",
  },
  {
    icon: TrendingDown,
    title: "Leads Slipping Away",
    description:
      "Without a unified system, follow-ups get missed, prospects go cold, and revenue walks out the door.",
  },
  {
    icon: DollarSign,
    title: "Wasting Money on Ads",
    description:
      "You're spending on advertising but can't track what's actually working because data lives in five different places.",
  },
  {
    icon: AlertTriangle,
    title: "Overwhelmed by Complexity",
    description:
      "Enterprise tools built for large teams with full-time marketers — not for a business owner wearing every hat.",
  },
  {
    icon: Frown,
    title: "Frustrated and Stuck",
    description:
      "You know your business needs better marketing, but you don't know where to start and can't afford to hire an agency.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative section-padding" id="problem">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-max mx-auto">
        <SectionHeading
          label="The Problem"
          title="Running a Business Is Hard Enough Without Fighting Your Software"
          description="Sound familiar? You're not alone. Most small business owners face these exact challenges — and they shouldn't have to."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <GlassCard key={point.title} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <point.icon size={20} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Transition Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto text-balance">
            What if one platform could handle{" "}
            <span className="text-white font-semibold">all of this</span> —
            without the learning curve?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

### src/components/Benefits.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Target,
  BarChart3,
  Zap,
  Users,
  Shield,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";

const benefits = [
  {
    icon: LayoutDashboard,
    title: "One Dashboard, Everything You Need",
    description:
      "See your customers, campaigns, and revenue all in one place. No more toggling between tabs or losing track of where things stand.",
    highlight: "Single source of truth",
  },
  {
    icon: Target,
    title: "Marketing That Runs Itself",
    description:
      "Set up automated email sequences, follow-ups, and campaigns once — then let them work while you focus on what you do best.",
    highlight: "Hands-free automation",
  },
  {
    icon: BarChart3,
    title: "Ads That Actually Pay Off",
    description:
      "See exactly which ads bring in customers and which waste money. Make smarter decisions with clear, connected data.",
    highlight: "Full ROI visibility",
  },
  {
    icon: Zap,
    title: "Set Up in Minutes, Not Months",
    description:
      "No IT team required. Our platform was designed from day one for people who don't have time to read a manual.",
    highlight: "Zero learning curve",
  },
  {
    icon: Users,
    title: "Never Lose a Lead Again",
    description:
      "Every customer interaction is tracked and organized. Automated reminders ensure no follow-up falls through the cracks.",
    highlight: "Smart lead tracking",
  },
  {
    icon: Shield,
    title: "Support That Has Your Back",
    description:
      "Real humans who understand small business. Get help when you need it — not a chatbot maze or 48-hour email wait.",
    highlight: "White-glove support",
  },
];

export default function Benefits() {
  return (
    <section className="relative section-padding" id="benefits">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max mx-auto relative z-10">
        <SectionHeading
          label="The Solution"
          title="Everything You Need to Grow — Nothing You Don't"
          description="FullStackGrowth replaces the patchwork of tools with one streamlined platform built for the way you actually work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <GlassCard key={benefit.title} delay={i * 0.08} className="group">
              <div className="mb-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <benefit.icon size={20} className="text-brand-400" />
                </div>
                <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                  {benefit.highlight}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Platform Preview */}
        <motion.div
          className="mt-20 glass-strong rounded-2xl p-2 glow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-10 overflow-hidden">
            {/* Mock Dashboard */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <span className="ml-3 text-xs text-slate-500">
                FullStackGrowth Dashboard
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                {
                  label: "Total Leads",
                  value: "1,247",
                  change: "+12.5%",
                  positive: true,
                },
                {
                  label: "Conversion Rate",
                  value: "34.8%",
                  change: "+5.2%",
                  positive: true,
                },
                {
                  label: "Revenue",
                  value: "$84.2K",
                  change: "+22.1%",
                  positive: true,
                },
                {
                  label: "Active Campaigns",
                  value: "12",
                  change: "3 automated",
                  positive: true,
                },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white/[0.03] rounded-lg p-4 border border-white/[0.05]"
                >
                  <div className="text-xs text-slate-500 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-emerald-400 mt-1">
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Mockup */}
            <div className="bg-white/[0.02] rounded-lg p-4 border border-white/[0.05]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-400">Revenue Overview</span>
                <span className="text-xs text-slate-500">Last 12 months</span>
              </div>
              <div className="flex items-end gap-1.5 h-32">
                {[35, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 95].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-400"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

```

### src/components/HowItWorks.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "We start with a 30-minute conversation about your business, goals, and current challenges. No jargon, no hard sell — just honest advice.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Custom Setup",
    description:
      "Our team configures your platform around how your business actually operates. We handle migration, integrations, and all the technical details.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Train",
    description:
      "Go live with confidence. We walk you through everything and make sure you and your team feel comfortable before we step back.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow & Optimize",
    description:
      "With ongoing support and insights, continuously improve your marketing performance and customer relationships month over month.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative section-padding" id="process">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-max mx-auto">
        <SectionHeading
          label="How It Works"
          title="From Overwhelmed to Optimized in Four Simple Steps"
          description="No complicated onboarding. No months of implementation. Here's how we get you from where you are to where you want to be."
        />

        <div className="relative">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-brand-500/40 via-brand-500/20 to-brand-500/40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Step Number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/25 flex items-center justify-center z-10 relative">
                      <step.icon size={22} className="text-brand-400" />
                    </div>
                    <div className="absolute -inset-1 bg-brand-500/5 rounded-xl blur-sm" />
                  </div>
                  <span className="text-sm font-mono text-brand-500/60 font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button href="#contact" size="lg">
            Start With Step 1 — It&apos;s Free
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

```

### src/components/Testimonials.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell & Co. Realty",
    content:
      "Before FullStackGrowth, I was paying for four different tools and still dropping the ball on follow-ups. Now everything is in one place, and my conversion rate has doubled. I wish I'd found this years ago.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Founder, BrightSmile Dental",
    content:
      "I'm a dentist, not a marketer. FullStackGrowth made it possible for me to actually run effective campaigns without hiring a full marketing team. Our new patient bookings are up 65% this quarter.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "CEO, Santos Home Services",
    content:
      "The team walked us through everything and set it all up for us. Within the first month, we could see exactly which of our ads were bringing in jobs and which ones were wasting money. Game changer.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Owner, Chen's Auto Group",
    content:
      "I've tried Salesforce, HubSpot, and a dozen others. They're built for tech companies with IT departments. FullStackGrowth is the first tool that actually feels like it was built for someone like me.",
    rating: 5,
  },
  {
    name: "Patricia Williams",
    role: "Founder, Evergreen Landscaping",
    content:
      "We went from losing 30% of our leads to following up with every single one automatically. Revenue is up, stress is down, and I actually take weekends off now.",
    rating: 5,
  },
  {
    name: "Tom Anderson",
    role: "Owner, Anderson HVAC",
    content:
      "The automated follow-up sequences alone have paid for the platform ten times over. We're closing deals that used to just disappear into the void. Incredible support team too.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative section-padding" id="testimonials">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max mx-auto relative z-10">
        <SectionHeading
          label="Testimonials"
          title="Don't Just Take Our Word for It"
          description="Hear from real business owners who made the switch and never looked back."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="glass-card group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote
                size={24}
                className="text-brand-500/20 mb-3"
              />

              {/* Content */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500/30 to-brand-700/30 border border-brand-500/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-brand-300">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

```

### src/components/About.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import { Award, Heart, Target, Headphones } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";

const values = [
  {
    icon: Heart,
    title: "Built for Real Businesses",
    description:
      "We didn't build this in a Silicon Valley bubble. Every feature comes from real conversations with real business owners about real problems.",
  },
  {
    icon: Target,
    title: "Simplicity Is Our Standard",
    description:
      "If our clients' parents can't figure it out, we redesign it. Powerful doesn't have to mean complicated.",
  },
  {
    icon: Award,
    title: "Results Over Features",
    description:
      "We measure success by your growth, not our feature list. Every tool we build exists because it moves the needle for your business.",
  },
  {
    icon: Headphones,
    title: "Humans, Not Chatbots",
    description:
      "When you reach out for help, you get a real person who knows your account, your industry, and your goals.",
  },
];

export default function About() {
  return (
    <section className="relative section-padding" id="about">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              We&apos;ve Been in Your Shoes — <br />
              <span className="gradient-text-brand">
                That&apos;s Why We Built This
              </span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                FullStackGrowth was born out of frustration. Our founders ran
                small businesses and watched thousands of dollars disappear into
                tools that promised the world but delivered complexity.
              </p>
              <p>
                We built the platform we wished existed — one that handles CRM,
                marketing automation, and advertising in a single, intuitive
                dashboard. No consultants needed. No six-month implementation
                timelines.
              </p>
              <p>
                Today, we help over 500 businesses across dozens of industries
                reclaim their time, connect with their customers, and grow with
                confidence.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                "SOC 2 Certified",
                "GDPR Compliant",
                "99.9% Uptime",
                "24/7 Support",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-slate-300 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <GlassCard key={value.title} delay={i * 0.1}>
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-4">
                  <value.icon size={20} className="text-brand-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

```

### src/components/FinalCTA.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "./ui/Button";
import GridBackground from "./ui/GridBackground";

const included = [
  "30-minute strategy session",
  "Custom growth roadmap",
  "No commitment required",
  "Platform demo included",
];

export default function FinalCTA() {
  return (
    <section className="relative section-padding" id="contact">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <GridBackground />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance">
            Ready to Stop Struggling and{" "}
            <span className="gradient-text-brand">Start Growing?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Book a free, no-pressure consultation. We&apos;ll learn about your
            business, show you what&apos;s possible, and give you an honest
            recommendation — even if it&apos;s not us.
          </p>

          {/* CTA Card */}
          <div className="glass-strong rounded-2xl p-8 md:p-10 glow max-w-lg mx-auto">
            <div className="space-y-3 mb-8">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-3 text-left">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400 flex-shrink-0"
                  />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <Button href="#contact" size="lg" className="w-full">
              Book Your Free Consultation
              <ArrowRight size={18} />
            </Button>

            <p className="mt-4 text-xs text-slate-500">
              Free consultation &middot; No credit card required &middot; Cancel
              anytime
            </p>
          </div>

          {/* Logos / social proof */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-slate-500 mb-4">
              Trusted by businesses in 30+ industries
            </p>
            <div className="flex items-center justify-center gap-8 opacity-40">
              {["Healthcare", "Real Estate", "Home Services", "Automotive", "Retail"].map(
                (industry) => (
                  <span
                    key={industry}
                    className="text-xs font-medium text-slate-400 uppercase tracking-wider hidden sm:block"
                  >
                    {industry}
                  </span>
                )
              )}
              {/* Mobile: show fewer */}
              {["Healthcare", "Real Estate", "Home Services"].map(
                (industry) => (
                  <span
                    key={`mobile-${industry}`}
                    className="text-xs font-medium text-slate-400 uppercase tracking-wider sm:hidden"
                  >
                    {industry}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

```

### src/components/Footer.tsx
```typescript
"use client";

const footerLinks = {
  Product: [
    { label: "Features", href: "#benefits" },
    { label: "How It Works", href: "#process" },
    { label: "Pricing", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 3v18h18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 16l4-8 4 4 5-9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                FullStack<span className="text-brand-400">Growth</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-6">
              All-in-one CRM, marketing, and advertising platform built for busy
              business owners who want results, not complexity.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["X", "Li", "Fb", "Ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} FullStackGrowth. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

```
