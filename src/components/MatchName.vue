<template>
  <div class="match-name">
    <div class="__team">
      <img src="@/assets/images/arema-fc.png" width="50" />
      <p>Arema FC</p>
    </div>
    <span>vs</span>
    <div class="__team">
      <img src="@/assets/images/madura-united.png" width="50" />
      <p>Madura United</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.match-name {
  width: 100%;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .__team {
    width: 40%;
    text-align: center;

    p {
      font-weight: 500;
    }
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
