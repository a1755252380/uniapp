<template>
	<view class="main">
		<navBar :data1="data1" @receiptType="receiptType"></navBar>
		<fab></fab>
	</view>
</template>

<script>
	import navBar from '../../compoent/navBar.vue'
	import fab from '../../index/fab.vue'
	export default{
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
		onReachBottom() {
			
		},
		onLoad() {
			// 一加载就请求数据
			// const res = this.$myRequest({
			// 	url:''
			// })
		},
		methods:{
			receiptType(){
				// 
			}
		},
		components:{navBar,fab}
	}
</script>

<style lang="scss">
</style>
