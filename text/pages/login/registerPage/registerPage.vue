<template>
	<view class="main">
		<view class="accountBox">
			<input type="text" v-model="info.name" placeholder="用户昵称" focus class="account"/>
			<input type="text" v-model="info.account_num" placeholder="请输入QQ号码作为登陆账号" class="account"/>
			<input type="number" v-model="info.phone" maxlength="13" placeholder="请输入手机号码用于找回密码" class="account"/>
			<input type="text" v-model="info.password" placeholder="请输入密码" class="pwd"/>
			<input type="text" v-model="pwd" 
			placeholder="请再次输入密码" class="pwd" @blur="proofread"/>
			<input type="text" v-model="info.invite_code" placeholder="邀请码(非必填)" class="account"/>
		</view>
		<button type="default" class="btn" @click="registered">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//注册的用户信息
				info:{
					name:'',
					account_num:"",
					phone:"",
					password:"",
					invite_code:"",
				},
				pwd:"",
				check:false, // 密码校验
			}
		},
		methods: {
			// 判断页面内容是否缺少必要内容
			registered(){
				let arr = [] 
				//校验
				this.proofread()
				console.log('2',this.check)
				if(this.check){
					for(const [key,value] of Object.entries(this.info)){
						if(key == 'invite_code'){
							continue
						}else{
							if(value == ''){
								arr.push(value)
							}
						}
					}
					arr.length == 0 ? this.getRegistered():uni.showToast({
						title:'还有空白没填'
					})
				}
				
			},
			
			
			
			//两次不一致密码没改就不让注册
			async getRegistered(){
				const res = await this.$myRequest({
					url:'/registers',
					data:this.info,
				})
				if(res.data.code === 1){
					uni.showToast({
						title:'注册成功'
					})
					uni.redirectTo({
						url:'/pages/login/login'
					})
				}
			},
			// 校验两次密码是否相同
			proofread(){
				if(this.info.password && this.pwd){
					this.info.password === this.pwd ? this.check = true : uni.showToast({
							title:'密码不一致'
					})
					
				}else{
					uni.showToast({
						title:'密码不能为空'
					})
				}
			}
			
		},
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
				background: url('data:image/svg+xml;base64,PHN2ZyB0PSIxNjE5OTQ3NjU4MDM5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMxNTgiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTAwLjQ4OTk5OCA2ODMuOTY3MjMyYy00Ni4xMzc1NSAwLTkwLjgxMTk2NC05LjA3MTQ0Mi0xMzIuOTUwMjc2LTI2LjgyNDE1Ny00MC42NzUxNzYtMTcuMTY3NDYtNzcuMTU2MDMtNDEuODQ1Njg1LTEwOC41NjQ2NzktNzMuMTU2Nzkycy01NS45ODkzMzEtNjcuODg5NTAzLTczLjE1Njc5Mi0xMDguNTY0Njc5Yy0xNy44NTAyNTctNDIuMTM4MzEyLTI2LjgyNDE1Ny04Ni44MTI3MjYtMjYuODI0MTU3LTEzMi45NTAyNzYgMC00Ni4xMzc1NSA5LjA3MTQ0Mi05MC44MTE5NjQgMjYuODI0MTU3LTEzMi45NTAyNzYgMTcuMTY3NDYtNDAuNjc1MTc2IDQxLjg0NTY4NS03Ny4xNTYwMyA3My4xNTY3OTItMTA4LjU2NDY3OXM2Ny44ODk1MDMtNTUuOTg5MzMxIDEwOC41NjQ2NzktNzMuMTU2NzkyQzQwOS42NzgwMzQgOS45NDkzMjQgNDU0LjM1MjQ0OCAwLjk3NTQyNCA1MDAuNDg5OTk4IDAuOTc1NDI0czkwLjgxMTk2NCA5LjA3MTQ0MiAxMzIuOTUwMjc2IDI2LjgyNDE1N2M0MC42NzUxNzYgMTcuMTY3NDYgNzcuMTU2MDMgNDEuODQ1Njg1IDEwOC41NjQ2NzkgNzMuMTU2NzkyczU1Ljk4OTMzMSA2Ny44ODk1MDMgNzMuMTU2NzkyIDEwOC41NjQ2NzljMTcuODUwMjU3IDQyLjEzODMxMiAyNi44MjQxNTcgODYuODEyNzI2IDI2LjgyNDE1NyAxMzIuOTUwMjc2cy05LjA3MTQ0MiA5MC44MTE5NjQtMjYuODI0MTU3IDEzMi45NTAyNzZjLTE3LjE2NzQ2IDQwLjY3NTE3Ni00MS44NDU2ODUgNzcuMTU2MDMtNzMuMTU2NzkyIDEwOC41NjQ2NzlzLTY3Ljg4OTUwMyA1NS45ODkzMzEtMTA4LjU2NDY3OSA3My4xNTY3OTJjLTQyLjEzODMxMiAxNy43NTI3MTUtODYuODEyNzI2IDI2LjgyNDE1Ny0xMzIuOTUwMjc2IDI2LjgyNDE1N3ogbTAtNjIwLjY2MjIyMkMzNDYuNjY1NjUxIDYzLjMwNTAxIDIyMS40MjEyMjMgMTg4LjU0OTQzOCAyMjEuNDIxMjIzIDM0Mi40NzEzMjhzMTI1LjI0NDQyOCAyNzkuMDY4Nzc1IDI3OS4wNjg3NzUgMjc5LjA2ODc3NWMxNTMuOTIxODkgMCAyNzkuMDY4Nzc1LTEyNS4yNDQ0MjggMjc5LjA2ODc3NS0yNzkuMDY4Nzc1UzY1NC40MTE4ODggNjMuMzA1MDEgNTAwLjQ4OTk5OCA2My4zMDUwMXoiIGZpbGw9IiNkYmRiZGIiIHAtaWQ9IjMxNTkiPjwvcGF0aD48cGF0aCBkPSJNMzMuMzU5NDk3IDEwMjRjLTMuMzE2NDQxIDAtNi42MzI4ODItMC40ODc3MTItOS45NDkzMjQtMS42NTgyMjEtMTYuMzg3MTIxLTUuNDYyMzc0LTI1LjE2NTkzNi0yMy4yMTUwODktMTkuNzAzNTYyLTM5LjUwNDY2NyAxNy4yNjUwMDMtNTEuNDA0ODM5IDQyLjMzMzM5Ny05OS41OTA3NzkgNzQuNTIyMzg1LTE0My4zODczMTIgMzEuNzk4ODE5LTQzLjMwODgyMSA2OS45Mzc4OTMtODEuMzUwMzUyIDExMy4zNDQyNTYtMTEzLjA1MTYyOSA5MC4xMjkxNjctNjUuOTM4NjU1IDE5Ni45MzgwODMtMTAwLjc2MTI4OCAzMDguOTE2NzQ2LTEwMC43NjEyODhzMjE4Ljc4NzU3OSAzNC44MjI2MzMgMzA4LjkxNjc0NiAxMDAuNzYxMjg4YzQzLjQwNjM2MyAzMS43MDEyNzYgODEuNDQ3ODk1IDY5Ljc0MjgwOCAxMTMuMzQ0MjU2IDExMy4wNTE2MjkgMzIuMTg4OTg4IDQzLjc5NjUzMyA1Ny4yNTczODIgOTIuMDgwMDE1IDc0LjUyMjM4NSAxNDMuMzg3MzEyIDUuNDYyMzc0IDE2LjM4NzEyMS0zLjMxNjQ0MSAzNC4wNDIyOTQtMTkuNzAzNTYyIDM5LjUwNDY2Ny0xNi4zODcxMjEgNS40NjIzNzQtMzQuMDQyMjk0LTMuMzE2NDQxLTM5LjUwNDY2OC0xOS43MDM1NjJDODc0Ljk1NTIzIDgxNC40Nzg5NDggNjk5LjE4Mzg0NSA2ODguMDY0MDEyIDUwMC40ODk5OTggNjg4LjA2NDAxMiAzMDEuODkzNjk0IDY4OC4wNjQwMTIgMTI2LjAyNDc2NyA4MTQuNDc4OTQ4IDYyLjkxNDg0MSAxMDAyLjczNTc1OWMtNC4zODk0MDggMTIuOTczMTM4LTE2LjQ4NDY2NCAyMS4yNjQyNDEtMjkuNTU1MzQ0IDIxLjI2NDI0MXoiIGZpbGw9IiNkYmRiZGIiIHAtaWQ9IjMxNjAiPjwvcGF0aD48L3N2Zz4=') no-repeat 16rpx center;
				background-size: 50rpx 50rpx;
			}
			.pwd{
				background: url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjE5OTQ3NjkxODIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQwMDMiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNzkyLjc5MiA0MzguMTY0YzQxLjIzIDAgNzQuNjQ0IDMzLjQxNSA3NC42NDQgNzQuNTl2MzQ3Ljk5OWMwIDQxLjIzLTMzLjQxNSA3NC41OS03NC41OSA3NC41OUgyNDUuOTIxYy00MS4xNzYgMC03NC41OS0zMy40MTUtNzQuNTktNzQuNTlWNTEyLjc1NWMwLTQxLjIzIDMzLjQxNC03NC41OSA3NC41OS03NC41OWg1NDYuOTIzbTAtNzQuNTkxSDI0NS45MjJhMTQ5LjE4IDE0OS4xOCAwIDAgMC0xNDkuMTggMTQ5LjE4djM0Ny45OTlhMTQ5LjE4IDE0OS4xOCAwIDAgMCAxNDkuMTI2IDE0OS4xMjdoNTQ2Ljk3N2ExNDkuMTggMTQ5LjE4IDAgMCAwIDE0OS4xODEtMTQ5LjEyN1Y1MTIuNzU1YTE0OS4xOCAxNDkuMTggMCAwIDAtMTQ5LjE4LTE0OS4xODF6TTUxOS4zODQgOTAuMTEyYTE3My45NzIgMTczLjk3MiAwIDAgMSAxNzMuOTcyIDE3My45NzJ2OTkuNDloLTM0Ny44OXYtOTkuNDM2QTE3My45NzIgMTczLjk3MiAwIDAgMSA1MTkuNDkgOTAuMTEybTAtNzQuNTM2YTI0OC42MTYgMjQ4LjYxNiAwIDAgMC0yNDguNjcgMjQ4LjUwOHYxNzQuMDhINzY4di0xNzQuMDhBMjQ4LjYxNiAyNDguNjE2IDAgMCAwIDUxOS40MzcgMTUuNTIyaC0wLjEwNyAwLjEwN3ogbTAgNzgzLjA5YTM3LjI0MSAzNy4yNDEgMCAwIDEtMzcuMjk1LTM3LjI5NVY2MTIuMTlhMzcuMjQxIDM3LjI0MSAwIDAgMSA3NC41MzcgMHYxNDkuMTI2YzAgMjAuNTg4LTE2LjcwOCAzNy4yOTUtMzcuMjQyIDM3LjI5NXoiIHAtaWQ9IjQwMDQiIGZpbGw9IiNkYmRiZGIiPjwvcGF0aD48L3N2Zz4=) no-repeat 16rpx center;
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
