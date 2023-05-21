import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.ts',
  output: [
    {
      file: 'dist/handy.min.cjs',
      format: 'cjs', // using CJS format for Node.js.
      sourcemap: true,
    },
    {
      file: 'dist/handy.min.js',
      format: 'esm', // using ESM format for Browsers and sweet able for script tag
      sourcemap: true,
    }
  ],

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