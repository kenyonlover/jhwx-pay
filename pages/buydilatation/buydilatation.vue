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
						<view class="uni-list applynumpicker">
							<view class="uni-list-cell">
								<view class="uni-list-cell-left">
									申请数量
								</view>
								<view class="uni-list-cell-db picker_change">
									<picker @change="bindApplynumPickerChange" :value="index" :range="applynumArray">
										<view class="uni-input">{{applynum}}</view>
									</picker>
								</view>
								<view class="uni-list-cell-left">
									人
								</view>
							</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list buytimepicker">
							<view class="uni-list-cell">
								<view class="uni-list-cell-left">
									购买时长
								</view>
								<view class="uni-list-cell-db picker_change">
									<picker @change="bindPickerChange" :value="index" :range="array">
										<view class="uni-input">{{buytime}}</view>
									</picker>
								</view>
								<view class="uni-list-cell-left">
									月
								</view>
							</view>
						</view>
					</view>
					<view class="uni-form-item uni-column userknowbox">
						<text class="userknow">{{userNeedKnow}}</text>
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
				totalmny: 0,
				array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				applynumArray: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
			}
		},
		onLoad: function(e) {
			let wxopenid = this.getCookie('wxopenid');
			if(wxopenid == undefined || wxopenid == '' || wxopenid.length == 0){
				this.getWxCode(location.href);
			};
			uni.request({
				url: 'https://www.yitongkc.com/renren-fast/wx-api/goods/plusRoom',
				method: 'GET',
				data: {},
				success: res => {
					if (res && res.data && res.data.code === 0) {
						this.infoMap = res.data.msg;
						this.price = this.infoMap['4'].amount;
						this.goodsCode = this.infoMap['4'].goodsCode;
						this.totalmny = this.buytime * this.price * 0.01;
						if (this.isIphone()) {
							uni.showToast({
								title: '购买' + this.applynum + '人扩容卡：' + this.buytime + '个月',
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
			bindPickerChange: function(e) {
				this.buytime = this.array[e.target.value];
				this.totalmny = this.buytime * this.price * 0.01;
			},
			bindApplynumPickerChange: function(e) {
				this.applynum = this.applynumArray[e.target.value];
				this.price = this.getPrice(this.applynum + "");
				this.goodsCode = this.getGoodsCode(this.applynum + "")
				this.totalmny = this.buytime * this.price * 0.01;
			},
			wechatpayclick: function() {
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
						"goodsCont": this.buytime,
						"userKey": this.idortel,
						"openId": this.getCookie('wxopenid')
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
