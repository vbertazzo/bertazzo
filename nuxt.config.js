export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vitor Bertazzo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Front-end Developer | Vitor Bertazzo`,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Vitor Bertazzo',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Front-end Developer',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://vbertazzo.com/logo.jpg',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Vitor Bertazzo | Front-end Developer',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://vbertazzo.com/',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Front-end Developer | Vitor Bertazzo',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_US',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'vbertazzo | front-end developer',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://vbertazzo.com/logo.jpg',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://vbertazzo.com/logo.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          brands: ['faGithub', 'faLinkedinIn'],
          solid: ['faPen', 'faMoon', 'faSun'],
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    interval: 2000,
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Rubik: [400],
      Karla: [400],
    },
  },
}
