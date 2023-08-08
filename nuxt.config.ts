/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { href: 'https://unpkg.com/aos@2.3.1/dist/aos.css', rel: 'stylesheet' },
      ],
      script: [{ src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', body: true }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
        },
      },
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    ['nuxt-mail', {
      message: {
        to: 'dev@sloy.design',
      },
      smtp: {
        host: "smtp.yandex.ru",
        port: 465,
        auth: {
          user: 'dev@sloy.design',
          pass: 'QPalzm321',
        }
      },
    }],
  ],
  imports: {
    dirs: ['stores', 'utils'],
  },
});
