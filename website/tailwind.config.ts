import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Remove unused Tailwind features
  corePlugins: {
    preflight: true,
    container: false,
    accessibility: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    textOpacity: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    ringWidth: false,
    ringColor: false,
    animation: true, // Keep only essential animations
    transitionProperty: true,
    transitionDuration: true,
    transitionTimingFunction: true,
    transitionDelay: false,
    transform: true,
    transformOrigin: false,
    scale: true,
    rotate: false,
    translate: true,
    skew: false,
    touchAction: false,
    scrollSnapType: false,
    appearance: false,
    columns: false,
    breakAfter: false,
    breakBefore: false,
    breakInside: false,
    gridAutoFlow: false,
    gridAutoColumns: false,
    gridAutoRows: false,
  },
  theme: {
    extend: {
      colors: {
        // Only colors actually used in the project
        'primary-blue': '#003D7A',
        'blue-600': '#0066CC',
        navy: '#003D7A',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;