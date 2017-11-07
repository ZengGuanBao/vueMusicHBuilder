<template>
  <pages class="playAudio" :title="title" :bgImg="bgImg">
    <div slot="content">
      <div class="audioInfo">
        <a href="" class="songImg">
          <img :src="audioImgSrc" alt="">
        </a>
        <div>歌曲名：<a href="">{{song.singerName}}</a></div>
        <div>歌手名：<a href="">{{song.songName}}</a></div>
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
      <audio ref="myaudio" class="myaudio" :src="audioSrc" :autoplay="playStatus" hidden></audio>
    </div>
  </pages>
</template>
<script>
import pages from '../../baseComponents/pages'
import audioJs from '../audio/audio'
export default {
  name: 'playAudio',
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
        }
      }
    },
    playStatus: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      audioSrc: 'http://ws.stream.qqmusic.qq.com/' + this.song.songId + '.m4a?fromtag=46',//108963136
      title: this.song.singerName,
      bgImg: '/vueMusicHBuilder/static/img/bg.e0a99c4.png',
      audioImgSrc: 'http://imgcache.qq.com/music/photo/album_300/' + parseInt(this.song.imgID) % 100 + '/300_albumpic_' + this.song.imgID + '_0.jpg',
      isPlay: true,
      timeDur: '00:00',
      timeCurr: '00:00'
    }
  },
  components: {
    pages
  },
  mounted: function () {
    this.$nextTick(function () {
      let myaudio = this.$refs.myaudio
      let aBarloading = this.$refs.aBarloading
      let aBarline = this.$refs.aBarline
      let that = this
      this.$refs.myaudio.addEventListener('progress', function () {
        let percent = myaudio.currentTime / myaudio.duration
        aBarloading.style.width = (percent * 100).toFixed(2) + '%'
      });
      this.$refs.myaudio.addEventListener('timeupdate', function () {
        let percent = myaudio.currentTime / myaudio.duration
        aBarline.style.width = (percent * 100).toFixed(2) + '%'
        that.timeCurr = audioJs.timeFormat(myaudio.currentTime)
        that.timeDur = audioJs.timeFormat(myaudio.duration)
      });
      this.$refs.myvideo.addEventListener('ended', function () {
        that.isPlay = !that.isPlay
      })
    })
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
    aBarClick: function (event) {
      let e = event || window.event
      let percent = (e.clientX - audioJs.Util.leftDistance(this.$refs.aBar)) / this.$refs.aBar.clientWidth
      this.$refs.aBarline.style.width = (percent * 100).toFixed(2) + '%'
      this.$refs.myaudio.currentTime = percent * this.$refs.myaudio.duration
      e.cancelBubble = true
    }
  }
}
</script>
<style>
.content img{
  width: 100%;
}
.content div{
  text-align: center;
  color: #fff
}
.songImg img{
  margin: 20px 0 20px;
  width: 60%;
  border-radius: 50%
}
.audioLyric{
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
.aTime{
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

