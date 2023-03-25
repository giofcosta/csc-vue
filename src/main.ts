import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueLazyload from 'vue-lazyload'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)



createApp(App)
    .use(pinia)
    .use(router)
    .use(VueLazyload, {
        preLoad: 1,
        listenEvents: [ 'scroll' ]
      })
    .mount('#app')
