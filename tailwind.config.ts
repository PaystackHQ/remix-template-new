import type { Config } from 'tailwindcss';
import { paxPreset } from '@paystackhq/pax';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@paystackhq/pax/**/*.js',
  ],
  theme: {},
  presets: [paxPreset],
} satisfies Config;
