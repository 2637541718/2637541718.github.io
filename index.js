!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports._cy=e():t._cy=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(1));var i,a='<div class="<%=className%>"><div class="cy__mask"></div><div class="cy__dialog"><% if(showClose){ %><a href="javascript:;" class="cy__dialog__close"></a><% } %><% if(picUrl){ %><img src="<%= picUrl %>" class="cy__dialog__picUrl"/><% } %><div class="cy__dialog__box"><% if(iconUrl){ %><img class="cy__dialog__icon" src="<%= iconUrl %>"><% } %><% if(title){ %><div class="cy__dialog__hd cy__dialog__body"><strong class="cy__dialog__title"><%=title%></strong></div><% } %><% if(content){ %><div class="cy__dialog__bd cy__dialog__body"><span class="cy__dialog__content"><%=content%></span></div><% } %></div><div class="cy__dialog__ft <%  if(buttonDirectionColumn){ %> column <% } %> "><% for(var i = 0; i < buttons.length; i++){ %><a href="javascript:;" class="cy__dialog__btn cy__dialog__btn_<%=buttons[i][\'type\']%>"><%=buttons[i][\'label\']%></a><% } %></div></div></div>';e.default=function(t){if(i)return i;t=$.extend({title:null,content:"",className:"",iconUrl:null,showClose:!1,picUrl:null,buttonDirectionColumn:!1,buttons:[{label:"确定",type:"primary",onClick:$.noop}]},t||{});var e=$(o.default.render(a,t)),n=e.find(".cy__dialog"),l=e.find(".cy__mask");function c(t){c=$.noop,l.addClass("cy__animate-fade-out"),n.addClass("cy__animate-fade-out").on("animationend webkitAnimationEnd",function(){e.remove(),i=!1,t&&t()})}function r(t){c(t)}return $("body").append(e),l.addClass("cy__animate-fade-in"),n.addClass("cy__animate-fade-in"),e.on("click",".cy__dialog__btn",function(e){var n=$(this).index();t.buttons[n].onClick?!1!==t.buttons[n].onClick.call(this,e)&&r():r()}).on("touchmove",function(t){t.stopPropagation(),t.preventDefault()}),e.on("click",".cy__dialog__close",function(){r()}),(i=e[0]).hide=r,i},t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};(function(t){var e=this.os={},n=t.match(/(Android);?[\s\/]+([\d.]+)?/);n&&(e.android=!0,e.version=n[2])}).call(o,navigator.userAgent),o.render=function(t,e){var n="var p=[];with(this){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');";return new Function(n).apply(e)},o.getStyle=function(t,e){var n,o=(t.ownerDocument||document).defaultView;return o&&o.getComputedStyle?(e=e.replace(/([A-Z])/g,"-$1").toLowerCase(),o.getComputedStyle(t,null).getPropertyValue(e)):t.currentStyle?(e=e.replace(/\-(\w)/g,function(t,e){return e.toUpperCase()}),n=t.currentStyle[e],/^\d+(em|pt|%|ex)?$/i.test(n)?function(e){var n=t.style.left,o=t.runtimeStyle.left;return t.runtimeStyle.left=t.currentStyle.left,t.style.left=e||0,e=t.style.pixelLeft+"px",t.style.left=n,t.runtimeStyle.left=o,e}(n):n):void 0},e.default=o,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(3);var o=c(n(0)),i=c(n(4)),a=c(n(5)),l=c(n(6));function c(t){return t&&t.__esModule?t:{default:t}}e.default={dialog:o.default,alert:i.default,confirm:a.default,toast:l.default},t.exports=e.default},function(t,e,n){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(t){return t&&t.__esModule?t:{default:t}}(n(0));e.default=function(t,e,n){return"object"===(void 0===e?"undefined":o(e))&&(n=e,e=$.noop),n=$.extend({content:t||"",buttons:[{label:"确定",type:"primary",onClick:e||$.noop}]},n||{}),(0,i.default)(n)},t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(t){return t&&t.__esModule?t:{default:t}}(n(0));e.default=function(t,e,n,a){return"object"===(void 0===e?"undefined":o(e))?(a=e,e=$.noop):"object"===(void 0===n?"undefined":o(n))&&(a=n,n=$.noop),a=$.extend({content:t||"",buttons:[{label:"取消",type:"default",onClick:n||$.noop},{label:"确定",type:"primary",onClick:e||$.noop}]},a||{}),(0,i.default)(a)},t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(1));var i,a=['<div class="<%= className %>">','<div class="cy__mask_transparent"></div>','<div class="cy__toast__box">','<div class="cy__toast <% if(iconClass){ %> cy__toast-wrap <% } %>">','<i class="cy__toast__icon <%= iconClass %>"></i>','<% if(content){ %><p class="cy__toast__content"><%= content %></p><% } %>',"</div>","</div>","</div>"];function l(t,e){if(i)return i;"number"==typeof e&&(e={duration:e}),"function"==typeof e&&(e={callback:e}),e=$.extend({content:t||"",duration:1500,iconClass:"",callback:$.noop,className:""},e||{});var n=$(o.default.render(a.join(""),e)),l=n.find(".cy__toast__box"),c=n.find(".cy__mask");return e.iconClass||n.find(".cy__toast__icon").remove(),$("body").append(n),l.addClass("cy__animate-fade-in"),c.addClass("cy__animate-fade-in"),setTimeout(function(){c.addClass("cy__animate-fade-out"),l.addClass("cy__animate-fade-out").on("animationend webkitAnimationEnd",function(){n.remove(),i=!1,e.callback()})},e.duration),i=n[0],n[0]}l.success=function(t,e){"number"==typeof e&&(e={duration:e}),"function"==typeof e&&(e={callback:e}),l(t,e=$.extend(e||{},{iconClass:"cy__icon-success"}))},l.loading=function(t,e){"number"==typeof e&&(e={duration:e}),"function"==typeof e&&(e={callback:e}),l(t,e=$.extend(e||{},{iconClass:"cy__icon-loading"}))},e.default=l,t.exports=e.default}])});var audios = document.getElementsByTagName("audio");
// 暂停函数
function pauseAll() {
    var self = this;
    [].forEach.call(audios, function (i) {
        // 将audios中其他的audio全部暂停
        i !== self && i.pause();
    })
}
// 给play事件绑定暂停函数
[].forEach.call(audios, function (i) {
    i.addEventListener("play", pauseAll.bind(i));
})


//代码保护函数
function click(e) {
	if (document.all) {
		if (event.button==1||event.button==2||event.button==3) {
			oncontextmenu='return false';
		}
	}
	if (document.layers) {
		if (e.which == 3) {
			oncontextmenu='return false';
		}
	}
}
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
if (document.layers){
document.captureEvents(Event.KEYDOWN)
}



//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3cdcbd407ddf1e5ce8016fbf7e3b35c9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
