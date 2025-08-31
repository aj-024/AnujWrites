/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add global font
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      // Optional: Extend colors for your blog theme
      colors: {
        primary: '#3B82F6',  // Tailwind blue-500
        secondary: '#64748B', // Tailwind slate-500
        accent: '#FACC15',    // Tailwind yellow-400
        bgLight: '#F3F4F6',   // Tailwind gray-100
      },
      // Optional: Add custom spacing or border radius
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl2': '1.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Optional plugin for blog post content
  ],
}
