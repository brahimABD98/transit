// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss', 'nuxt-typed-router', '@nuxtjs/i18n'],
 
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});
