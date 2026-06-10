# Yokama Heilpraktiker Website — Brainstorming Summary

**Date:** 2026-06-08  
**Facilitator:** Claude Code  
**Participants:** Sven (Project Manager) + Claude (Design & Technical Planning)  
**Status:** ✅ Complete — Ready for Implementation

---

## SESSION OVERVIEW

This brainstorming session explored the design, content, technical, and marketing strategy for a new professional website for **Gaby Cammerer**, a Heilpraktikerin für Psychotherapie (licensed naturopath therapist) based in Berlin-Wilmersdorf.

The site is a **sister business to Yokama Coaching**, requiring visual cohesion while establishing its own identity. The primary goal is to attract clients and rank highly in both traditional search (Google) and AI-generated recommendations (Claude, ChatGPT, Gemini).

---

## KEY DECISIONS MADE

### 1. **Technology Stack**
- **Framework:** Hugo (static site generator)
- **Hosting:** Netlify (auto-deploy from GitHub)
- **Repository:** https://github.com/Svenno76/yokama-heilpraktiker.git
- **Booking:** Calendly (not Doctolib)
- **Versioning:** Git with atomic commits

✅ **Rationale:** Hugo + Netlify = fast, secure, easy to deploy. Git workflow maintains code quality and version history.

---

### 2. **Design Foundation**
- **Colors:** Yokama blue (Dunkelblau #14505F, Hellblau #41A5AF)
- **Typography:** Roboto (Google Font) — same as Yokama Coaching
- **Design Rules:** Based on existing `yokama-design-rules.pdf`
- **Logo:** Adapted version of Yokama logo, related visual style
- **Responsive:** Mobile-first, fully responsive design

✅ **Rationale:** Sister business requires visual cohesion. Blue colors are calming and professional for therapy. Yokama design rules already tested and proven.

---

### 3. **Site Structure**
- **Type:** Single-page scrolling with anchor navigation
- **Sections:** Hero → About → Methods → Testimonials → Glossary → Contact → Footer
- **Navigation:** Sticky header with language selector (DE/EN/FR)

✅ **Rationale:** Modern, user-friendly, faster indexing for AI systems. Anchor navigation improves UX without page reloads.

---

### 4. **Multilingual Implementation**
- **Languages:** German (primary), English, French
- **Approach:** Full content translation (not machine-only)
- **Hugo i18n Structure:** Separate directories per language

✅ **Rationale:** Berlin has international clientele. Expanded reach improves both SEO and AEO (AI) ranking diversity.

---

### 5. **Critical Legal Constraint — Healing Language**

❌ **FORBIDDEN:** "Ich heile...", "garantierte Ergebnisse", "treat", "cure"

✅ **REQUIRED:** "Ich habe gute Erfahrungen gemacht mit...", "Viele meiner Klientinnen berichten..."

This constraint affects **every single page, description, testimonial, and CTA**.

---

### 6. **Tone & Voice**
- **Empathetic, respectful, empowering**
- Future-focused (what clients can achieve, not past analysis)
- Professional yet warm
- Accessible (jargon explained in glossary)

✅ **Rationale:** Reflects Gaby's therapeutic approach (solution-focused, not trauma-diving). Builds trust with anxious/traumatized audience.

---

### 7. **Services Messaging**
Gaby's core offering: **Solution-focused psychotherapy** using 4 key methods:
- EMI/EMDR (trauma processing with eye movement)
- Brainspotting (eye-position-based processing)
- Hypnotherapie (therapeutic hypnosis)
- SFBT (Solution Focused Brief Therapy)

**Key differentiator:** Shorter, more efficient therapy than traditional long-term models.

✅ **Rationale:** Clear USP attracts clients seeking fast, results-oriented support.

---

### 8. **Target Audience**
**Primary:** Women 20–50 years old seeking solution-focused help with:
- Trauma (violence, abuse, rape)
- Anxiety, panic attacks, depression
- Burnout risk
- Mobbing/bullying
- Pursuing deferred dreams

**Why women 20–50?** Gaby's experience + data-driven targeting.

✅ **Rationale:** Narrow targeting = higher conversion, better ad ROI, focused messaging.

---

### 9. **Testimonials Approach**
- **Type A:** Structured, anonymized client quotes
- **Type B:** Transformation stories (before/after emotional states)
- **Initially:** Placeholders (Gaby to provide real ones later)
- **Legal compliance:** Results phrased as client experience, not clinical outcomes

**Examples:**
- *"Ich kam mit Panikattacken. Nach 6 Sitzungen konnte ich wieder arbeiten und bin selbstbewusster."* — Anna, 32
- *"Ich traute mich nicht, meine Träume zu verfolgen. Mit Gabys Unterstützung bin ich jetzt handlungsfähig."* — Maria, 28

✅ **Rationale:** A+B approach balances credibility (real quotes) with transformation narrative (building confidence).

---

### 10. **Glossary — 11 Terms**
Planned glossary for client education + SEO:
1. Brainspotting
2. Desensibilisierung
3. EMI/EMDR
4. Heilpraktikerin für Psychotherapie
5. Hypnotherapie
6. Lösungsorientiert
7. NLP (Neuro-Linguistic Programming)
8. Panikstörung
9. Ressourcenorientierung
10. SFBT
11. Trauma

✅ **Rationale:** Educates clients, builds authority, captures long-tail SEO keywords, improves AEO credibility (AI systems favor depth + clarity).

---

### 11. **SEO & AEO Strategy**

### Primary Keywords (High Intent)
- "Heilpraktikerin Psychotherapie Berlin"
- "EMDR Therapie Berlin"
- "Panikattacken Therapie Berlin"
- "Angststörung Therapie Berlin"

### Secondary Keywords (Niche)
- "Lösungsfokussierte Therapie Berlin"
- "Traumatherapie Berlin"
- "Brainspotting Berlin"
- "Hypnotherapie Berlin Angststörung"

### Tertiary Keywords (Educational/AEO)
- "Was ist EMDR?"
- "Wie funktioniert Brainspotting?"
- "Lösungsfokussierte vs. traditionelle Therapie"

### AEO (AI Engine Optimization)
- Structured data (LocalBusiness + HealthAndMedicalBusiness schema)
- Deep, trustworthy content
- Legal compliance (builds AI credibility)
- Client transformation stories
- Clear authority signals (certifications, methods, experience)

✅ **Rationale:** Targets both human searchers + AI systems (Claude, ChatGPT, Gemini). Goal: appear in AI recommendations for "Heilpraktikerin Berlin" within 6 months.

---

### 12. **CTA Strategy**
- **Primary CTA:** "Erstkonsultation vereinbaren" → Calendly link
- **Secondary CTA:** "Mehr erfahren" (scrolls to Methods section)
- **Placement:** Hero, Methods cards, Contact section, floating button (mobile)

✅ **Rationale:** "Erstkonsultation" (first consultation) emphasizes the initial step, reducing friction. Calendly is user-controlled and simple.

---

## CLARIFYING QUESTIONS & ANSWERS

| Question | Answer | Rationale |
|----------|--------|-----------|
| **Color scheme?** | Use Yokama blue (sister business cohesion) | Creates visual family; professional for therapy |
| **Testimonials approach?** | A + B (quotes + transformation stories, anonymized, placeholders for now) | Balances credibility + narrative; legal compliance |
| **Languages?** | DE/EN/FR with full translation (not machine-only) | Berlin clientele is international; expands reach |
| **Glossary size?** | 11 terms (including NLP) | Comprehensive, SEO-friendly, client education |
| **CTA system?** | Primary: "Erstkonsultation vereinbaren" via Calendly | Simple, user-controlled, clear next step |
| **SEO keywords?** | All of the above (primary + secondary + tertiary) with research-based strategy | Comprehensive approach targets human + AI search |
| **Booking system?** | Calendly (not Doctolib) | Gaby preference; simpler integration |
| **Dev workflow?** | Hugo server live-preview as build progresses | Real-time feedback; efficient iteration |

---

## RESEARCH CONDUCTED

### German Keyword Research
Analyzed Google search intent for therapy-related keywords in Berlin:

**High-Intent Keywords:**
- "Heilpraktikerin Psychotherapie Berlin" — 2700+ practitioners listed, highly competitive, strong local intent
- "EMDR Therapie Berlin" — 267 EMDR specialists in Berlin, strong trauma/anxiety focus
- "Panikattacken Therapie Berlin" — Dedicated Doctolib category, high intent
- "Angststörung Therapie Berlin" — Broad category, significant search volume

**Medium-Intent Keywords:**
- "Lösungsfokussierte Therapie Berlin" — Niche but growing; differentiates from traditional therapy
- "Traumatherapie Berlin" — Direct intent from trauma survivors
- "Brainspotting Berlin" — Specialized method, lower volume but qualified leads

**Research Sources:**
- [Doctolib Heilpraktiker Directory](https://www.doctolib.de/heilpraktiker-fur-psychotherapie/berlin)
- [Therapeutenfinder (2700+ practitioners)](https://www.therapeutenfinder.com/therapeuten/berlin/)
- [Therapy.de (Berlin psychology directory)](https://www.therapie.de/psychotherapie/-ort-/berlin/)
- [EMDR Specialists in Berlin](https://www.therapie.de/psychotherapie/-verfahren-/emdr/-ort-/berlin/)

✅ **Conclusion:** Rich keyword landscape with clear pain points (trauma, anxiety, panic, depression) and high local search intent. Gaby's solution-focused USP differentiates her well.

---

## CONTENT FRAMEWORK

### Gaby's Practice Profile (Provided)
- **Title:** Heilpraktikerin für Psychotherapie
- **Location:** Berlin-Wilmersdorf, in-person + online
- **Experience:** Since 2016
- **Methods:** EMI/EMDR, Brainspotting, Hypnotherapie, SFBT
- **Target Audience:** Women 20–50 with trauma, anxiety, depression, burnout
- **USP:** Solution-focused, future-oriented = shorter, efficient therapy
- **Tone:** Empathetic, empowering, respecting client agency

### Content to Develop
- **About/Bio:** Credentials + personal story + mission
- **Method descriptions:** 4 cards with legal-compliant language
- **Testimonials:** 3–4 anonymized + transformation-focused
- **Glossary:** 11 terms, searchable, accessible language
- **Contact info:** Email, phone, address, Calendly link

✅ **Rationale:** Clear content map ensures consistency across all pages + languages.

---

## TECHNICAL CONSIDERATIONS

| Aspect | Approach |
|--------|----------|
| **Performance** | Hugo static HTML = very fast; Netlify CDN for global distribution |
| **SEO** | Hugo-friendly URLs; meta tags; schema.org markup; sitemaps |
| **AEO** | Structured data; deep content; legal compliance signals; trust markers |
| **i18n** | Hugo i18n system (3 language versions) |
| **Analytics** | Google Analytics 4 + Search Console (setup post-launch) |
| **Accessibility** | WCAG 2.1 AA compliance (semantic HTML, contrast, responsive) |
| **Mobile** | Mobile-first CSS; touch-friendly CTAs; hamburger navigation |
| **Images** | Lazy-load + responsive images; Netlify image optimization |
| **Forms** | Contact form (Netlify Forms or static) + Calendly embed |
| **SSL/TLS** | Netlify auto-provisioned |

---

## TIMELINE ESTIMATE

| Phase | Tasks | Est. Duration |
|-------|-------|---|
| **Setup** | Hugo project, repo, i18n structure | 2–3 days |
| **Build** | Components, styling, responsive design | 5–7 days |
| **Content** | Copy, translations, placeholder testimonials, images | 3–4 days |
| **Optimization** | SEO, AEO, performance, accessibility | 2–3 days |
| **Testing** | Mobile/tablet/desktop, cross-browser, Calendly integration | 2 days |
| **Deployment** | Netlify setup, domain, DNS, SSL | 1 day |
| **Total** | | **15–20 days** |

✅ **Note:** Assumes Gaby provides content, images, and real testimonials as ready. Delays possible if additional assets/iterations needed.

---

## NEXT PHASE: IMPLEMENTATION

With design specification complete and approved, the next step is:

**Invoke `writing-plans` skill** → Create detailed implementation plan (PLAN.md)

This will break down:
- File structure
- Component breakdown
- Build sequence + dependencies
- Testing strategy
- Deployment checklist

---

## DELIVERABLES CREATED

✅ **DESIGN-SPEC.md** — Comprehensive design specification (15 sections, 16 success criteria)  
✅ **BRAINSTORMING-SUMMARY.md** — This document (decisions, research, timeline)  
✅ **Keyword Research** — German search intent analysis  
✅ **Content Framework** — Gaby's practice overview + glossary structure  
✅ **Technical Stack** — Hugo + Netlify + Git  

---

## SUCCESS CRITERIA (Post-Launch)

- [ ] Site live on Netlify with custom domain
- [ ] All 3 languages (DE/EN/FR) working
- [ ] Mobile responsive (all breakpoints tested)
- [ ] Calendly integration confirmed
- [ ] Glossary searchable
- [ ] SEO meta + schema.org implemented
- [ ] Google search ranking (3 months)
- [ ] AI recommendations ranking (6 months)
- [ ] Real testimonials collected + published
- [ ] Accessibility (WCAG 2.1 AA)
- [ ] PageSpeed Insights >90 (mobile + desktop)

---

## APPROVED BY

**Sven (Project Owner):** ✅ All decisions approved
**Date:** 2026-06-08

---

*Brainstorming complete. Ready for implementation planning.*
