import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";

export default {
  input: "index.ts",
  output: [
    {
      file: "dist/hs.min.cjs",
      format: "cjs", // using CJS format for Node.js.
      sourcemap: true,
    },
    {
      file: "dist/hs.min.js",
      format: "esm", // using ESM format for Browsers and sweet able for script tag
      sourcemap: true,
    }
  ],

  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: "node_modules/**",
    }),
    typescript({
      tsconfig: "tsconfig.json",
    })
  ],
};