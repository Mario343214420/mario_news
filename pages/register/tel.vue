<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎注册</view>
			<input class="u-border-bottom" type="number" v-model="user.tel" placeholder="请输入手机号" />
			<!-- <view class="tips">未注册的手机号验证后自动创建账号</view> -->
			<button @tap="getCaptcha" :style="[inputStyle]" class="getCaptcha">获取短信验证码</button>
			<view class="alternative">
				<!-- <view class="password" @click="togglePwdLogin">密码登录</view> -->
				<view class="issue">遇到问题</view>
			</view>
		</view>
		<!-- <view class="buttom">
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
		</view> -->
	</view>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
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
						const {code} = res.data.data
						this.$store.state.captcha = code
						uni.redirectTo({
							url: './code'
						})
					}
				})
			},
			submit() {
				if(this.$u.test.mobile(this.tel)) {
					this.$u.route({
						url: 'pages/login/code'
					})
				}
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
</style>
