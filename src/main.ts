import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'

import tooltip from '@/tool/tooltip/tooltip.js'
import '@/tool/tooltip/tooltip.css'

const refreshPage = () => {
  location.reload() // Reloads the current page
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('tooltip', tooltip)
app.mount('#app')
