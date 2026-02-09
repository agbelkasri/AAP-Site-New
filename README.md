# AAP Inc. Website

A modern, Apple-inspired website for AAP Inc., a world-class American manufacturer specializing in metal stampings, weldments, and mechanical assemblies.

## Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
aap-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Hero.jsx            # Reusable hero component
│   │   ├── Card.jsx            # Reusable card component
│   │   ├── SectionHeading.jsx  # Section title component
│   │   ├── ContactForm.jsx     # Contact form with validation
│   │   ├── CertificationBadge.jsx # Certification badges
│   │   ├── BackToTop.jsx       # Scroll to top button
│   │   └── ScrollToTop.jsx     # Route change scroll handler
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── About.jsx           # About Us page
│   │   ├── Products.jsx        # Products & capabilities
│   │   ├── Locations.jsx       # USA & Mexico facilities
│   │   ├── Employment.jsx      # Careers page
│   │   ├── Contact.jsx         # Contact form & info
│   │   └── SupplierPortal.jsx  # Plex UX portal (placeholder)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Pages

1. **Home** - Hero section, company overview, core competencies, certifications, global presence
2. **About Us** - Company story, mission, values, timeline, certifications
3. **Products** - Metal stampings, weldments, mechanical assemblies
4. **Locations** - USA (Michigan) and Mexico (San Luis Potosí) facilities
5. **Employment** - Careers, benefits, culture, application process
6. **Contact** - Contact form, phone numbers, FAQ
7. **Supplier Portal** - Placeholder for Plex UX integration

## Features

- Responsive design for all devices
- Smooth page transitions and scroll animations
- Sticky header that shrinks on scroll
- Back to top button
- Mobile navigation menu
- Contact form with validation
- Accessibility features

## Color Palette

- **Primary:** #0066CC (Blue)
- **Accent:** #0071E3
- **Secondary:** #1D1D1F (Dark)
- **Background:** #FFFFFF / #F5F5F7

## Deployment

```bash
npm run build
```

The build output will be in the `dist/` folder.
