webpackJsonp([1],{"+7Hx":function(t,i,n){"use strict";(function(t){n("9cIF");i.a={name:"search",mounted:function(){this.$nextTick(function(){t(".index").css("height",t(window).height()-84),t(window).resize(function(){t(".index").css("height",t(window).height()-84)})})}}}).call(i,n("tra3"))},"0Vab":function(t,i,n){"use strict";i.a={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1}},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1}},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var i=t.targetTouches[0].pageY-this.startY-this.startScroll;i>0&&t.preventDefault(),this.top=Math.pow(i,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)}},refresh:function(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},infinite:function(){this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var i=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-i-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},"0q52":function(t,i,n){"use strict";(function(t){i.a={name:"index",mounted:function(){this.$nextTick(function(){t(".index").css("height",t(window).height()-84),t(window).resize(function(){t(".index").css("height",t(window).height()-84)})})},methods:{playSongs:function(){document.getElementById("audioPlay").style.display="block",document.getElementById("playAudio").play()}}}}).call(i,n("tra3"))},"4paG":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{ref:"audioPlay",staticClass:"audioPlay",staticStyle:{display:"none"},attrs:{id:"audioPlay"}},[n("div",{class:{"skPlayer-list-on":t.isList},attrs:{id:"skPlayer"}},[n("div",{staticClass:"skPlayer-picture"},[n("img",{ref:"skPlayerCover",staticClass:"skPlayer-cover",attrs:{src:t.playList[t.isIndex].albumId,alt:""}}),t._v(" "),n("a",{staticClass:"skPlayer-play-btn",class:{"skPlayer-pause":t.isActive},attrs:{href:"javascript:;"},on:{click:function(i){t.toggle()}}},[n("span",{staticClass:"skPlayer-left"}),t._v(" "),n("span",{staticClass:"skPlayer-right"})])]),t._v(" "),n("div",{staticClass:"skPlayer-control",on:{click:function(i){t.upShow()}}},[n("p",{staticClass:"skPlayer-name"},[t._v(t._s(t.playList[t.isIndex].songName))]),t._v(" "),n("p",{staticClass:"skPlayer-author"},[t._v(t._s(t.playList[t.isIndex].singerName))]),t._v(" "),n("div",{ref:"timePercent",staticClass:"skPlayer-percent",on:{click:function(i){t.timeClickPercent()}}},[n("div",{ref:"skPlayerLineLoading",staticClass:"skPlayer-line-loading"}),t._v(" "),n("div",{ref:"timeLine",staticClass:"skPlayer-line"})]),t._v(" "),n("div",[n("p",{staticClass:"skPlayer-time"},[n("span",{ref:"skPlayerCur",staticClass:"skPlayer-cur"},[t._v("00:00")]),t._v("/\n            "),n("span",{staticClass:"skPlayer-total",domProps:{innerHTML:t._s(t.timeTotal)}})]),t._v(" "),n("div",{staticClass:"skPlayer-volume"},[n("i",{ref:"skPlayerIcon",staticClass:"skPlayer-icon",class:{"skPlayer-quiet":t.isVoice},on:{click:function(i){t.clickVoice()}}}),t._v(" "),n("div",{ref:"volumePercent",staticClass:"skPlayer-percent",on:{click:function(i){t.volumeClickPercent()}}},[n("div",{ref:"volumeLine",staticClass:"skPlayer-line"})])])]),t._v(" "),n("div",{staticClass:"skPlayer-list-switch"},[n("i",{staticClass:"skPlayer-list-icon",on:{click:function(i){t.clickList()}}})]),t._v(" "),n("i",{staticClass:"skPlayer-mode",class:{"skPlayer-mode-loop":t.isLoop},on:{click:function(i){t.switchMode()}}})]),t._v(" "),n("div",{staticClass:"skPlayer-list-outDiv"},[t._m(0),t._v(" "),n("ul",{staticClass:"skPlayer-list"},t._l(t.playList,function(i,a){return n("li",{class:{"skPlayer-curMusic":t.isIndex===a},on:{click:function(i){t.clickPlayList(a)}}},[n("i",{staticClass:"skPlayer-list-sign"}),t._v(" "),n("span",{staticClass:"skPlayer-list-index"},[t._v(t._s(parseInt(a)+1))]),t._v(" "),n("span",{staticClass:"skPlayer-list-name",attrs:{title:"Dream"}},[t._v(t._s(i.songName))]),t._v(" "),n("span",{staticClass:"skPlayer-list-author",attrs:{title:"Rabpit"}},[t._v(t._s(i.singerName))])])}))]),t._v(" "),n("div",{ref:"normalPlayer",staticClass:"normalPlayer animated bounceInUp"},[n("div",{staticClass:"bankOff",on:{click:function(i){t.downHide()}}},[n("div",{staticClass:"back"},[n("i",{staticClass:"fa fa-chevron-down fa-2x",on:{click:function(i){t.downHide()}}})]),t._v(" "),n("h1",{staticClass:"title"},[t._v("成都")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("成都--赵雷")])]),t._v(" "),t._m(1)])]),t._v(" "),n("audio",{ref:"playAudio",staticClass:"playAudio",attrs:{id:"playAudio",src:"http://ws.stream.qqmusic.qq.com/108963136.m4a?fromtag=46",hidden:""}})])},s=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("p",[t._v("播放列表"),n("i",{staticClass:"skPlayer-list-sign"})])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"panel album"},[n("div",{staticClass:"album_art"},[n("img",{staticClass:"cover"})]),t._v(" "),n("div",{staticClass:"music_info"})])}],e={render:a,staticRenderFns:s};i.a=e},"55ta":function(t,i,n){"use strict";function a(t){n("BOVD")}var s=n("D5qK"),e=n("csCe"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},"5ZZo":function(t,i,n){"use strict";function a(t){n("sZRH")}var s=n("Z4bO"),e=n("hhmp"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},"8hol":function(t,i,n){"use strict";function a(t){n("QDME")}var s=n("DDQq"),e=n("RIKL"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,"data-v-3ec4da19",null);i.a=r.exports},"8y71":function(t,i){},"9cIF":function(t,i,n){"use strict";var a=n("rVsN"),s=(n.n(a),n("aA9S")),e=(n.n(s),n("T452"),n("BMa3"));n.n(e)},AU3q:function(t,i,n){"use strict";function a(t){n("YZ0k")}var s=n("H/64"),e=n("V2dP"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,"data-v-2e6f3e04",null);i.a=r.exports},BOVD:function(t,i){},BRgg:function(t,i,n){"use strict";function a(){var t=c()({},r.a,{uin:0,needNewCode:1,platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,r.b)}function s(t){var i=c()({},r.a,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",i,r.b)}i.b=a,i.a=s;var e=n("aA9S"),c=n.n(e),o=n("Gak4"),r=n("T452")},D5qK:function(t,i,n){"use strict";i.a={name:"top"}},DDQq:function(t,i,n){"use strict";i.a={name:"routernav"}},DICR:function(t,i,n){"use strict";var a=n("55ta"),s=n("8hol"),e=n("oL6d");i.a={name:"app",components:{top:a.a,routernav:s.a,audioPlayer:e.a}}},E8bT:function(t,i,n){"use strict";function a(t){n("n1w+")}var s=n("Gzqk"),e=n("M0ay"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},Eg7o:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"app"}},[n("top"),t._v(" "),n("routernav"),t._v(" "),n("router-view"),t._v(" "),n("audioPlayer")],1)},s=[],e={render:a,staticRenderFns:s};i.a=e},"FLy/":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"newRanking"},t._l(t.songlist,function(i,a){return n("p",{on:{click:function(n){t.playAudio(i)}}},[n("span",[t._v(t._s(a+1))]),t._v(" "),n("img",{attrs:{src:i.albumId,alt:""}}),t._v(" "),n("span",[t._v(t._s(i.songName))])])}))},s=[],e={render:a,staticRenderFns:s};i.a=e},GBx4:function(t,i,n){"use strict";function a(t){n("bHoI")}var s=n("wxgG"),e=n("zeQv"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},Gak4:function(t,i,n){"use strict";function a(t,i,n){return t+=(t.indexOf("?")<0?"?":"&")+s(i),new c.a(function(i,a){r()(t,n,function(t,n){t?a(t):i(n)})})}function s(t){var i="";for(var n in t){var a=void 0!==t[n]?t[n]:"";i+="&"+n+"="+encodeURIComponent(a)}return i?i.substring(1):""}i.a=a;var e=n("rVsN"),c=n.n(e),o=n("6yg2"),r=n.n(o)},Gzqk:function(t,i,n){"use strict";(function(t){i.a={name:"ranking",mounted:function(){this.$nextTick(function(){t(".ranking").css("height",t(window).height()-84),t(window).resize(function(){t(".ranking").css("height",t(window).height()-84)})})}}}).call(i,n("tra3"))},"H/64":function(t,i,n){"use strict";(function(t){var a=n("xMg0");i.a={name:"mvListView",data:function(){return{vid:"w00248krew5",videoSrc:"",mvList:[],tagArea:[],tagTag:[],tagYear:[],sortType:2,yearTit:0,areaTit:0,tagTit:0,pagenoTit:0,pagecountTit:20,taglistTit:1,switchShow:!1}},mounted:function(){this.$nextTick(function(){this.cartView(),this.mvPlay()})},components:{Scroll:a.a},methods:{cartView:function(i){var n=this;t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/v8/fcg-bin/getmv_by_tag?g_tk=5381&jsonpCallback=getMvlist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&utf8=1&type="+n.sortType+"&year="+n.yearTit+"&area="+n.areaTit+"&tag="+n.tagTit+"&pageno="+n.pagenoTit+"&pagecount="+n.pagecountTit+"&taglist="+n.taglistTit,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getMvlist",success:function(t){n.mvList=t.data.mvlist,void 0!=t.data.taglist&&(n.tagArea=t.data.taglist.area,n.tagTag=t.data.taglist.tag,n.tagYear=t.data.taglist.year),console.log(t),void 0!=i&&i()},error:function(){alert("fail")}})},tagSelect:function(t,i){switch(t){case 0:this.areaTit=i;break;case 1:this.tagTit=i;break;case 2:this.yearTit=i;break;case 3:this.sortType=i}this.taglistTit=0,this.cartView()},onRefresh:function(t){this.taglistTit=0,this.cartView(),t()},onInfinite:function(t){this.taglistTit=0,this.pagecountTit+=2,this.cartView(t)},mvPlay:function(){var i=this;t.ajax({type:"get",async:!1,url:"https://h5vv.video.qq.com/getinfo?callback=tvp_request_getinfo_callback_958739&platform=11001&charge=0&otype=json&ehost=https%3A%2F%2Fy.qq.com&sphls=0&sb=1&nocache=0&_rnd=1508231258&guid=caba3476fea723d4917764915c8c5950&appVer=V2.0Build9449&vids="+this.vid+"&defaultfmt=auto&&_qv_rmt=ZWly3as6A10215Uqd=&_qv_rmt2=gZ2qaP05158328nUg=&sdtfrom=v3010",dataType:"jsonp",jsonp:"callback",jsonpCallback:"tvp_request_getinfo_callback_958739",success:function(t){i.videoSrc="http://117.169.70.150/music.qqvideo.tc.qq.com/AcpQM5yib1MARJ5HCSr5FQAW7NygnyyFyGiujpLJxa5I/"+i.vid+".mp4?vkey="+t.vl.vi[0].fvkey+"&br=122&platform=2&fmt=auto&level=0&sdtfrom=v3010&guid=caba3476fea723d4917764915c8c5950",console.log(t),console.log(i.videoSrc)},error:function(){alert("fail")}})}}}}).call(i,n("tra3"))},I0y9:function(t,i,n){"use strict";function a(t){n("fKsH")}var s=n("P44Q"),e=n("zX/K"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},IcnI:function(t,i,n){"use strict";var a=n("MVSX"),s=n("aVGL");a.a.use(s.a),i.a=new s.a.Store({state:{show:!1}})},L8Y5:function(t,i,n){"use strict";function a(t){n("XokW")}var s=n("0q52"),e=n("Wqk/"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,"data-v-79029ddc",null);i.a=r.exports},M0ay:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"ranking"},[n("div",{},[n("router-link",{attrs:{to:"/ranking/newRanking"}},[t._v("新歌榜")]),t._v(" "),n("router-link",{attrs:{to:"/ranking/allRanking"}},[t._v("总榜")])],1),t._v(" "),n("router-view")],1)},s=[],e={render:a,staticRenderFns:s};i.a=e},M93x:function(t,i,n){"use strict";function a(t){n("q3Ng")}var s=n("DICR"),e=n("Eg7o"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},MSci:function(t,i,n){"use strict";function a(t){var i=parseInt(t/60),n=parseInt(t%60);return(i<10?"0"+i:i)+":"+(n<10?"0"+n:n)}var s={leftDistance:function(t){for(var i=t.offsetLeft,n=void 0;t.offsetParent;)t=t.offsetParent,i+=t.offsetLeft;return n=document.body.scrollLeft+document.documentElement.scrollLeft,i-n},percentFormat:function(t){return(100*t).toFixed(2)+"%"}},e=[];e=null===window.localStorage.getItem("playList")?[{albumId:"http://y.gtimg.cn/music/photo_new/T002R150x150M000000jE4g74VS43p.jpg?max_age=2592000",albumName:"身边的故事",id:"108963136",playtime:"328",singerId:"12770",singerName:"赵雷",songName:"成都",type:3}]:JSON.parse(window.localStorage.getItem("playList")),i.a={Util:s,timeFormat:a,playList:e}},NHnr:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=n("MVSX"),s=n("M93x"),e=n("YaEn"),c=n("IcnI"),o=n("tra3");n.n(o);a.a.config.productionTip=!1,new a.a({el:"#app",router:e.a,store:c.a,template:"<App/>",components:{App:s.a}})},P44Q:function(t,i,n){"use strict";(function(t){var a=n("Sgn/");i.a={name:"singer",data:function(){return{singers:[]}},mounted:function(){this.$nextTick(function(){t(".singer").css("height",t(window).height()-84),t(window).resize(function(){t(".singer").css("height",t(window).height()-84)});var i=this;Object(a.a)().then(function(t){i.singers=t.data.list})})}}}).call(i,n("tra3"))},QDME:function(t,i){},"R+RW":function(t,i,n){"use strict";(function(t){var a=n("BRgg");i.a={name:"recommend",data:function(){return{topList:[]}},mounted:function(){this.$nextTick(function(){t(".recommend").css("height",t(window).height()-84),t(window).resize(function(){t(".recommend").css("height",t(window).height()-84)});var i=this;Object(a.b)().then(function(t){i.topList=t.data.topList})})}}}).call(i,n("tra3"))},RIKL:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"routernav"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),n("router-link",{attrs:{to:"/recommend"}},[t._v("推荐")]),t._v(" "),n("router-link",{attrs:{to:"/ranking/newRanking"}},[t._v("排行榜")]),t._v(" "),n("router-link",{attrs:{to:"/singer"}},[t._v("歌手")]),t._v(" "),n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)},s=[],e={render:a,staticRenderFns:s};i.a=e},"Sgn/":function(t,i,n){"use strict";function a(){var t=e()({},o.a,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(c.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,o.b)}i.a=a;var s=n("aA9S"),e=n.n(s),c=n("Gak4"),o=n("T452")},Sukb:function(t,i){},T452:function(t,i,n){"use strict";n.d(i,"a",function(){return a}),n.d(i,"b",function(){return s});var a={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},s={param:"jsonpCallback",prefix:"jp"}},UtJl:function(t,i){},V2dP:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"mvListView"},[n("router-view"),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"mod_tag",attrs:{id:"mv_tags"}},[n("div",[n("h3",[t._v("地区")]),t._v(" "),t._l(t.tagArea,function(i){return n("a",{attrs:{"data-id":i.id},on:{click:function(n){t.tagSelect(0,i.id)}}},[t._v(t._s(i.title))])})],2),t._v(" "),n("div",[n("h3",[t._v("类型")]),t._v(" "),t._l(t.tagTag,function(i){return n("a",{attrs:{"data-id":i.id},on:{click:function(n){t.tagSelect(1,i.id)}}},[t._v(t._s(i.title))])})],2),t._v(" "),n("div",[n("h3",[t._v("年份")]),t._v(" "),t._l(t.tagYear,function(i){return n("a",{attrs:{"data-id":i.id},on:{click:function(n){t.tagSelect(2,i.id)}}},[t._v(t._s(i.title))])})],2)]),t._v(" "),n("div",{staticClass:"mod_part_detail"},[n("div",{staticClass:"part_detail__hd"},[n("h2",{},[t._v("全部MV")]),t._v(" "),n("div",{staticClass:"part_switch",attrs:{"aria-label":"排列方式"}},[n("a",{attrs:{href:"javascript:;","data-sort":"1"},on:{click:function(i){t.tagSelect(3,1)}}},[t._v("最新")]),t._v(" "),n("a",{attrs:{href:"javascript:;","data-sort":"2"},on:{click:function(i){t.tagSelect(3,2)}}},[t._v("最热")])])]),t._v(" "),n("div",{staticClass:"mod_mv"},[n("Scroll",{attrs:{"on-refresh":t.onRefresh,"on-infinite":t.onInfinite}},[n("ul",{staticClass:"mv_list__list",attrs:{id:"mv_list"}},t._l(t.mvList,function(i){return n("li",[n("router-link",{attrs:{to:{path:"/mvList/mvPlay",query:{id:i.vid}}}},[n("img",{attrs:{src:i.picurl}}),t._v(" "),n("p",[n("span",[t._v(t._s(i.mvtitle))])]),t._v(" "),n("p",t._l(i.singers,function(i){return n("span",[t._v(t._s(i.name)+"/")])})),t._v(" "),n("p",[n("span",[t._v(t._s((i.listennum/1e4).toFixed(2))+"万")]),n("span",[t._v(t._s(i.publictime))])])])],1)}))])],1)])])],1)},s=[],e={render:a,staticRenderFns:s};i.a=e},V4wx:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{ref:"recommend",staticClass:"recommend"},[n("ul",t._l(t.topList,function(i){return n("li",{staticClass:"item"},[n("router-link",{attrs:{to:{path:"/recommend/musicList",query:{id:i.id}}}},[n("div",{staticClass:"icon"},[n("img",{attrs:{width:"100",height:"100",src:i.picUrl}})]),t._v(" "),n("ul",{staticClass:"songlist"},t._l(i.songList,function(i,a){return n("li",{staticClass:"song"},[n("span",[t._v(t._s(a+1))]),t._v(" "),n("span",[t._v(t._s(i.songname)+"-"+t._s(i.singername))])])}))])],1)})),t._v(" "),n("router-view")],1)},s=[],e={render:a,staticRenderFns:s};i.a=e},"Wqk/":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"index"},[n("a",{on:{click:function(i){t.playSongs()}}},[t._v("播放歌曲")]),t._v(" "),n("router-link",{attrs:{to:"/mvList"}},[t._v("mv列表")])],1)},s=[],e={render:a,staticRenderFns:s};i.a=e},Xi6v:function(t,i){},XokW:function(t,i){},YZ0k:function(t,i){},YaEn:function(t,i,n){"use strict";var a=n("MVSX"),s=n("cigS"),e=n("L8Y5"),c=n("ZMV1"),o=n("E8bT"),r=n("I0y9"),l=n("jm6G"),u=n("tiq6"),f=n("5ZZo"),d=n("kvay"),v=n("AU3q"),p=n("GBx4");a.a.use(s.a),i.a=new s.a({routes:[{path:"/",name:"index",component:e.a},{path:"/mvList",name:"mvList",component:v.a,children:[{path:"/mvList/mvPlay",name:"mvPlay",component:p.a}]},{path:"/recommend",name:"recommend",component:c.a,children:[{path:"/recommend/musicList",name:"musicList",component:d.a}]},{path:"/ranking",name:"ranking",component:o.a,children:[{path:"/ranking/newRanking",name:"newRanking",component:u.a},{path:"/ranking/allRanking",name:"allRanking",component:f.a}]},{path:"/singer",name:"singer",component:r.a},{path:"/search",name:"search",component:l.a}]})},Z4bO:function(t,i,n){"use strict";var a=n("3cXf"),s=n.n(a),e=n("tra3"),c=n.n(e),o=n("MSci");i.a={name:"allRanking",data:function(){return{songlist:[]}},mounted:function(){this.$nextTick(function(){this.cartView()})},methods:{cartView:function(){var t=this;c.a.ajax({type:"get",async:!1,url:"http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js",dataType:"jsonp",jsonp:"callback",jsonpCallback:"JsonCallback",scriptCharset:"GBK",success:function(i){t.songlist=i.songlist;for(var n=0;n<t.songlist.length;n++)t.songlist[n].albumId="http://imgcache.qq.com/music/photo/album_300/"+t.songlist[n].albumId%100+"/300_albumpic_"+t.songlist[n].albumId+"_0.jpg"},error:function(){alert("fail")}})},playAudio:function(t){o.a.playList.push(t),window.localStorage.setItem("playList",s()(o.a.playList))}}}},ZMV1:function(t,i,n){"use strict";function a(t){n("rPGD")}var s=n("R+RW"),e=n("V4wx"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},adgp:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},on:{touchstart:function(i){t.touchStart(i)},touchmove:function(i){t.touchMove(i)},touchend:function(i){t.touchEnd(i)},scroll:function(i){(t.onInfinite||t.infiniteLoading)&&t.onScroll(i)}}},[n("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[n("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[n("span",{staticClass:"down-tip"},[t._v("下拉更新")]),t._v(" "),n("span",{staticClass:"up-tip"},[t._v("松开更新")]),t._v(" "),n("span",{staticClass:"refresh-tip"},[t._v("更新中")])])],2),t._v(" "),t._t("default"),t._v(" "),n("footer",{staticClass:"load-more"},[t._t("load-more",[n("span",[t._v("加载中……")])])],2)],2)])},s=[],e={render:a,staticRenderFns:s};i.a=e},bHoI:function(t,i){},csCe:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"top"},[n("i",{staticClass:"fa fa-camera-retro fa-lg"})])}],e={render:a,staticRenderFns:s};i.a=e},dewL:function(t,i,n){"use strict";(function(t){var a=n("MSci");i.a={name:"audioPlay",data:function(){return{isActive:!1,isVoice:!1,isLoop:!1,isList:!1,timeTotal:"05:28",isIndex:0,playList:a.a.playList,volumeKeep:0,search:"",songLyric:{}}},mounted:function(){this.$nextTick(function(){var t=this,i=this.$refs.playAudio,n=this.$refs.timeLine,s=this.$refs.skPlayerLineLoading,e=this.$refs.skPlayerCur,c=function(){var t=i.buffered.length?i.buffered.end(i.buffered.length-1)/i.duration:0;s.style.width=(100*t).toFixed(2)+"%"};this.$refs.playAudio.addEventListener("timeupdate",function(){var t=i.currentTime/i.duration;e.textContent=a.a.timeFormat(i.currentTime),n.style.width=(100*t).toFixed(2)+"%"}),this.$refs.playAudio.addEventListener("durationchange",function(t){c()}),this.$refs.playAudio.addEventListener("ended",function(i){t.isIndex===t.playList.length-1?t.isIndex=0:t.isIndex+=1,t.$refs.playAudio.src="http://ws.stream.qqmusic.qq.com/"+a.a.playList[t.isIndex].id+".m4a?fromtag=46",t.timeTotal=a.a.timeFormat(a.a.playList[t.isIndex].playtime),t.creatLyric(a.a.playList[t.isIndex].id),t.$refs.playAudio.play()})})},methods:{creatLyric:function(i){var n=this;t.ajax({type:"get",async:!1,url:"http://music.qq.com/miniportal/static/lyric/"+i%100+"/"+i+".xml",dataType:"jsonp",jsonp:"callback",jsonpCallback:"JsonCallback",scriptCharset:"GB2312",success:function(t){n.songLyric=t},error:function(){alert("fail")}})},upShow:function(){this.$refs.normalPlayer.classList.remove("bounceOutDown"),this.$refs.normalPlayer.classList.add("bounceInUp")},downHide:function(){this.$refs.normalPlayer.classList.remove("bounceInUp"),this.$refs.normalPlayer.classList.add("bounceOutDown")},playAudioPlay:function(){this.isActive=!0,this.creatLyric(a.a.playList[this.isIndex].id),this.$refs.playAudio.src="http://ws.stream.qqmusic.qq.com/"+a.a.playList[this.isIndex].id+".m4a?fromtag=46",this.$refs.playAudio.play();var t=this.$refs.skPlayerLineLoading;this.$refs.skPlayerCover.src=a.a.playList[this.isIndex].albumId,this.timeTotal=a.a.timeFormat(a.a.playList[this.isIndex].playtime),t.style.width="100%"},playAudioPause:function(){this.isActive=!1,this.$refs.playAudio.pause()},toggle:function(){this.isActive=!this.isActive,this.$refs.playAudio.paused?this.$refs.playAudio.play():this.playAudioPause()},clickVoice:function(){this.isVoice=!this.isVoice;var t=event||window.event;0===this.$refs.playAudio.volume?(this.$refs.volumeLine.style.width="100%",this.$refs.playAudio.volume=1,t.cancelBubble=!0):(this.$refs.volumeLine.style.width=0,this.$refs.playAudio.volume=0,t.cancelBubble=!0)},switchMode:function(){this.isLoop=!this.isLoop;var t=event||window.event;this.$refs.playAudio.loop?(this.$refs.playAudio.loop=!1,t.cancelBubble=!0):(this.$refs.playAudio.loop=!0,t.cancelBubble=!0)},clickList:function(t){var i=t||window.event;this.isList=!this.isList,i.cancelBubble=!0},clickPlayList:function(t){this.isIndex=t,this.playAudioPlay(),(event||window.event).cancelBubble=!0},timeClickPercent:function(t){var i=t||window.event,n=(i.clientX-a.a.Util.leftDistance(this.$refs.timePercent))/this.$refs.timePercent.clientWidth;this.$refs.timeLine.style.width=a.a.Util.percentFormat(n),this.$refs.playAudio.currentTime=n*this.$refs.playAudio.duration,i.cancelBubble=!0},volumeClickPercent:function(t){var i=t||window.event,n=(i.clientX-a.a.Util.leftDistance(this.$refs.volumePercent))/this.$refs.volumePercent.clientWidth;this.$refs.volumeLine.style.width=a.a.Util.percentFormat(n),this.$refs.playAudio.volume=n,i.cancelBubble=!0}}}}).call(i,n("tra3"))},fKsH:function(t,i){},fPPB:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"search"},[t._v("\n\tsearch\n  ")])},s=[],e={render:a,staticRenderFns:s};i.a=e},hhmp:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"allRanking"},t._l(t.songlist,function(i,a){return n("p",{on:{click:function(n){t.playAudio(i)}}},[n("span",[t._v(t._s(a+1))]),t._v(" "),n("img",{attrs:{src:i.albumId,alt:""}}),t._v(" "),n("span",[t._v(t._s(i.songName))])])}))},s=[],e={render:a,staticRenderFns:s};i.a=e},j6la:function(t,i,n){"use strict";var a=n("3cXf"),s=n.n(a),e=n("MSci"),c=n("BRgg");i.a={name:"music-list",data:function(){return{topinfo:{},musicList:[],topid:this.$route.query.id}},mounted:function(){this.$nextTick(function(){var t=this;Object(c.a)(this.topid).then(function(i){console.log(i.songlist),t.topinfo=i.topinfo,t.musicList=i.songlist})})},methods:{backHide:function(){this.$refs.musicListDiv.classList.remove("bounceInUp"),window.history.go(-1)},playAudio:function(t){var i={albumId:"http://imgcache.qq.com/music/photo/album_300/"+parseInt(t.data.albumid)%100+"/300_albumpic_"+t.data.albumid+"_0.jpg",albumName:t.data.albumname,id:t.data.songid,playtime:t.data.interval,singerId:t.data.singer[0].id,singerName:t.data.singer[0].name,songName:t.data.songname,type:t.data.type};e.a.playList.push(i),window.localStorage.setItem("playList",s()(e.a.playList))}}}},jm6G:function(t,i,n){"use strict";function a(t){n("Sukb")}var s=n("+7Hx"),e=n("fPPB"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},kvay:function(t,i,n){"use strict";function a(t){n("Xi6v")}var s=n("j6la"),e=n("unwl"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},m0gW:function(t,i,n){"use strict";var a=n("3cXf"),s=n.n(a),e=n("tra3"),c=n.n(e),o=n("MSci");i.a={name:"newRanking",data:function(){return{songlist:[]}},mounted:function(){this.$nextTick(function(){this.cartView()})},methods:{cartView:function(){var t=this;c.a.ajax({type:"get",async:!1,url:"http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js",dataType:"jsonp",jsonp:"callback",jsonpCallback:"JsonCallback",scriptCharset:"GBK",success:function(i){t.songlist=i.songlist;for(var n=0;n<t.songlist.length;n++)t.songlist[n].albumId="http://imgcache.qq.com/music/photo/album_300/"+t.songlist[n].albumId%100+"/300_albumpic_"+t.songlist[n].albumId+"_0.jpg"},error:function(){alert("fail")}})},playAudio:function(t){o.a.playList.push(t),window.localStorage.setItem("playList",s()(o.a.playList))}}}},"n1w+":function(t,i){},nIMN:function(t,i){},oL6d:function(t,i,n){"use strict";function a(t){n("UtJl")}var s=n("dewL"),e=n("4paG"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},q3Ng:function(t,i){},rPGD:function(t,i){},sZRH:function(t,i){},tiq6:function(t,i,n){"use strict";function a(t){n("8y71")}var s=n("m0gW"),e=n("FLy/"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},unwl:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{ref:"musicListDiv",staticClass:"music-list animated bounceInUp"},[n("img",{staticClass:"topinfo-img",attrs:{src:t.topinfo.pic_v12,alt:""}}),t._v(" "),n("div",{staticClass:"bankOff"},[n("div",{staticClass:"back",on:{click:function(i){t.backHide()}}},[n("i",{staticClass:"fa fa-chevron-left fa-2x"})]),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(t.topinfo.ListName))])]),t._v(" "),n("ul",{staticClass:"musicList"},t._l(t.musicList,function(i,a){return n("li",{staticClass:"music",on:{click:function(n){t.playAudio(i)}}},[n("span",[t._v(t._s(a+1))]),t._v(" "),n("span",[t._v(t._s(i.data.songname)+"-"+t._s(i.data.singer[0].name)+"--"+t._s(i.data.albumname))])])}))])},s=[],e={render:a,staticRenderFns:s};i.a=e},wxgG:function(t,i,n){"use strict";(function(t){i.a={name:"mvPlay",data:function(){return{vid:this.$route.query.id,videoSrc:"",mvname:"",desc:"",pubdate:"",listennum:0}},mounted:function(){this.$nextTick(function(){this.mvPlay(),this.mvInfo()})},methods:{mvPlay:function(){var i=this;t.ajax({type:"get",async:!1,url:"https://h5vv.video.qq.com/getinfo?callback=tvp_request_getinfo_callback_958739&platform=11001&charge=0&otype=json&ehost=https%3A%2F%2Fy.qq.com&sphls=0&sb=1&nocache=0&_rnd=1508231258&guid=caba3476fea723d4917764915c8c5950&appVer=V2.0Build9449&vids="+i.vid+"&defaultfmt=auto&&_qv_rmt=ZWly3as6A10215Uqd=&_qv_rmt2=gZ2qaP05158328nUg=&sdtfrom=v3010",dataType:"jsonp",jsonp:"callback",jsonpCallback:"tvp_request_getinfo_callback_958739",success:function(t){i.videoSrc="http://117.169.70.150/music.qqvideo.tc.qq.com/AcpQM5yib1MARJ5HCSr5FQAW7NygnyyFyGiujpLJxa5I/"+i.vid+".mp4?vkey="+t.vl.vi[0].fvkey+"&br=122&platform=2&fmt=auto&level=0&sdtfrom=v3010&guid=caba3476fea723d4917764915c8c5950",console.log(t),console.log(i.videoSrc)},error:function(){alert("fail")}})},mvInfo:function(){var i=this;t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/mv/fcgi-bin/fcg_getmvinfo.fcg?g_tk=1398307384&jsonpCallback=MusicJsonCallback14644278701460167&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq&needNewCode=0&vid="+i.vid,dataType:"jsonp",jsonp:"callback",jsonpCallback:"MusicJsonCallback14644278701460167",success:function(t){i.mvname=t.data.mvname,i.desc=t.data.desc,i.pubdate=t.data.pubdate,i.listennum=t.data.listennum,console.log(t),console.log(i.videoSrc)},error:function(){alert("fail")}})}}}}).call(i,n("tra3"))},xMg0:function(t,i,n){"use strict";function a(t){n("nIMN")}var s=n("0Vab"),e=n("adgp"),c=n("46Yf"),o=a,r=c(s.a,e.a,!1,o,null,null);i.a=r.exports},"zX/K":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"singer"},t._l(t.singers,function(i,a){return n("ul",[n("li",[n("img",{staticClass:"singer_list__pic",attrs:{src:"https://y.gtimg.cn/music/photo_new/T001R150x150M000"+i.Fsinger_mid+".jpg?max_age=2592000",alt:"Fsinger_name"}}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(i.Fsinger_name))])])])}))},s=[],e={render:a,staticRenderFns:s};i.a=e},zeQv:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"mvPlay"},[n("video",{attrs:{src:t.videoSrc,controls:"controls"}},[t._v("\n\t\t您的浏览器不支持 video 标签。\n\t")]),t._v(" "),n("h3",[t._v(t._s(t.mvname))]),t._v(" "),n("span",[t._v(t._s(t.desc))]),t._v(" "),n("span",[t._v(t._s(t.pubdate))]),t._v(" "),n("span",[t._v(t._s((t.listennum/1e4).toFixed(2)))])])},s=[],e={render:a,staticRenderFns:s};i.a=e}},["NHnr"]);
//# sourceMappingURL=app.41b6d13b691b566d3f43.js.map