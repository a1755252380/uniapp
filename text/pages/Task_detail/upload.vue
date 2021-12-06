<template>
	<view class="">
		<view class="data_view" v-for="(item, index) in img_data" :key="index">
			<view class="usertitle1">账号{{ index }}完成截图</view>
			<view class="usertitle2">
				<view class="img_writer">
					<view>主页点赞图</view>
					<view>(1张)</view>
				</view>
				<view class="img">
					<uni-file-picker
						file-mediatype="image"
						mode="grid"
						file-extname="png,jpg"
						:limit="1"
						@progress="progress"
						@success="uploadsuccess"
						@fail="fail"
						@select="uploadpricture1($event,index)"
						:image-styles="imageStyles"
						:del-icon="false"
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
						file-mediatype="image"
						mode="grid"
						file-extname="png,jpg"
						:limit="10"
						@progress="progress"
						@success="success"
						@fail="fail"
						@select="uploadpricture2($event,index)"
						:image-styles="imageStyles"
						:del-icon="false"
					/>
				</view>
			</view>
		</view>
		<view class="btn_view">
			<view class="btn btn_add" hover-class="btn_hover" hover-start-time=5 hover-stay-time=30 @click="adduser"> 
				新增
			</view>
			<view class="btn btn_upload" hover-class="btn_hover" hover-start-time=5 hover-stay-time=30 @click="change">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	import {encryptDes} from "../../static/js/DES.js"
export default {
	data() {
		return {
			id:0,
			img_data: {
				0:{home:[],comment:[]},
			},
			num:1,
			imageStyles: {
				width: 96,
				height: 96,
			
			},
			//是否重复提交
			haveRecord:false
		};
	},
	onLoad() {
		const eventChannel = this.getOpenerEventChannel();
		 let that=this
		// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
		  eventChannel.on('upload', async function(data) {
		    // console.log(data)
			that.id=data
		
		})
	},
	methods:{
		
		//添加用户上传  与后台名额进行校对 看是否才超出现有名额
		 async adduser(){
			 await this.$myRequest({
				url:'/taskRecordNum',
				method:'POST',
				data:{
				id:this.id
				}
			}).then((res)=>{
				console.log(res)
				if(this.num<res.data.data.count){
					// let a=++this.num
					// Object.assign(this.img_data,{a:{home:[],comment:[]}})
					this.img_data[this.num++]={home:[],comment:[]}
					console.log(this.img_data)
					this.$forceUpdate()
				}else{
					uni.showToast({
						title:'无法添加更多'
					})
				}
			})
			
			
		
		},
		//提交数据
		 Submit(){
			console.log(JSON.stringify(this.img_data))
			console.log(this.id)
			console.log(this.$store.state.userInfo.user_id)
			uni.request({
				url:'https://wemall.minephone.com/openTask/qq_operTask/backend/public/index.php/api/Ajaxapi/submitTask',
				method:'POST',
				data:{
				id:this.id,
				user_id:this.$store.state.userInfo.user_id,
				img_data:JSON.stringify(this.img_data)
				},
				header:encryptDes(),
				success:(res)=>{
					console.log(res)
					
						uni.showToast({
							title:'提交成功'
						})
					
				}
			})
			
			
			
		},
		//提交前校验是否重复提交
		 change(){
			uni.request({
				url:'https://wemall.minephone.com/openTask/qq_operTask/backend/public/index.php/api/Ajaxapi/haveTaskRecord',
				method:'POST',
				data:{
				id:this.id,
				user_id:this.$store.state.userInfo.user_id
				},
				header:encryptDes(),
				success: res => {
					if(res.data.code === 1 || res.data.code === 200){
						console.log(res)
						if(res.data.data.haveRecord==1){
							uni.showToast({
								title:"请勿重复提交！！"
							})
							setTimeout(function() {
								uni.navigateTo({
									url:"pages/index/index"
								})
							}, 1500);
						}else if(res.data.data.haveRecord==2){
							this.Submit()
						}else if(res.data.data.haveRecord==3){
							uni.showToast({
								title:"名额已满！！"
							})
							setTimeout(function() {
								uni.navigateTo({
									url:"pages/index/index"
								})
							}, 1500);
						}else if(res.data.data.haveRecord==4){
							uni.showToast({
								title:"任务已结束"
							})
							setTimeout(function() {
								uni.navigateTo({
									url:"pages/index/index"
								})
							}, 1500);
						}
					}else{
						console.log(res)
						console.log("请求错误")
						uni.showToast({
							title:res.data.msg
						})
						
					}
				},
				fail: (err) => {
					uni.showToast({
						title:'接口请求失败'
					})
					reject(err)
				}
			})
		
		},
		
		//图片上传获取图片信息  主页图片获取图片连接
		async uploadpricture1(e,index){
			// console.log(e)
			// console.log(index)
			uni.uploadFile({
		            url: 'https://wemall.minephone.com/openTask/qq_operTask/backend/public/index.php/api/Ajaxapi/uploadImg', //仅为示例，非真实的接口地址
		            filePath: e.tempFilePaths[0],
		            name: 'img_data',
		            formData: {
		                'img_data': e.tempFilePaths[0]
		            },
		            success: (uploadFileRes) => {
		                let a=JSON.parse(uploadFileRes.data)
						this.img_data[index]['home'].push(a.data.img_url)
						// console.log(this.img_data[index]['home'])
		            }
		        });
		    
		},
		//评论截图获取链接
		async uploadpricture2(e,index){
			// console.log(e)
			// console.log(index)
			uni.uploadFile({
		            url: 'https://wemall.minephone.com/openTask/qq_operTask/backend/public/index.php/api/Ajaxapi/uploadImg', //仅为示例，非真实的接口地址
		            filePath: e.tempFilePaths[0],
		            name: 'img_data',
		            formData: {
		                'img_data': e.tempFilePaths[0]
		            },
		            success: (uploadFileRes) => {
		               let a=JSON.parse(uploadFileRes.data)
		               this.img_data[index]['comment'].push(a.data.img_url)
		               // console.log(this.img_data)							
		            }
		        });
		    
		},
		uploadsuccess(e){
			console.log(e)
		},
		progress(e){
			console.log(e)
		}
	},
}
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
	display: flex;
	justify-content: center;
	position: sticky;
	bottom: 0;
	text-align: center;
	background-color: #FFFFFF;
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
