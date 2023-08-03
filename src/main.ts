import App from './App.vue'

import { ViteSSG } from "vite-ssg"

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import "uno.css";
import "~/style/mian.css"
import "@unocss/reset/tailwind-compat.css"


/**
 * 将我们pinia注册 单独抽离了出来
 * 解决了在hooks中使用pinia 未定义先使用的bug
*/
import { setupStore } from "./store/index"


const routes = setupLayouts(generatedRoutes)


export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
      setupStore(app) // 挂载pinia
  }
)
