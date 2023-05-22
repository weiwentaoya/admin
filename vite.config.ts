import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
// export default defineConfig(({ command }) => {
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // viteMockServe({
      //   localEnabled: command === 'serve',
      // }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    //代理跨域
    // server: {
    //   proxy: {
    //     [import.meta.env.VITE_APP_BASE_API]: {
    //       //获取数据的服务器地址设置
    //       target: import.meta.env.VITE_SERVE,
    //       //需要代理跨域
    //       changeOrigin: true,
    //       //路径重写
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
    server: {
      proxy: {
        '/dev-api': {
          //获取数据的服务器地址设置
          target: 'http://sph-api.atguigu.cn',
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path) => path.replace('dev-api', ''),
        },
      },
    },
  }
})
