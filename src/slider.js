/**
 * PicoSlider - lightweight slider with Pico.css styling
 * @param {HTMLElement} el - slider container
 * @param {Object} options - settings
 */
class PicoSlider {
    constructor(el, options = {}) {
        this.el = el;
        this.track = el.querySelector(".pico-slides");
        this.slides = Array.from(this.track.querySelectorAll("img"));
        this.indicators = el.querySelector(".pico-indicators");
        this.captionEl = el.querySelector(".pico-caption");
        this.prevBtn = el.querySelector(".pico-prev");
        this.nextBtn = el.querySelector(".pico-next");

        this.index = 0;
        this.total = this.slides.length;
        this.timer = null;

        // Default options
        this.settings = Object.assign({
            autoplay: true,
            interval: 4000,
            swipeThreshold: 50
        }, options);

        this.setup();
    }

    setup() {
        // Build dots
        this.slides.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.setAttribute("role", "tab");
            dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
            dot.addEventListener("click", () => this.goTo(i));
            this.indicators.appendChild(dot);
        });
        this.dots = Array.from(this.indicators.children);

        // Button events
        this.prevBtn.addEventListener("click", () => this.goTo(this.index - 1));
        this.nextBtn.addEventListener("click", () => this.goTo(this.index + 1));

        // Keyboard events
        this.el.setAttribute("tabindex", "0");
        this.el.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") this.goTo(this.index + 1);
            if (e.key === "ArrowLeft") this.goTo(this.index - 1);
        });

        // Autoplay
        this.el.addEventListener("mouseenter", () => this.stopAutoplay());
        this.el.addEventListener("mouseleave", () => this.startAutoplay());

        // Swipe
        let startX = 0, currX = 0;
        this.el.addEventListener("touchstart", e => {
            startX = currX = e.touches[0].clientX;
        }, { passive: true });
        this.el.addEventListener("touchmove", e => {
            currX = e.touches[0].clientX;
        }, { passive: true });
        this.el.addEventListener("touchend", () => {
            const delta = startX - currX;
            if (Math.abs(delta) > this.settings.swipeThreshold) {
                if (delta > 0) this.goTo(this.index + 1);
                else this.goTo(this.index - 1);
            }
        });

        // Init
        this.sync();
        this.startAutoplay();
    }

    sync() {
        this.track.style.transform = `translateX(-${this.index * 100}%)`;
        this.dots.forEach((d, i) => d.setAttribute("aria-current", i === this.index ? "true" : "false"));
        if (this.captionEl) {
            this.captionEl.textContent = this.slides[this.index].alt;
        }
    }

    goTo(i) {
        this.index = (i + this.total) % this.total;
        this.sync();
    }

    startAutoplay() {
        if (!this.settings.autoplay) return;
        this.stopAutoplay();
        this.timer = setInterval(() => this.goTo(this.index + 1), this.settings.interval);
    }

    stopAutoplay() {
        if (this.timer) clearInterval(this.timer);
        this.timer = null;
    }
}

// Initialize all sliders on page
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".pico-slider").forEach(sliderEl => {
        new PicoSlider(sliderEl, {
            autoplay: sliderEl.dataset.autoplay !== "false",
            interval: parseInt(sliderEl.dataset.interval || "4000", 10)
        });
    });
});
