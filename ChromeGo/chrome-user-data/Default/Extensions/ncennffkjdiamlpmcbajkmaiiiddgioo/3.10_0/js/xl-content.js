!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n){!function(){var e,n,t,r,i,o,u,a,c,f=!1,l=!1,d=!1,s=!1,m=["http.+\\?.*url=.+","http.+\\?.*uri=.+"],p="ED2K://",b="MAGNET:?",v="FTP://THUNDER://MMS://MMST://RTSP://RTSPU://XLAPP://";function h(e,n){return 0!=e.length&&(0!=s&&(0!=function(e){if(0==e.length)return!1;var n=e,t=n.indexOf(":");if(-1==t)return!1;var r=n.substr(0,t+1).toUpperCase();if(""==r)return!1;var i=!0;return-1!=p.indexOf(r)?0==f&&(i=!1):-1!=b.indexOf(r)?0==l&&(i=!1):-1!=v.indexOf(r)?0==d&&(i=!1):i=!1,i}(e)&&(0!=function(e){if(0==e.length)return!0;var n=new Array,t=o.split("||");for(var r in t){var i=t[r].slice(2).trimRight("|");n.push(i)}var u=!0,a=e;for(var c in n)if(n[c].length>0&&-1!=a.indexOf(n[c])){u=!1;break}return u}(n)&&(!function(e){if(0==e.length)return!1;if(0==u.length)return!1;var n=new Array,t=u.split("||");for(var r in t){var i=t[r].slice(2).toLowerCase().trimRight("|");n.push(i)}var o=!1,a=e.toLowerCase();for(var c in n)if(n[c]>0&&-1!=a.indexOf(n[c])){o=!0;break}return o}(n)&&0!=function(e){if(0==e.length)return!1;var n=e.indexOf(":");if(-1==n)return!1;var t=e.toLowerCase();if("xlapp://"==t.substr(0,n+3).trimLeft(" "))return!0;if(-1!=t.indexOf("ed2k://")||-1!=t.indexOf("magnet:?"))return!0;var r,i,o=!1,u=(r=t.replace(/(\\+)/g,"#").split("#"),(i=r[r.length-1].split("."))[i.length-1]);return u.length>0&&(u+=";",-1!=a.indexOf(u)&&(o=!0)),o}(e)))))}function g(e){return n=e,document.cookie,t=document.location.href,!function(e){var n=e.toLowerCase(),t=!0;return-1!=n.indexOf("?")&&-1==n.indexOf("magnet:?")||(t=!1),t}(n)&&h(n,t);var n,t}function x(e){chrome.extension.sendRequest({name:"CheckbMoniterDynamicLinks"},function(e){t=e.bMoniterDynamicLinks})}function k(e){if(!e.ctrlKey&&!t&&n&&r&&i){var o=this.href;if(checkResult=function(e){for(var n in m){var t=new RegExp(m[n],"i").exec(e);if(null!=t)return t}return null}(o),null!=checkResult)return;if(checkResult=g(o),checkResult)return chrome.extension.sendRequest({name:"xl_download",link:o,cookie:document.cookie,referurl:document.location.href}),e.stopPropagation(),void e.preventDefault()}}function y(){chrome.extension.onMessage.addListener(function(o,u,a){var c,f;"UpdatePluginEnabled"==o.name?n=o.enable:"UpdateMoniterDynamicLinks"==o.name?t=o.enable:"UpdateWebsiteEnabled"==o.name?r=o.enable:"UpdatePageEnabled"==o.name?i=o.enable:"OnActivated"==o.name?(console.log("OnActivated",e,o,u),e&&(c=document.location.href,f=o.tabId,chrome.extension.sendRequest({name:"CheckEnabled",url:c,tabId:f},function(e){n=e.bPlugin,r=e.bWebsite,i=e.bPage}),x())):"GetCookie"==o.name&&a({cookie:document.cookie})})}e=!0,y(),c=document.location.href,chrome.extension.sendRequest({name:"CheckActivated",url:c}),x(),function(){for(var e=0;e<document.links.length;e++)document.links[e].addEventListener("click",k,!1)}(),document.addEventListener("keydown",function(e){e.ctrlKey&&chrome.extension.sendRequest({name:"EnabledCapture",capture:!1},function(){})}),document.addEventListener("keyup",function(e){e.ctrlKey&&chrome.extension.sendRequest({name:"EnabledCapture",capture:!0},function(){})}),chrome.extension.sendRequest({name:"GetConfig"},function(e){f=e.bMonitorEmule,l=e.bMonitorMagnet,d=e.bMonitorTradition,s=e.bMonitorIE,o=e.monitorDemains,u=e.filterDemains,a=e.monitorFileExts})}()}]);
//# sourceMappingURL=xl-content.js.map