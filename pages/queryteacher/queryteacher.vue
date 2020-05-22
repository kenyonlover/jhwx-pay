<template>
	<view class="content">
		<view class="peoplebox">
			<image src="../../static/img/蓝.jpg" mode="" class="topcard"></image>
		</view>
		<view class="querybox">
			<view class="inlab">
				<form @submit="formSubmit">
					<view class="uni-form-item uni-column">
						<view class="title">请填写老师的ID或者手机号</view>
						<input class="uni-input inpid" name="idortel" />
					</view>
					<view class="uni-btn-v">
						<button form-type="submit" class="subbtn">查找</button>
					</view>
				</form>
			</view>
		</view>
	</view>

</template>

<script>
	var graceChecker = require("../../common/graceChecker.js");
	export default {
		data() {
			return {
				openid: ''
			}
		},
		onLoad: function(e) {
			this.openid = e.openid;
		},
		methods: {
			formSubmit: function(e) {
				//定义表单规则
				var rule = [{
					name: "idortel",
					checkType: "string",
					checkRule: "1,50",
					errorMsg: "ID或者手机号不能为空"
				}, ];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					// uni.showToast({title:"验证通过!", icon:"none"});
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
					return
				}
				//请求后台进行查询并进行跳转
				uni.showLoading({
					title: "加载中...."
				})
				uni.request({
					url: 'https://www.yitongkc.com/renren-fast/wx-api/goods/teacher/' + formData.idortel,
					method: 'GET',
					data: {},
					success: res => {
						uni.hideLoading();
						if (res && res.data && res.data.code === 0) {
							uni.navigateTo({
								url: '../buyteacher/buyteacher?id=' + formData.idortel + '&openid=' + this.openid
							});
						} else {
							uni.showToast({
								title: '没有查找到对应的老师，请确认后重新输入',
								icon: "none"
							});
							return
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.subbtn {
		top: 100rpx;
		left: -20rpx;
		width: 160rpx;
		height: 70rpx;
		background: #6a5e48;
		color: #D8CEB5;
		line-height: 70rpx;
	}
</style>
