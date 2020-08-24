<template>
	<view style="height: 100%;">
		<view style="display: flex; flex-direction: column;height: 100%;">
			<view>
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				 swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper style="flex: 1;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item, index) in 10" :key="index">
					<scroll-view scroll-y style="width: 100%; height: 1050rpx;" @scrolltolower="onreachBottom">
						<page-list :list="newsList0"></page-list>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import pageList from "../../components/page-list/page-list"
	export default {
		data() {
			return {
				list: [
					{
						name: '信用动态',
						children: [
							{name: '1--abaaba1'},
							{name: '1--abaaba2'},
							{name: '1--abaaba3'},
							{name: '1--abaaba4'},
							{name: '1--abaaba5'},
							{name: '1--abaaba6'},
							{name: '1--abaaba7'}
						]
					},
					{
						name: '政策法规',
						children: [
							{name: '2--abaaba1'},
							{name: '2--abaaba2'},
							{name: '2--abaaba3'},
							{name: '2--abaaba4'},
							{name: '2--abaaba5'},
							{name: '2--abaaba6'},
							{name: '2--abaaba7'}
						]
					},
					{
						name: '标准规范',
						children: [
							{name: '3--abaaba1'},
							{name: 'abaaba2'},
							{name: 'abaaba3'},
							{name: 'abaaba4'},
							{name: 'abaaba5'},
							{name: 'abaaba6'},
							{name: 'abaaba7'}
						]
					},
					{
						name: '联合奖惩',
						children: [
							{name: '4--abaaba1'},
							{name: 'abaaba2'},
							{name: 'abaaba3'},
							{name: 'abaaba4'},
							{name: 'abaaba5'},
							{name: 'abaaba6'},
							{name: 'abaaba7'}
						]
					},
					{
						name: '专项治理',
						children: [
							{name: '5--abaaba1'},
							{name: 'abaaba2'},
							{name: 'abaaba3'},
							{name: 'abaaba4'},
							{name: 'abaaba5'},
							{name: 'abaaba6'},
							{name: 'abaaba7'}
						]
					}
				],
				current: 0,
				swiperCurrent: 0,
				newsList0: [
					{
						title: '000模拟新闻标题内容',
						createTime: '2020-10-01',
						description: '模拟新闻标题主要描述内容',
						visitCount: '100'
					},
					{
						title: '模拟新闻标题内容',
						createTime: '2020-10-01',
						description: '模拟新闻标题主要描述内容',
						visitCount: '100'
					},
					{
						title: '模拟新闻标题内容',
						createTime: '2020-10-01',
						description: '模拟新闻标题主要描述内容',
						visitCount: '100'
					},
					{
						title: '模拟新闻标题内容',
						createTime: '2020-10-01',
						description: '模拟新闻标题主要描述内容',
						visitCount: '100'
					},
					{
						title: '模拟新闻标题内容',
						createTime: '2020-10-01',
						description: '模拟新闻标题主要描述内容',
						visitCount: '100'
					},
				]
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				
			}
		}
	}
</script>

<style lang="stylus">
</style>
