const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        baseSize: 'var(--app-font-size-base)',
        h2Size: 'var(--app-font-size-h2)',
        h3Size: 'var(--app-font-size-h3)',
      },
      spacing: {
        app: 'var(--app-width)',
      },
      letterSpacing: {
        wider1: 'var(--app-letter-spacing)',
        wider2: 'var(--app-letter-spacing2)',
      },
      colors: {
        primary: '#065F46',
      },
      boxShadow: {
        btn: ' 0px 0px 15px -5px var(--app-color-primary)',
        btnBlack: ' 0px 0px 15px -5px black',
        card: ' 0px 0px 7px -5px black',
        hover: ' 0px 0px 25px -5px var(--app-color-primary)',
      },
    },
  },
  plugins: [],
};
