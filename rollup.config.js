import css from "rollup-plugin-css-only";
import terser from '@rollup/plugin-terser'

export default [
    {
        input: "src/slider.js",
        output: [
            { file: "dist/slider.js", format: "umd", name: "PicoSlider" },
            { file: "dist/slider.esm.js", format: "esm" }
        ],
        plugins: [
            css({ output: "slider.css" }), // Pico-dependent version
            terser()
        ]
    },
    {
        input: "src/slider.js",
        output: { file: "dist/slider.standalone.js", format: "umd", name: "PicoSlider" },
        plugins: [
            css({ output: "slider.standalone.css" }), // Standalone version
            terser()
        ]
    }
];
