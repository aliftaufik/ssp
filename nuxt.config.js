import { resolve } from "path";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // buildDir: '.dist',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "SSP",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:ital,wght@0,400;0,500;0,600;1,400&display=swap",
        crossorigin: true,
      },
    ],
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
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  alias: {
    images: resolve(__dirname, "./assets/images"),
    // 'style': resolve(__dirname, './assets/style'),
    // 'data': resolve(__dirname, './assets/other/data')
  },

  tailwindcss: {
    configPath: "tailwind.config.js",
    viewer: false,
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.ts" },
      { code: "id", iso: "id", file: "id.ts" },
    ],
    defaultLocale: "id",
    lazy: true,
    langDir: "~/locales/",
  },
};
