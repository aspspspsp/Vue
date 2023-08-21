// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@pinia/nuxt'],
  build: {
    transpile: ['@headlessui/vue']
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/css/tailwind.css'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    jwtSignSecret: 'tests',
    public: {
      googleClientId: '855113748874-q057dvpd0t5a47koq0fiebhc0pfvqt69.apps.googleusercontent.com'
    }
  },
  appConfig: {
  },
})
