import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  nitro: {
    serveStatic: true,
  },
  bridge: {
    // Do not transpile modules
    // Disable composables auto importing
    vite: true,
  },
  vite: {
    // build: {
    //   rollupOptions: {
    //     //     external: [/marketplace\/ds/],
    //     output: {
    //       //       entryFileNames: '[name].js',
    //       //       chunkFileNames: '[name].js',
    //     },
    //   },
    // },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  target: 'static',
  ssr: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
});
