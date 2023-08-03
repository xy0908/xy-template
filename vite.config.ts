import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from "unocss/vite";

import Pages from "vite-plugin-pages"

import Layouts from "vite-plugin-vue-layouts"

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'


import { ViteAliases } from "vite-aliases"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    ViteAliases(),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    AutoImport({
      imports: [
        "vue", 
        "pinia",
        "vue-router", 
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts:'./src/auto-imports.d.ts',
      dirs: [
        "src/store/*",
        'src/composables'
      ],
      vueTemplate: true,
    }),
    Components({
      dts: "./src/components.d.ts",
      extensions: ['vue'],
    }),
  ],
})
