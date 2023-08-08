<template>
  <div class="main-layout">
    <Navbar />
    <div class="container main-container">
      <slot></slot>
    </div>
    <Tab />
  </div>
</template>

<script setup lang="ts">
import Tab from '@/components/Tab.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<style lang="scss">
.main-layout {
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main-container {
    flex-grow: 1;
    height: 100%;
    width: 100%;
  }
}
</style>
