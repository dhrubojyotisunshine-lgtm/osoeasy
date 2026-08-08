# MOOREZY

Standalone responsive recreation of the MOOREZY homepage experience. This project is fully isolated from Taxation Library and has no runtime dependencies.

## Build

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build.ps1
```

The production-ready output is written to `dist`.

## Run locally

Build first, then start the local server:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\serve.ps1
```

Open `http://localhost:4173/`.

To select a different port:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\serve.ps1 -Port 5000
```

## Project structure

- `index.html` — responsive homepage
- `*.html` — independent public marketing routes
- `styles.css` — design system, layout, animation and responsive rules
- `pages.css` — shared subpage layouts and components
- `app.js` — navigation, tabs, counters, testimonials and form behavior
- `components.js` — reusable subpage header and footer
- `pages.js` — reusable page sections and route-specific content
- `assets/` — project-owned visual assets
- `scripts/` — independent build and local run tooling
- `dist/` — generated production build
