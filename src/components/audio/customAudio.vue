<template>
  <pages class="playAudio" :title="title" :bgImg="bgImg">
    <div slot="content">
      <div>
        <a href="" class="songImg">
          <img :src="audioImgSrc" alt="">
        </a>
        <div>歌曲名：
          <a href="https://y.qq.com/n/yqq/singer/002azErJ0UcDN6.html#stat=y_new.player.info_area.singername" class="js_singer" >张杰</a>
        </div>
        <div>歌手名：
          <a href="https://y.qq.com/n/yqq/singer/002azErJ0UcDN6.html#stat=y_new.player.info_area.singername" class="js_singer" >张杰</a>
        </div>
        <div>专辑名：
          <a href="https://y.qq.com/n/yqq/singer/002azErJ0UcDN6.html#stat=y_new.player.info_area.singername" class="js_singer" >张杰</a>
        </div>
      </div>
      <div class="audioControls">
        <div class="aButton aPlaypause_button" :class="{aPause: isPlay}" @click="playPauseClick()">
          <button type="button" title="播放/暂停">
            <span class="vBtn_value">播放</span>
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
    <audio ref="myaudio" class="myaudio" :src="audioSrc" :muted="muteStatus" :autoplay="playStatus" hidden></audio>
  </pages>
</template>
<script>
import pages from '../../baseComponents/pages'
export default {
  name: 'playAudio',
  props: {
    song: {
      tyoe: Object,
      default: {}
    },
    playStatus: {
      type: Boolean,
      default: true
    },
    muteStatus: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      audioSrc: '',
      title: '歌曲名',
      bgImg: '/vueMusicHBuilder/static/img/bg.e0a99c4.png',
      audioImgSrc: '',
      isPlay: true,
      isFade: true,
      timeDur: '00:00',
      timeCurr: '00:00'
    }
  },
  components: {
    pages
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
.audioControls {
  position: absolute;
  display: table;
  z-index: 6;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(23, 23, 23, 0.9);
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

