<template>
	  <view>
	        <uni-fab
	            :pattern="pattern"
	            horizontal="right"
	            vertical="bottom"
				:popMenu="false"
				@fabClick="toTop"
	        ></uni-fab>
	    </view>
</template>

<script>
	export default {
		data() {
			return {
				pattern: {
					// buttonColor:"#5EAE3D",
					buttonColor:"rgba(94, 174, 61, 0.8)",
					// selectedColor:"#5EAE3D"
				}
			}
		},
		methods: {
			  toTop() {
			                uni.pageScrollTo({
			                    scrollTop: 0,
			                    duration: 100,
			                });
			            },
		},
			options: { styleIsolation: 'shared' }
	}
</script>

<style lang="scss" scoped>
	/deep/.uniui-plusempty::before{
		content: "\2191";
		
	}
	/deep/.uni-fab__circle{
		width:68rpx;
		height: 68rpx;
	}
</style>
