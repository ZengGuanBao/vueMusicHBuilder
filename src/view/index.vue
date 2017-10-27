<template>
  <div class="index">
    <div id="news">
      <slider v-bind:optionsInit="optionsInit" v-bind:datas="datas"></slider>
    </div>
  	<a @click="playSongs()">播放歌曲</a>
  	<router-link to="/mvList">mv列表</router-link>
  </div>
</template>

<script>
import slider from "../components/silder/slider.vue"
export default {
  name: 'index',
  data() {
    return {
      optionsInit: {
        index: 2,
        isAuto: true
      },
      datas: [
        {
          href: '',
          title: '111',
          img: 'http://www.heibaipig.com/demo/images/test/1.jpg'
        },
        {
          href: '',
          title: '222',
          img: 'http://0.thumb.pc6.com/up/2016-5/20165199297.jpg'
        },
        {
          href: '',
          title: '3333',
          img: 'http://0.thumb.pc6.com/up/2016-4/201642814841.jpg'
        },
        {
          href: '',
          title: '4444',
          img: 'http://m.pc6.com/public/img/20151202.jpg'
        }
      ]

    }
  },
  components: {
    slider
  },
  mounted: function () {
    this.$nextTick(function () {
      $('.index').css('height', $(window).height()-84)
      $(window).resize(function () {  
				$('.index').css('height', $(window).height()-84)
		  });
    })
  },
  methods: {
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