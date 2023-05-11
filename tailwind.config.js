/** @type {import('tailwindcss').Config} */
export const content = [
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: (_theme) => ({
      'primary': `linear-gradient(to top,#3EB489,#00E18F})`,
    }),
    colors: {
      light: "#F1F1F1",
    },
    colors: {
      primary: '#1E3A8A',
      secondary: '#E0E0E0',
    },
  },
};
export const plugins = [];