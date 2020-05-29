<template>
	<view>
		
	</view>
</template>

<script>
	var wxConfig = require("../../common/wxConfig.js");
	export default {
		data() {
			return {
				wxcode: '',
				redirect_uri: ''
			}
		},
		onLoad: function(e) {
			//获取微信网页授权code
			var indexUrl = unescape(location.search.substr(1));
			var items = indexUrl.split('&');
			var item;
			for (let a = 0; a < items.length; a++) {
				item = items[a].split("=");
				if (item[0] == 'code') {
					this.wxcode = item[1];
				} else if (item[0] == 'state') {
					this.redirect_uri = item[1];
				}
			}


			//获取微信openid
			uni.request({
				url: 'https://www.yitongkc.com/renren-fast/wx-api/authAccessToken?code=' + this.wxcode,
				method: 'GET',
				data: {},
				success: res => {
					if (res && res.data && res.data.code === 0) {
						let resopenid = res.data.msg;
						this.setCookie('wxopenid', resopenid, 1);

						//设置微信配置
						wxConfig.default();

						var userUri = unescape(this.redirect_uri);
						window.location.replace(userUri);
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						});
						return
					}
				},
				fail: () => {
					uni.showToast({
						title: '获取微信openid失败，请退出重试',
						icon: "none"
					});
					return
				},
				complete: () => {}
			});

		},
		methods: {
			
		}
	}
</script>

<style>

</style>
