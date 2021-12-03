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
				console.log(res),
				console.log(encryptDes())
			}
		})
	})
}

export {myRequest}
