import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Main from './components/layouts/MainLayout.vue'
import Empty from './components/layouts/EmptyLayout.vue'
import './index.css'

const app = createApp(App)
app.component('main-layout',Main)
app.component('empty-layout',Empty)

app.use(createPinia())
app.use(router)
app.mount('#app')
