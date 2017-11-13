<template>
	<div class="newRanking">
    <p v-for="(song,index) in songlist" @click="resetSong(song)">
      <span class="num">{{index+1}}</span>
      <img v-bind:src="'http://imgcache.qq.com/music/photo/album_300/' + song.albumId % 100 + '/300_albumpic_' + song.albumId + '_0.jpg'" alt="">
      <span class="rankTitle">{{song.songName}}</span>
    </p>
	</div>
</template>

<script>
import { mapActions } from "Vuex"; 
export default {
  name: 'newRanking',
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
    ...mapActions({  
      addPlayList: 'addPlayList'  
    }),
    resetSong: function (rSong) {
      let songInfo = {
        imgID: rSong.albumId,
        imgName: rSong.albumName,
        songId: rSong.id,
        songDuration: rSong.playtime,
        songName: rSong.songName,
        singerId: rSong.singerId,
        singerName: rSong.singerName,
        songType: rSong.type
      }
      this.addPlayList(songInfo)
    },
    cartView: function () {
      var _this = this
      $.ajax({
        type: 'get',
        url: 'https://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'JsonCallback',
        scriptCharset: 'GBK',
        success: function (data) {
          _this.songlist = data.songlist
        },
        error: function () {
          alert('fail')
        }
      })
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
.yo-scroll{
  top: 130px;
  bottom: 100px
}
</style>