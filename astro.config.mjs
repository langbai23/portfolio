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
});
