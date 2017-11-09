<template>
	<div class="newRanking">
    <p v-for="(song,index) in songlist" @click="addPlayList(song)">
      <span class="num">{{index+1}}</span>
      <img v-bind:src="song.albumId" alt="">
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
    cartView: function () {
      var _this = this
      $.ajax({
        type: 'get',
        async: false,
        url: 'https://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js',
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
.newRanking{
  margin-top: 38px;
}
.yo-scroll{
  top: 130px;
  bottom: 100px
}
</style>