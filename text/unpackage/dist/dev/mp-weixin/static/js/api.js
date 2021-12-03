import {encryptDes,decryptDes} from "./DES.js"



//登录
export const login=(Account,password)=>{
	uni.request({
	    url: "/Ajaxapi/login", //仅为示例，并非真实接口地址。
	   method:"POST",
	   data:{
		   "account_num":Account,
		   "password":password
	   },
	    headers: encryptDes,
	    success: (res) => {
	        console.log(res.data);
	    
	    }
	});
}


//注册
export const Register=(name,Account,phone,password,invite)=>{
	uni.request({
	    url: "/Ajaxapi/registers", //仅为示例，并非真实接口地址。
	   method:"POST",
	   data:{
		   "name":name,
		   "account_num":Account,
		   "phone":phone,
		   "password":password,
		   "invite_code":invite || ''
	   },
	    headers: encryptDes,
	    success: (res) => {
	        console.log(res.data);
	    
	    }
	});
}