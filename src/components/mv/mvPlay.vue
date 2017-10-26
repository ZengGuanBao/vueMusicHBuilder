<template>
	<div class="mvPlay">
		
		<video :src="videoSrc" controls="controls">
			您的浏览器不支持 video 标签。
		</video>
		<h3>{{mvname}}</h3>
		<span>{{desc}}</span>
		<span>{{pubdate}}</span>
		<span>{{(listennum/10000).toFixed(2)}}</span>
	</div>
</template>

<script>
export default {
	name: 'mvPlay',
	data() {
		return {
			vid: this.$route.query.id,
			videoSrc: '',
			mvname: '',
			desc: '',
			pubdate: '',
			listennum: 0
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			this.mvPlay()
			this.mvInfo()
		})
	},
	methods: {
		mvPlay: function() {
			var _this = this;
			$.ajax({
				type: "get",
				async: false,
				url: "https://h5vv.video.qq.com/getinfo?callback=tvp_request_getinfo_callback_958739&platform=11001&charge=0&otype=json&ehost=https%3A%2F%2Fy.qq.com&sphls=0&sb=1&nocache=0&_rnd=1508231258&guid=caba3476fea723d4917764915c8c5950&appVer=V2.0Build9449&vids=" + _this.vid + "&defaultfmt=auto&&_qv_rmt=ZWly3as6A10215Uqd=&_qv_rmt2=gZ2qaP05158328nUg=&sdtfrom=v3010",
				dataType: "jsonp",
				jsonp: "callback",
				jsonpCallback: "tvp_request_getinfo_callback_958739",
				//scriptCharset: 'GBK', //设置编码，否则会乱码
				success: function(data) {
					_this.videoSrc = 'http://117.169.70.150/music.qqvideo.tc.qq.com/AcpQM5yib1MARJ5HCSr5FQAW7NygnyyFyGiujpLJxa5I/' + _this.vid + '.mp4?vkey=' + data.vl.vi[0].fvkey + '&br=122&platform=2&fmt=auto&level=0&sdtfrom=v3010&guid=caba3476fea723d4917764915c8c5950'
					console.log(data)
					console.log(_this.videoSrc)
				},
				error: function() {
					alert('fail');
				}
			});
		},
		mvInfo: function () {
			var _this = this;
			$.ajax({
				type: "get",
				async: false,
				url: "https://c.y.qq.com/mv/fcgi-bin/fcg_getmvinfo.fcg?g_tk=1398307384&jsonpCallback=MusicJsonCallback14644278701460167&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq&needNewCode=0&vid=" + _this.vid,
				dataType: "jsonp",
				jsonp: "callback",
				jsonpCallback: "MusicJsonCallback14644278701460167",
				//scriptCharset: 'GBK', //设置编码，否则会乱码
				success: function(data) {
					_this.mvname = data.data.mvname
					_this.desc = data.data.desc
					_this.pubdate = data.data.pubdate
					_this.listennum = data.data.listennum
					console.log(data)
					console.log(_this.videoSrc)
				},
				error: function() {
					alert('fail');
				}
			});
		}
	}
}
</script>

<style>
.mvPlay{
	position: fixed;
	height: auto;
	top: 0;
	left: 0;
	z-index: 10;
	overflow-y: scroll;
	background-color: #fff;
}
video{
	width: 100%;
}
</style>