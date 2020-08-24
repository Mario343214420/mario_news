<template>
	<view class="container">
		<view v-if="user.username">
			<view class="top-wrapper">
				<text>欢迎您，{{user.username}}</text><br>
				<text class="exit-text" @click="exit">退出登录</text>
			</view>
			<view class="mid-wrapper">
				<view class="avt-container">
					
				</view>
				<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
					<view class="u-body-item-title u-line-2">
						<u-icon name="account-fill"></u-icon>
						<text>{{user.username}}</text>
					</view>
				</view>
				<view class="u-body-item u-flex u-row-between u-p-b-0">
					<view class="u-body-item-title u-line-2">
						<u-icon name="phone-fill"></u-icon>
						<text>{{user.tel}}</text>
					</view>
				</view>
			</view>
			
			<u-card >
				
			</u-card>
		</view>
		<view v-else>
			<view style="text-align: center; padding-top: 100rpx;">
				<text>请登录后访问个人信息页</text>
			</view>
			<view style="margin: 0 auto; width: 60%;">
				<navigator url="/pages/register/register" open-type="navigate">
					<button class="btn">注册</button>
				</navigator>
				<navigator url="/pages/login/password" open-type="navigate">
					<button class="btn">登录</button>
				</navigator>
				<navigator url="/pages/register/tel" open-type="navigate">
					<button class="btn">短信注册</button>
				</navigator>
				<navigator url="/pages/login/tel" open-type="navigate">
					<button class="btn">短信登录</button>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
import {mapState} from 'vuex'
export default{
	data(){
		return{
			
		}
	},
	computed:{
		...mapState(['user'])
	},
	methods: {
		exit(){
			uni.removeStorage({
				key: 'user',
				success: (res)=>{
					// console.log(res)
				}
			})
			this.$store.state.user = {}
			uni.switchTab({
				url: '/pages/index/index'
			})
		},
		verifyLoginState(){
			if(this.$store.state.user.name){
				uni.redirectTo({
					url:'../login/password'
				})
			}
		},
		permissionTest(){
			uni.getStorage({
				key: 'user',
				success:(res)=>{
					// console.log('getStorage',res)
				},
				fail: (res)=>{
					// console.log('get fail',res)
					uni.setStorage({
						key:'user',
						data: ''
					})
				}
			})
		},
		reqTest(){
			uni.request({
				url:this.$path,
				success:(res)=>{
					console.log(res)
				}
			})
		}
		/*,
		getWx(){
			uni.getProvider({
				service: 'oauth',
				success: function(res) {
					console.log(res);
					//支持微信、qq和微博等
					if (~res.provider.indexOf('weixin')) {
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								console.log('-------获取openid(unionid)-----');
								console.log(JSON.stringify(loginRes));
								// 获取用户信息
								uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
										console.log('-------获取微信用户所有-----');
										console.log(JSON.stringify(infoRes.userInfo));
									}
								});
							}
						});
					}
				}
			});
		}*/
	}
}
</script>

<style lang="stylus" scoped>
	.container
		background-color: #f8f8f8;
		min-height 800rpx
		.btn
			margin 40rpx 0
			height: 60rpx;
			line-height: 60rpx;
		.top-wrapper
			padding 40rpx
			color #FFFFFF
			width: 100%;
			box-sizing border-box
			background-color: #0D85FF;
			display flex
			justify-content space-between
			.exit-text
				font-size 30rpx
				
		>>>.u-icon__icon
			-webkit-border-radius: 50%;
			-moz-border-radius: 50%;
			border-radius: 50%;
			margin-right 20rpx
			background-color: #fff;
			color #0D85FF
			padding 6rpx
		.mid-wrapper
			@extend .top-wrapper
			position relative
			display block
			line-height 80rpx
			font-size 30rpx
			-webkit-border-radius: 0 0 20rpx 20rpx;
			-moz-border-radius: 0 0 20rpx 20rpx;
			border-radius: 0 0 20rpx 20rpx;
			.avt-container
				position absolute
				bottom -80rpx
				right 80rpx
				width 160rpx
				height: 160rpx;
				background-color: #FFFFFF;
				-webkit-border-radius: 50%;
				-moz-border-radius: 50%;
				border-radius: 50%;
</style>
