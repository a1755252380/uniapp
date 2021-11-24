<template>
	<view class="search_view">
		<uni-search-bar placeholder="搜索" :radius="100" class="seach" ></uni-search-bar>
	</view>
</template>

<script>
	export default {
		components:{
		},
		//与methods 同级加入一下代码
		options: { styleIsolation: 'shared' },

	}
</script>

<style lang="scss" scoped>
	.search_view{
		width: 750rpx;
		background-color: #5EAE3D;
		margin-top: 10rpx;
		
	}
/deep/.uni-searchbar__cancel{
		color: #fff;
	}
</style>
