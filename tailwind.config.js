/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          purple: '#bf00ff',
          pink: '#ff00f7',
        }
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00f3ff, 0 0 82px #00f3ff, 0 0 92px #00f3ff, 0 0 102px #00f3ff, 0 0 151px #00f3ff'
          },
          '50%': { 
            textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #00f3ff, 0 0 73px #00f3ff, 0 0 80px #00f3ff, 0 0 94px #00f3ff, 0 0 140px #00f3ff'
          }
        }
      },
      boxShadow: {
        'neon-blue': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
        'neon-purple': '0 0 5px theme(colors.neon.purple), 0 0 20px theme(colors.neon.purple)',
        'neon-pink': '0 0 5px theme(colors.neon.pink), 0 0 20px theme(colors.neon.pink)',
      }
    },
  },
  plugins: [],
};