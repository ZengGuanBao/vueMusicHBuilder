<template>
	<div class="allRanking">
		<p v-for="(song,index) in songlist" @click="playAudio(song)">
			<span class="num">{{index+1}}</span>
      <img v-bind:src="song.albumId" alt="">
      <span class="rankTitle">{{song.songName}}</span>
		</p>
	</div>
</template>

<script>
import $ from 'jquery'
import audioJs from '../audio/audio'
export default {
  name: 'allRanking',
  data () {
    return {
      songlist: []
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.cartView()
    })
  },
  methods: {
    cartView: function () {
      var _this = this
      $.ajax({
        type: 'get',
        async: false,
        url: 'http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'JsonCallback',
        scriptCharset: 'GBK',
        success: function (data) {
          _this.songlist = data.songlist
          for (var i = 0; i < _this.songlist.length; i++) {
            _this.songlist[i].albumId = 'http://imgcache.qq.com/music/photo/album_300/' + _this.songlist[i].albumId % 100 + '/300_albumpic_' + _this.songlist[i].albumId + '_0.jpg'
          }
        },
        error: function () {
          alert('fail')
        }
      })
    },
    playAudio: function (song) {
      audioJs.playList.push(song)
      window.localStorage.setItem('playList', JSON.stringify(audioJs.playList))
      // for (song in timeFormat.playList) {
      //   if (timeFormat.playList.hasOwnProperty(song) === false) {
      //     timeFormat.playList.push(song)
      //     window.localStorage.setItem('playList', JSON.stringify(timeFormat.playList))
      //   }
      // }
      // var audio = document.getElementById('playAudio')
      // var playIndex = audioJs.playList.length - 1
      // audio.src = audioJs.playList[playIndex].id
      // audio.play()
    }
  }
}
</script>

<style scoped>
p{
  margin: 5px 0;
}
img{
  margin-left: 5px;
  width: 50px;
}
.num{
  display: inline-block;
    width: 25px;
    margin-left: 0;
    text-align: center;
}
.rankTitle{

}
</style>