/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      boxShadow: { neon: '0 0 35px rgba(34,211,238,.25)' },
      backgroundImage: {
        'premium': 'radial-gradient(circle at top left, rgba(124,58,237,.35), transparent 28%), radial-gradient(circle at top right, rgba(34,211,238,.2), transparent 25%), linear-gradient(135deg, #020617 0%, #050816 45%, #12051f 100%)'
      }
    }
  },
  plugins: []
}
