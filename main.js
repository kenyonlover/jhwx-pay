import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

Vue.prototype.appId = 'wxaa7bb4e808193c93';

Vue.prototype.userNeedKnow = '**用户须知**  本卡券，自购买之日起生效，使用有效期以具体的购买时长为准；支付成功后，不支持无故退款、修改信息等操作；待有效期结束后，如需继续使用，请重新购买；如有其他支付问题，可联系客服人员咨询。'

/**
 * 获取微信授权code
 * @param {Object} url
 */
Vue.prototype.getWxCode = function(url) {
	let uri = location.origin + location.pathname + '#/pages/transfer/transfer';
	let repUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.appId + '&redirect_uri=' + escape(
		uri) + '&response_type=code&scope=snsapi_base&state=' + escape(url) + '#wechat_redirect';
	window.location.replace(repUrl);
};

/**
 * 判断是否为苹果系统
 */
Vue.prototype.isIphone = false || function() {
	let ua = window.navigator.userAgent.toLowerCase();
	return ua.includes('iphone') || ua.includes('ipad');
};

/**
 * 设置cookie
 * @param {Object} key
 * @param {Object} value
 * @param {Object} expiretimes
 */
Vue.prototype.setCookie = function(key, value, expiretimes) {
	var exdate = new Date();
	exdate.setTime(exdate.getTime() + expiretimes * 60 * 1000 * 60);
	document.cookie = key + "=" + escape(value) + ((expiretimes == null) ? "" : ";expires=" + exdate.toGMTString());
};

/**
 * 取回cookie
 * @param {Object} key
 */
Vue.prototype.getCookie = function(key) {
	let c_start = null;
	let c_end = null;
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(key + "=");
		if (c_start != -1) {
			c_start = c_start + key.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
};

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
