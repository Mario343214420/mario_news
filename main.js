import Vue from 'vue'
import App from './App'
import store from './store'
import uView from 'uview-ui'
Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$path = 'http://192.168.0.219:4000'
App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
