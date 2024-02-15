import { defineConfig } from 'tsup';

export const tsup = defineConfig((options) => ({
  format: options.watch ? ['esm', 'cjs'] : ['esm', 'cjs', 'iife'],
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
  bundle: true,
  clean: !options.watch,
  treeshake: !options.watch,
  minify: !options.watch,
}));