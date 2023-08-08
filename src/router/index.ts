import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import RegisterView from '@/views/register/RegisterView.vue'
import LoginView from '@/views/login/LoginView.vue'
import OtpView from '@/views/otp/OtpView.vue'
import OrderView from '@/views/order/OrderView.vue'
import SeatCategoryView from '@/views/match-reservation/SeatCategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Main View',
      component: HomeView
    },
    {
      path: '/register',
      name: 'Register View',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'Login View',
      component: LoginView
    },
    {
      path: '/otp/verify',
      name: 'Verify OTP View',
      component: OtpView
    },
    {
      path: '/order',
      name: 'Order View',
      component: OrderView
    },
    {
      path: '/match/:matchId/seat-category',
      name: 'Match Seat Category View',
      component: SeatCategoryView
    },
  ]
})

export default router
