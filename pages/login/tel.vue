<template>
	<!-- <view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录</view>
			<input class="u-border-bottom" type="number" v-model="user.tel" placeholder="请输入手机号" />
			<view class="tips">未注册的手机号验证后自动创建账号</view>
			<button @tap="getCaptcha" :style="[inputStyle]" class="getCaptcha">获取短信验证码</button>
			<view class="alternative">
				<view class="password" @click="togglePwdLogin">密码登录</view>
				<view class="issue">遇到问题</view>
			</view>
		</view>
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon"><u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon></view>
					微信
				</view>
				<view class="QQ item">
					<view class="icon"><u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon></view>
					QQ
				</view>
			</view>
		</view>
	</view> -->
	<view class="main-container">
		<view class="box">
			<view class="logo">
				<u-image width="200rpx" height="200rpx" src="/static/icon/logo.png"></u-image>
				<text>新云信用</text>
			</view>
			<view style="display: flex;">
				<view style="flex: 1;">
					<u-input style="margin-right: 60rpx;" v-model="user.tel" placeholder="手机号" :border="false" />
					<u-line color="#e4e7ed" />
				</view>
				<u-button size="medium" @tap="getCaptcha">获取验证码</u-button>
			</view>	
			<view>
				<u-message-input mode="middleLine" :maxlength="6" :value="val"></u-message-input>
			</view>
			<view>	
				<u-button type="primary" @click="login">登录</u-button>
			</view>
			<view>	
				<text class="toggle-login-type" @click="togglePwdLogin">点击切换登录方式</text>
			</view>
		</view>
	</view>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				val: ''
			}
		},
		onLoad() {
		},
		computed: {
			...mapState(['user']),
			inputStyle() {
				let style = {};
				if(this.tel) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			togglePwdLogin(){
				uni.redirectTo({
					url: './password'
				})
			},
			/* finish(e) {
				uni.request({
					method:'POST',
					header:{'content-type': 'application/x-www-form-urlencoded'},
					url:this.$path + '/telLogin',
					data:{
						tel: tel.toString()
					},
					success:(res)=>{
						const {data} = res
						if(data.code === 200){
							this.$store.state.captcha = data.num
							console.log(data)
						}
					}
				})
			}, */
			getCaptcha(){
				let tel = this.$store.state.user.tel
				uni.request({
					method:'POST',
					header:{'content-type': 'application/x-www-form-urlencoded'},
					url:this.$path + '/getCaptcha',
					data:{
						tel: tel.toString()
					},
					success:(res)=>{
						const {data} = res
						if(data.code === 200){
							this.$store.state.captcha = data.num
						}
					}
				})
			},
			login(){
				let tel = this.$store.state.user.tel
				uni.request({
					method:'POST',
					header:{'content-type': 'application/x-www-form-urlencoded'},
					url:this.$path + '/telLogin',
					data:{
						tel: tel.toString()
					},
					success:(res) => {
						const {data} = res.data
						this.$store.state.user = data.user
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})
			}
		}
		
	}
</script>

<style lang="stylus">
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			
			.link {
				color: $u-type-warning;
			}
		}
	}
}
.u-size-medium
	padding 0 20px
.main-container
	display flex
	// height: 100%;
	min-height 1000rpx
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
