import './common/styles/main.css'
import { createApp } from 'vue'
import router from '@infra/router'
import App from './App.vue'

import { initStore } from '@/common/utils/pinia'

const app = createApp(App)

initStore(app)
app.use(router)

app.mount('#app')
