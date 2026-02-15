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
