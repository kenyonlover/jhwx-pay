<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<button class="btncls4" type="default" @click="master">查询大师卡</button>
			<button class="btncls4" type="default" @click="teacher">查询老师卡</button>
			<button class="btncls4" type="default" @click="dilatation">购买扩容卡</button>
			<button class="btncls4" type="default" @click="carnival">购买嘉年华</button>
		</view>
	</view>
</template>

<script>
	var wxConfig = require("../../common/wxConfig.js");
	export default {
		data() {
			return {
				wxcode: '',
				openid: ''
			}
		},
		onLoad:function(e){
			//获取微信网页授权code
			var indexUrl = unescape(location.search.substr(1));
			var items = indexUrl.split('&');
			var item;
			for (let a = 0; a < items.length; a++) {
				item = items[a].split("=");
				if (item[0] == 'code') {
					this.wxcode = item[1];
					break;
				}
			}
			
			//获取微信openid
			uni.request({
				url: 'https://www.yitongkc.com/renren-fast/wx-api/authAccessToken?code=' + this.wxcode,
				method: 'GET',
				data: {},
				success: res => {
					if(res && res.data && res.data.code===0){
						this.openid = res.data.msg;
					}else{
						uni.showToast({ title: res.data.msg, icon: "none" });
						return
					}
				},
				fail: () => {
					uni.showToast({ title: '获取微信openid失败，请退出重试', icon: "none" });
					return
				},
				complete: () => {}
			});
			
			//设置微信配置
			wxConfig.default();
		},
		methods: {
			master: function(){
				uni.navigateTo({
					url: '../querymaster/querymaster?openid=' + this.openid
				});
			},
			teacher: function(){
				uni.navigateTo({
					url: '../queryteacher/queryteacher?openid=' + this.openid
				});
			},
			dilatation: function(){
				uni.navigateTo({
					url: '../buydilatation/buydilatation?openid=' + this.openid
				});
			},
			carnival: function(){
				uni.navigateTo({
					url: '../buycarnival/buycarnival?openid=' + this.openid
				});
			}
		}
		
	}
</script>

<style>
.btncls4{
	width: 70%;
	top: 300rpx;
	margin-top: 20rpx;
	background-color: #958564;
	color: #fff;
}
</style>
