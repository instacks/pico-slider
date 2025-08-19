import copy from "rollup-plugin-copy";
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default [
    {
        input: "src/slider.js",
        output: [
            { file: "dist/slider.js", format: "umd", name: "PicoSlider" },
            { file: "dist/slider.esm.js", format: "esm" }
        ],
        plugins: [
            copy({
                targets: [
                    { src: "src/slider.css", dest: "dist" }
                ],
                verbose: true,
                copyOnce: true
            }),
            copy({
                targets: [
                    { src: "src/slider.standalone.css", dest: "dist" }
                ],
                verbose: true,
                copyOnce: true
            }),
            terser(),
            serve({ contentBase: 'dist', port: 5000 }),
            livereload('dist')
        ]
    }
];
