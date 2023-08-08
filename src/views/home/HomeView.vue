<template>
  <Main>
    <div class="home-view">
      <p class="__header-text">Hi, John Doe!</p>

      <div class="card__upcoming-ticket">
        <p class="__upcoming-text">Your Upcoming Match Ticket</p>
        <div class="card __details">
          <div class="match_name">
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
          <div class="match__date">Sunday, 16 July 2023 - 10:00 PM</div>
          <button class="btn btn-primary">See Details</button>
        </div>
      </div>

      <div class="carousel-matches">
        <MatchCard class="match-card" />
        <MatchCard class="match-card" />
      </div>

      <div class="contact-us">
        <button class="btn btn-outline-info">Contact Us</button>
      </div>
    </div>
  </Main>
</template>

<script setup lang="ts">
import Main from '@/components/Main.vue'
import MatchCard from '@/components/MatchCard.vue'
</script>

<style lang="scss" scoped>
.home-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;

  .__header-text {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    margin: 0;
  }

  .card__upcoming-ticket {
    margin: 5px 0;
    .__upcoming-text {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }

    .__details {
      text-align: center;
      padding: 10px;
      margin: 10px;

      .match_name {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .__team {
          width: 40%;

          p {
            font-weight: 500;
          }
        }

        span {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }

  }

  .carousel-matches {
    display: flex;
    width: 100%;
    overflow-x: auto;
  }
  
  .contact-us {
    margin: 15px 0;

    .btn {
      margin: 0 auto;
      width: 100%;
    }
  }
}
</style>
