(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-buymaster-buymaster"],{"02f4":function(e,t,n){"use strict";n.r(t);var i=n("19ba"),o=n("4806");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("19e8");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3952c900",null,!1,i["a"],r);t["default"]=c.exports},"19ba":function(e,t,n){"use strict";var i,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"peoplebox"},[i("v-uni-image",{staticClass:"topcard",attrs:{src:n("f877"),mode:""}}),i("v-uni-image",{staticClass:"ppimgcls",attrs:{src:e.peopleImg,mode:""}}),i("v-uni-text",{staticClass:"ppnamecls"},[e._v(e._s(e.peopleName))])],1),i("v-uni-view",{staticClass:"querybox"},[i("v-uni-view",{staticClass:"inlab"},[i("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("请填写你的ID或者手机号")]),i("v-uni-input",{staticClass:"uni-input inpid",model:{value:e.idortel,callback:function(t){e.idortel=t},expression:"idortel"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-text",{staticClass:"bncls"},[e._v("购买时长")]),i("v-uni-image",{staticClass:"subimg",attrs:{src:n("90f5"),mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subimgclick.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"buttimecls"},[e._v(e._s(e.buytime))]),i("v-uni-image",{staticClass:"addimg",attrs:{src:n("c06b"),mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addimgclick.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"timeunit"},[e._v("月")])],1),i("v-uni-view",{staticClass:"uni-form-item uni-column userknowbox"},[i("v-uni-text",{staticClass:"userknow"},[e._v("用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知")])],1),i("v-uni-view",{staticClass:"uni-form-item uni-column userknowbox"},[i("v-uni-text",{staticClass:"moneytip"},[e._v("需支付金额：")]),i("v-uni-text",{staticClass:"moneynum"},[e._v(e._s(e.totalmny.toFixed(2)))]),i("v-uni-text",{staticClass:"moneyunit"},[e._v("元")])],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-image",{staticClass:"wechatpay",attrs:{src:n("2dfa"),mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.wechatpayclick.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"19e8":function(e,t,n){"use strict";var i=n("ebee"),o=n.n(i);o.a},"2dfa":function(e,t,n){e.exports=n.p+"static/img/微信支付.27f59816.png"},4806:function(e,t,n){"use strict";n.r(t);var i=n("78b8"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},5757:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n},"621b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("edb5"),o=function(t,n,o){var a=[t.appId,t.timeStamp,t.nonceStr,t.package,t.paySign],r=a[0],s=a[1],c=a[2],d=a[3],u=a[4];e("log","wxPay传入参数为：",r,s,c,d,u," at common\\wxPay.js:29"),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:r,timeStamp:s,nonceStr:c,package:d,signType:"MD5",paySign:u},(function(e){"get_brand_wcpay_request:ok"==e.err_msg?n(e):"get_brand_wcpay_request:cancel"==e.err_msg&&errorCallback(e)})),i.error((function(e){}))},a=o;t.default=a}).call(this,n("0de9")["log"])},"78b8":function(e,t,n){"use strict";(function(e){n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("621b"),o={data:function(){return{buytime:1,peopleImg:"",peopleName:"",price:0,goodsCode:"",idortel:"",openid:"",totalmny:0}},onLoad:function(e){var t=this;this.openid=e.openid,uni.request({url:"https://www.yitongkc.com/renren-fast/wx-api/goods/master/"+e.id,method:"GET",data:{},success:function(e){e&&e.data&&0===e.data.code?(t.peopleImg=e.data.msg.avatar,t.peopleName=e.data.msg.nickname,t.price=e.data.msg.amount,t.goodsCode=e.data.msg.goodsCode,t.totalmny=t.buytime*t.price*.01):uni.showToast({title:e.data.msg,icon:"none"})},fail:function(){},complete:function(){}})},methods:{subimgclick:function(){this.buytime>1&&(this.buytime--,this.totalmny=this.buytime*this.price*.01)},addimgclick:function(){this.buytime++,this.totalmny=this.buytime*this.price*.01},wechatpayclick:function(){void 0!=this.openid&&""!=this.openid&&0!=this.openid.length||window.location.replace(location.origin+location.pathname),""!=this.idortel&&0!=this.idortel.length?uni.request({url:"https://www.yitongkc.com/renren-fast/wx-api/payOrderGoodsJSAPI",method:"POST",data:{goodsCode:this.goodsCode,goodsCont:1,userKey:this.idortel,openId:this.openid},success:function(t){0===t.data.code?"success"===t.data.msg?uni.showModal({title:"提示",content:"购买成功",showCancel:!1,confirmColor:"#8d7d5c",success:function(e){e.confirm&&uni.hideToast()}}):i.default(t.data.msg,(function(t){e("log","支付成功"," at pages\\buymaster\\buymaster.vue:130"),uni.showModal({title:"提示",content:"购买成功",showCancel:!1,confirmColor:"#8d7d5c",success:function(e){e.confirm&&uni.hideToast()}})}),(function(t){e("log","支付失败或取消支付"," at pages\\buymaster\\buymaster.vue:145"),uni.showModal({title:"提示",content:"支付失败或取消支付",showCancel:!1,confirmColor:"#8d7d5c",success:function(e){e.confirm&&uni.hideToast()}})})):uni.showModal({title:"提示",content:t.data.msg,showCancel:!1,confirmColor:"#8d7d5c",success:function(e){e.confirm&&uni.hideToast()}})},fail:function(){uni.showToast({title:"下单失败，请退出重试",icon:"none"})},complete:function(){}}):uni.showToast({title:"ID或者手机号不能为空，请填写",icon:"none"})}}};t.default=o}).call(this,n("0de9")["log"])},"90f5":function(e,t,n){e.exports=n.p+"static/img/-.afada1e1.png"},ae6f:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".bncls[data-v-3952c900]{top:%?15?%;position:relative}.subimg[data-v-3952c900]{top:%?25?%;left:%?50?%;width:%?50?%;height:%?50?%;position:relative}.buttimecls[data-v-3952c900]{top:%?15?%;position:relative;left:%?75?%}.addimg[data-v-3952c900]{top:%?25?%;left:%?100?%;width:%?50?%;height:%?50?%}.timeunit[data-v-3952c900]{position:relative;left:%?150?%;top:%?15?%}.subbtn[data-v-3952c900]{top:%?100?%;left:%?-20?%;width:%?160?%;height:%?70?%;background:#6a5e48;color:#d8ceb5;line-height:%?70?%}\n\n/* .bncls{\n\ttop: 50rpx;\n\tposition: relative;\n}\n.subimg{\n\ttop: 60rpx;\n\tleft: 50rpx;\n\twidth: 50rpx;\n\theight: 50rpx;\n\tposition: relative;\n}\n.buttimecls{\n\tposition: relative;\n\tleft: 75rpx;\n\ttop: 50rpx;\n}\n.addimg{\n\ttop: 60rpx;\n\tleft: 100rpx;\n\twidth: 50rpx;\n\theight: 50rpx;\n}\n.timeunit{\n\tposition: relative;\n\tleft: 150rpx;\n\ttop: 50rpx;\n} */",""]),e.exports=t},c06b:function(e,t,n){e.exports=n.p+"static/img/+.f72e6132.png"},ebee:function(e,t,n){var i=n("ae6f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("5b7dcbdb",i,!0,{sourceMap:!1,shadowMode:!1})},edb5:function(e,t,n){(function(i){var o;n("c975"),n("ac1f"),n("466d"),n("5319"),n("1276");var a=n("5757");!function(i,a){o=function(){return a(i)}.call(t,n,t,e),void 0===o||(e.exports=o)}(window,(function(e,t){if(!e.jWeixin){var n,o,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},s=function(){var e={};for(var t in r)e[r[t]]=t;return e}(),c=e.document,d=c.title,u=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),p=!(!l.match("mac")&&!l.match("win")),f=-1!=u.indexOf("wxdebugger"),m=-1!=u.indexOf("micromessenger"),g=-1!=u.indexOf("android"),h=-1!=u.indexOf("iphone")||-1!=u.indexOf("ipad"),v=(o=u.match(/micromessenger\/(\d+\.\d+\.\d+)/)||u.match(/micromessenger\/(\d+\.\d+)/))?o[1]:"",y={initStartTime:E(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},w={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:h?1:g?2:-1,clientVersion:v,url:encodeURIComponent(location.href)},S={},_={_completes:[]},b={state:0,data:{}};N((function(){y.initEndTime=E()}));var I=!1,k=[],x=(n={config:function(t){L("config",S=t);var n=!1!==S.check;N((function(){if(n)M(r.config,{verifyJsApiList:B(S.jsApiList),verifyOpenTagList:B(S.openTagList)},function(){_._complete=function(e){y.preVerifyEndTime=E(),b.state=1,b.data=e},_.success=function(e){w.isPreVerifyOk=0},_.fail=function(e){_._fail?_._fail(e):b.state=-1};var e=_._completes;return e.push((function(){!function(){if(!(p||f||S.debug||v<"6.0.2"||w.systemType<0)){var e=new Image;w.appId=S.appId,w.initTime=y.initEndTime-y.initStartTime,w.preVerifyTime=y.preVerifyEndTime-y.preVerifyStartTime,x.getNetworkType({isInnerInvoke:!0,success:function(t){w.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+w.version+"&o="+w.isPreVerifyOk+"&s="+w.systemType+"&c="+w.clientVersion+"&a="+w.appId+"&n="+w.networkType+"&i="+w.initTime+"&p="+w.preVerifyTime+"&u="+w.url;e.src=n}})}}()})),_.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();_._completes=[]},_}()),y.preVerifyStartTime=E();else{b.state=1;for(var e=_._completes,t=0,i=e.length;t<i;++t)e[t]();_._completes=[]}})),x.invoke||(x.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,V(n),i)},x.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=b.state?e():(_._completes.push(e),!m&&S.debug&&e())},error:function(e){v<"6.0.2"||(-1==b.state?e(b.data):_._fail=e)},checkJsApi:function(e){M("checkJsApi",{jsApiList:B(e.jsApiList)},(e._complete=function(e){if(g){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=s[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){P(r.onMenuShareTimeline,{complete:function(){M("shareTimeline",{title:e.title||d,desc:e.title||d,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){P(r.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?M("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):M("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){P(r.onMenuShareQQ,{complete:function(){M("shareQQ",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){P(r.onMenuShareWeibo,{complete:function(){M("shareWeiboApp",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){P(r.onMenuShareQZone,{complete:function(){M("shareQZone",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){M("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){M("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){M("startRecord",{},e)},stopRecord:function(e){M("stopRecord",{},e)},onVoiceRecordEnd:function(e){P("onVoiceRecordEnd",e)},playVoice:function(e){M("playVoice",{localId:e.localId},e)},pauseVoice:function(e){M("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){M("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){P("onVoicePlayEnd",e)},uploadVoice:function(e){M("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){M("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){M("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){M("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(g){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){M(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){M("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){M("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,M("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<k.length){var t=k.shift();wx.getLocalImgData(t)}},e))):k.push(e)},getNetworkType:function(e){M("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){M("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},a(n,"getLocation",(function(e){M(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),a(n,"hideOptionMenu",(function(e){M("hideOptionMenu",{},e)})),a(n,"showOptionMenu",(function(e){M("showOptionMenu",{},e)})),a(n,"closeWindow",(function(e){M("closeWindow",{},e=e||{})})),a(n,"hideMenuItems",(function(e){M("hideMenuItems",{menuList:e.menuList},e)})),a(n,"showMenuItems",(function(e){M("showMenuItems",{menuList:e.menuList},e)})),a(n,"hideAllNonBaseMenuItem",(function(e){M("hideAllNonBaseMenuItem",{},e)})),a(n,"showAllNonBaseMenuItem",(function(e){M("showAllNonBaseMenuItem",{},e)})),a(n,"scanQRCode",(function(e){M("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(h){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))})),a(n,"openAddress",(function(e){M(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),a(n,"openProductSpecificView",(function(e){M(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),a(n,"addCard",(function(e){for(var t=e.cardList,n=[],i=0,o=t.length;i<o;++i){var a=t[i],s={card_id:a.cardId,card_ext:a.cardExt};n.push(s)}M(r.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))})),a(n,"chooseCard",(function(e){M("chooseCard",{app_id:S.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),a(n,"openCard",(function(e){for(var t=e.cardList,n=[],i=0,o=t.length;i<o;++i){var a=t[i],s={card_id:a.cardId,code:a.code};n.push(s)}M(r.openCard,{card_list:n},e)})),a(n,"consumeAndShareCard",(function(e){M(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),a(n,"chooseWXPay",(function(e){M(r.chooseWXPay,A(e),e)})),a(n,"openEnterpriseRedPacket",(function(e){M(r.openEnterpriseRedPacket,A(e),e)})),a(n,"startSearchBeacons",(function(e){M(r.startSearchBeacons,{ticket:e.ticket},e)})),a(n,"stopSearchBeacons",(function(e){M(r.stopSearchBeacons,{},e)})),a(n,"onSearchBeacons",(function(e){P(r.onSearchBeacons,e)})),a(n,"openEnterpriseChat",(function(e){M("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),a(n,"launchMiniProgram",(function(e){M("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)})),a(n,"openBusinessView",(function(e){M("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(g){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),a(n,"miniProgram",{navigateBack:function(e){e=e||{},N((function(){M("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){N((function(){M("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){N((function(){M("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){N((function(){M("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){N((function(){M("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){N((function(){M("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){N((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),n),T=1,C={};return c.addEventListener("error",(function(e){if(!g){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=T++,t["wx-id"]=o),C[o])return;C[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!g){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(C[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=x),x}function M(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,V(n),(function(e){O(t,e,i)})):L(t,i)}function P(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),O(t,e,n)})):L(t,i||n)}function V(e){return(e=e||{}).appId=S.appId,e.verifyAppId=S.appId,e.verifySignType="sha1",e.verifyTimestamp=S.timestamp+"",e.verifyNonceStr=S.nonceStr,e.verifySignature=S.signature,e}function A(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function O(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=s[n];i&&(n=i);var o="ok";if(t){var a=t.indexOf(":");"confirm"==(o=t.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n+":"+o}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",S.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function B(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],o=r[i];o&&(e[t]=o)}return e}}function L(e,t){if(!(!S.debug||t&&t.isInnerInvoke)){var n=s[e];n&&(e=n),t&&t._complete&&delete t._complete,i("log",'"'+e+'",',t||""," at node_modules\\jweixin-module\\lib\\index.js:1")}}function E(){return(new Date).getTime()}function N(t){m&&(e.WeixinJSBridge?t():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",t,!1))}}))}).call(this,n("0de9")["log"])},f877:function(e,t,n){e.exports=n.p+"static/img/棕.712d26c2.jpg"}}]);