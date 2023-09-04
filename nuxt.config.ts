/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
      link: [
        { href: "https://unpkg.com/aos@2.3.1/dist/aos.css", rel: "stylesheet" },
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#2b5797" },
        { name: "theme-color", content: "#ffffff" },
      ],
      script: [{ src: "https://unpkg.com/aos@2.3.1/dist/aos.js", body: true }],
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
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    [
      "nuxt-mail",
      {
        message: {
          to: "khukhryanskaya@techhubspb.ru",
        },
        smtp: {
          host: "smtp.yandex.ru",
          port: 465,
          auth: {
            user: "dev@sloy.design",
            pass: "eacirmtepfvsnkye",
          },
        },
      },
    ],
  ],
  imports: {
    dirs: ["stores", "utils"],
  },
});
