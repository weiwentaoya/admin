import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import type { loginFormData, checkUserType } from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user'
import { useRouter } from 'vue-router'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token'))
  const router = useRouter()
  const userLogin = async (params: loginFormData) => {
    const res = await reqLogin(params)
    token.value = res.data
    localStorage.setItem('token', res.data)
    getUserInfo()
    router.push('/')
  }

  const userInfo: Ref<checkUserType> = ref({})
  const getUserInfo = async () => {
    if (userInfo.value.name) return
    const res = await reqUserInfo()
    if (!res.data) {
      return router.replace('/login')
    }
    userInfo.value = res.data
    console.log(res.data)
  }

  return { token, userLogin, userInfo, getUserInfo }
})
