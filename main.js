import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.appId = 'wxaa7bb4e808193c93';

Vue.prototype.isIphone = false || function () {
	let ua = window.navigator.userAgent.toLowerCase();
	return ua.includes('iphone') || ua.includes('ipad');
};

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
