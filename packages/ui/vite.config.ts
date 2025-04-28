import { defineConfig } from 'npm:vitest/config';
import react from 'npm:@vitejs/plugin-react';
import tailwindcss from 'npm:@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    include: ['./src/**/*.test.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/__tests__/setup.ts'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('.', './src'),
    },
  },
});