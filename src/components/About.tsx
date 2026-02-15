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
