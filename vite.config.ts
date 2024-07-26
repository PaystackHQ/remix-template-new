import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ['**/.*', '**/*.test.{ts,tsx}'],
    }),
  ],
  server: {
    port: 4000,
  },
});
