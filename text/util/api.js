const BASE_URL = 'https://wemall.minephone.com/openTask/qq_operTask/backend/public/index.php/api/Ajaxapi'
import {encryptDes} from '../static/js/DES.js'


const myRequest = (options) =>{
	return new Promise((resolve,reject) => {
		uni.request({
			url:BASE_URL + options.url,
			method:options.method || 'POST',
			data:options.data || {},
			header:encryptDes(),
			success: res => {
				if(res.data.code === 1 || res.data.code === 200){
					// console.log('success')
					resolve(res)
				}else{
					console.log(res)
					console.log("请求错误")
					uni.showToast({
						title:res.data.msg
					})
					
				}
			},
			fail: (err) => {
				uni.showToast({
					title:'接口请求失败'
				})
				reject(err)
			}
		})
	})
}

export {myRequest}
