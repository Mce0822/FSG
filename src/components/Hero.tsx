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
