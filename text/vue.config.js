// vue.config.js


module.exports = {
    transpileDependencies:['@dcloudio/uni-ui'],
	devServer: {
		proxy: {
		  '/Ajaxapi': {
			target: 'https://wemall.minephone.com/openTask/qq_operTask/backend/public/index.php/api',
			pathRewrite:{'^/Ajaxapi':'/Ajaxapi'},
			changeOrigin:true,
			// ws: true, //用于支持websocket
			// changeOrigin: true //用于控制请求头中的host值
		  },
		}
	  },
}