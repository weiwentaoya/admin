<template>
  <div class="login-page__wrap">
    <el-form :model="form" label-width="0px" class="login-form__wrap">
      <h1>Welcome Hekka</h1>
      <el-form-item label="">
        <el-input v-model="form.username" placeholder="username" />
      </el-form-item>
      <el-form-item label="">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { loginFormData } from '@/api/user/type'
import { useUserStore } from '@/store/modules/user'
// do not use same name with ref
const form: loginFormData = reactive({
  username: 'admin',
  password: 'atguigu123',
})

const store = useUserStore()
const onSubmit = () => {
  store.userLogin(form)
}
</script>

<style scoped lang="scss">
.login-page__wrap {
  background-color: #2d3a4b;
  height: 100vh;
  overflow: hidden;
  .login-form__wrap {
    width: 400px;
    margin: 200px auto;
    h1 {
      font-size: 18px;
      line-height: 108px;
      text-align: center;
      color: #fff;
    }
    .el-button {
      margin-top: 12px;
      width: 100%;
    }
  }
}
</style>
