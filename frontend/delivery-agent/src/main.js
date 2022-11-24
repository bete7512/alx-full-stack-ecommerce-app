import { createApp,provide, h } from 'vue'
import { createPinia } from 'pinia'
import apolloclient from './apollo.config'
import {DefaultApolloClient} from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import Main from './components/layouts/MainLayout.vue'
import Empty from './components/layouts/EmptyLayout.vue'
import './index.css'

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloclient)
    },
    render: ()=> h(App),

});

// const app = createApp({
//     setup() {
//       provide(DefaultApolloClient, apolloclient)
//     },
//     render: ()=> h(App),
//   });
app.component('main-layout',Main)
app.component('empty-layout',Empty)

app.use(createPinia())
app.use(router)

app.mount('#app')
