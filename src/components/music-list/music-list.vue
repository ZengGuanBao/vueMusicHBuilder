<template>
  <div class="music-list animated bounceInUp" ref="musicListDiv">
    <img class="topinfo-img" v-bind:src="topinfo.pic_v12" alt="">
    <div class="bankOff">
    	<div class="back" @click="backHide()">
    		<i class="fa fa-chevron-left fa-2x"></i>
    	</div>
    	<h1 class="title">{{topinfo.ListName}}</h1>
    </div>
    <!--<h3  class="topinfo-title"></h3>-->
    <touchScroll :on-refresh="onRefresh" :on-infinite="onInfinite">
      <ul class="musicList">
        <li class="music" v-for="(song,index) in musicList"  @click="addPlayList({song})">
          <span>{{index + 1}}</span>
          <span>{{song.data.songname}}-{{song.data.singer[0].name}}--{{song.data.albumname}}</span>
        </li>
      </ul>
    </touchScroll>
  </div>
</template>

<script>
import {getMusicList} from '../../api/rank'
import touchScroll from '../../baseComponents/touchScroll'
import { mapActions } from "Vuex"; 
export default {
  name: 'music-list',
  data () {
    return {
      topinfo: {},
      musicList: [],
      topid: this.$route.query.id
    }
  },
  components: {
    touchScroll
  },
  mounted: function () {
    this.$nextTick(function () {
      var _this = this
      getMusicList(this.topid).then((res) => {
      	console.log(res.songlist)
        _this.topinfo = res.topinfo
        _this.musicList = res.songlist
      })
    })
  },
  methods: {
    ...mapActions({  
      addPlayList: 'addPlayList'  
    }),
    onRefresh: function(done) {
      done()
    },
    onInfinite: function(done) {
      done()
    },
  	backHide: function () {
      this.$refs.musicListDiv.classList.remove('bounceInUp')
      this.$router.back()
  	}
  }
}
</script>

<style>
.music-list{
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow-y: scroll;
}
.topinfo-img{
  position: fixed;
  top: -50px;
  left: 0;
  width: 100%;
  z-index: -1;
}
.topinfo-title{
  margin-top: 290px;
  height: 40px;
  line-height: 40px;
  background-color: #3E3E3E;
  color: #E9E9E9;
}
.musicList{
  background-color: #3E3E3E;
}
.music{
    height: 32px;
    line-height: 32px;
    padding: 0 15px;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    overflow: hidden;
    color: #E9E9E9
}
.back i{
  margin-top: 12px;
}
</style>
