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
