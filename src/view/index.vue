<template>
  <div class="index" ref="indexA">
    <div id="news">
      <slider v-bind:optionsInit="optionsInit" v-bind:datas="datas"></slider>
    </div>
    <h3 class="list_title">电台</h3>
    <div class="radioList">
      <ul>
        <li v-for="(radio,index) in radioList" :key="index">
          <img :style="widthImg" :src="radio.picUrl"> 
          <span>{{radio.Ftitle}}</span>
        </li>
      </ul>
    </div>
    <h3 class="list_title">热门歌单</h3>
    <div class="songList">
      <ul>
        <li v-for="(song,index) in songList" :key="index">
          <img :style="widthImg" :src="song.picUrl"> 
          <span>{{song.songListDesc}}</span>
          <span>{{song.songListAuthor}}</span>
        </li>
      </ul>
    </div>
    <h3 class="list_title">mv列表</h3>
    <div class="mvList">
      <ul>
        <li v-for="(mvVideo,index) in mvList" :key="index">
          <router-link :to="{path: '/mvList/mvPlay', query: {id: mvVideo.vid}}">
            <img :style="widthImg" :src="mvVideo.picurl" />
            <p><span>{{mvVideo.mvtitle}}</span></p>
            <p><span v-for="(singername,index) in mvVideo.singers" :key="index">{{singername.name}}/</span></p>
            <p><span>{{(mvVideo.listennum/10000).toFixed(2)}}万</span><span>{{mvVideo.publictime}}</span></p>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-link class="moreMv" to="/mvList">更多MV</router-link>
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
        isAuto: true,
        scale: 0.4
      },
      datas: [],
      radioList: [],
      songList: [],
      mvList: [],
      widthImg: {}
    }
  },
  components: {
    slider,
    bottom
  },
  mounted: function() {
    this.$nextTick(function() {
      const that = this
      getRecommend().then(res => {
        this.datas = res.data.slider;
        this.radioList = res.data.radioList;
        this.songList = res.data.songList
      });
      this.mvListData()
      $(".index").css("height", $(window).height() - 84);
      this.widthImg = {
        width: $(window).width()*0.48 + "px"
      }
      window.onresize = () => {
        return (() => {
          $(".index").css("height", $(window).height() - 84);
          that.widthImg = {
            width: $(window).width()*0.48 + "px"
          }
        })()
      }
    });
  },
  methods: {
    mvListData: function () {
      var _this = this;
      $.ajax({
        type: "get",
        async: false,
        url:"https://c.y.qq.com/v8/fcg-bin/getmv_by_tag?g_tk=5381&jsonpCallback=getMvlist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&utf8=1&type=2&year=0&area=0&tag=0&pageno=0&pagecount=2&taglist=1&callback=getMvlist&_=1509610621803",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "getMvlist",
        success: function(data) {
          _this.mvList = data.data.mvlist;
        },
        error: function() {
          alert("fail");
        }
      });
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
.list_title {
  font-size: 16px;
  color: #000;
  margin-bottom: 11px;
  font-weight: normal;
}
.index ul {
  overflow: hidden;
}
.index ul li {
  margin: 0;
  float: left;
  width: 48%;
  -webkit-box-sizing: border-box;
  margin-bottom: 10px;
  overflow: hidden;
}
.index ul li:nth-of-type(2n){
  float: right;
}
.index ul li span{
  display: inline-block;
  width: 100%;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.index li img {
  width: 146px;
}
.moreMv{
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: #42b983;
  text-align: center;
  border-radius: 5px;
}
</style>