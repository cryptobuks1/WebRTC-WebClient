(function(e){function t(t){for(var n,r,s=t[0],c=t[1],d=t[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1208:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("media-rtc",{attrs:{video:"sendonly",audio:"sendonly",descr:"Security camera and baby monitor Streamer"}})},i=[],o=a("d1d1"),r={components:{MediaRtc:o["a"]}},s=r,c=a("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=d.exports},1679:function(e,t,a){},"361d":function(e,t,a){"use strict";var n=a("f25e"),i=a.n(n);i.a},"4a96":function(e,t,a){"use strict";var n=a("1679"),i=a.n(n);i.a},"50c4a":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("media-rtc",{attrs:{video:"recvonly",audio:"recvonly",descr:"Security camera and baby monitor Client"}})},i=[],o=a("d1d1"),r={components:{MediaRtc:o["a"]}},s=r,c=a("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=d.exports},"56d7":function(e,t,a){"use strict";a.r(t),function(e){a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),n=a("8e31"),i=a("bc13"),o=a("a1d1"),r=a("ee5d"),s=a("50c4a"),c=a("1208"),d=a("98e6"),l=a("a930"),u=a("6903"),m=a("bf05"),v=a("43f9"),f=a.n(v),p=a("8c4f"),b=a("03cd"),h=a.n(b);a("51de"),a("d69d");t["default"].use(p["a"]),t["default"].use(f.a),t["default"].use(h.a);var y=new p["a"]({mode:"history",base:e,routes:[{path:"/",component:i["a"]},{path:"/about",component:o["a"]},{path:"/cam/security/client",component:s["a"]},{path:"/cam/security/streamer",component:c["a"]},{path:"/cam/babyphone/client",component:d["a"]},{path:"/cam/babyphone/streamer",component:l["a"]},{path:"/cam/phone/call",component:u["a"]},{path:"/cam/video/call",component:m["a"]},{path:"/*",component:r["a"]}]});new t["default"]({router:y,render:function(e){return e(n["a"])},data:function(){return{n:0}}}).$mount("#app")}.call(this,"/")},6903:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("media-rtc",{attrs:{video:"inactive",audio:"sendrecv",descr:"Audio Chat Both sides"}})},i=[],o=a("d1d1"),r={components:{MediaRtc:o["a"]}},s=r,c=a("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=d.exports},"88d0":function(e,t,a){"use strict";var n=a("ddd3"),i=a.n(n);i.a},"89f1":function(e,t,a){"use strict";var n=a("fca2"),i=a.n(n);i.a},"8e31":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("particles-bg",{attrs:{type:"cobweb",canvas:{backgroundColor:"#888"},bg:!0}}),a("div",{staticClass:"topMenu"},[a("ul",[a("router-link",{attrs:{tag:"li",to:"/"}},[e._v("Home")]),a("router-link",{attrs:{tag:"li",to:"/about"}},[e._v("About")])],1)]),a("div",{staticClass:"centered-container"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticClass:"view"})],1)],1)],1)},i=[],o=a("5c51"),r={name:"app",components:{ParticlesBg:o["a"]}},s=r,c=(a("361d"),a("2877")),d=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=d.exports},"98e6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("media-rtc",{attrs:{video:"recvonly",audio:"recvonly",descr:"Security camera and baby monitor Client"}})},i=[],o=a("d1d1"),r={components:{MediaRtc:o["a"]}},s=r,c=a("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=d.exports},a1d1:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"pageAbout"}},[a("p",[e._v(" This web page is an Web interface to "),a("a",{attrs:{href:"https://github.com/reekol/WebRTC"}},[e._v("Reekol's WebRTC")]),e._v(" Git project."),a("br"),e._v(" Feel free to use it without any warranty for non commersial use."),a("br"),e._v(" commersial use of any product from this web page (seqr.link)"),a("br"),e._v(" IS PROHIBITED."),a("br"),e._v(" For any custom implementations please contant the author at"),a("br"),e._v(" email: "),a("a",{attrs:{href:"mailto:cupuyc+WebRTC@gmail.com"}},[e._v("cupuyc+WebRTC@gmail.com")]),a("br"),a("br")]),a("div",{staticStyle:{width:"100%","text-align":"left"}},[e._v(" Credits goes to:"),a("br"),e._v(" Vue - javascript framewrk for building web apps."),a("br"),e._v(" Nodejs - for the ssl socket server."),a("br"),e._v(" Stund - Linux stun server."),a("br"),e._v(" iconfinder.com - For licence free icons used."),a("br"),e._v(" ReeKol (Me) - for coding and combining the above into this project. "),a("br"),a("br"),e._v(" Todo:"),a("br"),e._v(" Free Audio (Only) calls!"),a("br"),e._v(" Video chat (Two way audio and video)"),a("br"),e._v(" Door bell (Ringing Signal)"),a("br"),e._v(" Data channel on security camera (to send current streemer coordinates)"),a("br"),e._v(" Map (For security camera coordinates) ")])])}],o={components:{}},r=o,s=(a("88d0"),a("2877")),c=Object(s["a"])(r,n,i,!1,null,null,null);t["a"]=c.exports},a930:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("media-rtc",{attrs:{video:"sendonly",audio:"sendonly",descr:"Security camera and baby monitor Streamer"}})},i=[],o=a("d1d1"),r={components:{MediaRtc:o["a"]}},s=r,c=a("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=d.exports},bc13:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("card-security"),a("card-baby-phone"),a("card-phone-call"),a("card-video-call")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",{staticClass:"md-elevation-24"},[a("md-card-media",[a("router-link",{attrs:{to:"/cam/security/streamer"}},[a("img",{staticStyle:{width:"70%"},attrs:{src:"/assets/security.png",alt:"People"}})])],1),a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Security camera")]),a("div",{staticClass:"md-subhead"},[e._v("Free for non commercial use.")])]),a("md-card-content",[a("ul",[a("li",[e._v("One way audio")]),a("li",[e._v("One way video")]),a("li",[e._v("More features in dev.")])])]),a("div",{staticStyle:{clear:"both"}}),a("md-card-actions",[a("router-link",{attrs:{to:"/cam/security/streamer"}},[a("md-button",[e._v("Streamer")])],1),a("router-link",{attrs:{to:"/cam/security/client"}},[a("md-button",[e._v("Client")])],1)],1)],1)},r=[],s={},c=s,d=a("2877"),l=Object(d["a"])(c,o,r,!1,null,null,null),u=l.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",{staticClass:"md-elevation-24"},[a("md-card-media",[a("router-link",{attrs:{to:"/cam/babyphone/streamer"}},[a("img",{staticStyle:{width:"70%"},attrs:{src:"/assets/baby.png",alt:"Baby"}})])],1),a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Baby monitor")]),a("div",{staticClass:"md-subhead"},[e._v("Free for non commersial use.")])]),a("md-card-content",[a("ul",[a("li",[e._v("One way audio.")]),a("li",[e._v("One way video.")]),a("li",[e._v("More features in dev.")])])]),a("div",{staticStyle:{clear:"both"}}),a("md-card-actions",[a("router-link",{attrs:{to:"/cam/babyphone/streamer"}},[a("md-button",[e._v("Streamer")])],1),a("router-link",{attrs:{to:"/cam/babyphone/client"}},[a("md-button",[e._v("Client")])],1)],1)],1)},v=[],f={},p=f,b=Object(d["a"])(p,m,v,!1,null,null,null),h=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",{staticClass:"md-elevation-24"},[a("md-card-media",[a("router-link",{attrs:{to:"/cam/phone/call"}},[a("img",{staticStyle:{width:"70%"},attrs:{src:"/assets/phonecall.png",alt:"Baby"}})])],1),a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Phone call")]),a("div",{staticClass:"md-subhead"},[e._v("Free for non commersial use.")])]),a("md-card-content",[a("ul",[a("li",[e._v("Two way audio.")]),a("li",[e._v("....")]),a("li",[e._v("....")])])]),a("div",{staticStyle:{clear:"both"}}),a("md-card-actions",[a("router-link",{attrs:{to:"/cam/phone/call"}},[a("md-button",[e._v("Call")])],1)],1)],1)},_=[],g={},w=g,S=Object(d["a"])(w,y,_,!1,null,null,null),x=S.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",{staticClass:"md-elevation-24"},[a("md-card-media",[a("router-link",{attrs:{to:"/cam/video/call"}},[a("img",{staticStyle:{width:"70%"},attrs:{src:"/assets/videocall.png",alt:"Baby"}})])],1),a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Video call")]),a("div",{staticClass:"md-subhead"},[e._v("Free for non commersial use.")])]),a("md-card-content",[a("ul",[a("li",[e._v("Two way audio.")]),a("li",[e._v("Two way video.")]),a("li",[e._v("....")])])]),a("div",{staticStyle:{clear:"both"}}),a("md-card-actions",[a("router-link",{attrs:{to:"/cam/video/call"}},[a("md-button",[e._v("Call")])],1)],1)],1)},z=[],k={},O=k,j=Object(d["a"])(O,C,z,!1,null,null,null),R=j.exports,E={components:{CardSecurity:u,CardBabyPhone:h,CardPhoneCall:x,CardVideoCall:R},mounted:function(){window.init=null}},T=E,$=(a("89f1"),Object(d["a"])(T,n,i,!1,null,null,null));t["a"]=$.exports},bf05:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("media-rtc",{attrs:{video:"sendrecv",audio:"sendrecv",descr:"Video Chat Both sides"}})},i=[],o=a("d1d1"),r={components:{MediaRtc:o["a"]}},s=r,c=a("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=d.exports},d1d1:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("md-card",{staticClass:"md-elevation-24 md-layout-item md-xlarge-size-30 md-large-size-40 md-big-size-60 md-medium-size-70 md-small-size-90 md-xsmall-size-100",attrs:{id:"controlls"}},[a("md-card-media",[a("md-field",{directives:[{name:"show",rawName:"v-show",value:"sendrecv"===e.video||"sendonly"===e.video,expression:"video === 'sendrecv' || video === 'sendonly'"}],staticClass:"float-left md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100"},[a("video",{attrs:{id:"local",autoplay:"",poster:"/assets/stream.png"}})]),a("md-field",{directives:[{name:"show",rawName:"v-show",value:"sendrecv"===e.video||"recvonly"===e.video,expression:"video === 'sendrecv' || video === 'recvonly'"}],staticClass:"float-left md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100"},[a("fullscreen",{ref:"fullscreen",staticClass:"center",attrs:{fullscreen:e.fullscreen},on:{"update:fullscreen":function(t){e.fullscreen=t},change:e.fullscreenChange}},[a("video",{attrs:{id:"remote",autoplay:"",poster:"/assets/stream.png"},on:{click:e.togglefullscreen}})])],1)],1),a("md-card-header",[a("md-field",{directives:[{name:"show",rawName:"v-show",value:"sendrecv"===e.video||"sendonly"===e.video||"sendrecv"===e.audio||"sendonly"===e.audio,expression:"video === 'sendrecv' || video === 'sendonly' || audio === 'sendrecv' || audio  === 'sendonly'"}],staticClass:"md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100"},[a("md-input",{attrs:{id:"username",readonly:"readonly",placeholder:"ID (auto generated)"}})],1),a("md-field",{directives:[{name:"show",rawName:"v-show",value:"sendrecv"===e.video||"recvonly"===e.video||"sendrecv"===e.audio||"recvonly"===e.audio,expression:"video === 'sendrecv' || video === 'recvonly' || audio === 'sendrecv' || audio === 'recvonly'"}],staticClass:"md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100"},[a("md-input",{attrs:{id:"username-to-call",placeholder:"ID to call"}})],1)],1),a("md-card-content",[a("md-field",{directives:[{name:"show",rawName:"v-show",value:"sendrecv"===e.video||"sendonly"===e.video,expression:"video === 'sendrecv' || video === 'sendonly'"}],staticClass:"md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100"},[a("md-select",{attrs:{id:"videoinput",placeholder:"Video input"},model:{value:e.videoSelected,callback:function(t){e.videoSelected=t},expression:"videoSelected"}},e._l(e.optionsVideo,(function(t){return a("md-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])})),1)],1),a("md-field",{directives:[{name:"show",rawName:"v-show",value:"sendrecv"===e.audio||"sendonly"===e.audio,expression:"audio === 'sendrecv' || audio === 'sendonly'"}],staticClass:"md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100"},[a("md-select",{attrs:{id:"audioinput",placeholder:"Audio input"},model:{value:e.audioSelected,callback:function(t){e.audioSelected=t},expression:"audioSelected"}},e._l(e.optionsAudio,(function(t){return a("md-option",{key:t.value,attrs:{value:t.value,selected:!0}},[e._v(e._s(t.text))])})),1)],1),a("md-field",{directives:[{name:"show",rawName:"v-show",value:1,expression:"1"}],staticClass:"md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100"},[a("md-input",{attrs:{id:"state",readonly:"readonly",placeholder:"Connection status"}})],1)],1),a("div",{staticStyle:{clear:"both"}}),a("md-card-actions",[a("div",{staticStyle:{clear:"both"}}),a("md-button",{staticClass:"md-layout-item md-xlarge-size-20",attrs:{id:"login"}},[e._v("Reister")]),a("md-button",{directives:[{name:"show",rawName:"v-show",value:"sendrecv"===e.video||"recvonly"===e.video||"sendrecv"===e.audio||"recvonly"===e.audio,expression:"video === 'sendrecv' || video === 'recvonly' || audio === 'sendrecv' || audio === 'recvonly'"}],staticClass:"md-layout-item md-xlarge-size-20",attrs:{id:"call-make"}},[e._v("Dial")])],1)],1)],1)},i=[],o=(a("caad"),a("d81d"),a("96cf"),a("1da1")),r={methods:{togglefullscreen:function(){this.$refs["fullscreen"].toggle()},fullscreenChange:function(e){this.fullscreen=e}},props:["audio","video"],data:function(){return{fullscreen:!1,audioSelected:"",optionsAudio:[],videoSelected:"",optionsVideo:[]}},mounted:function(){var e=this,t=function(){var t=null,a=null,n=document.querySelector("video#local"),i=document.querySelector("video#remote"),r=document.querySelector("#username-to-call"),s=document.querySelector("#state"),c=document.querySelector("button#login"),d=document.querySelector("button#call-make"),l=window.location.hash.substr(1),u=new WebSocket("wss://seqr.link:3001/socket"),m=function(e){return e.connectionState||e.iceConnectionState},v=function(e){return["new","connecting","failed","disconnected"].includes(m(e))},f=function(e){C(e)},p=function(e){t.setLocalDescription(e),y({type:"answer",answer:e})},b=function(e){y({type:"offer",offer:e}),t.setLocalDescription(e)},h=function(){a=r.value,t.createOffer(b,f)},y=function(e){e.otherUsername=a,u.send(JSON.stringify(e))},_=function(){y({type:"login",uuid:l})},g=function(){},w=function(e){v(t)&&t.setRemoteDescription(new RTCSessionDescription(e.answer))},S=function(e){v(t)&&t.addIceCandidate(new RTCIceCandidate(e.candidate))},x=function(e){v(t)&&(a=e.username),t.setRemoteDescription(new RTCSessionDescription(e.offer)),t.createAnswer(p,f)},C=function(e){console.log(e)},z=function(e){n.volume=0,n.style.visibility="visible",document.querySelector("#username").value=e.success,k()},k=function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(){var o,r,c,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=new RTCPeerConnection({iceServers:[{urls:["stun:seqr.link:3478"]}]}),o="none"!==e.audioSelected&&{deviceId:{exact:e.audioSelected}},r="none"!==e.videoSelected&&{deviceId:{exact:e.videoSelected}},c=o||r,!c){a.next=10;break}return a.next=7,navigator.mediaDevices.getUserMedia({video:r,audio:o});case 7:d=a.sent,n.srcObject=d,t.addStream(d);case 10:t.addTransceiver("video",{currentDirection:e.video}),t.addTransceiver("audio",{currentDirection:e.audio}),t.ontrack=function(e){i.srcObject=e.stream},t.onaddstream=t.ontrack,t.onicecandidate=function(e){e.candidate&&y({type:"candidate",candidate:e.candidate})},t.onconnectionstatechange=function(){s.value=m(t)},t.oniceconnectionstatechange=t.onconnectionstatechange,s.value=m(t);case 18:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),O={_login:z,_offer:x,_answer:w,_candidate:S,_close:g};u.onopen=function(){C("Connected to the signaling server")},u.onmessage=function(e){var t=JSON.parse(e.data);O[t.type](t)},u.onerror=f,c.addEventListener("click",_),d.addEventListener("click",h);var j={text:"No video selected",value:"none"},R={text:"No audio selected",value:"none"};e.optionsVideo.push(j),e.optionsAudio.push(R),navigator.mediaDevices.enumerateDevices().then((function(t){t.map((function(t){"videoinput"===t.kind&&e.optionsVideo.push({text:t.label,value:t.deviceId}),"audioinput"===t.kind&&e.optionsAudio.push({text:t.label,value:t.deviceId})})),e.videoSelected=j.value,e.audioSelected=R.value,["sendrcv","sendonly"].includes(e.video)&&(e.videoSelected=e.optionsVideo[1].value),["sendrcv","sendonly"].includes(e.audio)&&(e.audioSelected=e.optionsAudio[1].value)}))};t()}},s=r,c=(a("4a96"),a("2877")),d=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=d.exports},ddd3:function(e,t,a){},ee5d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md-layout-item md-large-size-20 md-big-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100",staticStyle:{border:"1px solid white"}},[a("img",{attrs:{src:"/assets/404.png",alt:"Not Found"}}),a("br"),e._v(" I wish i could see this, every time i look for plastic in the ocean."),a("br")])}],o={components:{}},r=o,s=a("2877"),c=Object(s["a"])(r,n,i,!1,null,null,null);t["a"]=c.exports},f25e:function(e,t,a){},fca2:function(e,t,a){}});
//# sourceMappingURL=app.c1c4462b.js.map