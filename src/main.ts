import Vue, { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap";

import './style.css'
import App from './App.vue'
import { Routes} from './Routes';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin)

const app = createApp(App)
app.use(Routes)
app.mount('#app')



