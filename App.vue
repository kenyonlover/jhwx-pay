<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	@import "./common/uni.css";

	page {
		/* background: -webkit-gradient(linear, left top, right bottom, from(#958564), to(#958564),color-stop(50%,#d8ceb5)); */
		background-image: url(static/img/背景.jpg);
	}

	uni-page-body {
		background: transparent;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.peoplebox {
		width: 750rpx;
	}

	.topcard {
		left: 220rpx;
		height: 220rpx;
		width: 330rpx;
		margin-top: 80rpx;
		margin-left: auto;
		margin-right: auto;
		border-radius: 20rpx;
		position: relative;
	}

	.ppimgcls {
		position: relative;
		width: 110rpx;
		height: 110rpx;
		border-radius: 55rpx;
		left: -70rpx;
		top: -60rpx;
	}

	.ppnamecls {
		position: relative;
		color: #d2c7ab;
		left: -50rpx;
		top: -100rpx;
	}

	.querybox {
		height: 390rpx;
		width: 650rpx;
		margin-top: 80rpx;
		margin-left: auto;
		margin-right: auto;
		border-radius: 20rpx;
		background: #8d7d5c;
	}

	.inlab {
		margin-top: 30rpx;
		margin-left: 50rpx;
		font-size: 35rpx;
		color: #D8CEB5;
	}

	.inpid {
		margin-top: 10rpx;
		width: 510rpx;
		background: #7e6d4f;
		color: white;
		border-radius: 10rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.userknowbox {
		width: 555rpx;
	}

	.userknow {
		position: relative;
		top: 80rpx;
		color: #8d7d5c;
		font-size: 20rpx;
	}

	.moneytip {
		position: relative;
		top: 250rpx;
		left: 130rpx;
		color: #8d7d5c;
		font-size: 30rpx;
	}

	.moneynum {
		position: relative;
		width: 40rpx;
		top: 250rpx;
		left: 160rpx;
		color: #8d7d5c;
		font-size: 40rpx;
		line-height: 40rpx;
	}

	.moneyunit {
		position: relative;
		top: 250rpx;
		left: 200rpx;
		color: #8d7d5c;
		font-size: 30rpx;
	}

	.wechatpay {
		width: 270rpx;
		height: 75rpx;
		top: 300rpx;
		left: 130rpx;
	}

	.applynumpicker {
		/* top: 40rpx; */
		margin-top: 20rpx;
		width: 540rpx;
		background: transparent;
		/* padding-left: 20rpx;
		padding-right: 20rpx; */
		/* opacity: 0.0; */
	}

	.buytimepicker {
		/* top: 100rpx; */
		margin-top: 20rpx;
		width: 540rpx;
		background: transparent;
		/* border-radius: 10rpx; */
		/* border: #8d7d5c; */
		/* padding-left: 20rpx;
		padding-right: 20rpx; */
		/* position: unset; */
	}

	.uni-list {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		position: unset;
	}

	.picker_change {
		background: #7e6d4f;
		border-radius: 10rpx;
		padding-left: 20rpx;
	}



	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
</style>
