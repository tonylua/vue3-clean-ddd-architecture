import './common/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from '@infra/router'
import App from './App.vue'

const app = createApp(App)

// app.provide('router', router)

app.use(createPinia())
app.use(router)

app.mount('#app')
