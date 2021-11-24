<template>
	<view class="">
		<uni-card note="Tips" class="Task" >
		<uni-row class="demo-uni-row">
		    <uni-col :span="14"  >
				<view class="left">
					<text class="title">【{{item.type}} 】 {{item.title}}</text>
					<view class="num">
						<text >{{item.num}}名</text>
						<view class="jd" style="display: inline-block;">
							<view :style='{"background":"#5EAE3D",
							"border-radius": "5rpx",
							"height":"100%","width":item.baifenbi+"%"}'></view>
							
						</view>
						<text>&nbsp;&nbsp;&nbsp;{{item.baifenbi}}%</text>
					</view>
				</view>
		       
		    </uni-col>
		    <uni-col :span="10" >
				<view class="right">
					<view class="integration">{{item.fenshu}}</view>
					<view class="time">{{item.time}}</view>
				</view>
		       
		    </uni-col>
		   
		</uni-row>
		</uni-card>
	</view>
</template>

<script>
	  export default{
		  props:['item2'],
		  
		  computed:{
			  item(){
				  return  this.item2
			  }
		  }
	  }
</script>

<style lang="scss" scoped>
	.Task{
		width: 90%;
		// height: 100rpx;
		
	}
	.jd{
		width: 60%;
		height: 10rpx;
		border-radius: 5rpx;
		background-color: #EBEEF5;
		margin-left: 10rpx;
	}
	.left{
		text-align: left;
		font-size: 20rpx;
		.title{
			font-size:20rpx ;
		}
		.num{
			
		}
	}
	.right{
		text-align: right;
		.integration{
			color: #5EAE3D;
			font-size: 35rpx;
		}
		.time{
			padding-top: 15rpx;
			font-size: 20rpx;
		}
	}
</style>
