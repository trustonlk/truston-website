# TRUSTON DIGITAL SOLUTIONS — PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Project Name:** Truston Next-Generation Enterprise Platform  
**Document Reference:** TDS-PRD-03  
**Domain:** Enterprise IT System Integration, Network Infrastructure, Cybersecurity, ELV & Smart Data Centers  
**Version:** 1.0.0  

---

## 1. Product Goals & Vision

### 1.1 Core Mission
To engineer a state-of-the-art enterprise web presence for **Truston Digital Solutions** ("Trusted Partner in the Digital World") that positions the company as Sri Lanka’s definitive, highly-capable technology infrastructure partner for corporate enterprises, banks, educational institutions, hotels, and healthcare/commercial organizations.

### 1.2 Success Metrics & Acceptance Criteria
* **Positioning Authority:** Eliminate any perception of a small IT shop or generic template. Evoke the visual gravitas of international technology infrastructure leaders.
* **Factual Rigor:** Zero fabricated data, zero fake testimonials, zero fictitious client logos, zero unsubstantiated statistics.
* **Emotional Journey:** *Discover → Understand → Trust → Explore → Engage → Contact*.
* **Interactive Signature:** The custom interactive **"Truston Digital Infrastructure Ecosystem"** interactive node map and animated hero topology.
* **Performance & Core Web Vitals:** Sub-2-second LCP, 0 CLS, 60fps GPU-accelerated motion, full mobile responsiveness down to 375px.
* **Accessibility:** WCAG 2.1 AA compliant contrast ratios, accessible focus rings, keyboard navigable dialogs and menus, and full support for `prefers-reduced-motion`.
* **SEO Excellence:** Comprehensive JSON-LD structured data (Organization, LocalBusiness, Service, BreadcrumbList), semantic HTML5 tags, canonical paths, dynamic OpenGraph/Twitter previews.

---

## 2. Information Architecture & URL Routing

```
/                         Home (Full 12-section flagship narrative + interactive topology)
/about                    Company profile, vision, mission, core values, engineering excellence
/solutions                Complete infrastructure solutions (Deep architectural breakdowns)
  ├── #network            Network Solutions
  ├── #security           Cybersecurity Solutions (SASE, Firewalls, PAM, DLP)
  ├── #elv                ELV Solutions (PABX, CCTV, Surveillance)
  ├── #datacenter         Smart Data Center Solutions
  ├── #cabling            ISO-compliant Structured Cabling
  ├── #managed            Annual Managed IT Services (AMC)
  └── #rental             Enterprise Device Rental Services
/services                 Lifecycle Service Delivery (Consult, Design, Deploy, Test, 24x7 NOC Support)
/industries               Target Business Environments (Corporate, Education, Hotels & Villas, Commercial)
/clients                  Verified Portfolio & Sector-wise Trust Proofs
/support                  Dedicated 24x7 Technical Support & NOC Command Center
/contact                  High-conversion enterprise consultation request & inquiry portal
```

---

## 3. Detailed Homepage Section Architecture (12 Flagship Stages)

| # | Section Identifier | Component Name | Content Scope & Visual Architecture |
|---|---|---|---|
| **01** | Hero Section | `HeroSection.tsx` | Full-viewport canvas. Headline: *"Building Secure Digital Infrastructure for a Connected World"*. Interactive canvas topology with pulsing nodes, flowing data packets, subtle mouse parallax, magnetic CTAs (*"Explore Our Solutions"*, *"Talk to Our Experts"*), and animated scroll guide. |
| **02** | Introduction | `TrustonIntro.tsx` | *"Technology Infrastructure Built Around Your Business"*. System integration lifecycle overview: Consult → Design → Implement → Test → Support. Clean editorial layout with fine technical borders and schematic accents. |
| **03** | Interactive Ecosystem | `EcosystemMap.tsx` | **Signature Custom Feature**: Interactive radial topology map with Truston central core connecting 7 key domains. Hovering/clicking a node activates connection pathways, lights up data packets, and reveals technical specifications. |
| **04** | Solutions Grid | `SolutionsGrid.tsx` | Comprehensive showcase of 7 core solutions with individual visual identities, technical capability matrices, and deep-dive CTAs. |
| **05** | Why Truston | `WhyTruston.tsx` | 7 verified pillars: Certified Engineers, 24x7 Support, End-to-End Delivery, ISO Quality Compliance, Multi-Sector Track Record, Custom Tailoring, Competitive Pricing. |
| **06** | Vision & Mission | `VisionMission.tsx` | Sophisticated split-stage presentation: Left canvas displays the national vision; right side reveals the 5 animated mission pillars with active sync lines. |
| **07** | Core Values | `CoreValues.tsx` | 6 geometric cards for Excellence, Integrity, Innovation, Customer Focus, Reliability, and Collaboration with micro-animations. |
| **08** | Delivery Process | `ProcessTimeline.tsx` | 5-stage chronological timeline: Consultation → Design → Implementation → Testing → Support, with an animated glowing line tracking viewport progression. |
| **09** | Industries Served | `IndustriesSection.tsx` | 4 verified environments: Corporate Enterprises, Educational Institutions, Hotels & Villas, and Commercial Business Organizations. |
| **10** | Verified Clients | `ClientTrustSection.tsx` | Verified client organizations displayed with elegant typography and sector badges (ESOFT Metro Campus, ESOFT University, BCAS Campus, Wycherley, Prime Land, Bhoomi Realty, Maskpen, Wijeya Newspapers, La Muraille, Thema Collection). |
| **11** | 24x7 Support | `SupportCommandCenter.tsx` | Dark command-center visualization: *"Your Infrastructure Never Stops. Neither Do We."* NOC monitoring telemetry, live status pulses, emergency escalation access. |
| **12** | Enterprise CTA | `FinalCTA.tsx` | High-impact closing portal: *"Ready to Build a Smarter, More Secure Infrastructure?"* Leading into consultation booking. |

---

## 4. Functional & Interaction Specifications

### 4.1 Global Sticky Navigation (`Navbar.tsx`)
* Seamless transition from transparent over the hero to an ultra-refined dark-navy glass header (`rgba(5, 11, 26, 0.85)` + `backdrop-filter: blur(16px)`).
* High-contrast active links with glowing green pip indicators.
* Primary CTA: *"Get a Consultation"*.
* Mobile Drawer: Full-screen fluid slide-in navigation with staggered item reveals, touch-friendly tap targets (>48px), and direct emergency hotline access.

### 4.2 Enterprise Consultation Form (`ContactForm.tsx`)
* Form fields: Full Name, Organization / Company Name, Corporate Email, Phone Number, Service Selection Dropdown, Project Timeline/Message.
* Strict client-side validation with real-time feedback, accessible error messaging, ARIA live regions, and resilient submission state machines.
* Production configuration separation: Clean contact config schema (`truston.config.ts`) allowing zero-code updates for phone, address, and email endpoints.

### 4.3 Custom Desktop Cursor & Motion Physics
* Minimalist cursor dot with subtle trailing aura.
* Magnetic hover effect on primary interactive buttons and ecosystem nodes.
* Graceful degradation: Custom cursor automatically disabled on touch/tablet devices and for users with `prefers-reduced-motion`.

---

## 5. Non-Functional & Enterprise Architectural Requirements

1. **Security:** Zero client-side API key leakage; input sanitization against XSS/injection; secure HTTP headers and Content Security Policies.
2. **Performance Budget:** Bundle size optimized via Next.js dynamic imports and tree-shaking; SVG vector graphics utilized for infinite scalability and minimal network overhead.
3. **SEO Architecture:** Structured JSON-LD for Organization, Service, and Breadcrumbs; auto-generated `robots.txt` and `sitemap.xml`; OpenGraph tags for social sharing.
4. **Maintainability:** Modular component hierarchy, strict TypeScript type definitions, centralized configuration and copy dictionaries.
