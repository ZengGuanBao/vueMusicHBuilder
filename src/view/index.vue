<template>
  <div class="index">
    <div id="news">
      <slider v-bind:optionsInit="optionsInit" v-bind:datas="datas"></slider>
    </div>
    <h3>电台</h3>
    <div class="radioList">
      <ul>
        <li v-for="radio in radioList">
          <img :src="radio.picUrl">
          <span>{{radio.Ftitle}}</span>
        </li>
      </ul>
    </div>
    <h3>mv列表</h3>
    <div class="mvList">
      <ul>
        <!-- <li v-for="mv in mvList">
          <img :src="mv.picUrl">
          <span>{{mv.Ftitle}}</span>
        </li> -->
      </ul>
    </div>
    <div>
      <router-link to="/mvList">more</router-link>
    </div>
    <div>
      <a @click="playSongs()">播放歌曲</a>
    </div>
  	
    <bottom></bottom>
  </div>
</template>

<script>
import slider from "../components/silder/slider.vue";
import bottom from "@/components/footer/bottom";
import { getRecommend } from "../api/recommend";
export default {
  name: "index",
  data() {
    return {
      optionsInit: {
        index: 2,
        isAuto: true
      },
      datas: [],
      radioList: []
    };
  },
  components: {
    slider,
    bottom
  },
  mounted: function() {
    this.$nextTick(function() {
      getRecommend().then(res => {
        console.log(res.data);
        this.datas = res.data.slider;
        this.radioList = res.data.radioList;
      });
      $(".index").css("height", $(window).height() - 84);
      $(window).resize(function() {
        $(".index").css("height", $(window).height() - 84);
      });
    });
  },
  methods: {
    playSongs: function() {
      document.getElementById("audioPlay").style.display = "block";
      document.getElementById("playAudio").play();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.index{
  overflow-y: scroll
}
.radioList ul {
  overflow: hidden;
}
.radioList li {
  float: left;
  width: 50%;
  -webkit-box-sizing: border-box;
  padding-right: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  margin: 0;
}
.radioList li img {
  width: 146px;
}
</style>