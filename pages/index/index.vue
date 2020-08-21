<template>
	<view class="content">
		<view class="head">
			<view class="tip-wrapper" @click="camera">
				<u-icon name="scan"></u-icon>
			</view>
			<view class="tool-wrapper">
				<view></view>
				<view class="sys-name"><text>APP名称预留</text></view>
				<view class="sys-name-e"><text>application name</text></view>
			</view>
			<view class="toggle-wrapper">
				<view :class="toggleFlag === 0? 'active default' : 'default'" @click="toggleFlag = 0">信用信息</view>
				<view :class="toggleFlag === 1? 'active default' : 'default'" @click="toggleFlag = 1">统一社会信用代码</view>
				<view :class="toggleFlag === 2? 'active default' : 'default'" @click="toggleFlag = 2">文章</view>
			</view>
			<view class="toggle-input">
				<u-search placeholder="请输入搜索内容" v-model="keyword" shape="square"></u-search>
			</view>
		</view>
		<view class="gray-bar"></view>
		<view class="body">
			<view class="card-title">推荐服务</view>
			<view class="swiper-wrapper">
				<swiper class="swiper"
				style="height: 120px;"
				:interval="interval"
				:display-multiple-items="4"
				:circular="true"
				:indicator-dots="true"
				:duration="duration">
					<swiper-item>
						<view class="swiper-item">
							<view class="square" style="background-color: #2bcfcf;"></view>
							<i>我的信用</i>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<view class="square" style="background-color: #0d85ff;"></view>
							<i>信用公示</i>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<view class="square" style="background-color: #2f54eb;"></view>
							<i>授权查询</i>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<view class="square" style="background-color: #7948ea;"></view>
							<i>信用报告</i>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="gray-bar"></view>
			<view class="tab-wrapper">
				<u-tabs bg-color="#fafafa"
				:list="tabs"
				@change="change" 
				:current="current" 
				:is-scroll="true"></u-tabs>
			</view>
			<swiper class="swiper"
			:style="'height: ' + 220 * (newsList0.length + 1) + 'rpx'"
			:current="current"
			:interval="interval"
			:circular="false"
			@change="swiperPlay"
			:duration="duration">
				<swiper-item style="height: 600rpx;">
					<pageList :list="newsList0" style="height: 600rpx;"></pageList>
				</swiper-item>
				<swiper-item>
					<pageList :list="newsList1"></pageList>
				</swiper-item>
				<swiper-item>
					<pageList :list="newsList2"></pageList>
				</swiper-item>
				<swiper-item>
					<pageList :list="newsList3"></pageList>
				</swiper-item>
			</swiper>
		</view>
		<view class="foot">
			
		</view>
		
		<view class="search-wrapper">
			
		</view>
	</view>
</template>

<script>
	import pageList from '../../component/page-list/page-list.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				toggleFlag: 0,
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
				],newsList1: [
					{
						title: '111模拟新闻标题内容',
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
				],newsList2: [
					{
						title: '222模拟新闻标题内容',
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
				],newsList3: [
					{
						title: '333模拟新闻标题内容',
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
				],
				tabs: [{name: '信用动态'},{name: '政策法规'},{name: '典型案例'},{name: '专项治理'}],
				current: 0,
				keyword: ''
			}
		},
		components:{
			pageList
		},
		onLoad() {
		},
		methods: {
			camera(){
				// 相机
				/* var cmr = plus.camera.getCamera();
				cmr.captureImage() */
				// 扫码
				uni.scanCode({
					success:function(res){
						console.log(JSON.stringify(res.result));
					}
				});
			},
			swiperPlay(e){
				this.current = e.detail.current
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			toggle(boolen){
				this.toggleFlag = boolen
			},
			change(e){
				this.current = e
			}
			// 版本更新
			/* ,
			update() {
			    var _this = this;
			    uni.request({
			    url: `${this.$store.state.apiBaseUrl}/users/versions`,  //请求接口
			    method: 'POST',
			    success: result => {
			        if (result.data.code == 1) {
			            plus.runtime.getProperty(plus.runtime.appid, function(inf) {
			                if(inf.version != result.data.data.versions){
			                    uni.showModal({
			                        title: "发现新版本",
			                        content: "确认下载更新",
			                        success: (res) => {
			                            if (res.confirm == true) {//当用户确定更新，执行更新
			                                _this.doUpData();
			                            }
			                        }
			                    })
			                }
			            });
			        }
			    },
			    })
			},
			doUpData() {
			    uni.showLoading({
			        title: '更新中……'
			    })
			    uni.downloadFile({//执行下载
			        url: '***', //下载地址
			        success: downloadResult => {//下载成功
			            uni.hideLoading();
			            if (downloadResult.statusCode == 200) {
			                uni.showModal({
			                    title: '',
			                    content: '更新成功，确定现在重启吗？',
			                    confirmText: '重启',
			                    confirmColor: '#EE8F57',
			                    success: function(res) {
			                        if (res.confirm == true) {
			                            plus.runtime.install(//安装
			                                downloadResult.tempFilePath, {
			                                    force: true
			                                },
			                                function(res) {
			                                    utils.showToast('更新成功，重启中');
			                                    plus.runtime.restart();
			                                }
			                            );
			                        }
			                    }
			                });
			            }
			        }
			    });
			}
			*/
		}
	}
</script>

<style lang="stylus">
.head
	background-color: #0d85ff;
	padding-bottom 40rpx
	position relative
	.tip-wrapper
		position absolute
		right 40rpx
		top: 40rpx;
	.tool-wrapper
		height 180rpx
		display flex
		justify-content center
		flex-direction column
		padding 0 40rpx
		.sys-name
			color #FFFFFF
			font-size: 34rpx;
		.sys-name-e
			color #FFFFFF
			font-size 26rpx
	.toggle-wrapper
		display flex
		overflow hidden
		width: 90%;
		margin 0 auto
		.default
			text-align center
			line-height: 60rpx;
			width: 50%;	
			color #FFFFFF
			font-weight: 700;
			font-size: 24rpx;
		.active
			color #333333
			background-color: #FFFFFF;
			border-radius: 20rpx 20rpx 0 0;
	.toggle-input
		width 90%
		margin 0 auto
		overflow hidden
		border-radius:0 0 6rpx 6rpx;
		display flex
		align-items center
		line-height 80rpx
		height: 60rpx;
		.search-btn
			display flex
			align-items center
			height: 60px;
		input
			padding 0 20rpx
			flex: 1px;
		.u-content
			border-radius: 0;
.body
	display flex
	flex-direction column
.gray-bar
	background-color: #f5f5f5;
	height 30rpx
.swiper
	flex: 1;
.swiper-item
	display flex
	flex-direction column
	align-items center
	padding-top 20rpx
	.square
		width: 80rpx;
		height: 80rpx;
		border-radius 10rpx
		margin 20rpx 0
	image
		width 100rpx
		height 100rpx
	i
		font-size 30rpx
.u-scroll-box
	display flex
.card-title
	font-weight 700
	font-size 34rpx
	line-height 80rpx
	height: 80rpx;
	padding-left: 20rpx;
	border-bottom: 1px solid #d0d0d0;
>>>.u-action
	color #FFFFFF
</style>
