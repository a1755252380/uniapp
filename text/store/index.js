//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//实例store对象
const store = new Vuex.Store({
	state: {
		url: "https://wemall.minephone.com/openTask/qq_operTask/backend/public/index.php/api/Ajaxapi",
		prictureurl:"https://wemall.minephone.com/openTask/qq_operTask/backend",
		forcedLogin:true,//是否需要强制登陆
		isLogin:false,
		user_id:"",
		userName:"",
		token:''
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
		login(state,user){
			state.userName = user.username || '';
			state.isLogin = true;
			state.user_id = user.id || '';
			state.token = user.token || '';
			// state.pointId = user.pointId || '';
		},
		 logout(state) {
			state.userName = "";
			state.isLogin = false;
			state.user_id = '';
			state.token = '';
			// state.pointId = '';
		}
	}
})

//导出store对象
export default store

//export default const store或者export const store会报错
