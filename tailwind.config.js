/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // adding custom sizes to tailwind in-built classes
        
        'xs': '0.7rem',       // 11.2px (Default: 12px)
        'sm': '0.8rem',       // 12.8px (Default: 14px)
        'base': '0.9rem',     // 14.4px (Default: 16px)
        'lg': '1rem',         // 16px (Default: 18px)
        'xl': '1.1rem',       // 17.6px (Default: 20px)
        '2xl': '1.25rem',     // 20px (Default: 24px)
        '3xl': '1.5rem',      // 24px (Default: 30px)
        '4xl': '1.75rem',     // 28px (Default: 36px)
        '5xl': '2rem',        // 32px (Default: 48px)
        '6xl': '2.25rem',     // 36px (Default: 60px)
      },
    },
  },
  plugins: [],
}
