import { defineConfig } from 'tsup';

export const tsup = defineConfig({
  format: ['esm', 'cjs', 'iife'],
  entry: ['src/**/*.ts'],
  sourcemap: true,
  keepNames: true,
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  target: ['esnext'],
  bundle: true,
  treeshake: true,
  legacyOutput: true,
});