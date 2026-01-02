/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#1F8A70',
          tealDark: '#166B55',
        },
        accent: {
          success: '#3FCF8E',
          warning: '#E5533D',
        },
        background: {
          app: '#0E1117',
          card: '#161B22',
        },
        text: {
          primary: '#E6EDF3',
          secondary: '#9BA3AF',
        },
      },
    },
  },
  plugins: [],
}

