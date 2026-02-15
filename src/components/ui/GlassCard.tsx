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
