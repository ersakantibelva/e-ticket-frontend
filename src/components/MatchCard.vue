<template>
  <div class="card__match">
    <div class="__details">
      <div class="__date">Sunday, 16 July 2023</div>
      <div class="__kick-off">
        <span class="">Kick Off: </span>
        <span>10:00 PM</span>
      </div>
    </div>
    <!-- <div class="match_name">
      <div class="__team">
        <img src="@/assets/images/arema-fc.png" width="50" />
        <p>Arema FC</p>
      </div>
      <span>vs</span>
      <div class="__team">
        <img src="@/assets/images/madura-united.png" width="50" />
        <p>Madura United</p>
      </div>
    </div> -->
    <MatchName />

    <button class="btn btn-primary">Book Now!</button>
  </div>
</template>

<script setup lang="ts">
import MatchName from './MatchName.vue';
</script>

<style lang="scss" scoped>
.card__match {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  background-color: #6c757d;
  color: #fff;
  border-radius: 4px;

  .__date {
    font-weight: 500;
    font-size: 16px;
  }

  .match_name {
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

  button {
    width: fit-content;
  }
}
</style>
