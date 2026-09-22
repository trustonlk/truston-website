# TRUSTON DIGITAL SOLUTIONS — ENTERPRISE DESIGN SYSTEM
**Document Reference:** TDS-DESIGN-04  
**Design Philosophy:** "Precision Digital Infrastructure"  
**Brand Metaphor:** Architectural, Optical, Cyber-Resilient, Enterprise-Grade  

---

## 1. Color Architecture & Design Tokens

The Truston visual identity is anchored around **Truston Deep Tech Blue**, energized with **Precision Optical Green**, structured on architectural neutrals.

```css
:root {
  /* Brand Primary */
  --truston-blue-950: #02071A; /* Midnight Tech Void */
  --truston-blue-900: #050E2D; /* Canvas Dark Background */
  --truston-blue-800: #09174B; /* Deep Card / Elevated Surface */
  --truston-blue-700: #0B216F; /* Deep Brand Blue */
  --truston-blue-600: #0C2E9B; /* Official Logo Blue */
  --truston-blue-500: #1A44D4; /* Interactive Blue */

  /* Brand Accent */
  --truston-green-600: #008F38; /* Deep Emerald Accent */
  --truston-green-500: #00B247; /* Official Logo Green */
  --truston-green-400: #00E65C; /* Optical Glow Green */
  --truston-green-300: #4DF08F; /* Soft Highlight */

  /* Neutrals & Surfaces */
  --truston-surface-light: #FFFFFF;
  --truston-surface-subtle: #F8FAFC;
  --truston-surface-muted: #F1F5F9;
  --truston-border-light: #E2E8F0;
  --truston-border-dark: rgba(255, 255, 255, 0.08);
  --truston-border-accent: rgba(0, 230, 92, 0.25);

  /* Typography Colors */
  --text-dark-primary: #0F172A;
  --text-dark-secondary: #475569;
  --text-dark-muted: #64748B;
  --text-light-primary: #F8FAFC;
  --text-light-secondary: #94A3B8;
  --text-light-muted: #64748B;
}
```

---

## 2. Typography Hierarchy

* **Headings & Display:** `Plus Jakarta Sans` or `Inter` (Font-weights: 600, 700, 800) with tight letter-spacing (`-0.03em`) for authoritative architectural presence.
* **Body & Long-form:** `Inter` (Font-weights: 400, 500) for pristine clarity at both 14px and 18px.
* **Technical Monospace / Schematics:** `JetBrains Mono` or system mono font (`font-mono`) for node IDs, port specs, ISO standard tags, and telemetry badges.

### Typographic Scale
* **Display Hero:** `clamp(2.75rem, 5vw, 4.5rem)` / line-height: 1.08 / tracking: `-0.035em`
* **H1 Section Titles:** `clamp(2rem, 3.5vw, 3rem)` / line-height: 1.15 / tracking: `-0.025em`
* **H2 Card Titles:** `1.5rem` to `1.75rem` / line-height: 1.25 / font-weight: 700
* **H3 Subheads:** `1.125rem` to `1.25rem` / line-height: 1.4 / font-weight: 600
* **Body Text:** `1rem` (16px) or `1.125rem` (18px) / line-height: 1.65
* **Microcopy & Monospace Badges:** `0.75rem` (12px) to `0.875rem` (14px) / uppercase / tracking: `+0.08em`

---

## 3. Dark / Light Visual Rhythm

The website alternates between high-contrast surfaces to create an engaging visual narrative:

1. **Global Sticky Nav:** Transparent over hero → Deep Navy Glass (`#050E2D` / 85% opacity + backdrop blur).
2. **01 Hero Section:** **Dark** (`#02071A` to `#050E2D`) with glowing network topology and optical particles.
3. **02 Introduction:** **Light** (`#FFFFFF`) with crisp typography and light gray technical cards.
4. **03 Infrastructure Ecosystem:** **Dark** (`#050E2D`) showcasing the signature interactive node map.
5. **04 Solutions Grid:** **Light Subtle** (`#F8FAFC`) with fine-bordered elevated solution cards.
6. **05 Why Truston:** **Light Muted** (`#F1F5F9`) featuring 7 structured proof pillars.
7. **06 Vision & Mission:** **Deep Tech Blue** (`#09174B`) split-canvas with optical connection lines.
8. **07 Core Values:** **White** (`#FFFFFF`) clean geometric value matrix.
9. **08 Service Delivery Process:** **Light Subtle** (`#F8FAFC`) with sequential glowing timeline.
10. **09 Industries Section:** **White** (`#FFFFFF`) with enterprise sector blueprints.
11. **10 Verified Clients:** **Light Slate** (`#F8FAFC`) elegant typographic trust grid.
12. **11 24x7 Support:** **Dark Command Center** (`#02071A`) with live pulse telemetry indicators.
13. **12 Final CTA:** **Deep Gradient Blue** (`linear-gradient(135deg, #050E2D, #0B216F)`).
14. **Footer:** **Near-Black Tech Void** (`#020510`).

---

## 4. Component Design Language

### 4.1 Buttons
* **Primary Enterprise Action:** Truston Tech Blue background with subtle optical green hover glow, or Vibrant Green background with deep blue text for critical calls to action.
* **Secondary Action:** Outlined with 1px border (`rgba(255,255,255,0.2)` on dark, `rgba(15,23,42,0.15)` on light), smooth hover background fill.
* **Micro-interaction:** Subtle 2px translate-y on hover, magnetic spring on desktop cursor, ripple or outline expansion.

### 4.2 Cards & Containers
* **Border Radius:** Clean modern enterprise radius: `12px` to `16px`. (Avoid bubbly circular cards).
* **Borders:** Ultra-crisp 1px borders (`border-slate-200/80` on light, `border-white/10` on dark).
* **Hover Accent:** Hovering a card activates an optical green border transition (`border-truston-green/40`) and soft ambient glow (`box-shadow: 0 10px 30px -10px rgba(0, 178, 71, 0.15)`).

### 4.3 Iconography
* Consistent 1.75px - 2px stroke geometric vector icons (Lucide icon library + custom SVG topology nodes).
* Monochromatic base with dual-tone green accents on active states.
