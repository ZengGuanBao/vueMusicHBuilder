<template>
  <div class="music-list animated bounceInUp" ref="musicListDiv">
    <img class="topinfo-img" v-bind:src="albumlist.pic" alt="">
    <div class="bankOff">
    	<div class="back" @click="backHide()">
    		<i class="fa fa-chevron-left fa-2x"></i>
    	</div>
    	<h1 class="title">{{albumlist.name}}</h1>
    </div>
    <!--<h3  class="topinfo-title"></h3>-->
    <ul class="musicList">
      <li class="music" v-for="(song,index) in musicList"  @click="addPlayList(song)">
        <span>{{index + 1}}</span>
        <span>{{song.musicData.songname}}-{{song.musicData.singer[0].name}}--{{song.musicData.albumname}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {getSingerDetail} from '../../api/singer'
import { mapActions } from "Vuex"; 
export default {
  data() {
    return {
      albumlist: [],
      musicList: [],
      topid: this.$route.query.id
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      var _this = this
      getSingerDetail(this.topid).then((res) => {
        console.log(res)
        _this.albumlist = res.data.albumlist[0]
        _this.musicList = res.data.list
      })
    })
  },
  methods: {
    ...mapActions({  
      addPlayList: 'addPlayList'  
    }),
  	backHide: function () {
  		this.$refs.musicListDiv.classList.remove('bounceInUp');
  		window.history.go(-1)
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
  top: 0px;
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
	margin-top: 290px;
  background-color: #3E3E3E;
  margin-bottom: 100px;
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
</style>