<template>
	<view>
		user-center
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
				url:'http://192.168.0.219:4000',
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
