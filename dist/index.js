parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xsGI":[function(require,module,exports) {
"use strict";function e(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;return new Promise(function(t,r){var a=new RTCPeerConnection,i=new RTCPeerConnection,c=a.createDataChannel("sender"),d=Date.now();function o(e){return n?n(!1):r(e)}function s(){var n;if(!e)return!1;(n=console).log.apply(n,arguments)}a.addEventListener("icecandidate",function(e){if(!e.candidate)return!1;s("🚖  First Peer Generated Candidate:",e.candidate),i.addIceCandidate(e.candidate)}),i.addEventListener("icecandidate",function(e){if(!e.candidate)return!1;s("🚖  Second Peer Generated Candidate:",e.candidate),a.addIceCandidate(e.candidate)}),i.addEventListener("datachannel",function(e){e.channel.addEventListener("message",function(e){if(s("✉️  Message Transmission successful"),e.data===d.toString()){if(n)return n(!0);var r=Date.now();return a.close(),i.close(),t(r-d)}o(new Error("message integrity failure"))})}),c.addEventListener("open",function(){return c.send(d.toString())}),a.createOffer().then(function(e){s("🍎  Created RTC Offer"),a.setLocalDescription(e).then(function(){return i.setRemoteDescription(e)}).then(function(){return i.createAnswer().then(function(e){s("🍏  Created RTC Answer"),i.setLocalDescription(e).then(function(){return a.setRemoteDescription(e)}).catch(function(e){return o(e)})}).catch(function(e){return o(e)})})}).catch(function(e){return o(e)})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=e;exports.default=n;
},{}],"AwD8":[function(require,module,exports) {
"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{video:!0,audio:!0},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0;return new Promise(function(n,o){function i(e){return r?r(!1):o(e)}function a(){var e;if(!t)return!1;(e=console).log.apply(e,arguments)}navigator.mediaDevices.getUserMedia(e).then(function(t){if(a("🏞  Got Media stream"),t.active){var r=t.getTracks(),o=!1,d=!1,u=[].every.call(r,function(e){return"audio"===e.kind&&(o=!0),"video"===e.kind&&(d=!0),"live"===e.readyState});return r.forEach(function(e){return e.stop()}),u?e.video&&!d?i(new Error("Video Track not found")):e.audio&&!o?i(new Error("Audio Track not found")):n(!0):i(new Error("All requested tracks are not active"))}}).catch(function(e){a("🛑  Failed at getting media stream"),i(e)})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"S92k":[function(require,module,exports) {
"use strict";function e(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;return new Promise(function(o,r){function c(){var e;if(!t)return!1;(e=console).log.apply(e,arguments)}e||r(new Error("Please provide a filename to download and check internet"));var i=Date.now();c("🧲  Fetching the test file"),fetch("".concat(e,"?rtccheckertimestamp_noconflict=").concat(i)).then(function(e){return e.blob()}).then(function(e){c("😇  Test file fetched successfully");var t=(Date.now()-i)/1e3,r=(8*e.size/t/1048576).toFixed(2);return c("🌎  Internet speed observed during fetch: ".concat(r," Mbps")),n?n(r):o(r)}).catch(function(e){return n?n(!1):r(e)})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./checks/peerConnection")),t=n(require("./checks/mediaCapture")),r=n(require("./checks/internet"));function n(e){return e&&e.__esModule?e:{default:e}}var u={checkPeerConnection:e.default,checkMediaCapture:t.default,checkInternetSpeed:r.default};"undefined"!=typeof window&&(window._RTCTest=u);var c=u;exports.default=c;
},{"./checks/peerConnection":"xsGI","./checks/mediaCapture":"AwD8","./checks/internet":"S92k"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map