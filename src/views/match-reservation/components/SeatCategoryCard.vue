<template>
  <div class="seat-category-card card">
    <div class="__content">
      <div class="__details">
        <p>East Tribune (E-1)</p>
        <p>@RP. 100.000, - (Tax Excluded)</p>
      </div>

      <button class="btn btn-primary">Select</button>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.seat-category-card {
  width: 100%;
  .__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button {
    height: fit-content;
  }
}
</style>