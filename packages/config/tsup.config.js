import { defineConfig } from 'tsup';

export const tsup = defineConfig({
  format: ['esm', 'cjs', 'iife'],
  outExtension: ({ format }) => {
    if(format === 'esm') {
      return {
          js: '.mjs',
      }
    }
    if(format === 'cjs') {
      return {
          js: '.cjs',
      }
    }
    return {
        js: '.js',
    }
  },
  entry: ['src/index.ts'],
  sourcemap: true,
  keepNames: true,
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  bundle: true,
  treeshake: true,
});