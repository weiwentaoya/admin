import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import gloablComponent from './components/index'
import 'virtual:svg-icons-register'
createApp(App)
  .use(gloablComponent)
  .use(ElementPlus, { locale: zhCn })
  .mount('#app')
