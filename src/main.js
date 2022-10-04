import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// link bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

// template style
// import "./assets/css/style.css"

createApp(App).use(store).use(router).mount('#app')
