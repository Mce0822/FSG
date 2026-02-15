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
