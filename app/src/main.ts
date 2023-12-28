import './common/styles/main.css'
import { createApp } from 'vue'
import { createStore } from '@facade'
import { initRouter } from './common/utils/router'
import HomeView from './feature-foo/views/HomeView.vue'
import App from './App.vue'

const app = createApp(App)
app.use(createStore())
initRouter(app, [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/feature-foo/views/AboutView.vue')
  },
  {
    path: '/bar/counter',
    name: 'bar-counter',
    component: () => import('@/feature-bar/views/CounterView.vue')
  }
])

app.mount('#app')
