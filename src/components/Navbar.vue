<template>
  <div class="navbar container">
    <div class="navbar__user-options">
      <icon icon="fa-regular fa-user"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: between;
  width: 100%;
  background-color: #6c757d;
  padding: 16px;
  .navbar__user-options {
    display: flex;
    justify-content: end;
    flex-grow: 1;
    color: #fff;
  }
}
</style>