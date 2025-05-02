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
      spacing: {
        app: 'var(--app-width)',
      },
      letterSpacing: {
        wider: 'var(--app-letter-spacing)',
        wider2: 'var(--app-letter-spacing2)',
      },
      colors: {
        primary: '#065F46',
      },
      boxShadow: {
        btn: ' 0px 0px 15px -5px var(--app-color-primary)',
      },
    },
  },
  plugins: [],
};
