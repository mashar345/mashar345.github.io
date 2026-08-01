# Muhammad Ashar — Portfolio

A personal portfolio website for Muhammad Ashar, Cyber Security student at Sir Syed University of Engineering & Technology (SSUET), Karachi. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

**Live site:** add your GitHub Pages link here once deployed, e.g. `https://mashar345.github.io/portfolio/`

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
│   └── Muhammad_Ashar_Resume.pdf   # Downloadable résumé
└── README.md
```

## Sections

1. **Hero** — animated terminal intro + name, tagline, CTAs
2. **About** — summary and quick facts
3. **Skills** — programming, cyber security, cloud, design, marketing, soft skills
4. **Projects** — Tic-Tac-Toe (Azure), Smart Home System (Java OOP), Library Management System (Python), Excel Dashboard, Automation Scripts
5. **Experience & Education** — timeline of tutoring work and academic history
6. **Certifications** — courses and webinars completed
7. **Contact** — email, phone, LinkedIn, GitHub

## How to edit

- **Text:** open `index.html` and edit content directly inside each `<section>`.
- **Colors/fonts/spacing:** all design tokens live at the top of `style.css` under `:root`.
- **Project links:** each project card has a "Repository →" link pointing to `https://github.com/mashar345` — update it to the specific repo URL once each project has its own repository.
- **Terminal script:** the typed lines in the hero are defined in the `TERMINAL_SCRIPT` array near the top of `script.js`.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push these files to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/mashar345/portfolio.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub will publish the site at `https://mashar345.github.io/portfolio/` within a minute or two.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Layout is responsive down to small mobile widths, and animations respect `prefers-reduced-motion`.
