import { join } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: '../',
  clearScreen: false,
  test: {
    environment: 'jsdom',
    globals: true,
    snapshotFormat: {
      printBasicPrototype: true,
    },
    setupFiles: ['./tests/setupTests.ts'],
    coverage: {
      provider: 'istanbul',
      include: ['*/src/**/*.{ts,tsx,js,jsx}'],
      exclude: ['**/deprecated/**'],
    },
    useAtomics: !!process.env['CI'],
  },
  resolve: {
    alias: {
      '@trpc/server/src/': join(__dirname, '../server/src/').replace(
        /\\/g,
        '/',
      ),
      '@trpc/client/src/': join(__dirname, '../client/src/').replace(
        /\\/g,
        '/',
      ),
      '@trpc/react-query/src/': join(__dirname, '../react-query/src/').replace(
        /\\/g,
        '/',
      ),
      '@trpc/next/src/': join(__dirname, '../next/src/').replace(/\\/g, '/'),
      'vitest-environment-miniflare': join(
        __dirname,
        'node_modules/vitest-environment-miniflare',
      ).replace(/\\/g, '/'),
      '@vitest/coverage-istanbul': join(
        __dirname,
        'node_modules/@vitest/coverage-istanbul',
      ).replace(/\\/g, '/'),
    },
  },
});
