import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
library.add(faHouse, faCartShopping, faUser);

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
