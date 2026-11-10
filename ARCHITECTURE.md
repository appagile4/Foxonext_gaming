# FOXONEXT Website - Architecture & Component Documentation

## 📁 Project Architecture

```
D:\AGILE INVENT\foxonext-website\
├── public/
│   └── images/
│       ├── logo.png               # Foxonext Logo (Transparent PNG)
│       ├── iphone-mockup.png      # Mobile Casino App on iPhone
│       ├── iphone-rounded.png     # iPhone mockup with rounded bezels
│       ├── dashboard-screen.png   # Tournament Dashboard screen
│       └── hero-composite.png     # Full high-res mockup composite
├── src/
│   ├── app/
│   │   ├── globals.css            # Dark theme, Tailwind v4 styling, custom scrollbars
│   │   ├── layout.tsx             # Root layout with Geist font & SEO metadata
│   │   └── page.tsx               # Homepage assembling Navbar and Hero
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx         # Dedicated Navbar component with logo, pill navigation, language dropdown & Contact CTA
│   │   ├── hero/
│   │   │   ├── Hero.tsx           # Dedicated Main Hero component
│   │   │   ├── HeroBadge.tsx      # Glowing "Online Casinos Software Provider" pill badge
│   │   │   ├── DeviceShowcase.tsx # iPhone & Dashboard showcase with ambient lights
│   │   │   └── Milestones.tsx     # Horizontal timeline (Expertise | Service | Security | Innovation)
│   │   └── ui/
│   │       ├── Button.tsx         # Reusable button with orange gradient and glowing shadows
│   │       └── BackgroundGlow.tsx # Glowing background swooshes, ambient lights, and constellation grid
│   ├── data/
│   │   ├── navigation.ts          # Nav links configuration
│   │   └── milestones.ts          # Timeline milestones data
│   └── types/
│       └── index.ts               # TypeScript interfaces
```

---

## 🖼️ How to Replace the Logo and iPhone Mockup

The codebase is built specifically so you can drop in your own image assets at any time:

1. **Replace the Logo**:
   - Save your image to `public/images/logo.png`.
   - In [`Navbar.tsx`](file:///D:/AGILE%20INVENT/foxonext-website/src/components/layout/Navbar.tsx) or [`page.tsx`](file:///D:/AGILE%20INVENT/foxonext-website/src/app/page.tsx), it automatically loads from `/images/logo.png`.

2. **Replace the iPhone Mockup**:
   - Save your iPhone image to `public/images/iphone-mockup.png` or `public/images/iphone-rounded.png`.
   - In [`page.tsx`](file:///D:/AGILE%20INVENT/foxonext-website/src/app/page.tsx), you can pass `iphoneImage="/images/iphone-mockup.png"` to `<Hero />`.
   - If you want the phone layered in front of the dashboard monitor separately, set `useComposite={false}` on `<Hero />`.
