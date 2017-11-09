<template>
  <div class="playVideo">
    <video ref="myvideo" class="myvideo" :src="videoSrc" :poster="videoImg" :muted="muteStatus" :autoplay="playStatus" @click="playBar()">
      您的浏览器不支持 video 标签。<br />
      your browser does not support the video tag
    </video>
    <div class="ico-play" :class="{ hide: isPlay }"><i @click="playPauseClick()" class="fa fa-play-circle-o fa-5x"></i></div>
    <div class="videoControls animated" :class="isFade ? 'fadeOutDown':'fadeInUp'">
      <div class="vButton vPlaypause_button" :class="{vPause: isPlay}" @click="playPauseClick()">
        <button type="button" title="播放/暂停">
          <span class="vBtn_value">播放</span>
        </button>  
      </div>
      <div class="vBar" ref="vBar" @click="vBarClick()">
        <div class="vBarloading" style="width: 0;" ref="vBarloading"></div> 
        <div class="vBarline" style="width: 0;" ref="vBarline"></div>
      </div>
      <div class="vTime">
        <span class="vCurrentTime">{{timeCurr}}</span>/<span class="vDuration">{{timeDur}}</span>
      </div>
      <div class="vFullscreen_button">
        <i class="fa fa-expand fa-lg" @click="fullscreenClick()"></i>
      </div>
    </div>
  </div>
</template>
<script>
import fun from "../../assets/js/common"
export default {
  name: "playVideo",
  props: {
    videoSrc: {
      type: String,
      default: ""
    },
    videoImg: {
      type: String,
      default: ""
    },
    playStatus: {
      type: Boolean,
      default: true
    },
    muteStatus: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: true
    },
    preview: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isPlay: true,
      isFade: true,
      timeDur: '00:00',
      timeCurr: '00:00'
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      let myvideo = this.$refs.myvideo
      let vBarloading = this.$refs.vBarloading
      let vBarline = this.$refs.vBarline
      let that = this
      
      this.$refs.myvideo.addEventListener('progress', function () {
        let percent = myvideo.currentTime / myvideo.duration
        vBarloading.style.width = (percent * 100).toFixed(2) + '%'
      });
      this.$refs.myvideo.addEventListener('timeupdate', function () {
        let percent = myvideo.currentTime / myvideo.duration
        vBarline.style.width = (percent * 100).toFixed(2) + '%'
        that.timeCurr = fun.timeFormat(myvideo.currentTime)
        that.timeDur = fun.timeFormat(myvideo.duration)
      });
      this.$refs.myvideo.addEventListener('ended', function () {
        that.isFade = !that.isFade
        that.isPlay = !that.isPlay
      });
    })
  },
  methods: {
    playPauseClick: function() {
      if (this.$refs.myvideo.paused) {
        this.$refs.myvideo.play();
      } else {
        this.$refs.myvideo.pause();
      }
      this.isPlay = !this.isPlay;
    },
    playBar: function() {
      this.isFade = !this.isFade;
    },
    fullscreenClick: function() {

    },
    vBarClick: function (event) {
      let e = event || window.event
      let percent = (e.clientX - fun.leftDistance(this.$refs.vBar)) / this.$refs.vBar.clientWidth
      this.$refs.vBarline.style.width = (percent * 100).toFixed(2) + '%'
      this.$refs.myvideo.currentTime = percent * this.$refs.myvideo.duration
      e.cancelBubble = true
    }
  }
};
</script>
<style>
.playVideo {
  position: relative;
  width: 100%;
}
.myvideo {
  width: 100%;
}
.hide {
  display: none;
}
.ico-play {
  position: absolute;
  width: 100%;
  top: 60px;
  text-align: center;
  color: #31c27c;
}
.videoControls {
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
.videoControls button {
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
.vPlaypause_button {
  display: table-cell;
  width: 46px;
  height: 100%;
  vertical-align: top;
}
.vBar {
  position: relative;
  margin-top: 19px;
  height: 2px;
  cursor: pointer;
  background-color: #fff;
}
.vBar .vBarloading {
  width: 0;
  height: 100%;
  cursor: pointer;
  background-color: #d3d3e0;
}
.vBar .vBarline {
  width: 0;
  height: 100%;
  background-color: #ff9000;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.vBtn_value {
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
.vPause .vBtn_value {
  width: 10px;
  height: 15px;
  border: 0 none;
  margin-left: 0;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
}
.vTime{
  display: table-cell;
  width: 80px;
  height: 100%;
  padding: 0 5px;
  font-size: 12px;
  line-height: 180%;
  text-align: center;
  color: #fff;
}
.vFullscreen_button {
  display: table-cell;
  width: 50px;
  height: 100%;
  line-height: 100%;
  text-align: center;
  color: #fff;
}
.vFullscreen_button i {
  line-height: 30px;
}
</style>

