import {defineNuxtConfig} from 'nuxt/config'
import viteCompression from "vite-plugin-compression";

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-swiper', '@nuxt-modules/compression'],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  swiper: {
    styleLang: 'scss',
  },
  //@ts-ignore
  runtimeConfig: {
    public: {
      base_url: process.env.APP_BASE_URL,
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    plugins: [viteCompression({ algorithm: "brotliCompress" })],
  },
  buildModules: ['@averjs/nuxt-compression'],
})
