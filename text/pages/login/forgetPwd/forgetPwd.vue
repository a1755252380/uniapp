<template>
	<view class="main">
		<view class="accountBox">
			<input type="text" placeholder="请输入QQ号码作为登陆账号" class="account"/>
			<input type="text" placeholder="请输入手机号码用于找回密码" class="account"/>
		</view>
		<button type="default" class="btn" @click="gotoSetPwd">下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			gotoSetPwd(){
				uni.navigateTo({
					url:'/pages/login/setPwd/setPwd'
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
