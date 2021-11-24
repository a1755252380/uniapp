<template>
	  <view class="toptab_view">
        <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem()" 
	 styleType="text" 
		activeColor="#4cd964" class="toptab"></uni-segmented-control>
	
        <view class="content">
				<search></search>
            <view v-show="current === 0">
               选项卡1的内容
            </view>
            <view v-show="current === 1">
                选项卡2的内容
            </view>
            <view v-show="current === 2">
                选项卡3的内容
            </view>
        </view>
		
    </view>
</template>

<script>
	import search from "../compoent/seach.vue"
    export default {
		data() {
			// const data={type:"快",title:"测试",num:'1',time:"00天18小时44分截至",fenshu:"1积分"}
			return {
				current: 0,
				items:['快手','抖音','小红书'],
				// data1:new Array(15).fill(data)
			}
		},
        components: { search },
		methods:{
			onClickItem(e){
				console.log(e)
				this.current=e.currentIndex
			}
		}
    }

</script>

<style lang="scss" scoped>
	.toptab_view{
		width: 750rpx;
		.toptab{
			width: 750rpx;
			
			height: 60rpx;
			position: relative;
		}
	}
.content{
	width: 100%;
	view{
		width: 100%;
	}
	.Task{
		height: 100rpx;
	}
}
</style>
