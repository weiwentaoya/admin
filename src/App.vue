<template>
  <div>
    <h1>APP</h1>
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
  </div>
  <Test />
</template>

<script setup lang="ts">
import Test from "./components/Test.vue";
import { Message, Star } from "@element-plus/icons-vue";
</script>

<style scoped></style>
