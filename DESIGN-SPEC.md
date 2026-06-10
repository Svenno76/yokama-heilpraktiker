# Yokama Heilpraktiker Website — Design Specification
**Created:** 2026-06-08  
**Project:** Gaby Cammerer — Heilpraktikerin für Psychotherapie  
**GitHub Repo:** https://github.com/Svenno76/yokama-heilpraktiker.git  
**Hosting:** Netlify  
**Framework:** Hugo (Static Site Generator)

---

## 1. PROJECT OVERVIEW

### Business Context
- **Practice:** Yokama Heilpraktiker — Psychotherapy Practice
- **Owner:** Gaby Cammerer
- **Location:** Berlin-Wilmersdorf
- **Since:** 2016
- **Sister Business:** Yokama Coaching (visual/brand cohesion required)
- **Booking:** Calendly (primary CTA integration)

### Primary Goal
Attract clients (predominantly women 20-50) seeking solution-focused psychotherapy for trauma, anxiety, panic attacks, depression, and burnout. Rank highly in AI-generated recommendations (Claude, ChatGPT, Gemini) and Google search.

---

## 2. PRACTICE SPECIALIZATION

### Services Offered
Gaby specializes in **solution-focused, future-oriented psychotherapy** using:
- **EMI/EMDR** — Eye Movement Integration / Desensitization and Reprocessing
- **Brainspotting** — Eye-position-based trauma processing
- **Hypnotherapie** — Therapeutic hypnosis
- **SFBT** — Solution Focused Brief Therapy (Lösungsfokussierte Kurztherapie)

### Target Audience
- Primarily women, 20-50 years old
- Trauma survivors (violence, abuse, rape)
- Anxiety disorders, panic attacks, depression
- Burnout risk
- People with dreams they're afraid to pursue
- Mobbing/bullying survivors

### Unique Value Proposition
Solution-focused, future-oriented approach = **shorter, more efficient therapy** than traditional methods. Clients don't need years of analysis; they need actionable results.

### Therapeutic Tone
- **Empathetic, respectful, empowering**
- Clients feel seen and taken seriously (not pathologized)
- Goal: Build confidence — "I can do this, and I will."

---

## 3. CRITICAL LEGAL CONSTRAINT

**🚨 HEILPRAKTIKERIN LEGAL DISCLAIMER:**

Gaby is **legally forbidden** from making healing promises. 

❌ **NEVER USE:**
- "Ich heile..."
- "Ich behandle erfolgreich..."
- "Garantierte Ergebnisse"
- "Cure," "treat," "heal" (in any definitive sense)

✅ **ALWAYS USE:**
- "Ich habe gute Erfahrungen gemacht bei Menschen mit..."
- "Viele meiner Klientinnen berichten, dass..."
- "In meiner Praxis arbeite ich mit Methoden, die sich bewährt haben bei..."
- "Transformation," "support," "experience," "work with"

This constraint shapes **every page, testimonial, and service description**.

---

## 4. DESIGN FOUNDATION

### Brand Colors (Yokama Blue — Sister Business Cohesion)
- **Dunkelblau (Dark Blue):** #14505F — Primary, logo, headings, CTAs
- **Hellblau (Light Blue):** #41A5AF — Accents, highlights
- **Background:** White (#FFFFFF)
- **Text (Primary):** Dark Gray (#646363) or Dark Blue
- **Secondary Accent:** Gelb/Orange (#F5911E) — if needed for CTAs

### Typography
- **Font Family:** Roboto (Google Font) — all text
- **Headings (H1-H3):** Bold (700), 20px–36px, line-height 1.2
- **Body Text:** Regular (400), 16px, line-height 1.25
- **Navigation:** Bold (700), 14px
- **Buttons:** 18px (1.125em), Inherited weight

### Design Rules Reference
Based on: `yokama-design-rules.pdf` (Gaby's existing Yokama Coaching brand guidelines)
- Logo: Related to Yokama Coaching logo but adapted for Heilpraktiker identity
- Consistent component library (buttons, forms, cards)
- Sticky header with navigation + logo
- Responsive mobile-first design

---

## 5. SITE STRUCTURE — SINGLE PAGE WITH NAVIGATION ANCHORS

**Type:** Single-page scrolling website with anchor navigation  
**Languages:** German (default), English, French (full content)  
**Responsive:** Mobile-first, fully responsive to desktop

### Page Sections (Top to Bottom)

#### 1. **Header/Navigation (Sticky)**
- Logo (Gaby/Yokama variant)
- Navigation links (anchor-based scrolling):
  - Startseite (Home)
  - Über mich (About)
  - Meine Methoden (Methods)
  - Testimonials
  - Glossar (Glossary)
  - Kontakt (Contact)
- Language selector (DE / EN / FR)
- Mobile hamburger menu

#### 2. **Hero Section**
- Background image (professional photo of Gaby from Laura Schulz Media folder)
- Headline: "Heilpraktikerin für Psychotherapie — Berlin"
- Subheadline: "Lösungsfokussierte Therapie für Trauma, Angststörungen und Depression"
- Primary CTA: "Erstkonsultation vereinbaren" → Calendly link
- Secondary CTA: "Mehr erfahren" → scrolls to Methods section

#### 3. **About Section (Über Mich)**
- **Content Type:** Blend of credentials + personal mission narrative
- Profile image: Gaby portrait
- Background: Education, certifications, years in practice
- Personal story: Why she became a therapist, what drives her
- Key stats (animated):
  - Years of experience (since 2016)
  - Number of clients served
  - Languages spoken
  - Client satisfaction metric (if available)
- Closing: Invitation to consultation

#### 4. **Methods Section (Meine Methoden)**
- **Layout:** 4 cards (one per method: EMDR, Brainspotting, Hypnotherapie, SFBT)
- **Per Method:**
  - Icon/visual
  - Title
  - 2-3 sentence explanation
  - Use case: "For clients with..."
  - "Learn more" button → scrolls to Glossary section (with anchor to specific term)
- Legal compliant language: "I have good experience with..." not "I treat..."

#### 5. **Testimonials Section (Erfolgsgeschichten)**
- **Approach:** A + B combined
  - **Type A:** Structured quotes (anonymized, with permission)
  - **Type B:** Transformation stories (results-focused, before/after emotional states)
- Currently: **Placeholder testimonials** (Gaby to fill with real ones)
- 3–4 testimonials, carousel/grid layout responsive
- Example placeholders:
  - *"Ich kam mit Panikattacken. Nach 6 Sitzungen konnte ich wieder arbeiten und bin viel selbstbewusster."* — Anna, 32
  - *"Ich bin aus meinen Träumen erwacht und verfolge jetzt meine Ziele."* — Maria, 28

#### 6. **Glossary Section (Glossar)**
- **11 Terms** (alphabetically organized, searchable):
  1. **Brainspotting** — Eye-position-based trauma processing technique
  2. **Desensibilisierung** — Reducing emotional response to trauma memories
  3. **EMI/EMDR** — Eye Movement Integration / Desensitization and Reprocessing
  4. **Heilpraktikerin für Psychotherapie** — Licensed naturopath trained in psychotherapy
  5. **Hypnotherapie** — Therapeutic use of hypnosis
  6. **Lösungsorientiert** — Therapy focused on future solutions, not past analysis
  7. **NLP** — Neuro-Linguistic Programming (language + neurology for behavior change)
  8. **Panikstörung** — Anxiety disorder with panic attacks
  9. **Ressourcenorientierung** — Building on client strengths and existing resources
  10. **SFBT** — Solution Focused Brief Therapy (Lösungsfokussierte Kurztherapie)
  11. **Trauma** — Psychological response to overwhelming life events
- **Burnout** (optional addition if space)
- Each term: Definition + relevance to Gaby's work

#### 7. **Contact Section (Kontakt)**
- Contact information: Email, phone, address
- Primary CTA: "Erstkonsultation vereinbaren" → Calendly link
- Secondary: Contact form (optional, depends on preference)
- Hours/availability note
- Location badge: Berlin-Wilmersdorf

#### 8. **Footer**
- Links: Privacy policy (Datenschutz), Impressum (Legal)
- Copyright, Gaby's name
- Social media links (if applicable)

---

## 6. SEO & AEO STRATEGY

### Target Keywords (Research-Based)
**Primary Keywords:**
- "Heilpraktikerin Psychotherapie Berlin"
- "EMDR Therapie Berlin"
- "Panikattacken Therapie Berlin"
- "Angststörung Therapie Berlin"

**Secondary Keywords:**
- "Lösungsfokussierte Therapie Berlin"
- "Traumatherapie Berlin"
- "Brainspotting Berlin"
- "Hypnotherapie Berlin Angststörung"

**Tertiary (AEO/Content):**
- "Was ist EMDR?" (educational, AI-friendly)
- "Wie funktioniert Brainspotting?"
- "Lösungsfokussierte vs. traditionelle Therapie"
- "Heilpraktiker vs. Psychotherapeut" (trust-building)

### AEO Optimization (AI Engine Optimization)
- **Structured Data:** LocalBusiness + HealthAndMedicalBusiness (schema.org)
- **Content Depth:** Detailed, trustworthy explanations (methods, glossary)
- **Legal Compliance:** Transparent disclaimers build AI credibility
- **Client Stories:** Real, transformation-focused (A/B testimonials)
- **Authority Signals:** Certifications, methods used, years of experience
- **Trust Markers:** "I work with..." language, not cure claims

**Goal:** Appear in Claude, ChatGPT, Gemini recommendations for "Heilpraktikerin für Psychotherapie Berlin" and related searches.

---

## 7. MULTILINGUAL APPROACH

**Languages:** German (primary), English, French  
**Implementation:** Hugo i18n structure (content directories by language)

**Content Localization:**
- All text translated from German to EN/FR
- Gaby's name, location, contact unchanged
- Methods descriptions localized (not just machine-translated)
- Glossary: 11 terms in all 3 languages
- Legal disclaimers adapted for each language context

**Language Selector:** Simple toggle in header (DE / EN / FR)

---

## 8. RESPONSIVE DESIGN REQUIREMENTS

### Breakpoints
- **Mobile:** 320px–768px (stacked layout, hamburger nav)
- **Tablet:** 768px–1024px (flexible grid)
- **Desktop:** 1024px+ (full multi-column layout)

### Mobile-First Principles
- Touch-friendly CTAs (48px min height)
- Readable text (16px+ body, good contrast)
- Single-column hero, stacked sections
- Hamburger navigation (mobile only)
- Fast load times (lazy-load images)

### Desktop Enhancements
- 2–4 column grids (methods, testimonials)
- Sticky header + floating CTA
- Hover effects on cards, links
- Optimized whitespace

---

## 9. TECHNICAL STACK

- **Static Site Generator:** Hugo
- **Hosting:** Netlify (auto-deploy from GitHub)
- **Repository:** https://github.com/Svenno76/yokama-heilpraktiker.git
- **Version Control:** Git (atomic commits per feature)
- **Domain:** TBD (Gaby to provide or purchase)
- **SSL/TLS:** Netlify auto-provisioned
- **CDN:** Netlify edge
- **Build Command:** `hugo` (default)
- **Performance:** Fast static HTML, CSS, JS (optimized images via Netlify)

---

## 10. CONTENT APPROACH

### Legal Compliance
- Every description uses experience-based language
- No cure/heal/guaranteed outcomes claims
- Disclaimers visible and clear
- Testimonials reflect client experiences, not clinical outcomes

### Tone & Voice
- Professional yet warm
- Empowering, not clinical
- Future-focused (what clients can achieve)
- Respectful, non-judgmental
- Accessible language (jargon explained in glossary)

### Image Strategy
- Professional photos from Laura Schulz Media folder (high-quality, authentic)
- Gaby's portrait in About section
- Method icons (design or sourced)
- No stock photos of "sad people" or stereotypical therapy imagery

---

## 11. TESTIMONIALS — PLACEHOLDER STRUCTURE

Currently placeholder content. Gaby to provide real testimonials later.

### Placeholder Format (A + B Approach)
**Type A — Structured Quote:**
```
"Ich kam zu Gaby mit Panikattacken und war verzweifelt. Nach 6 Sitzungen konnte ich wieder arbeiten und fühle mich selbstbewusster."
— Anna, 32 (anonymized)
```

**Type B — Transformation Story:**
```
"Ich war in meinen Träumen gefangen und traute mich nicht, sie zu verfolgen. Mit Gabys Unterstützung bin ich jetzt handlungsfähig und verfolge meine Ziele."
— Maria, 28 (anonymized)
```

Total: 3–4 testimonials initially, expandable as Gaby receives more.

---

## 12. GLOSSARY — 11 TERMS

| Term | Definition |
|------|------------|
| **Brainspotting** | Eye-position-based technique that allows the brain to process trauma memories and emotional distress. Developed by David Grand. |
| **Desensibilisierung** | Process of reducing or eliminating the emotional charge associated with traumatic or distressing memories through repeated exposure or processing. |
| **EMI/EMDR** | Eye Movement Integration / Eye Movement Desensitization and Reprocessing — psychological method for processing traumatic memories using bilateral eye movements. |
| **Heilpraktikerin für Psychotherapie** | Licensed naturopath trained and certified in psychotherapy. In Germany, requires specialized certification and legal authorization. |
| **Hypnotherapie** | Therapeutic application of hypnosis to address anxiety, trauma, habits, and other psychological concerns. |
| **Lösungsorientiert** | Therapy approach focused on finding solutions and building toward the future, rather than analyzing the past in depth. |
| **NLP** | Neuro-Linguistic Programming — set of communication and behavioral techniques based on how language, neurology, and behavior interact. |
| **Panikstörung** | Anxiety disorder characterized by recurrent, unexpected panic attacks (sudden intense fear with physical symptoms). |
| **Ressourcenorientierung** | Therapeutic approach that identifies and builds on clients' existing strengths, skills, and resources rather than focusing only on deficits. |
| **SFBT** | Solution Focused Brief Therapy (Lösungsfokussierte Kurztherapie) — short-term therapy model emphasizing solutions, goals, and future focus. |
| **Trauma** | Psychological injury resulting from overwhelming, frightening, or distressing events. Often requires specialized therapeutic processing. |

---

## 13. DESIGN DECISIONS MADE

| Decision | Rationale |
|----------|-----------|
| **Single-page scrolling** | Simpler UX, faster load, easier for AI indexing, matches modern therapeutic website trend. |
| **Anchor navigation** | No page reloads, smooth scrolling, better mobile UX. |
| **Yokama blue colors** | Sister business cohesion, professional, calming (appropriate for therapy). |
| **Solution-focused messaging** | Differentiates Gaby from traditional long-term therapy; resonates with target audience seeking efficiency. |
| **Placeholder testimonials** | Real testimonials more credible; Gaby provides them after site launch. |
| **Multilingual (DE/EN/FR)** | Expands reach; Berlin attracts international clientele; improves AEO ranking diversity. |
| **Calendly CTA** | Simpler than Doctolib integration; user control over availability; no third-party dependency. |
| **Responsive mobile-first** | 60%+ of therapy search happens on mobile; essential for conversion. |
| **Glossary section** | SEO benefit (long-tail keywords), user education, AI-friendly content, builds authority. |

---

## 14. NEXT STEPS

### Phase 1: Setup & Structure
- [ ] Initialize Hugo project
- [ ] Clone/push GitHub repo (Svenno76/yokama-heilpraktiker)
- [ ] Set up Hugo theme (custom minimal or adapt existing)
- [ ] Create i18n structure (DE/EN/FR)

### Phase 2: Build Core Components
- [ ] Header/Navigation (sticky, responsive, language selector)
- [ ] Hero section
- [ ] About section
- [ ] Methods cards (4 methods)
- [ ] Testimonials carousel
- [ ] Glossary (searchable)
- [ ] Contact/CTA section
- [ ] Footer

### Phase 3: Content & Styling
- [ ] Add Gaby's content (translated to EN/FR)
- [ ] Integrate professional photos (Laura Schulz Media folder)
- [ ] Apply Yokama blue colors + typography
- [ ] Responsive design testing (mobile, tablet, desktop)
- [ ] Placeholder testimonials

### Phase 4: Optimization & Deployment
- [ ] SEO setup (meta tags, schema.org, open graph)
- [ ] AEO optimization (content depth, trust signals)
- [ ] Performance optimization (image compression, lazy load)
- [ ] Netlify config
- [ ] Domain setup
- [ ] Launch to production

### Phase 5: Post-Launch
- [ ] Real testimonials collection (replace placeholders)
- [ ] Monitor AI mentions (Claude, ChatGPT, Gemini)
- [ ] SEO monitoring (Google Search Console)
- [ ] Iterate based on client feedback

---

## 15. SUCCESS CRITERIA

- [ ] Site is live on Netlify with custom domain
- [ ] All 3 languages (DE/EN/FR) fully functional
- [ ] Mobile responsive on all breakpoints
- [ ] Calendly integration working (CTA buttons)
- [ ] Glossary searchable and accessible
- [ ] SEO meta tags + schema.org implemented
- [ ] Appears in Google search for "Heilpraktikerin Berlin" within 3 months
- [ ] Appears in AI recommendations (Claude, ChatGPT) within 6 months
- [ ] Real client testimonials collected and published
- [ ] Accessibility (WCAG 2.1 AA standard)
- [ ] PageSpeed Insights score >90 (mobile, desktop)

---

## 16. DESIGN RULES REFERENCE

**Source:** `yokama-design-rules.pdf` (Gaby's existing brand guidelines)

Applied principles:
- Logo hierarchy and usage
- Color system (adapted: Yokama blue instead of orange)
- Typography (Roboto)
- Button styles (adapted to Heilpraktiker context)
- Component library consistency
- Spacing and alignment (grid-based)
- Sticky header with navigation
- Hero section with background image
- Service/method cards (3–4 item layout)
- Footer structure

---

**Document Status:** ✅ Design Specification Complete  
**Ready for:** Implementation Planning (writing-plans skill)  
**Approval:** User to review and confirm before build begins

---

*Last Updated: 2026-06-08*
