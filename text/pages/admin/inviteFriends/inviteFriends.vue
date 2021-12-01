<template>
	<view class="main">
		<view class="score">
			<text class="num">1039020</text>
			<text>累计奖励积分</text>
		</view>
		<view class="items">
			<view class="item" @click="gotoMyInvite">
				<image src="../../../static/img/icon/invite.svg" mode=""></image>
				<text>我的邀请</text>
			</view>
			<view class="item" @click="gotoMyTeam">
				<image src="../../../static/img/icon/invite.svg" mode=""></image>
				<text>我的团队</text>
			</view>
			<view class="item" @click="gotoInviteRule">
				<image src="../../../static/img/icon/invite.svg" mode=""></image>
				<text>分销规则</text>
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
			gotoMyInvite(){
				uni.navigateTo({
					url:'/pages/admin/inviteFriends/myInvite/myInvite'
				})
			},
			gotoMyTeam(){
				uni.navigateTo({
					url:'/pages/admin/inviteFriends/myTeam/myTeam'
				})
			},
			gotoInviteRule(){
				uni.navigateTo({
					url:'/pages/admin/inviteFriends/InviteRule/InviteRule'
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
		.score{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.num{
				color: $green-bg-color;
				font-size: 56rpx;
				margin: 40rpx 0;
			}
			&:nth-child(2){
				font-size: $font-size-14;
			}
		}
		.items{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-top: 100rpx;
			.item{
				width: 200rpx;
				height: 200rpx;
				display: flex;
				flex-direction: column;
				font-size: $font-size-20;
				align-items: center;
				color: $green-bg-color;
				image{
					width: 80rpx;
					height: 80rpx;
					margin-bottom: 30rpx;
				}
			}
		}
	}
</style>
