<template>
	<view>
		user-center
		<navigator url="/pages/register/register" open-type="navigate">
			<button class="btn" type="primary">注册</button>
		</navigator>
		
		<navigator url="/pages/login/password" open-type="navigate">
			<button class="btn" type="primary">登录</button>
		</navigator>
		
		<navigator url="/pages/login/code" open-type="navigate">
			<button class="btn" type="primary">注册</button>
		</navigator>
	</view>
</template>

<script>

import basePath from '../../api'

console.log(basePath)
export default{
	data(){
		return{
			
		}
	},
	onLoad() {
		this.permissionTest()
		this.reqTest()
	},
	methods: {
		permissionTest(){
			uni.getStorage({
				key: 'user',
				success:(res)=>{
					console.log('getStorage',res)
				},
				fail: (res)=>{
					console.log('get fail',res)
					uni.setStorage({
						key:'user',
						data: ''
					})
				}
			})
		},
		reqTest(){
			uni.request({
				url:'http://192.168.3.3:4000',
				success:(res)=>{
					console.log(res)
				}
			})
		}
	}
}
</script>

<style>
</style>
