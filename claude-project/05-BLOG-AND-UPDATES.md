# FullStackGrowth — Blog System & Continuous Update Guide

## Part 1: Adding a Blog to the Website

### File Structure to Create
```
src/
├── app/
│   └── blog/
│       ├── page.tsx              # Blog listing page
│       └── [slug]/
│           └── page.tsx          # Individual blog post page
├── content/
│   └── blog/
│       ├── why-small-businesses-need-crm.mdx
│       ├── marketing-automation-guide.mdx
│       └── ...
└── lib/
    └── blog.ts                   # Blog utilities (get posts, parse MDX)
```

### Dependencies to Add
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter reading-time
```

### Blog Listing Page Pattern
```typescript
// src/app/blog/page.tsx
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GridBackground from "@/components/ui/GridBackground";

export const metadata = {
  title: "Blog — FullStackGrowth",
  description: "Practical tips for small business owners on CRM, marketing, and growing your business.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="relative">
      <Navbar />
      <section className="relative section-padding pt-32 md:pt-40">
        <GridBackground />
        <div className="container-max mx-auto relative z-10">
          <SectionHeading
            label="Blog"
            title="Insights for Growing Your Business"
            description="Practical advice on CRM, marketing, and advertising — written for business owners, not marketers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <a key={post.slug} href={`/blog/${post.slug}`}>
                <GlassCard delay={i * 0.08}>
                  <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
```

### Blog Post Page Pattern
```typescript
// src/app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import GridBackground from "@/components/ui/GridBackground";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <main className="relative">
      <Navbar />
      <article className="relative section-padding pt-32 md:pt-40">
        <GridBackground />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 text-balance">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-10">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Blog content rendered from MDX */}
          <div className="prose prose-invert prose-slate max-w-none
            prose-headings:text-white prose-headings:font-semibold
            prose-p:text-slate-300 prose-p:leading-relaxed
            prose-a:text-brand-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-brand-300 prose-code:bg-white/[0.05] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-blockquote:border-brand-500/30 prose-blockquote:text-slate-400
            prose-li:text-slate-300">
            {post.content}
          </div>

          {/* Post CTA */}
          <div className="mt-16 glass-strong rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to simplify your business growth?
            </h3>
            <p className="text-slate-400 mb-6">
              See how FullStackGrowth can help your business — free consultation, no commitment.
            </p>
            <Button href="/#contact" size="lg">
              Book Your Free Consultation
            </Button>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
```

### Blog Utility Pattern
```typescript
// src/lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    return getPostBySlug(slug);
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    author: data.author || "FullStackGrowth Team",
    category: data.category || "Growth Tips",
    readingTime: stats.text,
    content,
  };
}
```

### Blog Post MDX Template
```mdx
---
title: "Why Every Small Business Needs a CRM (Even If You Think You Don't)"
excerpt: "If you're still tracking customers in spreadsheets or your head, you're leaving money on the table. Here's why a CRM changes everything."
date: "2026-04-10"
author: "FullStackGrowth Team"
category: "CRM"
---

Your opening paragraph hooks the reader with a relatable problem...

## Section Heading

Body content here. Keep paragraphs short. Use specific examples and numbers.

> Blockquotes for key takeaways or customer quotes.

### Subsection

- Bullet points for lists
- Keep them scannable
- Each point should stand alone

## The Bottom Line

Wrap up with a clear takeaway and soft CTA back to the consultation.
```

---

## Part 2: Blog Content Strategy

### Content Pillars
1. **CRM & Customer Management** — Why you need it, how to use it, common mistakes
2. **Marketing Automation** — Email sequences, follow-ups, saving time
3. **Advertising ROI** — Tracking what works, stopping what doesn't
4. **Small Business Growth** — General business advice, productivity, scaling
5. **Platform Tips** — FullStackGrowth features, tutorials, best practices

### Target Topics (Starter Blog Posts)

#### CRM
- "Why Every Small Business Needs a CRM (Even If You Think You Don't)"
- "5 Signs You're Losing Customers Because of Poor Follow-Up"
- "CRM vs. Spreadsheet: The Real Cost of 'Good Enough'"

#### Marketing
- "The Only 3 Email Sequences Every Small Business Needs"
- "Marketing Automation for Non-Marketers: A Plain-English Guide"
- "How to Follow Up With Every Lead Without Hiring Anyone"

#### Advertising
- "Stop Wasting Money on Ads: How to Track What Actually Works"
- "Facebook Ads vs. Google Ads: Which One Is Right for Your Business?"
- "The $500 Ad Budget Guide for Local Businesses"

#### Growth
- "How to Get Your Weekends Back: Automating the Busywork"
- "What Growing from 0 to 500 Customers Taught Us About Small Business"
- "The Real Reason Small Businesses Struggle with Technology"

### Writing Guidelines for Blog Posts
- **Length:** 800–1,500 words (5–8 minute read)
- **Tone:** Same as website — empathetic, direct, jargon-free
- **Structure:** Hook → Problem → Solution → Proof → CTA
- **Audience:** Business owners 35+ who are NOT marketers or tech people
- **Always include:** A specific CTA to book a consultation at the end
- **Headlines:** Use numbers, questions, or "How to" format
- **SEO:** Include primary keyword in title, first paragraph, and at least one H2
- **Images:** Not required but can include simple diagrams or screenshots (dark theme consistent)

---

## Part 3: Continuous Site Updates

### Adding a New Landing Page
1. Create `src/app/[page-name]/page.tsx`
2. Reuse existing components: Navbar, Footer, Button, GlassCard, SectionHeading, GridBackground
3. Follow the same dark theme, glass morphism, and animation patterns
4. Add metadata for SEO
5. Add link in Navbar if top-level

### Updating Existing Copy
- All copy lives directly in components (no CMS currently)
- Section components: `Hero.tsx`, `PainPoints.tsx`, `Benefits.tsx`, `HowItWorks.tsx`, `Testimonials.tsx`, `About.tsx`, `FinalCTA.tsx`
- Edit the relevant component file and update the text strings
- Keep the same voice and formatting patterns

### Adding New Testimonials
Edit `src/components/Testimonials.tsx` — add to the `testimonials` array:
```typescript
{
  name: "First Last",
  role: "Title, Company Name",
  content: "Specific testimonial with measurable results...",
  rating: 5,
}
```

### Adding New Pain Points or Benefits
- Pain points: Edit the `painPoints` array in `PainPoints.tsx`
- Benefits: Edit the `benefits` array in `Benefits.tsx`
- Keep to 6 cards per section for the 3-column grid layout
- Swap existing ones rather than adding more (to avoid scroll fatigue)

### Updating Stats
Stats appear in two places:
1. `Hero.tsx` — stats bar (500+, 3.2x, 45%, 98%)
2. `FinalCTA.tsx` — trust text ("30+ industries")

### Adding Integrations/Features Page
Follow the Benefits section pattern but with more detail:
- Use GlassCard for each integration/feature
- Include icon, title, description, and a "highlight" badge
- Add a "See all features" link from the main Benefits section

### Creating Social Media Assets
The Facebook cover design system can be replicated for:
- LinkedIn banner (1584 × 396px)
- Twitter/X header (1500 × 500px)
- Use the same SVG as a template, adjusting dimensions and safe zones
- Keep the same dark bg + glass + geometric elements aesthetic

### Deployment Checklist
Before pushing any update:
1. Run `npm run build` — verify zero errors
2. Check mobile responsiveness (test at 375px, 768px, 1024px, 1440px)
3. Verify all CTAs link to `#contact`
4. Check text for typos and consistency with brand voice
5. Ensure no hardcoded dates (use `new Date().getFullYear()` for copyright)
6. Test scroll animations fire correctly
7. Verify Lighthouse score stays above 90 for Performance

### SEO Metadata Pattern
For any new page:
```typescript
export const metadata: Metadata = {
  title: "Page Title — FullStackGrowth",
  description: "Clear description under 160 characters targeting primary keyword.",
  openGraph: {
    title: "Page Title — FullStackGrowth",
    description: "Same or adapted OG description.",
    type: "website",
    locale: "en_US",
  },
};
```
