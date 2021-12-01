<template>
	<view>
		<view class="top">
			<view class="img"></view>
			<view class="text">
				帅帅
			</view>
		</view>
		<view class="content">
			<view class="item" @click="gotoMyScore">
				我的积分
			</view>
			<view class="item" @click="gotoMyTask">
				我的任务
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			gotoMyScore(){
				uni.navigateTo({
					url:"/pages/admin/myScore/myScore"
				})
			},
			gotoMyTask(){
				uni.navigateTo({
					url: "/pages/admin/myTask/myTask"
				})
			}
		}
	}
</script>

<style lang="scss">
	.top{
		width: 680rpx;
		height: 160rpx;
		border-bottom: 30rpx solid #f2f2f2;
		display: flex;
		padding: 60rpx;
		.img{
			width: 140rpx;
			height: 140rpx;
			border: 1px solid #f2f2f2;
			border-radius: 60rpx;
			background: url(../../static/img/icon/tab2-active.png) no-repeat center center;
			background-size: cover;
			margin: 5px 10px 5px 0;
		}
	}
	.content{
		width: 100%;
		.item{
			width: 100%;
			height: 100rpx;
			padding: 30rpx;
			font-size: $font-size-14;
			border-bottom: 1px solid #f2f2f2;
			box-sizing: border-box;
		}
	}
</style>
