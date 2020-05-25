<template>
	<view class="content">
		<view class="peoplebox">
			<image src="../../static/img/红.jpg" mode="" class="topcard"></image>
			<text class="carnival">嘉年华</text>
			<text class="carnivaltime">{{starttime}} 至 {{endtime}}</text>
		</view>
		<view class="querybox">
			<view class="inlab">
				<form @submit="formSubmit">
					<view class="uni-form-item uni-column">
						<view class="title">请填写你的ID或者手机号</view>
						<input class="uni-input inpid" v-model="idortel" />
					</view>
					<view class="uni-form-item uni-column userknowbox">
						<text class="userknow">用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知</text>
					</view>
					<view class="uni-form-item uni-column userknowbox">
						<text class="moneytip">需支付金额：</text>
						<text class="moneynum">{{price * 0.01}}</text>
						<text class="moneyunit">元</text>
					</view>
					<view class="uni-btn-v">
						<image src="../../static/img/微信支付.png" mode="" class="wechatpay" @click="wechatpayclick"></image>
					</view>
				</form>
			</view>
		</view>
	</view>

</template>

<script>
	var wxPay = require("../../common/wxPay.js");
	export default {
		data() {
			return {
				price: 0,
				starttime: '',
				endtime: '',
				goodsCode: '',
				idortel: '',
				openid: ''
			}
		},
		onLoad: function(e) {
			this.openid = e.openid;
			uni.request({
				url: 'https://www.yitongkc.com/renren-fast/wx-api/goods/carnival',
				method: 'GET',
				data: {},
				success: res => {
					if (res && res.data && res.data.code === 0) {
						this.price = res.data.msg.amount;
						this.starttime = res.data.msg.beginTime.substr(0, 10);
						this.endtime = res.data.msg.endTime.substr(0, 10);
						this.goodsCode = res.data.msg.goodsCode;
						if (this.isIphone()) {
							uni.showToast({
								title: '购买嘉年华卡',
								icon: "none"
							});
						}
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						});
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			wechatpayclick: function() {
				if (this.openid == undefined || this.openid == '' || this.openid.length == 0) {
					window.location.replace(location.origin + location.pathname);
				}
				if (this.idortel == '' || this.idortel.length == 0) {
					uni.showToast({
						title: 'ID或者手机号不能为空，请填写',
						icon: "none"
					});
					return
				}

				uni.request({
					url: 'https://www.yitongkc.com/renren-fast/wx-api/payOrderGoodsJSAPI',
					method: 'POST',
					data: {
						"goodsCode": this.goodsCode,
						"goodsCont": 1,
						"userKey": this.idortel,
						"openId": this.openid
					},
					success: res => {
						if (res.data.code === 0) {
							if (res.data.msg === 'success') {
								uni.showModal({
									title: '提示',
									content: '购买成功',
									showCancel: false,
									confirmColor: '#8d7d5c',
									success: function(res) {
										if (res.confirm) {
											uni.hideToast();
										}
									}
								});
							} else {
								wxPay.default(
									res.data.msg,
									function(success_res) {
										/*成功的回调*/
										console.log("支付成功")
										uni.showModal({
											title: '提示',
											content: '购买成功',
											showCancel: false,
											confirmColor: '#8d7d5c',
											success: function(res) {
												if (res.confirm) {
													uni.hideToast();
												}
											}
										});
									},
									function(error_res) {
										/**失败的回调*/
										console.log("支付失败或取消支付")
										uni.showModal({
											title: '提示',
											content: "支付失败或取消支付",
											showCancel: false,
											confirmColor: '#8d7d5c',
											success: function(res) {
												if (res.confirm) {
													uni.hideToast();
												}
											}
										});
									}
								);
							}
						} else {
							uni.showModal({
								title: '提示',
								content: res.data.msg,
								showCancel: false,
								confirmColor: '#8d7d5c',
								success: function(res) {
									if (res.confirm) {
										uni.hideToast();
									}
								}
							});
						}
					},
					fail: () => {
						uni.showToast({
							title: '下单失败，请退出重试',
							icon: "none"
						});
						return
					},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.carnival {
		position: relative;
		color: #d2c7ab;
		left: -80rpx;
		top: -160rpx;
	}

	.carnivaltime {
		position: relative;
		color: #d2c7ab;
		left: -195rpx;
		top: -50rpx;
		font-size: 20rpx;
	}

	.userknow {
		position: relative;
		top: 265rpx;
		color: #8d7d5c;
		font-size: 20rpx;
	}

	.moneytip {
		position: relative;
		top: 440rpx;
		left: 120rpx;
		color: #8d7d5c;
		font-size: 30rpx;
	}

	.moneynum {
		position: relative;
		width: 40rpx;
		top: 440rpx;
		left: 160rpx;
		color: #8d7d5c;
		font-size: 40rpx;
		line-height: 40rpx;
	}

	.moneyunit {
		position: relative;
		top: 440rpx;
		left: 200rpx;
		color: #8d7d5c;
		font-size: 30rpx;
	}

	.wechatpay {
		width: 270rpx;
		height: 75rpx;
		top: 490rpx;
		left: 130rpx;
	}
</style>
