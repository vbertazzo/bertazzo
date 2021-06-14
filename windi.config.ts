export default {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          700: '#2D376A',
        },
        secondary: {
          600: '#614BE1',
        },
      },
    },
  },
  plugins: [
    require('@windicss/plugin-heropatterns')({
      patterns: ['topography'],
      colors: {
        default: '#2D376A',
        secondary: '#23D296',
      },
      opacity: {
        default: '0.15',
        dark: '0.25',
      },
    }),
  ],
}
