# Muhammad Ashar — Portfolio

A personal portfolio website for Muhammad Ashar, Cyber Security student at Sir Syed University of Engineering & Technology (SSUET), Karachi. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

**Live site:** [https://mashar345.github.io/](https://mashar345.github.io/)

## Design

The site is styled as a security-console / terminal interface — a hero panel types out a `whoami` sequence, and each section is framed as a shell command (`cat about.txt`, `ls projects/`, `grep skills`) to tie the visual language back to the subject: cyber security.

- **Fonts:** JetBrains Mono (headings, labels, terminal text) + Inter (body copy)
- **Palette:** near-black slate background, teal/cyan accent, amber highlight
- **No build tools required** — open `index.html` directly or serve statically

## File structure

```
portfolio/
├── index.html          # All page content and structure
├── style.css            # Design system + layout + responsive rules
├── script.js             # Terminal typing effect, mobile nav, scroll reveal
├── assets/
│   └── Muhammad_Ashar_Resume.pdf   # Résumé, viewable inline in the Resume section
└── README.md
```

## Sections

1. **Hero** — animated terminal intro + name, tagline, CTAs
2. **About** — summary and quick facts
3. **Skills** — programming, cyber security, cloud, design, marketing, soft skills
4. **Projects** — Tic-Tac-Toe (Azure), Smart Home System (Java OOP), Library Management System (Python), Excel Dashboard, Automation Scripts
5. **Experience & Education** — timeline of tutoring work and academic history
6. **Certifications** — courses and webinars completed
7. **Resume** — full résumé viewable inline (embedded PDF)
8. **Contact** — email, LinkedIn, GitHub

## How to edit

- **Text:** open `index.html` and edit content directly inside each `<section>`.
- **Colors/fonts/spacing:** all design tokens live at the top of `style.css` under `:root`.
- **Project links:** each project card has a "Repository →" link pointing to `https://github.com/mashar345` — update it to the specific repo URL once each project has its own repository.
- **Terminal script:** the typed lines in the hero are defined in the `TERMINAL_SCRIPT` array near the top of `script.js`.

## Deploying to GitHub Pages

This repo is named `mashar345.github.io`, which GitHub treats as a special **user site** — it publishes automatically at `https://mashar345.github.io/` once Pages is enabled, no extra path needed.

1. Upload `index.html`, `style.css`, `script.js`, and the `assets/` folder (with the résumé PDF inside) to the repository root.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. The site publishes within a minute or two at `https://mashar345.github.io/`.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Layout is responsive down to small mobile widths, and animations respect `prefers-reduced-motion`.
