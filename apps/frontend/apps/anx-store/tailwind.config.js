const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.preset.js')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      borderRadius: {
        cardRadius: 'var(--app-border-radius)',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        baseSize: 'var(--app-font-size-base)',
        h2: 'var(--app-font-size-h2)',
        h3: 'var(--app-font-size-h3)',
      },
      spacing: {
        app: 'var(--app-width)',
      },
      letterSpacing: {
        bodyLetter: 'var(--app-letter-spacing-text)',
        widerHeading: 'var(--app-letter-spacing-heading)',
      },
      colors: {
        primary: '#065F46',
      },
      boxShadow: {
        btn: ' 0px 0px 15px -5px var(--app-color-primary)',
        btnBlack: ' 0px 0px 15px -5px black',
        card: ' 0px 0px 7px -6px black',
        hover: ' 0px 0px 25px -5px var(--app-color-primary)',
      },
    },
  },
  plugins: [],
};
