<template>
  <div class="seat-category-view">
    <Navbar />
    
    <h2>Ticket Reservation</h2>

    <MatchName />

    <p>Gelora Bung Karno</p>

    <p>Kick Off</p>
    <p>10:00 PM</p>

    <p>Choose Seat Category</p>

    <div class="seat-category__container">
      <SeatCategoryCard />
      <SeatCategoryCard />
      <SeatCategoryCard />
      <SeatCategoryCard />
      <SeatCategoryCard />
      <SeatCategoryCard />
      <SeatCategoryCard />
      <SeatCategoryCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import MatchName from '@/components/MatchName.vue'
import SeatCategoryCard from './components/SeatCategoryCard.vue'
</script>

<style lang="scss" scoped>
.seat-category__container {
  padding: 10px 15px;

  display:flex;
  flex-direction: column;
  gap: 10px;
}
</style>