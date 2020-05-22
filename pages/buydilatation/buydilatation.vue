<template>
	<view class="content">
		<view class="peoplebox">
			<image src="../../static/img/金.jpg" mode="" class="topcard"></image>
			<text class="goldcardbox">尊享扩容卡</text>
			<text class="goldcardnum">{{applynum}} 人</text>
		</view>
		<view class="querybox">
			<view class="inlab">
				<form @submit="formSubmit">
					<view class="uni-form-item uni-column">
						<view class="title">请填写你的ID或者手机号</view>
						<input class="uni-input inpid" v-model="idortel" />
					</view>
					<view class="uni-form-item uni-column">
						<text class="aplnumcls_a">申请数量</text>
						<image class="subimg_a" src="../../static/img/-.png" mode="" @click="subimg_aclick"></image>
						<text class="applynumcls_a">{{applynum}}</text>
						<image class="addimg_a" src="../../static/img/+.png" mode="" @click="addimg_aclick"></image>
						<text class="peoplenum_a">人</text>
					</view>
					<view class="uni-form-item uni-column">
						<text class="bncls">购买时长</text>
						<image class="subimg" src="../../static/img/-.png" mode="" @click="subimgclick"></image>
						<text class="buttimecls">{{buytime}}</text>
						<image class="addimg" src="../../static/img/+.png" mode="" @click="addimgclick"></image>
						<text class="timeunit">月</text>
					</view>
					<view class="uni-form-item uni-column userknowbox">
						<text class="userknow">用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知</text>
					</view>
					<view class="uni-form-item uni-column userknowbox">
						<text class="moneytip">需支付金额：</text>
						<text class="moneynum">{{totalmny.toFixed(2)}}</text>
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
	var graceChecker = require("../../common/graceChecker.js");
	var wxPay = require("../../common/wxPay.js");
	export default {
		data() {
			return {
				buytime: 1,
				applynum: 4,
				infoMap: '',
				price: 0,
				goodsCode: '',
				idortel: '',
				openid: '',
				totalmny: 0
			}
		},
		onLoad: function(e) {
			this.openid = e.openid;
			uni.request({
				url: 'https://www.yitongkc.com/renren-fast/wx-api/goods/plusRoom',
				method: 'GET',
				data: {},
				success: res => {
					if (res && res.data && res.data.code === 0) {
						this.infoMap = res.data.msg;
						this.price = this.infoMap['4'].amount;
						this.goodsCode = this.infoMap['4'].goodsCode;
						this.totalmny = this.buytime * this.price * this.applynum * 0.01;
						// uni.showModal({
						// 	title: '提示',
						// 	content: '初始化：'+ this.totalmny + '次数：'+ this.buytime + '单价：'+ this.price,
						// 	showCancel: false,
						// 	confirmColor: '#8d7d5c',
						// 	success: function(res) {
						// 		if (res.confirm) {
						// 			uni.hideToast();
						// 		}
						// 	}
						// });
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
			getPrice: function(objkey) {
				for (let k of Object.keys(this.infoMap)) {
					if (k === objkey) {
						return this.infoMap[k].amount;
					}
				}
			},
			getGoodsCode: function(objkey) {
				for (let k of Object.keys(this.infoMap)) {
					if (k === objkey) {
						return this.infoMap[k].goodsCode;
					}
				}
			},
			subimgclick: function() {
				if (this.buytime > 1) {
					this.buytime--;
					this.totalmny = this.buytime * this.price * this.applynum * 0.01;
					// uni.showModal({
					// 	title: '提示',
					// 	content: '初始化：'+ this.totalmny + '次数：'+ this.buytime + '单价：'+ this.price,
					// 	showCancel: false,
					// 	confirmColor: '#8d7d5c',
					// 	success: function(res) {
					// 		if (res.confirm) {
					// 			uni.hideToast();
					// 		}
					// 	}
					// });
				}
			},
			subimg_aclick: function() {
				if (this.applynum > 4) {
					this.applynum--;
					this.price = this.getPrice(this.applynum + "");
					this.goodsCode = this.getGoodsCode(this.applynum + "")
					this.totalmny = this.buytime * this.price * this.applynum * 0.01;
				}
			},
			addimgclick: function() {
				this.buytime++;
				this.totalmny = this.buytime * this.price * this.applynum * 0.01;
				// uni.showModal({
				// 	title: '提示',
				// 	content: '初始化：'+ this.totalmny + '次数：'+ this.buytime + '单价：'+ this.price,
				// 	showCancel: false,
				// 	confirmColor: '#8d7d5c',
				// 	success: function(res) {
				// 		if (res.confirm) {
				// 			uni.hideToast();
				// 		}
				// 	}
				// });
			},
			addimg_aclick: function() {
				if (this.applynum < 20) {
					this.applynum++;
					this.price = this.getPrice(this.applynum + "");
					this.goodsCode = this.getGoodsCode(this.applynum + "")
					this.totalmny = this.buytime * this.price * this.applynum * 0.01;
				}
			},
			wechatpayclick: function() {
				if (this.openid == undefined || this.openid == '' || this.openid.length == 0) {
					window.location.replace(location.origin + location.pathname);
				}
				if(this.idortel == '' || this.idortel.length == 0){
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
						"goodsCont": this.applynum,
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
	.aplnumcls_a {
		top: 15rpx;
		position: relative;
	}

	.subimg_a {
		top: 25rpx;
		left: 50rpx;
		width: 50rpx;
		height: 50rpx;
		position: relative;
	}

	.applynumcls_a {
		top: 15rpx;
		position: relative;
		left: 75rpx;
	}

	.addimg_a {
		top: 25rpx;
		left: 100rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.peoplenum_a {
		position: relative;
		left: 150rpx;
		top: 15rpx;
	}

	.bncls {
		top: 50rpx;
		position: relative;
	}

	.subimg {
		top: 60rpx;
		left: 50rpx;
		width: 50rpx;
		height: 50rpx;
		position: relative;
	}

	.buttimecls {
		position: relative;
		left: 75rpx;
		top: 50rpx;
	}

	.addimg {
		top: 60rpx;
		left: 100rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.timeunit {
		position: relative;
		left: 150rpx;
		top: 50rpx;
	}

	.goldcardbox {
		position: relative;
		color: #d2c7ab;
		left: -80rpx;
		top: -160rpx;
	}

	.goldcardnum {
		position: relative;
		color: #d2c7ab;
		left: -260rpx;
		top: -100rpx;
	}
</style>
