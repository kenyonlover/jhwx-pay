/*
    微信支付方法(uni-app h5)适用
	微信配置，获取ticket，用于调用微信方法
*/
const wx = require('jweixin-module');
const wxConfig = () => {
	
	let appId = 'wxaa7bb4e808193c93';

	//生成签名
	uni.request({
		url: 'https://www.yitongkc.com/renren-fast/wx-api/jsapiTicket?url=' + location.origin + location.pathname + location.search,
		method: 'GET',
		data: {},
		success: res => {
			if(res && res.data && res.data.code===0){
				let resData = res.data.msg;
				let [timestamp, nonceStr, signature] = [resData.timestamp, resData.nonceStr, resData.signature];
				wx.config({
				    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				    appId, // 必填，公众号的唯一标识
				    timestamp, // 必填，生成签名的时间戳
				    nonceStr, // 必填，生成签名的随机串
				    signature, // 必填，签名，见附录1
				    jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
			}else{
				uni.showToast({ title: res.data.msg, icon: "none" });
				return
			}
		},
		fail: () => {
			uni.showToast({ title: '获取微信jsapi_ticket授权失败，请退出重试', icon: "none" });
			return
		},
		complete: () => {}
	});
	
	
	
}
 
export default wxConfig;