<template>
	<view>
		<input placeholder="输入用户名" v-model="username"/>
		<input placeholder="输入用户密码" v-model="password"/>
		<button class="btn" type="primary" @click="regist(username,password)">注册</button>
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				username:'mario',
				password:'123456'
			}
		},
		methods:{
			regist(name,pwd){
				console.log(name)
				uni.request({
					method:'POST',
					header:{'content-type': 'application/x-www-form-urlencoded'},
					url:'http://192.168.3.3:4000/register',
					data:{
						username: name,
						password: pwd
					},
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
