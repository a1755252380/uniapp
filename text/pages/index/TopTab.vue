<template>
	<view class="toptab_view">
		<view class="tab_fixed">
			<uni-segmented-control
				:current="current"
				:values="items"
				class="toptab"
				@clickItem="onClickItem($event)"
				styleType="text"
				activeColor="#4cd964"
			></uni-segmented-control>

			<search class="search"></search>
		</view>

		<view class="content">
			<view v-show="current === 0"  v-for="(item, index) in dataa1" :key="index">
				<view class="" @click="itemclick()">
						<listview :item2="item"  class="task_view"></listview>
				</view>
			
				</view>
			<view v-show="current === 1" v-for="(item, index) in dataa2" :key="index">
					<view class="" @click="itemclick()">
				<listview :item2="item" @click="itemclick()"  class="task_view"></listview>
				</view>
				</view>
			<view v-show="current === 2"  v-for="(item, index) in dataa3" :key="index">
					<view class="" @click="itemclick()">
				<listview :item2="item" @click="itemclick()" class="task_view"></listview>
				</view></view>
		</view>
		<uni-load-more :status="more0"></uni-load-more>
		
	</view>
</template>

<script>
import listview from './listview.vue';
import search from '../compoent/seach.vue';
export default {
	props: ['more', 'data1', 'data2', 'data3'],
	data() {
		return {
			current: 0,
			items: ['快手', '抖音', '小红书']
		};
	},
	computed: {
		more0() {
			return this.more;
		},
		dataa1() {
			return this.data1;
		},
		dataa2() {
			return this.data2;
		},
		dataa3() {
			return this.data3;
		}
	},
	components: { search, listview },
	methods: {
		onClickItem(event) {
			// console.log(event)
			this.current = event.currentIndex;
			this.$emit('Receivetype', event.currentIndex);
		},
		itemclick(index){
			console.log(1)
			uni.navigateTo({
			    url: '/pages/Task_detail/detail'
			});
		}
	},

	options: { styleIsolation: 'shared' }
}
</script>

<style lang="scss" scoped>
.toptab_view {
	width: 750rpx;
	.tab_fixed {
		z-index: 2;
		position: sticky;
		box-sizing: border-box;
		top: var(--window-top);
		background-color: #fff;
	}

	.search {
		width: 97%;
		margin-top: 10rpx;
	}
}
.content {
	width: 100%;
	z-index: 1;
	// height: 800rpx;
	// overflow-y: scroll;
	// view{
	// 	width: 100%;
	// }
	.task_view {
		z-index: 99999;
		// height: 950rpx;
	}
}
.demo-uni-row {
	margin-bottom: 10px;
	/* QQ、字节小程序文档写有 :host，但实测不生效 */
	/* 百度小程序没有 :host，需要设置block */
	/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
	display: block;
	/* #endif */
}
/deep/.segmented-control {
	width: 100%;
}
</style>
