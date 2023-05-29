<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu
              v-for="item in menu.menuList"
              :index="item.code"
              :key="item.code"
            >
              <template #title>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item
                v-for="child in item.children"
                :index="child.code"
                :key="child.code"
              >
                <span>{{ child.name }}</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue'
import { getMenu } from '@/api/user'
import { useRoute } from 'vue-router'

import type { menuType } from '@/api/user/type'
const menu: Ref<menuType> = ref({})
const route = useRoute()
console.log(route)

onMounted(async () => {
  const res = await getMenu()
  menu.value = res.data
  console.log(res.data)
})
// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleOpen = () => {}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleClose = () => {}
</script>

<style scoped lang="scss">
.common-layout {
  .el-header {
    background-color: #304156;
  }
}
</style>
