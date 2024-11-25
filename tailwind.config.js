/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geistSans: ['var(--font-geist-sans)']
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage: {
        'firefly-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 160, 0.9) 0%, rgba(255, 200, 80, 0.6) 30%, rgba(255, 180, 50, 0.3) 60%, rgba(217, 217, 217, 0) 100%)',
        'spiderman-logo': "url('/Background/SPIDER-MAN WALLPAPER.jpg')"
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254 , 254 , 91 , 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254 , 254 , 91 , 0.3)'
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%' :{transform: 'rotate(-360deg)'}
        }
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'reverse-spin-slow': 'spin-reverse 40s linear infinite'
      },
      screens: {
        xs: '480px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-transparent': {
          color: 'transparent',
        },
      });
    }
  ],
};
