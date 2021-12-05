<template>
	<view>
		<view class="top">
			积分兑换：{{applyRule.proportion}}积分=1元，{{applyRule.quota}}积分起兑。
		</view>
		<view class="content">
			<view class="item" v-for="(i,index) in items" :key="index" @click="getMoney(i)">
				{{i}}元
			</view>
			<view class="item">
				<input type="number" placeholder="自定义金额" class="diy" v-model="userInfo.money" maxlength="3"/>元
			</view>
		</view>
		<view class="centerBox">
			<button  class="btn" @click="Withdrawal">兑换提现</button>		
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				items:['10','20','30','50','100'],
				userInfo:{
					user_id:this.$store.state.userInfo.user_id,
					money:'',
					score:0
				},
				applyRule:{},
			}
		},
		methods:{
			getMoney(money){
				this.userInfo.money = money
			},
			async getApplyRule(){
				const res = await this.$myRequest({
					url:'/applyRule'
				})
				this.applyRule = res.data.data
			},
			async getWithdrawal(){
				this.userInfo.score = this.userInfo.money * this.applyRule.proportion
				const res = await this.$myRequest({
					url:'/applyMoney',
					data:this.userInfo
				})
			},
			Withdrawal(){
				this.getWithdrawal()
				// console.log(this.userInfo)
			},
		},
		onLoad() {
			this.getApplyRule()
		},
		
	}
</script>

<style lang="scss">
	.top{
		height: 70rpx;
		display: flex;
		align-items: center;
		border: 1px solid #e5e5e5;
		border-radius: 4rpx;
		padding-left: 40rpx;
	}
	.content{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		.item{
			margin-top: 30rpx;
			width: 184rpx;
			height: 70rpx;
			border: 1px solid #5eae3d;
			border-radius: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: $font-size-16;
		}
		.diy{
			padding-left: 20rpx;
			opacity: .6;
			font-size: $font-size-12;
			text-align: right;
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
</style>
