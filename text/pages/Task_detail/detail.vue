<template>
	<view class="detail_view">

		<view class="row">
			<uni-row class="row2">
				<uni-col :span="6"><view class="col_writer">任务标题</view></uni-col>
				<uni-col :span="18"><view class="col_writer2">{{detaildata.title}}</view></uni-col>
			</uni-row>
		</view>
		<view class="row">
			<uni-row>
				<uni-col :span="6"><view class="col_writer">任务分类</view></uni-col>
				<uni-col :span="18"><view class="col_writer2">{{detaildata.type}}</view></uni-col>
			</uni-row>
		</view>
		<view class="row">
			<uni-row>
				<uni-col :span="6"><view class="col_writer">奖励积分</view></uni-col>
				<uni-col :span="18"><view class="col_writer2">{{detaildata.integral}}</view></uni-col>
			</uni-row>
		</view>
		<view class="row">
			<uni-row>
				<uni-col :span="6"><view class="col_writer">任务名额</view></uni-col>
				<uni-col :span="18"><view class="col_writer2">{{detaildata.count}}/{{detaildata.quota}}</view></uni-col>
			</uni-row>
		</view>
		<view class="row">
			<uni-row>
				<uni-col :span="6"><view class="col_writer">截止时间</view></uni-col>
				<uni-col :span="18"><view class="col_writer2">{{detaildata.end_time}}截至</view></uni-col>
			</uni-row>
		</view>
		<view class="row">
			<view class="col_copy">
				任务链接或口令
				<view class="col_copy2" @click="copy('aa')">
					<uni-icons type="chatboxes" size="22" color=" #5EAE3D"></uni-icons>
					一键复制
				</view>
			</view>
			<view class="col_copy">{{detaildata.task_link}}</view>
		</view>
		<view class="row">
			<view class="col_copy">任务要求</view>
			<view class="col_copy">{{detaildata.requirement}}</view>
		</view>
		<uni-popup ref="popup" type="uni-popup-dialog"><uni-popup-dialog mode="base" message="复制成功!" :duration="2000" :before-close="true"></uni-popup-dialog></uni-popup>
		<view class="btn_upload" @click="btnupload" hover-class="btn_upload_hover" hover-start-time=5 hover-stay-time=30>上传截图</view>
	</view>
</template>

<script>
export default {
	options: { styleIsolation: 'shared' },
	data() {
		return {
			detaildata:{}
		}
	},
   onLoad() {
		const eventChannel = this.getOpenerEventChannel();
		 let that=this
		// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
		  eventChannel.on('aa', async function(data) {
		    console.log(data)
			
			//跳转完成请求任务详细数据
			await that.$myRequest({
				url:'/taskDetail',
				method:'POST',
				data:{
				id:data
				},
			}).then((res)=>{
				console.log(res.data.data[0])
				that.detaildata=res.data.data[0]
				console.log(that.detaildata)
			})
		  })
		
	},
	methods: {
		copy(value) {
			uni.setClipboardData({
				data: value, //要被复制的内容
				success: () => {
					this.$refs.popup.open();
				}
			});
			//提示模板
			// uni.showModal({
			// 	content: value, //模板中提示的内容
			// 	confirmText: '复制内容',
			// 	success: () => {
			// 		//点击复制内容的后调函数
			// 		//uni.setClipboardData方法就是讲内容复制到粘贴板
			// 		uni.setClipboardData({
			// 			data: value, //要被复制的内容
			// 			success: () => {
			// 				//复制成功的回调函数
			// 				uni.showToast({
			// 					//提示
			// 					title: '复制成功'
			// 				});
			// 			}
			// 		});
			// 	}
			// });
		},
		
		
		//点击上传截图跳转
		btnupload(){
			let da=this.detaildata.id
			uni.navigateTo({
				url:"/pages/Task_detail/upload",
				success: function(res) {
				    // 通过eventChannel向被打开页面传送数据
				    res.eventChannel.emit('upload',da )
				  }
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.detail_view {
	width: 750rpx;
	.row {
		// height: 100rpx;
		text-align: center;
		border-bottom: 3rpx solid #e5e5e5;
		.col_writer {
			padding: 30rpx 20rpx;
		}
		.col_writer2 {
			text-align: right;
			padding: 30rpx 20rpx;
		}
		.col_copy {
			text-align: left;
			padding: 20rpx 20rpx;
		}
		.col_copy2 {
			position: absolute;
			right: 20rpx;
			font-size: 28rpx;
			color: #5eae3d;
		}
	}
	.btn_upload {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		bottom: 0;
		width: 750rpx;
		padding: 20rpx;
		font-size: 28rpx;
		background: #5eae3d;
	}
	.btn_upload_hover{
		background: #4a862e;
	}
}
</style>
