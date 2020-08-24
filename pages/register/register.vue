<template>
	<view class="main-container">
		<u-form :model="form" ref="uForm">
			<u-form-item label="姓名"><u-input v-model="form.name" /></u-form-item>
			<u-form-item label="简介"><u-input v-model="form.pwd" /></u-form-item>
			<u-form-item label="电话"><u-input v-model="form.tel" /></u-form-item>
			<u-form-item label="属性">
				<u-radio-group v-model="radio">
					<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item>
				<u-picker mode="region" v-model="show" :area-code='["13", "1303", "130304"]'></u-picker>
			</u-form-item>
			
			<button class="btn" type="primary" @click="regist(form.name,form.pwd)">注册</button>
		</u-form>
		
		<!-- <view class="box">
			<text>用户名：</text>
			<input placeholder="输入用户名" v-model="username"/>
			<text>密码：</text>
			<input placeholder="输入用户密码" v-model="password"/>
			<button class="btn" type="primary" @click="regist(username,password)">注册</button>
		</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				username:'mario',
				password:'123456',
				form: {
					name: '',
					pwd: '',
					tel: ''
				},
				radioList: [
					{
						name: '个人',
						disabled: false
					},
					{
						name: '法人',
						disabled: false
					}
				],
				radio: '',
				show: true
			}
		},
		methods:{
			regist(name,pwd){
				uni.request({
					method:'POST',
					header:{'content-type': 'application/x-www-form-urlencoded'},
					url:this.$path + '/register',
					data:{
						username: name,
						password: pwd,
						tel: this.$store.state.user.tel
					},
					success:(res)=>{
						const {data} = res
						if (data.code === 200) {
							console.log(data)
							uni.setStorage({
								key: 'username',
								data: name,
								success:(res)=>{
									console.log('setStorage',res)
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
</style>
