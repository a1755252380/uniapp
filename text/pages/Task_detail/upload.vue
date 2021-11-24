<template>
	<view class="">
		<view class="data_view" v-for="(item, index) in uploadnum" :key="index">
			<view class="usertitle1">账号{{ item.num }}完成截图</view>
			<view class="usertitle2">
				<view class="img_writer">
					<view>主页点赞图</view>
					<view>(1张)</view>
				</view>
				<view class="img">
					<uni-file-picker
						v-model="item.Likeimg"
						file-mediatype="image"
						mode="grid"
						file-extname="png,jpg"
						:limit="1"
						@progress="progress"
						@success="success"
						@fail="fail"
						@select="select"
						:image-styles="imageStyles"
					/>
				</view>
			</view>
			<view class="usertitle2">
				<view class="img_writer">
					<view>评论截图</view>
					<view>(多张)</view>
				</view>
				<view class="img">
					<uni-file-picker
						v-model="item.Commentimg"
						file-mediatype="image"
						mode="grid"
						file-extname="png,jpg"
						:limit="10"
						@progress="progress"
						@success="success"
						@fail="fail"
						@select="select"
						:image-styles="imageStyles"
					/>
				</view>
			</view>
		</view>
		<view class="btn_view">
			<view class="btn btn_add" hover-class="btn_hover" hover-start-time=5 hover-stay-time=30 @click="adduser"> 
				新增
			</view>
			<view class="btn btn_upload" hover-class="btn_hover" hover-start-time=5 hover-stay-time=30>
				提交
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			uploadnum: [{ num: '1' ,Likeimg:[],Commentimg:[]}],
			num:1,
			imageStyles: {
				width: 96,
				height: 96,
			
			}
		};
	},
	methods:{
		adduser(){
			this.uploadnum.push({ num: ++this.num ,Likeimg:[],Commentimg:[]})
		}
	}
};
</script>

<style lang="scss" scoped>
	.usertitle1 {
		padding: 20rpx;
		border-bottom: 3rpx solid #e5e5e5;
		font-size: 25rpx;
	}
.usertitle2 {
	padding: 20rpx;
	border-bottom: 3rpx solid #e5e5e5;
	display: flex;
	justify-content: center;
	align-items: center;
}
.img_writer {
	width: 40%;
	text-align: center;
	display: inline;
	font-size: 25rpx;

}
.btn_view{
	z-index: 3;
	width: 750rpx;
	position: fixed;
	bottom: 0;
	text-align: center;
	.btn{
		font-size: 25rpx;
		display: inline-block;
		color: #FFFFFF;
		margin: 40rpx;
		padding: 25rpx 90rpx;
		background: #18BC37;
		border-radius: 10rpx;
	}
}
.img {
	width: 55%;
	display: inline-block;
}
.btn_hover{
	background: #0f8423;
}

</style>
