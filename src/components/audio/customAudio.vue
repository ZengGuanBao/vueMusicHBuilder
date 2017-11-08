<template>
  <div class="playAudio">
    <!-- 全屏播放 -->
    <pages :title="title" :bgImg="bgImg" :isFade="isFade" :back="back">
      <div slot="content">
        <div>
          <div class="audioInfo">
            <div class="songImg">
              <img :src="audioImgSrc" alt="">
            </div>
            <div>歌曲名：<span>{{song.singerName}}</span></div>
            <div>歌手名：<span>{{song.songName}}</span></div>
          </div>
          <div class="audioLyric">
            歌词
          </div>
          <div class="audioControls">
            <div class="aButton aPlaypause_button" :class="{aPause: isPlay}" @click="playPauseClick()">
              <button type="button" title="播放/暂停">
                <span class="aBtn_value">播放</span>
              </button>
            </div>
            <div class="aBar" ref="aBar" @click="aBarClick()">
              <div class="aBarloading" style="width: 0;" ref="aBarloading"></div> 
              <div class="aBarline" style="width: 0;" ref="aBarline"></div>
            </div>
            <div class="aTime">
              <span class="aCurrentTime">{{timeCurr}}</span>/<span class="aDuration">{{timeDur}}</span>
            </div>
          </div>
        </div>
        
      </div>
    </pages>
    <!-- 缩小播放 -->
    <div id="skPlayer" v-bind:class="{'skPlayer-list-on': isList }">
      <div class="skPlayer-picture">
        <img class="skPlayer-cover" ref="skPlayerCover" v-bind:src="audioImgSrc" alt="">
        <a href="javascript:;" @click="playPauseClick()" class="skPlayer-play-btn" v-bind:class="{'skPlayer-pause': isPlay }">
          <span class="skPlayer-left"></span>
          <span class="skPlayer-right"></span>
        </a>
      </div>
      <div class="skPlayer-control" @click="upShow()">
        <p class="skPlayer-name">{{playList[isIndex].songName}}</p>
        <p class="skPlayer-author">{{playList[isIndex].singerName}}</p>
        <div class="skPlayer-percent"  ref="timePercent" @click="aBarClick()">
          <div class="skPlayer-line-loading" ref="skPlayerLineLoading"></div>
          <div class="skPlayer-line" ref="timeLine"></div>
        </div>
        <div>
          <p class="skPlayer-time">
            <span class="skPlayer-cur" ref="skPlayerCur">{{timeCurr}}</span>/
            <span class="skPlayer-total">{{timeDur}}</span>
          </p>
          <div class="skPlayer-volume" style="">
            <i class="skPlayer-icon" ref="skPlayerIcon" @click="clickVoice()" v-bind:class="{'skPlayer-quiet': isVoice }"></i>
            <div class="skPlayer-percent" ref="volumePercent" @click="volumeClickPercent()">
              <div class="skPlayer-line" ref="volumeLine"></div>
            </div>
          </div>
        </div>
        
        <div class="skPlayer-list-switch">
          <i class="skPlayer-list-icon" @click="clickList()"></i>
        </div>
        <i class="skPlayer-mode" @click="switchMode()" v-bind:class="{'skPlayer-mode-loop': playStatus }"></i>
      </div>
      <div class="skPlayer-list-outDiv">
        <p>播放列表<i class="skPlayer-list-sign"></i></p>
        <ul class="skPlayer-list">
          <li v-bind:class="{'skPlayer-curMusic': isIndex === index }" v-for="(play,index) in playList" @click="clickPlayList(index)">
            <i class="skPlayer-list-sign"></i>
            <span class="skPlayer-list-index">{{parseInt(index) + 1}}</span>
            <span class="skPlayer-list-name" title="Dream">{{play.songName}}</span>
            <span class="skPlayer-list-author" title="Rabpit">{{play.singerName}}</span>
          </li>
        </ul>
      </div>
    </div>
    <audio ref="myaudio" class="myaudio" :src="audioSrc" :autoplay="playStatus" hidden></audio>
  </div>
</template>
<script>
import pages from "../../baseComponents/pages";
import audioJs from "../audio/audio";
export default {
  name: "playAudio",
  props: {
    song: {
      tyoe: Object,
      default() {
        return {
          imgID: "1666157",
          imgName: "无法长大",
          songId: "108963136",
          songDuration: "328",
          songName: "成都",
          singerId: "12770",
          singerName: "赵雷",
          songType: 0
          // albumId: "139643",//albumid
          // albumName: "身边的故事",//albumname
          // id: "1913719",//songid
          // playtime: "268",//interval
          // singerId: "12770",//singer[0].id
          // singerName: "关喆",//singer[0].name
          // songName: "想你的夜",//songname
          // type: 3 //type
        };
      }
    },
    playStatus: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      audioSrc:
        "http://ws.stream.qqmusic.qq.com/" +
        this.song.songId +
        ".m4a?fromtag=46", //108963136
      title: this.song.singerName,
      bgImg: "/vueMusicHBuilder/static/img/bg.e0a99c4.png",
      audioImgSrc:
        "http://imgcache.qq.com/music/photo/album_300/" +
        parseInt(this.song.imgID) % 100 +
        "/300_albumpic_" +
        this.song.imgID +
        "_0.jpg",
      isPlay: true,
      isFade: true,
      timeDur: "00:00",
      timeCurr: "00:00",
      isVoice: false,
      isList: false,
      isIndex: 0,
      playList: audioJs.playList,
      volumeKeep: 0,
      search: ''
    };
  },
  components: {
    pages
  },
  mounted: function() {
    this.$nextTick(function() {
      let myaudio = this.$refs.myaudio;
      let aBarloading = this.$refs.aBarloading;
      let aBarline = this.$refs.aBarline;
      let skPlayerLineLoading = this.$refs.skPlayerLineLoading;
      let timeLine = this.$refs.timeLine;
      let that = this;
      this.$refs.myaudio.addEventListener("progress", function() {
        let percent = myaudio.currentTime / myaudio.duration;
        aBarloading.style.width = (percent * 100).toFixed(2) + "%";
        skPlayerLineLoading.style.width = (percent * 100).toFixed(2) + "%";
      });
      this.$refs.myaudio.addEventListener("timeupdate", function() {
        let percent = myaudio.currentTime / myaudio.duration;
        aBarline.style.width = (percent * 100).toFixed(2) + "%";
        timeLine.style.width = (percent * 100).toFixed(2) + "%";
        that.timeCurr = audioJs.timeFormat(myaudio.currentTime);
        that.timeDur = audioJs.timeFormat(myaudio.duration);
      });
      this.$refs.myvideo.addEventListener("ended", function() {
        if (this.isIndex === this.playList.length - 1) {
          this.isIndex = 0
        } else {
          this.isIndex += 1
        }
        that.isPlay = !that.isPlay;
        this.song = this.playList[this.isIndex]
      });
    });
  },
  methods: {
    playPauseClick: function() {
      if (this.$refs.myaudio.paused) {
        this.$refs.myaudio.play();
      } else {
        this.$refs.myaudio.pause();
      }
      this.isPlay = !this.isPlay;
    },
    aBarClick: function(event) {
      let e = event || window.event;
      let percent =
        (e.clientX - audioJs.Util.leftDistance(this.$refs.aBar)) /
        this.$refs.aBar.clientWidth;
      this.$refs.aBarline.style.width = (percent * 100).toFixed(2) + "%";
      this.$refs.myaudio.currentTime = percent * this.$refs.myaudio.duration;
      e.cancelBubble = true;
    },
    clickList: function (event) {
    	let e = event || window.event
      this.isList = !this.isList
      e.cancelBubble = true
    },
    switchMode: function () {
      this.playStatus = !this.playStatus
    },
    clickPlayList: function (index) {
      this.isIndex = index
      this.song = this.playList[this.isIndex]
      let e = event || window.event
      e.cancelBubble = true
    },
    back() {
      this.isFade = !this.isFade
    },
    upShow: function () {
  		this.isFade = true
  	},
  }
};
</script>
<style>
@import "../../assets/css/common.css";
.content img {
  width: 100%;
}
.content div {
  text-align: center;
  color: #fff;
}
.songImg img {
  margin: 20px 0 20px;
  width: 60%;
  border-radius: 50%;
}
.audioLyric {
  margin: 20px 0;
  height: 80px;
}
.audioControls {
  position: absolute;
  display: table;
  z-index: 6;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  -webkit-transform: translateZ(0);
  -webkit-transition: bottom 0.3s ease;
  transition: bottom 0.3s ease;
}
.audioControls button {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0 none;
  background: none;
  text-align: center;
  font-size: 0;
  cursor: pointer;
}
.aPlaypause_button {
  display: table-cell;
  width: 46px;
  height: 100%;
  vertical-align: top;
}
.aBar {
  position: relative;
  margin-top: 19px;
  height: 2px;
  cursor: pointer;
  background-color: #fff;
}
.aBar .aBarloading {
  width: 0;
  height: 100%;
  cursor: pointer;
  background-color: #d3d3e0;
}
.aBar .aBarline {
  width: 0;
  height: 100%;
  background-color: #ff9000;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.aBtn_value {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 16px;
  vertical-align: middle;
  background: none;
  border: 15px solid transparent;
  border-width: 10px 15px;
  border-left-color: #fff;
  font-size: 0;
  color: transparent;
}
.aPause .aBtn_value {
  width: 10px;
  height: 15px;
  border: 0 none;
  margin-left: 0;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
}
.aTime {
  display: table-cell;
  width: 80px;
  height: 100%;
  padding: 0 5px;
  font-size: 12px;
  line-height: 180%;
  text-align: center;
  color: #fff;
}
</style>

