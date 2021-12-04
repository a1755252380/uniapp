//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//实例store对象
const store = new Vuex.Store({
	state: {
		forcedLogin:true,//是否需要强制登陆
		isLogin:false,
		userInfo:{
			user_id:"",
			name:"",//姓名
			account_num:'',//账号
			phone:'',//手机号
			password:'',//密码
			invite_code:'',//邀请码
		}
	},
	getters:{
	},
	//响应动作
	actions:{
		
	},
	
	//操作数据
	mutations: {
		// 登入并设置用户id
		setUpUserId(state,use_id){
			state.userInfo.user_id = use_id || '';
			state.isLogin = !state.isLogin
		},
		// 重置密码
		resetPwd(state,{phone,account_num}){
			state.userInfo.account_num = account_num
			state.userInfo.phone = phone
		}
	}
})

//导出store对象
export default store

//export default const store或者export const store会报错
