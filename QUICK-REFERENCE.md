# Yokama Heilpraktiker — Quick Reference Checklist

**Status:** Design Phase ✅ Complete → Implementation Phase Next

---

## CRITICAL REMINDERS 🚨

### Legal Constraint — Healing Language
**NEVER SAY:**
- "Ich heile..."
- "garantierte Ergebnisse"
- "erfolgreich behandelt"
- "Heilung" (in definitive sense)

**ALWAYS SAY:**
- "Ich habe gute Erfahrungen gemacht mit..."
- "Viele meiner Klientinnen berichten..."
- "Methoden, die sich bewährt haben bei..."

This applies to **EVERY page, description, testimonial, and CTA**.

---

## TECH STACK CHECKLIST

- [ ] Hugo (static site generator)
- [ ] GitHub repo: https://github.com/Svenno76/yokama-heilpraktiker.git
- [ ] Netlify (hosting + auto-deploy)
- [ ] Calendly (booking integration)
- [ ] Git (atomic commits per feature)

---

## DESIGN FOUNDATION

### Colors (Yokama Blue — Sister Business)
- **Dunkelblau:** #14505F (primary, headings, CTAs, logo)
- **Hellblau:** #41A5AF (accents, highlights)
- **Background:** #FFFFFF (white)
- **Text:** #646363 (dark gray) or #14505F (dark blue)

### Typography
- **Font:** Roboto (Google Font)
- **Headings:** Bold (700), 20px–36px, line-height 1.2
- **Body:** Regular (400), 16px, line-height 1.25
- **Navigation:** Bold (700), 14px
- **Buttons:** 18px (1.125em)

---

## LANGUAGES

- German (primary)
- English (full translation)
- French (full translation)
- **Tool:** Hugo i18n system

---

## PAGE SECTIONS (Top to Bottom)

1. **Header (Sticky)**
   - Logo, navigation (anchor-based), language selector, mobile hamburger

2. **Hero**
   - Background image (Gaby photo), headline, subheadline, CTAs

3. **About (Über Mich)**
   - Credentials + personal story + mission + animated stats

4. **Methods (Meine Methoden)**
   - 4 cards: EMDR, Brainspotting, Hypnotherapie, SFBT

5. **Testimonials**
   - Type A: Structured quotes (anonymized)
   - Type B: Transformation stories
   - Currently: Placeholders (Gaby to provide real ones)

6. **Glossary (Glossar)**
   - 11 terms (searchable, alphabetical)

7. **Contact**
   - Email, phone, address, Calendly CTA

8. **Footer**
   - Links, copyright

---

## GLOSSARY — 11 TERMS

1. Brainspotting
2. Desensibilisierung
3. EMI/EMDR
4. Heilpraktikerin für Psychotherapie
5. Hypnotherapie
6. Lösungsorientiert
7. NLP
8. Panikstörung
9. Ressourcenorientierung
10. SFBT
11. Trauma

---

## PRIMARY CTA

**Button Text:** "Erstkonsultation vereinbaren"  
**Link:** Calendly (to be provided by Gaby)  
**Placement:** Hero, Methods section, Contact section, floating (mobile)  
**Style:** Dunkelblau background, white text

---

## SEO/AEO KEYWORDS

### Primary (High Intent)
- "Heilpraktikerin Psychotherapie Berlin"
- "EMDR Therapie Berlin"
- "Panikattacken Therapie Berlin"
- "Angststörung Therapie Berlin"

### Secondary (Niche)
- "Lösungsfokussierte Therapie Berlin"
- "Traumatherapie Berlin"
- "Brainspotting Berlin"
- "Hypnotherapie Berlin Angststörung"

### Tertiary (Educational/AEO)
- "Was ist EMDR?"
- "Wie funktioniert Brainspotting?"
- "Lösungsfokussierte vs. traditionelle Therapie"

### Implementation
- [ ] Meta tags (title, description, keywords)
- [ ] Schema.org (LocalBusiness + HealthAndMedicalBusiness)
- [ ] Open Graph tags (social sharing)
- [ ] Sitemaps (XML, HTML)
- [ ] Google Search Console setup
- [ ] Analytics tracking

---

## RESPONSIVE DESIGN BREAKPOINTS

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | 320–768px | Single column, hamburger nav, stacked sections |
| Tablet | 768–1024px | Flexible grid, adaptive spacing |
| Desktop | 1024px+ | Multi-column, full navigation, optimized whitespace |

**Mobile-First Principles:**
- Touch-friendly CTAs (48px min height)
- Readable text (16px+ body)
- Good contrast
- Lazy-load images
- Fast load times

---

## CONTENT REQUIREMENTS

### From Gaby (To Provide)
- [ ] Professional photo(s) for About section
- [ ] Contact info (email, phone, address)
- [ ] Calendly booking link
- [ ] Bio/background story (for About section)
- [ ] Real testimonials (3–4, can be anonymized)
- [ ] Any certifications/credentials to display
- [ ] Preferred hours/availability note

### From Folder (Already Provided)
- [ ] Professional photos: `/home/sven/Documents/05_Projekte/Webpage_Gaby/lauraschulzmedia_26-03-26_Gaby_Cammerer_web/`
- [ ] Design rules: `/home/sven/Documents/05_Projekte/Webpage_Gaby/yokama-design-rules.pdf`
- [ ] Colors: Yokama blue (#14505F, #41A5AF)

---

## TESTIMONIALS PLACEHOLDER FORMAT

**Type A — Structured Quote:**
```
"[Experience and outcome in 2–3 sentences]"
— [Name], [Age] (anonymized)
```

**Type B — Transformation Story:**
```
"[Before state] → [What changed] → [New capability/confidence]"
— [Name], [Age] (anonymized)
```

**Note:** All current testimonials are placeholders. Gaby to provide real ones post-launch.

---

## FILE STRUCTURE (To Create)

```
yokama-heilpraktiker/
├── hugo.toml (or config.yaml)
├── content/
│   ├── _index.de.md       # Homepage (German)
│   ├── _index.en.md       # Homepage (English)
│   ├── _index.fr.md       # Homepage (French)
│   ├── glossary/
│   │   ├── _index.de.md
│   │   ├── _index.en.md
│   │   └── _index.fr.md
│   └── legal/
│       ├── impressum.de.md
│       ├── datenschutz.de.md
│       └── (EN/FR versions)
├── layouts/
│   ├── index.html         # Homepage layout
│   ├── baseof.html        # Base template
│   ├── partials/
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── hero.html
│   │   ├── methods.html
│   │   ├── testimonials.html
│   │   └── glossary.html
│   └── shortcodes/        # Reusable components
├── static/
│   ├── images/            # Gaby photos, method icons
│   ├── css/               # Styles
│   └── js/                # Minimal JS (Calendly, language switcher)
└── i18n/
    ├── de.yaml            # German translations
    ├── en.yaml            # English translations
    └── fr.yaml            # French translations
```

---

## LAUNCH CHECKLIST

### Pre-Launch
- [ ] All content written + translated (DE/EN/FR)
- [ ] Images optimized + placed
- [ ] Placeholder testimonials inserted
- [ ] Calendly link tested
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] SEO meta tags + schema.org implemented
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] PageSpeed Insights >90 (mobile + desktop)
- [ ] All links internal/external tested

### Deployment
- [ ] Netlify build configured
- [ ] Custom domain DNS setup
- [ ] SSL/TLS certificate (Netlify auto)
- [ ] GitHub auto-deploy enabled
- [ ] Analytics (Google Analytics 4) installed
- [ ] Search Console setup
- [ ] Sitemap submitted to Google

### Post-Launch
- [ ] Monitor Google Search Console for crawl errors
- [ ] Collect real testimonials from clients
- [ ] Replace placeholder testimonials
- [ ] Monitor AI mentions (Claude, ChatGPT, Gemini)
- [ ] Iterate based on user feedback

---

## CONTACT DETAILS (To Be Provided by Gaby)

- **Email:** ___________________
- **Phone:** ___________________
- **Address:** Berlin-Wilmersdorf, [specific address]
- **Calendly Link:** ___________________
- **Hours/Availability:** ___________________

---

## IMPORTANT LINKS

- **GitHub:** https://github.com/Svenno76/yokama-heilpraktiker.git
- **Netlify:** [To be created during setup]
- **Custom Domain:** [To be purchased/configured]
- **Design Reference:** `yokama-design-rules.pdf`
- **Color System:** Yokama blue (#14505F, #41A5AF)

---

## APPROVED DECISIONS ✅

- Single-page scrolling with anchor navigation
- Yokama blue colors (sister business cohesion)
- Hugo + Netlify + Git
- Calendly for booking
- DE/EN/FR with full translation
- Type A + B testimonials (anonymized, placeholders for now)
- 11-term glossary
- Comprehensive SEO/AEO strategy
- Mobile-first responsive design

---

## NEXT STEP

**Ready for:** Implementation Planning (writing-plans skill)

This will produce:
- Detailed PLAN.md with task breakdown
- Build sequence + dependencies
- Component specifications
- Testing strategy
- Deployment procedures

---

*Last Updated: 2026-06-08*
*Status: Brainstorming Complete ✅ → Implementation Ready*
