export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],

  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: '1UFzQyYyIez7xYjHNaNf0wtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],

  compatibilityDate: '2025-05-09'
})