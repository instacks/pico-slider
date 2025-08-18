declare module "pico-slider" {
  interface PicoSliderOptions {
    autoplay?: boolean;      // Automatically cycle slides
    interval?: number;       // Interval in ms (default: 3000)
    startIndex?: number;     // Initial slide index (default: 0)
    pauseOnHover?: boolean;  // Pause autoplay on mouse hover
    keyboard?: boolean;      // Enable keyboard navigation
    indicators?: boolean;    // Show indicator dots
    captions?: boolean;      // Show captions
  }

  export default class PicoSlider {
    constructor(container: HTMLElement, options?: PicoSliderOptions);

    next(): void;
    prev(): void;
    goTo(index: number): void;
    destroy(): void;
  }
}

declare module "pico-slider/css";
declare module "pico-slider/standalone";
declare module "pico-slider/standalone/css";