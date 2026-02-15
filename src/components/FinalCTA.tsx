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
