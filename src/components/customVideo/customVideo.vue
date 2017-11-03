<template>
  <div class="playVideo">
    <video ref="myvideo" class="myvideo" :src="videoSrc" :poster="videoImg" :muted="muteStatus" :autoplay="playStatus">
      您的浏览器不支持 video 标签。<br />
      your browser does not support the video tag
    </video>
    <div class="ico-play" :class="{ hide: isPlay }"><i v-on:click="playClick()" class="fa fa-play-circle-o fa-5x"></i></div>
    <div class="videoControls">
      <span class="ico-paue"><i class="fa fa-play fa-lg"></i></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'playVideo',
  props: {
    videoSrc: {
      type: String,
      default: ''
    },
    videoImg: {
      type: String,
      default: ''
    },
    playStatus: {
      type: Boolean,
      default: false
    },
    muteStatus: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isPlay: false
    }
  },
  methods: {
    playClick: function () {
      this.$refs.myvideo.play()
      this.isPlay = !this.isPlay
    }
  }
}
</script>
<style>
.playVideo{
  position: relative;
  width: 100%;
}
.myvideo{
  width: 100%;
}
.hide{
  display: none;
}
.ico-play{
  position: absolute;
  width: 100%;
  top: 60px;
  text-align: center;
  color: #31C27C;
}
.videoControls{
  position: absolute;
  display: table;
  z-index: 6;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(23,23,23,.9);
  -webkit-transform: translateZ(0);
  -webkit-transition: bottom .3s ease;
  transition: bottom .3s ease;
}
</style>

