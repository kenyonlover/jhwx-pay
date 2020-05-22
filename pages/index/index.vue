<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			let uri = location.origin + location.pathname + '#/pages/catalog/catalog';
			let repUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.appId + '&redirect_uri=' + escape(
				uri) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
			window.location.replace(repUrl);
		},
		methods: {

		}
	}
</script>

<style>

</style>
