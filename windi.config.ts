export default {
  theme: {
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          700: '#2D376A',
        },
      },
    },
  },
  plugins: [
    require('@windicss/plugin-heropatterns')({
      patterns: ['topography'],
      colors: {
        default: '#2D376A',
      },
      opacity: {
        default: '0.15',
      },
    }),
  ],
}
