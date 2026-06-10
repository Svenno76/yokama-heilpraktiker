# Yokama Heilpraktiker Website Project

**Status:** 🎨 Design Complete | ⚙️ Implementation Next  
**Owner:** Gaby Cammerer (Heilpraktikerin für Psychotherapie)  
**Project:** Professional website for therapy practice in Berlin  
**Repository:** https://github.com/Svenno76/yokama-heilpraktiker.git  
**Hosting:** Netlify  
**Framework:** Hugo  

---

## Project Overview

This project creates a modern, multilingual (German/English/French) website for **Gaby Cammerer**, a licensed naturopath therapist specializing in **solution-focused psychotherapy** for trauma, anxiety, panic attacks, and depression.

The site is designed as a **sister business** to Yokama Coaching, maintaining visual cohesion while establishing its own professional identity. The primary goal is to:

1. **Attract clients** (primarily women 20–50 seeking efficient, solution-focused therapy)
2. **Rank in Google search** for "Heilpraktikerin Psychotherapie Berlin" and related keywords
3. **Appear in AI recommendations** (Claude, ChatGPT, Gemini) for therapeutic services

---

## Key Features

✅ **Single-page scrolling** design with anchor navigation  
✅ **Multilingual** (German, English, French)  
✅ **Responsive** (mobile, tablet, desktop)  
✅ **SEO & AEO optimized** (Google + AI search engines)  
✅ **Professional testimonials** (anonymized, transformation-focused)  
✅ **Educational glossary** (11 key terms)  
✅ **Calendly integration** for booking  
✅ **Legal-compliant language** (no healing promises)  

---

## Site Structure

```
Hero Section
    ↓
About (Credentials + Personal Story)
    ↓
Methods (4 Therapy Approaches)
    ↓
Testimonials (Client Experiences)
    ↓
Glossary (Educational Terms)
    ↓
Contact + Booking
    ↓
Footer
```

---

## Design Foundation

### Colors
- **Dunkelblau (Primary):** #14505F
- **Hellblau (Accent):** #41A5AF
- **Text:** #646363 (dark gray)
- **Background:** #FFFFFF (white)

### Typography
- **Font:** Roboto (Google Font)
- **Headings:** Bold, 20px–36px
- **Body:** Regular, 16px

### Design Rules
Based on existing Yokama Coaching brand guidelines (`yokama-design-rules.pdf`)

---

## Therapy Services

**Heilpraktikerin für Psychotherapie** specializing in:

1. **EMI/EMDR** — Eye Movement Integration / Desensitization and Reprocessing
2. **Brainspotting** — Eye-position-based trauma processing
3. **Hypnotherapie** — Therapeutic hypnosis
4. **SFBT** — Solution Focused Brief Therapy (Lösungsfokussierte Kurztherapie)

**Key differentiator:** Solution-focused, future-oriented approach = **shorter, more efficient therapy**

---

## Target Audience

- Women, 20–50 years old
- Trauma survivors (violence, abuse)
- Anxiety, panic attacks, depression
- Burnout at risk
- People pursuing deferred dreams
- Mobbing/bullying survivors

---

## 🚨 CRITICAL LEGAL CONSTRAINT

As a **Heilpraktikerin für Psychotherapie**, Gaby is **legally forbidden** from making healing promises.

❌ **NEVER USE:**
- "Ich heile..."
- "garantierte Ergebnisse"
- "erfolgreich behandelt"

✅ **ALWAYS USE:**
- "Ich habe gute Erfahrungen gemacht mit..."
- "Viele meiner Klientinnen berichten..."
- "Methoden, die sich bewährt haben bei..."

**This applies to EVERY page, description, and testimonial.**

---

## Project Documents

### 1. **DESIGN-SPEC.md** 📋
Comprehensive design specification covering:
- Site structure & sections
- Content approach
- SEO/AEO strategy (11 keywords)
- Glossary (11 terms)
- Responsive design
- Success criteria

### 2. **BRAINSTORMING-SUMMARY.md** 💡
Complete brainstorming session record:
- Decisions made & rationale
- Research conducted (German keywords)
- Content framework
- Timeline estimate (15–20 days)

### 3. **QUICK-REFERENCE.md** ⚡
Quick checklist for implementation:
- Critical reminders (legal language)
- Tech stack
- Colors & typography
- Glossary terms
- File structure
- Launch checklist

---

## Implementation Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| **Setup** | 2–3 days | Hugo project, repo, i18n structure |
| **Build** | 5–7 days | Components, styling, responsive design |
| **Content** | 3–4 days | Copy, translations, images, testimonials |
| **Optimization** | 2–3 days | SEO, AEO, performance, accessibility |
| **Testing** | 2 days | Mobile, cross-browser, integrations |
| **Deployment** | 1 day | Netlify, domain, DNS, SSL |
| **Total** | **15–20 days** | |

---

## SEO & AEO Keywords

### Primary Keywords
- "Heilpraktikerin Psychotherapie Berlin"
- "EMDR Therapie Berlin"
- "Panikattacken Therapie Berlin"
- "Angststörung Therapie Berlin"

### Secondary Keywords
- "Lösungsfokussierte Therapie Berlin"
- "Traumatherapie Berlin"
- "Brainspotting Berlin"

### Tertiary (Educational)
- "Was ist EMDR?"
- "Wie funktioniert Brainspotting?"

---

## Technology Stack

- **Framework:** Hugo (static site generator)
- **Hosting:** Netlify (auto-deploy from GitHub)
- **Repository:** GitHub (https://github.com/Svenno76/yokama-heilpraktiker.git)
- **Languages:** German, English, French (Hugo i18n)
- **Booking:** Calendly (embedded)
- **CSS:** Responsive, mobile-first
- **Performance:** Static HTML/CSS (very fast), Netlify CDN

---

## Content Assets

### From Gaby (To Provide)
- [ ] Bio/background story
- [ ] Real testimonials (3–4, can be anonymized)
- [ ] Certifications/credentials
- [ ] Contact info (email, phone)
- [ ] Calendly booking link
- [ ] Hours/availability

### From Project Folder
- ✅ Professional photos: `lauraschulzmedia_26-03-26_Gaby_Cammerer_web/`
- ✅ Design guidelines: `yokama-design-rules.pdf`
- ✅ Color system: Yokama blue

---

## Success Criteria

- [ ] Site live on Netlify with custom domain
- [ ] All 3 languages (DE/EN/FR) functional
- [ ] Mobile responsive (all breakpoints)
- [ ] Calendly integration working
- [ ] Glossary searchable
- [ ] SEO meta tags implemented
- [ ] Google search ranking (3 months)
- [ ] AI recommendations ranking (6 months)
- [ ] PageSpeed Insights >90 (mobile + desktop)
- [ ] WCAG 2.1 AA accessibility
- [ ] Real testimonials published

---

## Getting Started (Development)

### Prerequisites
- Hugo (latest version)
- Git
- GitHub account (already set up at https://github.com/Svenno76/yokama-heilpraktiker.git)

### Local Development
```bash
# Clone the repository
git clone https://github.com/Svenno76/yokama-heilpraktiker.git
cd yokama-heilpraktiker

# Start Hugo dev server
hugo server

# Visit http://localhost:1313 in browser
```

### Deployment
```bash
# Push to GitHub (Netlify auto-deploys)
git push origin main
```

---

## Next Steps

**Phase:** Implementation Planning

The next step is creating a detailed implementation plan (PLAN.md) that will include:
- File structure breakdown
- Component specifications
- Build sequence + dependencies
- Testing strategy
- Deployment procedures

---

## Contact & Questions

**Project Owner:** Sven (Gaby's brother)  
**Practice Owner:** Gaby Cammerer  
**Email (Gaby):** gaby@yokama.de  
**Phone:** +49 151 53 06 40 34  
**Address:** Berlin-Wilmersdorf, Deutschland

---

## Important Reminders

🚨 **Legal Language:** Every page must use experience-based language ("I have worked with..." not "I treat...").

🎨 **Design Cohesion:** Sister business to Yokama Coaching — maintain visual family while establishing own identity.

🌍 **Multilingual:** Full translation required for DE/EN/FR (not machine-only).

🚀 **Goal:** Rank in Google & AI recommendations within 6 months.

---

## Project Status

| Phase | Status | Date |
|-------|--------|------|
| **Brainstorming** | ✅ Complete | 2026-06-08 |
| **Design Specification** | ✅ Complete | 2026-06-08 |
| **Implementation Planning** | ⏳ Next | TBD |
| **Build & Development** | ⏸️ Pending | TBD |
| **Testing & Optimization** | ⏸️ Pending | TBD |
| **Deployment** | ⏸️ Pending | TBD |
| **Launch** | ⏸️ Pending | TBD |

---

## Document Index

- **README.md** (this file) — Project overview
- **DESIGN-SPEC.md** — Complete design specification
- **BRAINSTORMING-SUMMARY.md** — Brainstorming session record
- **QUICK-REFERENCE.md** — Quick implementation checklist
- **yokama-design-rules.pdf** — Brand guidelines reference

---

*Last Updated: 2026-06-08*  
*Created by: Claude Code (AI Assistant)*  
*Status: Design Phase Complete ✅ → Ready for Implementation*
