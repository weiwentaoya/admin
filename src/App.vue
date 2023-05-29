<template>
  <!-- <div>
    <h1>APP</h1>
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <svg-icon name="welcome" width="600px" height="300px"></svg-icon>
  </div> -->

  <router-view></router-view>
</template>

<script setup lang="ts">
// import { Message, Star } from '@element-plus/icons-vue'
import { onMounted } from 'vue'
import { useUserStore } from '@/store/modules/user'
const store = useUserStore()
onMounted(() => {
  store.getUserInfo()
})
</script>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
