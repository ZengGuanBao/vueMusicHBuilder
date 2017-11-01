<template>
  <div class="index">
    <div id="news">
      <slider v-bind:optionsInit="optionsInit" v-bind:datas="datas"></slider>
    </div>
  	<a @click="playSongs()">播放歌曲</a>
  	<router-link to="/mvList">mv列表</router-link>
    <bottom></bottom>
  </div>
</template>

<script>
import slider from "../components/silder/slider.vue"
import bottom from '@/components/footer/bottom'
export default {
  name: 'index',
  data() {
    return {
      optionsInit: {
        index: 2,
        isAuto: true
      },
      datas: []
    }
  },
  components: {
    slider,
    bottom
  },
  mounted: function () {
    this.$nextTick(function () {
      // this.sliderData()
      $('.index').css('height', $(window).height()-84)
      $(window).resize(function () {  
				$('.index').css('height', $(window).height()-84)
		  });
    })
  },
  methods: {
    sliderData: function() {
			var _this = this;
			$.ajax({
				type: "get",
				async: false,
				url: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1509329368913",
				dataType: "jsonp",
				jsonp: "callback",
				jsonpCallback: "",
				scriptCharset: 'GBK', //设置编码，否则会乱码
				success: function(data) {
					console.log(data)
				},
				error: function() {
					alert('fail');
				}
			});
		},
  	playSongs: function () {
  		document.getElementById("audioPlay").style.display = 'block'
  		document.getElementById("playAudio").play()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>