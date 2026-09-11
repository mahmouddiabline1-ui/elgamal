# AL GAMAL Cinematic Hero and Project Slider Design

## Objective

Improve the AL GAMAL homepage hierarchy and interaction while preserving the newly adopted brand identity. The redesign restores the original cinematic image-grid behavior in the hero, strengthens section headings, removes excessive vertical gaps, and adds a separate swipeable project showcase.

## Hero Experience

The hero remains a full-viewport introduction. It begins with the generated AL GAMAL architectural image as the dominant central frame. Four supporting architectural images sit outside or behind the main frame at the start of the experience and progressively enter the composition as the visitor scrolls.

The animation uses one sticky viewport and a controlled scroll range. The headline and supporting copy remain readable during the opening state, then fade and move subtly before the image grid reaches its expanded state. The animation must not require horizontal scrolling and must respect reduced-motion preferences.

The composition uses:

- One wide central brand image.
- Four supporting images selected from project renders and strong architectural photography.
- Dark chocolate overlays and warm ivory typography.
- A clearly visible AL GAMAL logo, headline, summary and primary action.
- A simplified mobile composition with fewer simultaneous panels and no text clipping.

The hero must not contain signage artwork, mock billboard designs or unverified project claims.

## Heading Hierarchy

Section headers use a consistent editorial system:

- Small bronze eyebrow.
- Large dark-brown display heading.
- Short supporting paragraph with stronger contrast.
- Clear padding above and below the entire header block.
- A guaranteed gap between text and the image or component that follows.

Headings must never overlap or touch adjacent images. The Services and Contracting section headers shown in the supplied screenshots are the priority fixes. Large blank areas between sections should be reduced while keeping enough breathing room for a premium appearance.

## Swipeable Project Showcase

A new project-slider section appears independently from the existing complete projects grid. Its purpose is discovery rather than filtering.

The section uses an editorial horizontal rail:

- One large active project card with part of the next card visible.
- Native drag and touch swipe behavior.
- CSS scroll snap so each project settles cleanly.
- Previous and next controls on desktop.
- Project number, Arabic or English name, location, category and verified status.
- Direct link to each project detail page.
- Progress indicator showing the current item and total count.

The slider prioritizes the five for-sale projects, followed by selected portfolio and contracting work. It reuses the verified project dataset and does not duplicate or invent content.

## Responsive Behavior

Desktop hero panels expand horizontally around the central image. Tablet uses a reduced three-panel composition. Mobile uses the main image and two supporting images with shorter motion distance and a stable text area.

The project slider displays approximately 1.15 cards on mobile, 1.6 cards on tablet and 2.3 cards on desktop. Touch swiping must work without custom gesture libraries.

## Accessibility and Performance

- All images keep meaningful alternative text.
- Controls have visible labels and keyboard focus styles.
- The slider remains usable with keyboard navigation.
- Reduced-motion users receive a static grid and no scroll-linked transforms.
- Existing WebP project assets are reused where suitable.
- Any new supporting images are exported as optimized WebP.
- No autoplay carousel behavior is used.

## Component Boundaries

- `HeroSection` owns the sticky scroll progress and visual grid.
- `SectionHeading` provides the shared eyebrow, heading and description treatment.
- `ProjectShowcaseSlider` owns horizontal navigation and progress state.
- The existing project dataset remains the single source of project content.
- Existing project cards and detail pages remain responsible for full browsing and inquiry flows.

## Validation

- Verify TypeScript and the production static export.
- Confirm all GitHub Pages asset paths include the `/elgamal` prefix after deployment.
- Check the opening hero state, expanded hero state, section-heading spacing and slider interaction.
- Check one desktop viewport and one mobile viewport.
- Confirm project detail links return successful responses after deployment.
