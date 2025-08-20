# 📸 Pico Slider

A lightweight, reusable image slider for [Pico.css](https://picocss.com) — or standalone with no dependencies.
Supports multiple sliders per page, autoplay, captions, indicators, and keyboard navigation.

---

## 🚀 Installation

```bash
npm install pico-slider-js
```

Or via CDN:

```html
<!-- Pico.css version -->
<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
<link rel="stylesheet" href="https://unpkg.com/pico-slider-js/dist/pico-slider.css">
<script src="https://unpkg.com/pico-slider-js/dist/pico-slider.js"></script>

<!-- Standalone version -->
<link rel="stylesheet" href="https://unpkg.com/pico-slider-js/dist/pico-slider.standalone.css">
```

---

## 🛠 Usage

### HTML Structure

```html
<div class="pico-slider" tabindex="0">
  <div class="pico-slides">
    <img src="image1.jpg" alt="Slide 1" data-caption="First caption">
    <img src="image2.jpg" alt="Slide 2" data-caption="Second caption">
    <img src="image3.jpg" alt="Slide 3" data-caption="Third caption">
  </div>
</div>
```

### JavaScript (ESM)

```js
import PicoSlider from "pico-slider";
import "pico-slider/css";

new PicoSlider(document.querySelector(".pico-slider"), {
  autoplay: true,
  interval: 4000,
  keyboard: true,
  captions: true,
  indicators: true
});
```

### Standalone (no Pico.css)

```js
import PicoSlider from "pico-slider/standalone";
import "pico-slider/standalone/css";

new PicoSlider(document.querySelector(".pico-slider"), { autoplay: true });
```

---

## ⚙️ Options

| Option         | Type      | Default | Description                                |
| -------------- | --------- | ------- | ------------------------------------------ |
| `autoplay`     | `boolean` | `false` | Automatically cycle through slides.        |
| `interval`     | `number`  | `3000`  | Autoplay interval in ms.                   |
| `startIndex`   | `number`  | `0`     | Starting slide index.                      |
| `pauseOnHover` | `boolean` | `true`  | Pause autoplay on hover.                   |
| `keyboard`     | `boolean` | `true`  | Enable arrow key navigation.               |
| `indicators`   | `boolean` | `true`  | Show navigation dots.                      |
| `captions`     | `boolean` | `true`  | Show image captions (from `data-caption`). |

---

## ⌨️ API

```js
const slider = new PicoSlider(container, options);

slider.next();      // Go to next slide
slider.prev();      // Go to previous slide
slider.goTo(2);     // Go to slide by index
slider.destroy();   // Remove slider instance
```

---

## 📂 Project Structure

```
pico-slider/
├── src/                     # Source files (edit these)
│   ├── pico-slider.js
│   ├── pico-slider.css           # Pico.css-based styles
│   └── pico-slider.standalone.css# Standalone styles
├── dist/                    # Build output (published to npm)
│   ├── pico-slider.js
│   ├── pico-slider.esm.js
│   ├── pico-slider.css
│   └── pico-slider.standalone.css
├── demo/                    # Example demo page
│   └── index.html
├── index.d.ts               # TypeScript typings
├── rollup.config.js         # Build config
└── package.json
```

---

## 👩‍💻 Development

Clone the repo and build locally:

```bash
git clone https://github.com/instacks/pico-slider.git
cd pico-slider
npm install
npm run dev   # watch mode
npm run build # production build
```

---

## 🌐 Demo

👉 [Live Demo on GitHub Pages](https://instacks.github.io/pico-slider)

---

## 📜 License

MIT © [Your Name](https://github.com/instacks)
