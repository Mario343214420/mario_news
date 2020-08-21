<template>
	<view class="">
		<view class="list-item" v-for="(item, index) in list" :key="index">
			<view class="item-title">{{item.title}}</view><br>
			<view class="item-description">{{item.description}}</view><br>
			<view class="item-tip">
				<i>发布时间：{{item.createTime}}</i>   
				<i>{{item.visitCount}}次阅读</i>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name: 'pageList',
		props: {
			list: {
				type: Array
			}
		}
	}
</script>

<style lang="stylus">
.list-item
	line-height: 36rpx;
	border-bottom: 1px solid #d0d0d0;
	padding 30rpx
	.item-title
		font-weight 700
		font-size: 32rpx;
	.item-description
		font-size: 28rpx;
	.item-tip
		display flex
		width 100%
		justify-content space-between
		color #9b9b9b
		font-size 24rpx
</style>
