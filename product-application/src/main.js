import './assets/main.css'
import login from "./components/login.vue"
import register from "./components/register.vue"
import allProducts from "./components/all-products.vue"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import { createRouter, createWebHistory } from 'vue-router'
const pinia = createPinia()
const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi,
        },
    },
  })

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/all-products', component: allProducts }
    ]
});

app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')