import { acceptHMRUpdate, defineStore } from "pinia"

export const useRouterStore = defineStore("router", () => {
    // 路由数据
    const nav = reactive([
    ]);

    // 判断当前路由是否激活
    const isActivation = (data: boolean) => {
        if (data) return "color:#478AFF"
    }

    return { nav, isActivation }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useRouterStore, import.meta.hot))
}
