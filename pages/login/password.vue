<template>
	<view class="main-container">
		<view class="box">
			<view class="logo">
				<u-image width="200rpx" height="200rpx" src="/static/icon/logo.png"></u-image>
				<text>新云信用</text>
			</view>
			<view>			
				<u-input v-model="username" placeholder="用户名" :border="false" />
				<u-line color="#e4e7ed" />
			</view>	
			<view>	
				<u-input v-model="password" placeholder="密码" :border="false" />
				<u-line color="#e4e7ed" />
			</view>
			<view>	
				<u-button type="primary" @click="login(username,password)">登录</u-button>
			</view>
			<view>	
				<text class="toggle-login-type" @click="toggleTelLogin">点击切换登录方式</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				username: 'mario',
				password: '123456'
			}
		},
		methods:{
			regis(){
				uni.reqTest()
			},
			toggleTelLogin(){
				uni.redirectTo({
					url: '/pages/login/tel'
				})
			},
			login(name, pwd){
				uni.request({
					method:'POST',
					header:{'content-type': 'application/x-www-form-urlencoded'},
					url:this.$path + '/login',
					data:{
						username: name,
						password: pwd
					},
					success:(res)=>{
						const {data} = res
						if (data.code === 200) {
							console.log(1)
							uni.switchTab({
								url:'/pages/index/index'
							})
							uni.setStorage({
								key: 'username',
								data: name,
								success:(res)=>{
									console.log('setStorage',res)
									this.$store.state.user.username = name
								},
								fail: (res)=>{
									console.log('fail')
								}
							})
							uni.switchTab({
								url:'/pages/index/index'
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	
	.main-container
		display flex
		height: 100%;
		flex-direction column
		align-items center
		justify-content space-around
		.box
			width: 80%;
			display flex
			justify-content space-between
			flex-direction column
			height 800rpx
			.logo
				display flex
				flex-direction column
				justify-content center
				align-items center
				text
					font-size: 30rpx;
			.btn
				margin-top: 60rpx;
			.toggle-login-type
				font-size: 30rpx;
</style>
