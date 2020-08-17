<template>
	<view class="main-container">
		<view class="box">
			<text>用户名：</text>
			<input placeholder="输入用户名" v-model="username"/>
			<text>密码：</text>
			<input placeholder="输入用户密码" v-model="password"/>
			<button class="btn" type="primary" @click="login(username,password)">登录</button>
			<text class="toggle-login-type" @click="toggleTelLogin">点击切换登录方式</text>
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
			>*
				line-height: 100rpx;
				margin 10rpx 60rpx
				font-size: 40rpx;
			input
				background-color: #f1f1f1;
			.btn
				margin-top: 60rpx;
			.toggle-login-type
				font-size: 30rpx;
</style>
