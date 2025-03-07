/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      boxShadow: {
        shape:
          '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)',
      },

      container: {
        center: true,
      },

      colors: {
        navyBlue: '#002452',
        mediumBlue: '#0061ff',

        golden: '#d2c69c',

        Beige: '#D9C89C',
        mediumBeige: '#5f452f',
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
      },

      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0%, 100%)' },
          to: { transform: 'translateX(-25%)' },
        },

        keyframes: {
          fade: {
            to: {
              scale: '0.7',
              opacity: '0',
            },
          },
        },
        animation: {
          fade: 'fade 5s linear forwards',
        },
      },
    },
  },
  plugins: [],
}
