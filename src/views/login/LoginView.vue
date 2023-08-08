<template>
  <div
    class="login-view container d-flex flex-column justify-content-center align-items-center gap-2"
  >
    <h1 class="__title">Log In</h1>

    <template v-for="field in fieldsState" :key="field.name">
      <div class="flex-nowrap flex-column w-100">
        <label :for="field.name" class="form-label">{{ field.label }}</label>
        <input
          :type="field.type"
          class="form-control"
          :id="field.name"
          :placeholder="field.placeholder"
        />
      </div>
    </template>

    <button class="btn btn-primary">Login</button>

    <div>Don't have any account? <router-link to="/register">Register</router-link></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { fields } from './lib/fields.ts'

const fieldsState = reactive(fields)
</script>

<style lang="scss" scoped>
.login-view {
  height: 100vh;
  width: 100vw;
  padding: 10px;
}
</style>
