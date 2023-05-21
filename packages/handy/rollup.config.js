import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.js',
  output: {
    file: 'dist/handy.min.cjs',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    typescript({
      tsconfig: "tsconfig.json",
    })
  ],
};