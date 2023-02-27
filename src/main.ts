import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from './router'
import App from './App.vue'

import './style.css'

const app = createApp(App)
app.use(Router).use(createPinia()).mount('#app')
