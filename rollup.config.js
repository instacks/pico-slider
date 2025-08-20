import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const isDev = process.env.ROLLUP_WATCH === "true";

export default [
    {
        input: "src/slider.js",
        output: [
            { file: "dist/slider.js", format: "umd", name: "PicoSlider", sourcemap: true },
            { file: "dist/slider.min.js", format: "umd", name: "PicoSlider", plugins: [terser()], sourcemap: true },
            { file: "dist/slider.esm.js", format: "esm", sourcemap: true }
        ],
        plugins: [
            copy({
                targets: [
                    { src: "src/slider.css", dest: "dist" },
                    { src: "src/slider.standalone.css", dest: "dist" }
                ],
                verbose: true
            }),

            // Dev server
            isDev &&
            serve({
                open: true,          // auto-open browser
                verbose: true,
                // contentBase: ["dist", "demo"], // serve from dist + demo folder
                host: "localhost",
                port: 3000
            }),

            // Live reload
            isDev && livereload({ watch: ["dist", "demo"] })
        ]
    }
];
