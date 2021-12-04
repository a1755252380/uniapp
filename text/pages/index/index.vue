<template>
	<view class="content"><toptab :more="more" :data1="data1" :data2="data2" :data3="data3" @Receivetype="Receivetype"></toptab>
	<fad></fad></view>
</template>

<script>
	import fad from "./fab.vue"
	import toptab from './TopTab.vue';
	import { mapState } from 'vuex'

export default {
	data() {
		const data = { type: '快', title: '测试1', num: '1', time: '00天18小时44分截至', fenshu: '1积分', baifenbi: '10' };
		return {
			type: 0,
			more: 'more',
			data1: new Array(15).fill(data),
			data2: new Array(8).fill(data),
			data3: new Array(5).fill(data)
		};
	},
	onLoad() {
		//判断登陆状态
		if(!this.isLogin){
			uni.reLaunch({
				url:'/pages/login/login'
			})
		}
		console.log(uni.getStorage({
			key:'account_num',
			success:(res)=>{
				console.log(res)
			}
		}))
	},
	onReachBottom() {
		console.log('加载');
		if (this.type === 0) {
			this.more = 'loading';
			for (let i = 0; i <= 10; i++) {
				this.data1.push({ type: '慢', title: '测试2', num: '1', time: '00天18小时44分截至', fenshu: '1积分', baifenbi: '10' });
			}

			setTimeout(() => {
				this.more = 'noMore';
			}, 3000);
		} else if (this.type === 1) {
			this.more = 'loading';
			setTimeout(() => {
				this.more = 'noMore';
			}, 3000);
		} else if (this.type === 2) {
			this.more = 'loading';
			setTimeout(() => {
				this.more = 'noMore';
			}, 3000);
		}
	},
	methods: {
		//接收传过来的是哪种类型
		Receivetype(type) {
			this.type = type;
			this.more = 'more';
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
