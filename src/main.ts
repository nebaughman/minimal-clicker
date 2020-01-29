import {Engine} from "./Engine"
import {State} from "./State"

const state = new State()
const engine = new Engine(state)
Vue.observable(state) // so components can react

Vue.prototype.$engine = engine
Vue.prototype.$state = state

import Vue from 'vue'
import App from './App.vue'
//import router from './router'

Vue.config.productionTip = false

new Vue({
  //router,
  render: h => h(App)
}).$mount('#app')
