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
