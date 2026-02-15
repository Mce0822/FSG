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
