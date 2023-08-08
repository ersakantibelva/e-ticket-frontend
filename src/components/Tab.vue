<template>
  <div class="tab">
    <div @click="handleClick('/')" class="sub-tab home-tab">
      <icon icon="fa-solid fa-house" />
    </div>
    <div @click="handleClick('/order')" class="sub-tab orders-tab">
      <icon icon="fa-solid fa-cart-shopping" />
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';

const handleClick = (path: string): void => {
  router.push({ path })
}
</script>

<style lang="scss">
.tab {
  width: 100%;
  background-color: #6c757d;
  display: flex;

  .sub-tab {
    flex-grow: 1;
    padding: 16px;
    display: flex;
    justify-content: center;
    color: #fff;
  }
}
</style>
