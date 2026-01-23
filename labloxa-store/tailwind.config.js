/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Наші дизайн-токени
        'void': '#0B0B0B',       // Глибокий чорний
        'gold': '#D4AF37',       // Золото
        'burgundy': '#800020',   // Акцент
        'parchment': '#F5F5DC',  // Світлий текст
      },
      fontFamily: {
        // В index.html не забудь підключити ці Google Fonts!
        serif: ['Cinzel', 'serif'],
        cursive: ['Pinyon Script', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('https://www.transparenttextures.com/patterns/stardust.png')", // Легкий шум
      }
    },
  },
  plugins: [],
}
