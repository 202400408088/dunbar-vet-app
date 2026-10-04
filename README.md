# Dunbar Vet Clinic - Appointment System

A simple, fully offline-capable web application for managing appointments at
Dunbar Veterinary Clinic. Built as the practical deliverable for **ISYS3001
Assessment 2 - Configuration & Procurement Management**.

The clinic currently books appointments using two paper notebooks. This app
replaces that manual process with a lightweight digital tool that supports
two appointment types:

- **In-Clinic Consultation** - fixed 15-minute slots within clinic opening hours.
- **Farm Visit** - scheduled with an estimated duration (no fixed slot).

## Features

- Customer management (create, view, edit, delete, search).
- Two appointment types with business-rule validation.
- Today's summary dashboard.
- Full offline persistence via `localStorage`.
- No build step, no server required - open `index.html` in any modern browser.

## Technology Stack

- Plain HTML5 / CSS3 / JavaScript (ES5-compatible for broad browser support).
- No external frameworks or build tooling (keeps procurement simple).
- Persistence: browser `localStorage`.

## Project Structure

```
dunbar-vet-app/
├── index.html              # Single-page UI
├── css/
│   └── style.css           # Styles
├── js/
│   ├── config.js           # App configuration (mirrors config JSON)
│   ├── storage.js          # Persistence layer (localStorage)
│   ├── customers.js        # Customer domain logic
│   ├── appointments.js     # Appointment domain logic + validation
│   └── app.js              # Controller / UI wiring
├── config/
│   ├── config.json              # Development configuration
│   └── config.production.json   # Production deployment configuration
├── tests/
│   └── app.test.js         # Lightweight automated tests (Node.js)
├── .gitignore
├── CHANGELOG.md
└── LICENSE
```

## Requirements

- A modern web browser (Chrome, Firefox, Edge, Safari).
- Node.js (optional, only to run the automated tests).

## Running the Application (Local)

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/dunbar-vet-app.git
   cd dunbar-vet-app
   ```
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   # with Python
   python -m http.server 8080
   ```
3. Browse to `http://localhost:8080`.

No configuration is required for local development - the app falls back to
sensible defaults.

## Running the Automated Tests

```bash
node tests/app.test.js
```

The test suite validates the two appointment types, business-rule validation
(in-clinic 15-minute slot, farm-visit duration), and persistence logic.

## Deployment Configuration

The application is designed to be deployed as a static site on **GitHub Pages**
(the production environment). The production settings are stored in
`config/config.production.json`. To publish:

1. Push the `main` branch to your GitHub repository.
2. In the repository **Settings > Pages**, set the source branch to `main`
   (root directory).
3. Your app will be live at
   `https://<your-username>.github.io/dunbar-vet-app/`.

## Configuration Management

This project demonstrates configuration management best practices:

- **Version control**: Git with a clear feature-branch strategy.
- **Branching**: `main` (stable) + `feature/*` branches merged via pull request.
- **Commit conventions**: `feat:`, `fix:`, `docs:`, `chore:` prefixes.
- **Change tracking**: see `CHANGELOG.md`.
- **Environment config**: separate development and production configuration
  files, with secrets (`.env`) excluded via `.gitignore`.

## Contributing

1. Create a feature branch from `main`.
2. Make changes and commit with a conventional commit message.
3. Open a pull request for review before merging.

## License

MIT License - see `LICENSE`.
