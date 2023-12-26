import './common/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@infra/router'
import App from './App.vue'

import { provideCounterStore } from '@/common/utils/pinia'

const app = createApp(App)

provideCounterStore(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
