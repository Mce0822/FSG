# FullStackGrowth — Complete Brand Reference

## Logo
- **File:** `src/logo horizon transp.png` (horizontal layout, transparent background)
- **Logo mark:** 3D isometric geometric cube/building shape
- **Logo text:** "FULLSTACK GROWTH" — bold sans-serif, stacked or horizontal
- **Logo colors:** Navy blue (#1E2455) primary faces, Gold (#C49A3C) left face
- **Usage:** Always on dark backgrounds. Minimum clear space = height of the logo mark on all sides.

---

## Color Palette

### Logo Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Navy Blue | `#1E2455` | 30, 36, 85 | Logo main face, dark accent |
| Navy Light | `#252B6A` | 37, 43, 106 | Logo top face |
| Gold | `#C49A3C` | 196, 154, 60 | Logo gold face, warm accent |
| Gold Light | `#D4AD5C` | 212, 173, 92 | Gold highlights |
| Gold Dark | `#B8892E` | 184, 137, 46 | Gold shadows |

### Brand Blue Scale (Website Primary)
| Token | Hex | Usage |
|-------|-----|-------|
| brand-50 | `#eef4ff` | Lightest tint (hover states on light) |
| brand-100 | `#d9e5ff` | Light backgrounds |
| brand-200 | `#bcd2ff` | Light accents |
| brand-300 | `#8eb5ff` | Gradient endpoints, light text |
| brand-400 | `#598dff` | Secondary buttons, icon fills |
| brand-500 | `#3366ff` | **Primary brand blue** — buttons, links, CTAs |
| brand-600 | `#1a44f5` | Hover states on primary |
| brand-700 | `#1333e1` | Active/pressed states |
| brand-800 | `#162bb6` | Dark accent |
| brand-900 | `#18298f` | Very dark accent |
| brand-950 | `#141b57` | Darkest blue |

### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| Slate 950 | `#080d19` | Main page background (body) |
| Mid Dark | `#0c1229` | Gradient midpoints, card backgrounds |
| Dark Navy | `#0a0f22` | Gradient endpoints |

### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| Emerald | `#4ade80` | Success, positive metrics, green dots |
| Red 400 | `#f87171` | Pain points, problem icons |
| Red 500 | `#ef4444` | Error states |
| Amber 400 | `#fbbf24` | Star ratings |
| White | `#ffffff` | Headings, primary text |
| Slate 300 | `#cbd5e1` | Body text, secondary content |
| Slate 400 | `#94a3b8` | Descriptions, muted text |
| Slate 500 | `#64748b` | Tertiary text, labels |
| Slate 600 | `#475569` | Copyright, very muted |

### Glass / Transparency Values
| Class | Background | Border | Usage |
|-------|-----------|--------|-------|
| `.glass` | `white/[0.04]` | `white/[0.08]` | Standard glass cards |
| `.glass-strong` | `white/[0.07]` | `white/[0.12]` | Emphasized cards, CTAs |
| `.glass-card:hover` | `white/[0.07]` | `white/[0.15]` | Card hover state |
| Selection | `brand-500/30` | — | Text selection highlight |

---

## Typography

### Font Family
| Property | Value |
|----------|-------|
| Primary | `Inter` |
| Fallbacks | `system-ui, sans-serif` |
| Source | Google Fonts |
| Import | `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap")` |

### Type Scale
| Element | Weight | Size (Tailwind) | Size (px) | Tracking |
|---------|--------|-----------------|-----------|----------|
| Hero headline | 800 Extra Bold | text-4xl to text-7xl | 36–72px | tight (-0.025em) |
| Section headings | 700 Bold | text-3xl to text-5xl | 30–48px | tight |
| Card titles | 600 Semibold | text-lg | 18px | normal |
| Body text | 400 Regular | text-sm to text-lg | 14–18px | normal |
| Labels / badges | 600 Semibold | text-xs to text-sm | 12–14px | wider (0.05em) |
| Uppercase labels | 600 Semibold | text-sm | 14px | widest (0.1em) |
| Nav links | 400 Regular | text-sm | 14px | normal |
| Buttons | 600 Semibold | text-sm to text-base | 14–16px | normal |
| Stats/numbers | 700 Bold | text-2xl to text-3xl | 24–30px | normal |
| Fine print | 400–500 | text-xs | 12px | normal |

---

## Voice & Tone

### Brand Voice
- **Empathetic:** We understand the struggles of running a small business
- **Direct:** No jargon, no buzzwords, no corporate speak
- **Confident:** We know our platform works, but we're not arrogant
- **Approachable:** Like talking to a smart friend who happens to know marketing
- **Results-focused:** Always tie back to outcomes, not features

### Writing Guidelines
- Use "you" and "your" — speak directly to the business owner
- Short sentences. Short paragraphs. Make it scannable.
- Lead with the benefit, then explain the feature
- Use specific numbers over vague claims ("45% time saved" not "save lots of time")
- Address objections proactively ("No credit card required," "No commitment")
- Avoid: "leverage," "synergy," "best-in-class," "cutting-edge," "revolutionize"
- Prefer: "simple," "easy," "clear," "works," "grows," "saves," "handles"

### Headlines Pattern
- Problem framing: "Stop [pain]. Start [benefit]."
- Question format: "What if [desired outcome]?"
- Direct benefit: "[Benefit] — without [common objection]"

### CTA Language
- Primary: "Book Your Free Consultation"
- Secondary: "See How It Works"
- Tertiary: "Start With Step 1 — It's Free"
- Always include friction reducers: "free," "30 minutes," "no commitment," "no credit card"

---

## Design System

### Spacing
- Section padding: `py-24 md:py-32 px-4 sm:px-6 lg:px-8`
- Container max width: `max-w-7xl mx-auto`
- Card padding: `p-6`
- Card gap: `gap-5`
- Icon size in cards: `w-11 h-11` (44px)
- Section dividers: `h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent`

### Border Radius
- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-xl` (12px)
- Icon containers: `rounded-xl` (12px)
- Badges/pills: `rounded-full`
- Small elements: `rounded-lg` (8px)

### Shadows & Glow
- `.glow`: `box-shadow: 0 0 60px -12px rgba(51, 102, 255, 0.25)`
- `.glow-sm`: `box-shadow: 0 0 30px -8px rgba(51, 102, 255, 0.2)`
- Primary button: `shadow-lg shadow-brand-500/25`
- Cards: `shadow-xl` (standard), `shadow-2xl` (hover/emphasized)

### Animation Specs
- Entrance: `duration: 0.5-0.7s`, `ease-out`
- Stagger delay: `0.08-0.12s` per item
- Hover lift: `y: -4`, `duration: 0.2s`
- Button press: `scale: 0.98`
- Button hover: `scale: 1.02`
- Scroll trigger margin: `-80px` to `-100px`
- Always use `viewport={{ once: true }}`

### Background Effects
- Grid pattern: 60×60px grid, `rgba(255,255,255,0.03)` lines
- Dot pattern: 30×30px dots, `rgba(255,255,255,0.04)`
- Gradient orbs: Large blurred ellipses, `brand-500/10` or `brand-700/10`
- Vignette: Top/bottom gradient fades from background color

---

## Facebook Cover Photo Specs

### Dimensions
| View | Size | Notes |
|------|------|-------|
| Canvas | 820 × 360px | Full design area |
| Desktop display | 820 × 312px | Crops ~24px top/bottom |
| Mobile display | 640 × 360px | Crops 90px each side |
| Safe zone | 640 × 312px | Visible on ALL devices |

### Files
| File | Format | Purpose |
|------|--------|---------|
| `fb-cover-fullstackgrowth.svg` | SVG | Master editable source |
| `fb-cover-fullstackgrowth.ai` | AI (PDF-based) | Adobe Illustrator editable |
| `fb-cover-fullstackgrowth.pdf` | PDF | Vector print/share |
| `fb-cover-fullstackgrowth.png` | PNG 1640×720 | Retina upload to Facebook |

### Design Notes
- Dark navy background matching website
- Logo cube + brand name centered in safe zone
- Floating dashboard cards as decorative elements (sides for desktop richness)
- Gold growth trend line in background
- Trust badges and CTA text in safe zone
- Bottom-left kept clear for profile picture overlap on mobile
- Hidden "Safe-Zone-Guides" layer available in SVG for reference
