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
