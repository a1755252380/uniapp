//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//实例store对象
const store = new Vuex.Store({
	state: {
		url: "https://wemall.minephone.com/openTask/qq_operTask/backend/public/index.php/api/Ajaxapi",
		prictureurl:"https://wemall.minephone.com/openTask/qq_operTask/backend"
	},
	getters:{
		geturl(state){
			return state.url
		},
		getprictureurl(state){
			return state.prictureurl
		}
	},
	mutations: {
		
	}
})

//导出store对象
export default store

//export default const store或者export const store会报错
