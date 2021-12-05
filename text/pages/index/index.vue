<template>
	<view class="content"><toptab :more="more" :modedata="loadedata"  @Receivetype="Receivetype"></toptab>
	<fad></fad></view>
</template>

<script>
	import fad from "./fab.vue"
	import toptab from './TopTab.vue';
	import { mapState } from 'vuex'

export default {
	data() {
		
		return {
			type: "快手",
			more: 'more',
			//缓存数据
			data1: {
				"快手":{
					data:[],
					Page:1
				},
				"抖音":{
					data:[],
					Page:1
				},
				"小红书":{
					data:[],
					Page:1
				}
				
			},
			
			
			//加载页数
			loadpage:1,
			//数据展示
			loadedata:[]
		}
	},
	onLoad() {
		//判断登陆状态
		if(!this.isLogin){
			uni.reLaunch({
				url:'/pages/login/login'
			})
		}else{
			this.loaddata()
		}
		//一登陆成功就请求用户的相关数据
	},
	onReachBottom() {
		console.log('加载');

			this.more = 'loading';
			this.data1[this.type].Page++
			this.loadpage++
			this.loaddata()
			setTimeout(() => {
				this.more = 'noMore';
			}, 1500);
		
	},
	methods: {
		//接收传过来的是哪种类型
		Receivetype(type) {
			this.type = type;
			this.loadpage=this.data1[type].Page
			console.log(this.type)
			if(this.data1[type].data.length==0){
				this.loaddata()
			}else{
				this.loadedata=this.data1[this.type].data
			}
			
			this.more = 'more';
		},
		
		//加载数据
		async loaddata(){
			await this.$myRequest({
				url:'/taskList',
				method:'POST',
				data:{
				user_id:this.$store.state.userInfo.user_id,
					type:this.type,
					page:this.loadpage,
					limit:10
				},
			}).then((res)=>{
				console.log(res)
				for(let i=0;i<res.data.data.dataArr.length;i++){
					this.data1[this.type].data.push(res.data.data.dataArr[i])
				}
				
				this.loadedata=this.data1[this.type].data
			
			})
		}
	},
	components: {
		toptab,fad
	},
	computed:mapState(['forcedLogin','isLogin']),//对全局变量进行监控
};
</script>

<style>
.content {
	width: 100%;
}
</style>
