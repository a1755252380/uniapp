<template>
	<view class="main">
		<view class="img"></view>
		<view class="accountBox">
			<input 
				type="text" 
				placeholder="请输入账号" 
				class="account" 
				focus
			/>
			<!-- h5和app,写passward时type会失效 -->
			<input type="text" password placeholder="请输入密码" class="pwd"/>
		</view>
		<view class="actionPwd">
			<view>
				<label class="radio">
					<radio value=""  :checked="ischeck" @click="isCheck"/><text>记住密码</text>
				</label>
			</view>
			<view @click="gotoForget">
				忘记密码
			</view>
		</view>
		<view class="btn">
			<button type="default" @click="login">登陆</button>
			<button type="default" @click="gotoRegister">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ischeck:false
			}
		},
		methods: {
			isCheck(){
				this.ischeck = !this.ischeck
			},
			login(){
				uni.showToast({
					title: '登陆成功'
				})
			},
			gotoRegister(){
				uni.navigateTo({
					url: '/pages/login/registerPage/registerPage'
				})
			},
			gotoForget(){
				uni.navigateTo({
					url:'/pages/login/forgetPwd/forgetPwd'
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
		.img{
			width: 558rpx;
			height: 244rpx;
			background: url(../../static/img/icon/login.png) no-repeat center center;
			background-size: 122px 122px;
			margin-top: 154rpx;
		}
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
			}
			.account{
				background: url(../../static/img/icon/person.svg) no-repeat 16rpx center;
				background-size: 50rpx 50rpx;
			}
			.pwd{
				margin: 40rpx 0;
				background: url(../../static/img/icon/lock.svg) no-repeat 16rpx center;
				background-size: 50rpx 50rpx;
			}
		}
		.actionPwd{
			display: flex;
			flex-direction: row;
			width: 560rpx;
			justify-content: space-between;
			font-size: $font-size-14;
			/deep/.radio{
				width: 26rpx;
				height: 26rpx;
			}
		}
		.btn{
			height: 250rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			button{
				width: 560rpx;
				height: 90rpx;
				&:first-child{
					margin-top: 40rpx;
					background-color: $green-bg-color;
					color: white;
				}
				&:nth-child(2){
					background-color: #666666;
					color: white;
				}
			}
		}
			
	}
</style>
