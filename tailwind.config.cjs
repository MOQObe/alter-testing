/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, css, js}"],
  theme: {
    extend: {
      fontFamily: {
        'saoldisplay': ['saoldisplay', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'sebino': ['sebino', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif']
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
  ],
};
