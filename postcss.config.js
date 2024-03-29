// Antes
// const autoprefixer = require('autoprefixer');
// const tailwindcss = require('tailwindcss');

// Ahora
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};
