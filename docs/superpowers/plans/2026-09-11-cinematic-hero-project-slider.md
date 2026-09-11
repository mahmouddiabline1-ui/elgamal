# Cinematic Hero and Project Slider Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore a branded scroll-expanding hero grid, improve homepage heading hierarchy, and add a touch-friendly editorial project slider.

**Architecture:** Keep scroll state isolated inside `HeroSection`, centralize section title styling in `SectionHeading`, and keep slider navigation in `ProjectShowcaseSlider`. All project content continues to come from `lib/projects.ts`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, native CSS scroll snap.

## Global Constraints

- Preserve AL GAMAL brown, ivory, sand and bronze brand colors.
- Do not add signage artwork or unverified project claims.
- Support mouse, touch, keyboard and reduced-motion preferences.
- Keep static GitHub Pages export compatible with the `/elgamal` base path.

---

### Task 1: Shared Section Heading

**Files:**
- Create: `components/ui/section-heading.tsx`
- Modify: `components/sections/division-header.tsx`
- Modify: `components/sections/services-section.tsx`

**Interfaces:**
- Produces: `SectionHeading({ eyebrow, title, description, align?, className? })`

- [ ] Create the reusable heading with bronze eyebrow, display heading and readable description.
- [ ] Replace duplicated heading markup in division and services sections.
- [ ] Reduce excessive vertical spacing and guarantee separation from following media.
- [ ] Run `npx tsc --noEmit`; expected output: exit code 0.

### Task 2: Cinematic Scroll Grid Hero

**Files:**
- Modify: `components/sections/hero-section.tsx`

**Interfaces:**
- Consumes: brand hero and verified project images from `public/brand` and `public/projects`.

- [ ] Add a sticky 220vh hero with scroll progress calculated from the section bounds.
- [ ] Render one central image and four supporting panels that expand into a five-column composition.
- [ ] Keep headline, summary and actions legible in the opening state and fade them before full grid expansion.
- [ ] Add a static reduced-motion state and a simplified mobile layout.
- [ ] Run `npx tsc --noEmit`; expected output: exit code 0.

### Task 3: Swipeable Project Showcase

**Files:**
- Create: `components/sections/project-showcase-slider.tsx`
- Modify: `app/page.tsx`
- Modify: `lib/i18n.tsx`

**Interfaces:**
- Consumes: `projects: Project[]`.
- Produces: `ProjectShowcaseSlider()` with native scroll snap, buttons and progress state.

- [ ] Render priority sales projects first, followed by portfolio and contracting records.
- [ ] Add native horizontal scrolling, snap positions and partial next-card visibility.
- [ ] Add accessible previous and next controls and update the progress count from scroll position.
- [ ] Insert the section between services and the development portfolio.
- [ ] Add Arabic translations for new visible labels.
- [ ] Run `npx tsc --noEmit`; expected output: exit code 0.

### Task 4: Verification and Deployment

**Files:**
- Modify: `.github/workflows/deploy-pages.yml` only if new asset prefixes are introduced.

- [ ] Run `npx tsc --noEmit`; expected output: exit code 0.
- [ ] Run `$env:PAGES_BASE_PATH='/elgamal'; npm run build`; expected output: 14 generated static routes.
- [ ] Commit the implementation and push `main`.
- [ ] Wait for GitHub Pages deployment to complete successfully.
- [ ] Verify homepage, hero asset and project detail endpoints return HTTP 200.
