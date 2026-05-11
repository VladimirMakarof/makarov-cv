# CV — Vladimir Makarov

Personal bilingual CV website for Vladimir Makarov. The project is built as a static web page with responsive navigation, accordion sections, language switching, certificate popups, a certificates slider, and downloadable PDF resumes.

## Demo

If the repository is published with GitHub Pages, the site is available at:

- <https://vladimirmakarof.github.io/makarov-cv/>

You can also open the project locally without a build step.

## Features

- Responsive one-page CV layout.
- English and Russian content switcher with the selected language saved in `localStorage`.
- Download button that selects the English or Russian PDF depending on the active language.
- Accordion sections for long CV content.
- Contact links with SVG icons and localized tooltips.
- Certificate popups and a Swiper carousel for diploma images.
- Highlighted sample-code section via highlight.js.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- SVG sprites/icons
- Swiper
- highlight.js
- ESLint, Stylelint, Prettier, and html-validate for basic quality checks

## Project structure

```text
.
├── cv.md                    # Markdown version of the CV
├── index.html               # Main static page
├── script/
│   └── script.js            # Menu, accordion, i18n, download, popup and slider logic
├── style/
│   └── style.css            # Page styles and responsive rules
├── img/                     # Photos, background and diploma images
├── logo/                    # Favicon, SVG sprite and standalone icons
├── makarov_vladimir.pdf     # English PDF CV
└── макаров_владимир.pdf     # Russian PDF CV
```

## How to run locally

### Option 1: open directly

Open `index.html` in a browser.

### Option 2: use a local static server

```bash
npx serve .
```

Then open the URL printed by the command, usually `http://localhost:3000`.

## Quality checks

Install dependencies first:

```bash
npm install
```

Run all checks:

```bash
npm run check
```

Available scripts:

```bash
npm run lint:js
npm run lint:css
npm run lint:html
npm run format:check
```

## Notes

The site uses external CDN assets for Swiper and highlight.js, so those features require network access when running the page locally.
