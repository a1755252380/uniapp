<template>
	<view>
		<view class="head">
			<image src="../../../static/img/icon/scoreLogo.svg" mode="" class="img"></image>
			<text class="num">5</text>
			<text class="score">可用积分</text>
		</view>
		<view class="centerBox">
			<button class="btn" @click="gotoWith">兑换提现</button>
		</view>
		<view class="centerBox">
			<view class="hrefBox">
				<text @click="gotoRule">积分规则</text>
				<text @click="gotoScoreRe">积分记录</text>
				<text @click="gotoWithRe">提现记录</text>				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			gotoWith(){
				uni.navigateTo({
					url:'/pages/admin/myScore/withdrawal'
				})
			},
			gotoRule(){
				uni.navigateTo({
					url:'/pages/admin/myScore/scoreRule'
				})
			},
			gotoScoreRe(){
				uni.navigateTo({
					url:'/pages/admin/myScore/scoreRecord'
				})
			},
			gotoWithRe(){
				uni.navigateTo({
					url:'/pages/admin/myScore/withdrawalRecord'
				})
			},
		}
	}
</script>

<style lang="scss">
	.head{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 60rpx;
		.img{
			width: 240rpx;
			height: 240rpx;
		}
		.num{
			font-size: $font-size-20;
			margin: 10rpx;
		}
		.score{
			font-size: $font-size-20;
			margin: 10rpx;
			opacity: .6;
		}
	}
	.centerBox{
		display: flex;
		justify-content: center;
	}
	.btn{
		width: 480rpx;
		height: 80rpx;
		background-color: #67C23A;
		font-size: $font-size-14;
		color: white;
		margin-top: 50rpx;
	}
	.hrefBox{
		width: 480rpx;
		height: 80rpx;
		display: flex;
		justify-content: space-around;
		margin-top: 50rpx;
	}
</style>
