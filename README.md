# Muhammad Hamzah — Developer Portfolio

A personal developer portfolio built with **Next.js, React, and Tailwind CSS**. It introduces my approach to web development, explains the areas I work across, and showcases selected projects as I continue learning and building.

The visual direction is editorial and minimal: a warm, light palette, expressive typography, layered portrait artwork, generous spacing, and restrained motion.

## Overview

This portfolio is designed to do more than list technologies. It tells visitors how I approach building for the web, what I'm learning, and the projects I've worked on so far.

The site is organized into focused sections:

- **Hero** — a short introduction, portrait composition, and links to explore the work or get in touch.
- **Introduction** — how I approach building, what I'm learning, and where I want to grow.
- **What I Do** — an approachable overview of frontend, backend, and database development.
- **Featured Projects** — selected frontend and backend projects with descriptions, technologies, and repository links.
- **Toolkit** — a visual overview of the technologies I'm learning and my self-assessed progress.
- **Footer** — contact and navigation details.

## Design & Experience

The interface uses a light, warm background with charcoal text and muted plum accents. Typography and layout do most of the visual work, supported by sculptural artwork and carefully layered imagery.

A few principles guide the design:

- **Editorial visual hierarchy:** expressive headlines, serif italic accents, and compact monospace labels.
- **Intentional spacing:** generous section spacing and clear content groupings.
- **Responsive composition:** layouts adapt across desktop, tablet, and mobile screens.
- **Subtle motion:** reveal effects and transitions add movement without relying on heavy animation.
- **Reusable components:** page sections are separated into React components to keep the code organized.

## Features

- Responsive portfolio layout.
- Component-based page architecture with React.
- Custom hero composition using a portrait and SVG sculpture.
- Scroll-triggered reveal animations.
- Animated headline and visual transitions using CSS.
- Featured project cards and direct GitHub links.
- Technology progress visualization with a responsive text-based alternative.
- Next.js image optimization through the `next/image` component.
- Reduced-motion support in the reusable `Reveal` component.

## Built With

| Technology | Role |
| --- | --- |
| [Next.js](https://nextjs.org/) | React framework and application structure |
| [React](https://react.dev/) | Component-based UI |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling and responsive layouts |
| JavaScript | Application and component logic |
| CSS | Animation, transitions, and visual styling |
| Git & GitHub | Version control and source hosting |

The project currently uses **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## Featured Projects

### PantryChef

An ingredient-based recipe discovery app. Users enter ingredients they have available and explore matching recipes, with each recipe linking to its original source.

**Built with:** React, JavaScript, Spoonacular API

[View PantryChef on GitHub](https://github.com/hamzah697/PantryChef)

<p align="center">
  <img src="public/images/pantrychef-preview.PNG" alt="PantryChef project preview" width="100%" />
</p>

### Notes API

A REST API with CRUD functionality backed by MySQL. It includes user registration and login, password hashing, JWT authentication, and ownership checks so users can access only their own notes.

**Built with:** Node.js, Express.js, MySQL, JWT, bcrypt

[View Notes API on GitHub](https://github.com/hamzah697/Notes_API)

## Project Structure

```text
Portfolio/
├── public/
│   └── images/
│       ├── pantrychef-preview.PNG
│       └── potrait.png
│
├── src/
│   └── app/
│       ├── Components/
│       │   ├── Footer.jsx
│       │   ├── Hero.jsx
│       │   ├── Introduction.jsx
│       │   ├── Navbar.jsx
│       │   ├── Projects.jsx
│       │   ├── Reveal.jsx
│       │   ├── Scrollreveal.jsx
│       │   ├── Sculpture.jsx
│       │   ├── Skills.jsx
│       │   ├── Whatido.jsx
│       │   └── site.js
│       │
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       └── page.js
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a version supported by the installed Next.js release)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/hamzah697/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint |

## Customization

- Update the content and links in the relevant files inside `src/app/Components/`.
- Replace the portrait at `public/images/potrait.png` with your own image.
- Update project information and repository links in `Projects.jsx`.
- Update the technology list and progress labels in `Skills.jsx`.
- Adjust colors, typography, layout, and animation styles in `globals.css` and the component class names.

## Roadmap

- Add final screenshots of the portfolio at desktop and mobile sizes.
- Review accessibility and keyboard navigation across all sections.
- Continue refining responsive layouts and animation performance.
- Expand the project showcase as new work is completed.

## Author

**Muhammad Hamzah**  
Web developer learning by building projects and exploring modern web technologies.

- [GitHub](https://github.com/hamzah697)
- [LinkedIn](https://www.linkedin.com/)

---

<p align="center">
  Built with Next.js, React, and Tailwind CSS.
</p>
