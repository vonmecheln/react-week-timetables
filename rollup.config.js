import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel'

const packageJson = require("./package.json");
export default [
  {
    input: "src/index.ts",
    external: ['react', 'styled-components'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        globals: { 'styled-components': 'styled' },
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        globals: { 'styled-components': 'styled' },
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        plugins: ['babel-plugin-styled-components'],
        exclude: 'node_modules/**'
      })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];