import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-01': 'url("../assets/img/hero-01.png")',
        'hero-01-mobi': 'url("../assets/img/hero-01-mobi.png")',
        'cup-01': 'url("../assets/img/cup-01.png")',
        'place-01': 'url("../assets/img/place-01.png")',
      },
      fontFamily: {
        title: ['var(--font-bebas_neue)'],
        body: ['var(--font-inter)'],
      },
      colors: {
        'coffee-light': '#322C2B',
      },
    },
  },
  plugins: [],
};
export default config;
