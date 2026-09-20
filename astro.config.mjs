// @ts-check
import { defineConfig } from 'astro/config';

function withProtocol(value) {
  if (!value) return undefined;
  return value.startsWith('http://') || value.startsWith('https://')
    ? value
    : `https://${value}`;
}

const site =
  withProtocol(process.env.SITE_URL) ||
  withProtocol(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
  withProtocol(process.env.VERCEL_URL);

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  vite: {
    build: {
      // Astro 7 minifies CSS with lightningcss, which adds vendor prefixes
      // itself based on these targets. Without them it emits modern syntax
      // like `@media (width<=600px)`. Do not hand-write -webkit- twins for
      // properties that also have a standard name: lightningcss treats the
      // pair as a duplicate and keeps only the last one.
      cssTarget: ['chrome108', 'firefox102', 'safari16', 'edge108'],
    },
  },
});
