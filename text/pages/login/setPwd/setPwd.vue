<template>
	<view class="main">
		<view class="accountBox">
			<input type="text" placeholder="请输入新密码" class="pwd"/>
			<input type="text" placeholder="请再次输入新密码" class="pwd"/>
		</view>
		<button type="default" class="btn" @click="gotoSetup">确认修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			gotoSetup(){
				uni.showToast({
					title:'修改成功'
				})
			}
		}
	}
</script>

<style lang="scss">
	.main{
		display: flex;
		flex-direction: column;
		align-items: center;
		.accountBox{
			display: flex;
			flex-direction: column;
			margin-top: 70rpx;
			input{
				width: 558rpx;
				height: 80rpx;
				border: 4rpx solid #f2f2f2;
				border-radius: 8rpx;
				font-size: $font-size-12;
				padding-left: 76rpx;
				box-sizing: border-box;
				opacity: .8;
				margin: 10rpx 0;
			}
			.account{
				background: url(../../../static/img/icon/person.svg) no-repeat 16rpx center;
				background-size: 50rpx 50rpx;
			}
			.pwd{
				background: url(../../../static/img/icon/lock.svg) no-repeat 16rpx center;
				background-size: 50rpx 50rpx;
			}
		}
		.btn{
			width: 558rpx;
			height: 90rpx;
			background-color: $green-bg-color;
			color: white;
			margin-top: 80rpx;
		}
	}
</style>
