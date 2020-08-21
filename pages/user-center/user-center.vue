<template>
	<view class="container">
		<view v-if="this.$store.state.user.username">
			<text>欢迎您，{{this.$store.state.user.username}}</text><br>
			<text @click="exit">退出登录</text>
		</view>
		<view v-else>
			<navigator url="/pages/register/register" open-type="navigate">
				<button class="btn" type="primary">注册</button>
			</navigator>
			<navigator url="/pages/login/password" open-type="navigate">
				<button class="btn" type="primary">登录</button>
			</navigator>
			<navigator url="/pages/register/tel" open-type="navigate">
				<button class="btn" type="primary">短信注册</button>
			</navigator>
			<navigator url="/pages/login/tel" open-type="navigate">
				<button class="btn" type="primary">短信登录</button>
			</navigator>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	onLoad() {
		// this.permissionTest()
		// this.reqTest()
		this.verifyLoginState()
	},
	methods: {
		exit(){
			uni.removeStorage({
				key: 'user',
				success: (res)=>{
					console.log('删除本地存储个人信息')
				}
			})
			this.$store.state.user = {}
		},
		verifyLoginState(){
			uni.getStorage({
				key: 'username',
				success: (res) => {
					this.$store.state.user = res.data
					// console.log(this.$store.state.user.username)
				}
			})
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
		padding 80rpx
		.btn
			margin 40rpx 0
			height: 60rpx;
			line-height: 60rpx;
</style>
