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
				
			}
		},
		onLoad:function(e){
			let wxopenid = this.getCookie('wxopenid');
			if(wxopenid == undefined || wxopenid == '' || wxopenid.length == 0){
				this.getWxCode(location.href);
			}
		},
		methods: {
			master: function(){
				uni.navigateTo({
					url: '../querymaster/querymaster'
				});
			},
			teacher: function(){
				uni.navigateTo({
					url: '../queryteacher/queryteacher'
				});
			},
			dilatation: function(){
				uni.navigateTo({
					url: '../buydilatation/buydilatation'
				});
			},
			carnival: function(){
				uni.navigateTo({
					url: '../buycarnival/buycarnival'
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
