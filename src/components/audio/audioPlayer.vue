<template>
  <div id="audioPlay" class="audioPlay" style="display: none;" ref="audioPlay">
    <div id="skPlayer" v-bind:class="{'skPlayer-list-on': isList }">
      <div class="skPlayer-picture">
        <img class="skPlayer-cover" ref="skPlayerCover" v-bind:src="playList[isIndex].albumId" alt="">
        <a href="javascript:;" @click="toggle()" class="skPlayer-play-btn" v-bind:class="{'skPlayer-pause': isActive }">
          <span class="skPlayer-left"></span>
          <span class="skPlayer-right"></span>
        </a>
      </div>
      <div class="skPlayer-control" @click="upShow()">
        <p class="skPlayer-name">{{playList[isIndex].songName}}</p>
        <p class="skPlayer-author">{{playList[isIndex].singerName}}</p>
        <div class="skPlayer-percent"  ref="timePercent" @click="timeClickPercent()">
          <div class="skPlayer-line-loading" ref="skPlayerLineLoading"></div>
          <div class="skPlayer-line" ref="timeLine"></div>
        </div>
        <div>
          <p class="skPlayer-time">
            <span class="skPlayer-cur" ref="skPlayerCur">00:00</span>/
            <span class="skPlayer-total" v-html="timeTotal"></span>
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
        <i class="skPlayer-mode" @click="switchMode()" v-bind:class="{'skPlayer-mode-loop': isLoop }"></i>
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
      <div class="normalPlayer animated bounceInUp" ref="normalPlayer">
		  	<div class="bankOff" @click="downHide()">
					<div class="back"><i class="fa fa-chevron-down fa-2x" @click="downHide()"></i></div>
					<h1 class="title">成都</h1>
					<h2 class="subtitle">成都--赵雷</h2>
		  	</div>
		  	<div class="panel album">
        	<div class="album_art">
        		<!--<img src="../../assets/img/bg-song-disc.png"/>-->
            <img class="cover"/>
        	</div>
        	<div class="music_info">
        		<!--<div>{{songLyric}}</div>-->
        	</div>
        </div>
      </div>
    </div>
    <audio id="playAudio" ref="playAudio" class="playAudio" src="http://ws.stream.qqmusic.qq.com/108963136.m4a?fromtag=46" hidden></audio>
  </div>
</template>
<script>
import audioJs from './audio'
export default {
  name: 'audioPlay',
  data () {
    return {
      isActive: false,
      isVoice: false,
      isLoop: false,
      isList: false,
      timeTotal: '05:28',
      isIndex: 0,
      playList: audioJs.playList,
      volumeKeep: 0,
      search: '',
      songLyric: {}
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let audio = this.$refs.playAudio
      let timelinePlayed = this.$refs.timeLine
      let skPlayerLineLoading = this.$refs.skPlayerLineLoading
      let skPlayerCur = this.$refs.skPlayerCur
      let updateLine = function () {
        let percent = audio.buffered.length ? audio.buffered.end(audio.buffered.length - 1) / audio.duration : 0
        skPlayerLineLoading.style.width = (percent * 100).toFixed(2) + '%'
      }
      this.$refs.playAudio.addEventListener('timeupdate', function () {
        let percent = audio.currentTime / audio.duration
        skPlayerCur.textContent = audioJs.timeFormat(audio.currentTime)
        timelinePlayed.style.width = (percent * 100).toFixed(2) + '%'
      })
      this.$refs.playAudio.addEventListener('durationchange', (e) => {
        updateLine()
      })
      this.$refs.playAudio.addEventListener('ended', (e) => {
        if (this.isIndex === this.playList.length - 1) {
          this.isIndex = 0
        } else {
          this.isIndex += 1
        }
        this.$refs.playAudio.src = 'http://ws.stream.qqmusic.qq.com/' + audioJs.playList[this.isIndex].id + '.m4a?fromtag=46'
        this.timeTotal = audioJs.timeFormat(audioJs.playList[this.isIndex].playtime)
        this.creatLyric(audioJs.playList[this.isIndex].id)
        this.$refs.playAudio.play()
      })
    })
  },
  methods: {
  	creatLyric: function (lyric) {
      var _this = this
      $.ajax({
        type: 'get',
        async: false,
        url: 'http://music.qq.com/miniportal/static/lyric/'+ lyric % 100+'/' + lyric + '.xml',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'JsonCallback',
        scriptCharset: 'GB2312',
        success: function (data) {
//      	var lyric = parseLyric(lrc);
//        if(success)success(lyric);
          _this.songLyric = data
        },
        error: function () {
          alert('fail')
        }
      })
    },
  	upShow: function () {
  		this.$refs.normalPlayer.classList.remove('bounceOutDown');
  		this.$refs.normalPlayer.classList.add('bounceInUp');
  	},
  	downHide: function () {
  		this.$refs.normalPlayer.classList.remove('bounceInUp');
  		this.$refs.normalPlayer.classList.add('bounceOutDown');
  	},
    playAudioPlay: function () {
      this.isActive = true
      this.creatLyric(audioJs.playList[this.isIndex].id)
      this.$refs.playAudio.src = 'http://ws.stream.qqmusic.qq.com/' + audioJs.playList[this.isIndex].id + '.m4a?fromtag=46'
      this.$refs.playAudio.play()
      let skPlayerLineLoading = this.$refs.skPlayerLineLoading
      this.$refs.skPlayerCover.src = audioJs.playList[this.isIndex].albumId
      this.timeTotal = audioJs.timeFormat(audioJs.playList[this.isIndex].playtime)
      skPlayerLineLoading.style.width = '100%'
    },
    playAudioPause: function () {
      this.isActive = false
      this.$refs.playAudio.pause()
    },
    toggle: function () {
      this.isActive = !this.isActive
      this.$refs.playAudio.paused ? this.$refs.playAudio.play() : this.playAudioPause()
    },
    clickVoice: function () {
      this.isVoice = !this.isVoice
      let e = event || window.event
      if (this.$refs.playAudio.volume === 0) {
        this.$refs.volumeLine.style.width = '100%'
        this.$refs.playAudio.volume = 1
        e.cancelBubble = true
      } else {
        this.$refs.volumeLine.style.width = 0
        this.$refs.playAudio.volume = 0
        e.cancelBubble = true
      }
    },
    switchMode: function () {
      this.isLoop = !this.isLoop
      let e = event || window.event
      if (this.$refs.playAudio.loop) {
        this.$refs.playAudio.loop = false
        e.cancelBubble = true
      } else {
        this.$refs.playAudio.loop = true
        e.cancelBubble = true
      }
    },
    clickList: function (event) {
    	let e = event || window.event
      this.isList = !this.isList
      e.cancelBubble = true
    },
    clickPlayList: function (index) {
      this.isIndex = index
      this.playAudioPlay()
      let e = event || window.event
      e.cancelBubble = true
    },
    timeClickPercent: function (event) {
      let e = event || window.event
      let percent = (e.clientX - audioJs.Util.leftDistance(this.$refs.timePercent)) / this.$refs.timePercent.clientWidth
      this.$refs.timeLine.style.width = audioJs.Util.percentFormat(percent)
      this.$refs.playAudio.currentTime = percent * this.$refs.playAudio.duration
      e.cancelBubble = true
    },
    volumeClickPercent: function (event) {
      let e = event || window.event
      let percent = (e.clientX - audioJs.Util.leftDistance(this.$refs.volumePercent)) / this.$refs.volumePercent.clientWidth
      this.$refs.volumeLine.style.width = audioJs.Util.percentFormat(percent)
      this.$refs.playAudio.volume = percent
      e.cancelBubble = true
    }
  }
}
</script>
<style type="text/css">
@import "../../assets/css/common.css";
.normalPlayer{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: url('../../assets/img/bg.png') no-repeat;
  background-size:cover; 
  animation-duration: 0.5s;
}
.bankOff{
	position: relative;
	width: 100%;
	height: 40px;
	line-height: 40px;
	color: #31C27C;
	margin-bottom: 25px;
}
.back{
	position: absolute;
	top: 0;
	left: 6px;
	z-index: 50;
}
.title{
	width: 70%;
	margin: 0 auto;
	line-height: 40px;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-size: 18px;
	color: #fff;
}
.subtitle {
	line-height: 20px;
	text-align: center;
	font-size: 14px;
	color: #fff;
}
.panel {
  width: 100%;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  margin: 0 auto;
}
.normalPlayer .panel.album .album_art {
  width: 280px;
  height: 280px;
  border-radius: 140px;
  -webkit-border-radius: 140px;
  background: url('../../assets/img/bg-song-disc.png') no-repeat;
  /*background-size: 100%;*/
  background-size: 280px;
  margin: 10px auto;
}
.normalPlayer .panel.album .album_art .cover {
  width: 140px;
  height: 140px;
  border-radius: 120px;
  margin: 71px;
}
.normalPlayer .panel.album .album_art.active {
  -webkit-animation: rotation 10s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}
.normalPlayer .panel.album .music_info ul {
  color: #ffffff;
  font-size: 14px;
}
.normalPlayer .panel.album .music_info ul li {
  padding: 8px 10px;
  text-align: center;
}
.normalPlayer .panel.album .music_info ul li.title {
  font-weight: bold;
  color: #429DD7;
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>