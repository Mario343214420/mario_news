import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		user: {
			tel: '',
			username: ''
		},
		captcha: ''
	},
    mutations: {
		
	},
    actions: {
		
	}
})
export default store