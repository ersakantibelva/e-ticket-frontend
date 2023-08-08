<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
}
</style>