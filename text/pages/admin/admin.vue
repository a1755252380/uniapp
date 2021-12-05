<template>
	<view>
		<view class="top">
			<view class="left">
				<view class="text1">{{userInfo.name}}</view>
				<view class="text2">{{userInfo.account_num}}</view>
			</view>
			<view class="right">
				<image src="../../static/img/icon/invite.svg" mode="" class="img"></image>
				<view class="text">邀请绑定</view>
			</view>
		</view>
		<view class="content">
			<view class="item" @click="gotoMyScore">
				我的积分
			</view>
			<view class="item" @click="gotoMyTask">
				我的任务
			</view>
			<view class="item" @click="gotoSell">
				分销中心
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userInfo:{},
			}
		},
		methods:{
			gotoMyScore(){
				uni.navigateTo({
					url:`/pages/admin/myScore/myScore`
				})
			},
			gotoMyTask(){
				uni.navigateTo({
					url: "/pages/admin/myTask/myTask"
				})
			},
			gotoSell(){
				uni.navigateTo({
					url:'/pages/admin/inviteFriends/inviteFriends'
				})
			},
			async getUserInfo(){
				const res = await this.$myRequest({
					url:'/personCenter',
					data:{user_id:`${this.$store.state.userInfo.user_id}`}
				})
				this.userInfo = res.data.data
			}
		},
		onLoad() {
			//切换到个人中心就获取数据
			this.getUserInfo()
			console.log('onload')
		},
		//小程序不支持activated
		// activated() {
		// 	console.log('activated_admin')
		// },
		updated() {
			console.log('updated_admin')
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.left{
			.text1{
				display: block;
				font-size: $font-size-16;
				font-weight: 500;
				margin-bottom: 30rpx;
			}
			.text2{
				display: block;
				font-size: $font-size-14;
			}
		}
		.right{
			.img{
				width: 60rpx;
				height: 60rpx;
			}
			.text{
				font-size: $font-size-14;
				color: $green-bg-color;
			}
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
