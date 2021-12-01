<template>
	<view>
		<view class="main">
			<view class="item" v-for="(i,index) in items" @click="pageIndex(index)">
				{{i}}
			</view>
		</view>
		<view class="bar">
			<view class="isAcitve" :class="current == 0?'isActive0':current == 1?'isActive1':'isActive2'"></view>
		</view>
		<view class="content">
			<view class="" v-show="current == 0">
				本周
			</view>
			<view class="" v-show="current == 1">
				本月
			</view>
			<view class="" v-show="current == 2">
				本年
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				items:['本周','本月','本年'],
				current:0,
				
			}
		},
		methods:{
			pageIndex(i){
				this.current = i
			}
		}
	}
</script>

<style lang="scss">
	.main{
		display: flex;
		justify-content: space-around;
		align-items: center;
		.item{
			width: 25%;
			height: 80rpx;
			line-height: 80rpx;
			flex: 1;
			text-align: center;
		}
	}
	.bar{
		width: 100%;
		height: 4rpx;
		background-color: #f2f2f2;
		.isAcitve{
			width: 125px;
			height: 4rpx;
			background-color: #5eae3d;
			transform: translateX(0);
			transition: transform .5s ease 0s;
		}
		.isActive0{
			transform: translateX(0px);
		}
		.isActive1{
			transform: translateX(125px);
		}
		.isActive2{
			transform: translateX(250px);
		}
	}
</style>
