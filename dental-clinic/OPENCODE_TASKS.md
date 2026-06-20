# Opencode Tasks — SmileCare Dental Website
# Project: e:\sample(web)\dental-clinic
# Status: Build ✅ Passes | Dev server running at http://localhost:3000

---

## Task 1 — Add missing placeholder gallery images
**Priority: High**
The gallery section references these image files that don't exist yet:
- `public/images/gallery-equipment.jpg`
- `public/images/gallery-team.jpg`

Copy the existing `public/images/gallery-reception.jpg` as stand-ins:
```powershell
Copy-Item "public\images\gallery-reception.jpg" -Destination "public\images\gallery-equipment.jpg"
Copy-Item "public\images\gallery-reception.jpg" -Destination "public\images\gallery-team.jpg"
```

---

## Task 2 — Fix hero image not loading (PNG copied as .jpg)
**Priority: High**
The hero image and others were copied from `.png` to `.jpg` but the browser
may not render them correctly. Update `next.config.ts` to allow all image formats,
OR rename all public images to `.png` and update the `src` props in:
- `components/HeroSection.tsx` → `/images/hero.png`
- `components/AboutDoctor.tsx` → `/images/doctor.png`
- `components/BeforeAfter.tsx` → `/images/before-after-1.png`, `/images/before-after-2.png`
- `components/ClinicGallery.tsx` → `/images/gallery-reception.png`, `/images/gallery-treatment.png`

Then rename the actual files in `public/images/` from `.jpg` to `.png` as well.

---

## Task 3 — Fix Tailwind `font-display` utility
**Priority: Medium**
The `font-display` CSS class is defined as a custom utility in `globals.css`,
but it must also work in Tailwind's JIT scanner. Verify it's applied correctly
in `components/HeroSection.tsx`, `components/Navbar.tsx`, etc.
If the Playfair Display font is not rendering, add it explicitly in `tailwind.config.ts`:
```ts
theme: { extend: { fontFamily: { display: ['Playfair Display', 'serif'] } } }
```

---

## Task 4 — Add dark mode support
**Priority: Low**
Add a dark mode toggle button to the Navbar. Use the `class` strategy for dark mode.
In `app/layout.tsx`, the `html` tag should support the `dark` class.
Add basic dark mode colors to `globals.css`:
```css
@layer base {
  .dark body { background-color: #0B1C3F; color: #F8FAFC; }
}
```

---

## Task 5 — SEO: Add Open Graph image
**Priority: Low**
Create a simple `public/og-image.png` (1200x630px) for social sharing using
the clinic name and tagline. Update `app/layout.tsx` metadata:
```ts
openGraph: {
  images: [{ url: '/og-image.png', width: 1200, height: 630 }]
}
```

---

## Task 6 — Verify mobile responsiveness
**Priority: Medium**
Open http://localhost:3000 in a mobile viewport (375px wide).
Check that:
- Hero text doesn't overflow
- Treatment cards stack to 1 column on mobile (sm:grid-cols-2 lg:grid-cols-4)
- Gallery grid switches to 2 columns on mobile
- Navbar hamburger menu works
- Floating WhatsApp button is not blocked by sticky bar

Fix any layout issues found.

---

## Notes
- All TypeScript errors are resolved ✅
- Build passes with `npm run build` ✅
- Dev server: `npm run dev` (port 3000) ✅
- Replace `+91 98765 43210` with the real clinic phone number before going live
