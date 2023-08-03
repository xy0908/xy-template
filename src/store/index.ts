import type { App } from "vue"
import { createPinia } from "pinia"

// 创建pinia实例
const store = createPinia();

// 全局注册 store
export function setupStore(app: App<Element>) {
    app.use(store) // 挂载pinia
}

export { store }

/**
 * 将pinia单独抽离出来 注册
 * 
 * 如果直接在main.ts中注册
 * 如果在hooks文件夹中 使用 pinia
 * 会出现 pinia未实例成功 就调用的报错
 * 
 * 我们需要导入 store
 * 传入store即可
*/
