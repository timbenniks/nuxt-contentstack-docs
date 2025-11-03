// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxt/eslint",
  ],

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  app: {
    head: {
      script: [
        {
          src: 'https://plausible.io/js/pa-ZrQX90qYpJBfszQdLtcR-.js',
          async: true,
        }
      ]
    }
  }
})