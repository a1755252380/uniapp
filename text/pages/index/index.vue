<template>
	<view class="content">
		<toptab></toptab>
		
	</view>
</template>

<script>
	import toptab from "./TopTab.vue"
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			toptab
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	
</style>
