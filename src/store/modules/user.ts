import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import type { loginFormData } from '@/api/user/type'
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
    router.push('/')
    console.log(res)
  }
  const userInfo = ref({})
  const getUserInfo = async () => {
    const res = await reqUserInfo()
    console.log(res.data)
  }

  return { token, userLogin, userInfo, getUserInfo }
})
onMounted(() => {
  useUserStore().getUserInfo()
})
