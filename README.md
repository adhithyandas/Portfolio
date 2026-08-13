# Adhithyan Das K — Professional Developer Portfolio

Personal portfolio website of **Adhithyan Das K**, a **Full Stack Developer**, showcasing professional experience, selected projects, technical skills, and software engineering expertise.

---

## Features

- **Instant Load & Zero FOUC**: Tailored raw critical CSS and `#0B1120` initial rendering to prevent flash of unstyled content.
- **Polished Animations**: Snappy, subtle viewport scroll reveals and interactive UI state transitions using Framer Motion (`motion/react`).
- **Precision Navigation**: Fixed-header scroll tracking lock to prevent underline flickering, with viewport offsets tailored for perfect focus.
- **Printable Resume Viewer**: Full integrated modal view for CV reading, with print (PDF saving) and text downloads.
- **Production-Ready SEO**: Custom meta tags, canonical URL settings, sitemap generation, index guidelines (`robots.txt`), and JSON-LD structured person schema tags.

---

## Tech Stack

### Frontend & Animations

- **React 19**
- **TypeScript**
- **Tailwind CSS** (v4)
- **Framer Motion / Motion** (v12)
- **Lucide Icons**

### Development Tooling

- **Vite**
- **Yarn**
- **ESLint & TypeScript** compilation verification

---

## Project Structure

```text
portfolio/
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CoreExpertise.tsx
│   │   ├── CvModal.tsx
│   │   ├── Experience.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── Skills.tsx
│   │
│   ├── data/
│   │   └── portfolioData.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
│
├── index.html
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- Yarn or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adhithyandas/Portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```

### Development

Start the local development server:

```bash
yarn dev
```

The application will run on [http://localhost:3000](http://localhost:3000).

### Production Build

1. Build the production package:
   ```bash
   yarn build
   ```
2. Preview the production build locally:
   ```bash
   yarn preview
   ```

---

## Customization & Updates

All static texts, projects list, job timelines, skill groups, and profile settings are decoupled into a single configuration file:

```text
src/data/portfolioData.ts
```

Updating this file will automatically populate changes across the Hero stats, About summary cards, Experience timeline nodes, Projects grid, and the CV print modal.

---

## Contact & Links

- **LinkedIn**: [adhithyan-das-k](https://www.linkedin.com/in/adhithyan-das-k)
- **GitHub**: [@adhithyandas](https://github.com/adhithyandas)
- **Email**: [adhithyandask@gmail.com](mailto:adhithyandask@gmail.com)

---

© 2026 Adhithyan Das K. All rights reserved.
