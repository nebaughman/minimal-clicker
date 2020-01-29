import {Engine} from "./Engine"
import {State} from "./State"

const state = new State()
const engine = new Engine(state)
Vue.observable(state) // so components can react

// TODO: instead of this, have components import an instance of State
Vue.prototype.$engine = engine
Vue.prototype.$state = state

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
