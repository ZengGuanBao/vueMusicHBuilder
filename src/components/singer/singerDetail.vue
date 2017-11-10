<template>
<listLabel class="listLabel" :onRefresh="onRefresh" :onInfinite="onInfinite" :title="albumlist.name" :back="back">
  <div slot="topInfo">
    <img class="topinfo-img" :src="albumlist.pic" alt="">
  </div>
  <div slot="listContent">
    <ul>
      <li class="music" v-for="(song,index) in musicList" :key="index" @click="resetSong(song)">
        <span>{{index + 1}}</span>
        <span>{{song.musicData.songname}}-{{song.musicData.singer[0].name}}--{{song.musicData.albumname}}</span>
      </li>
    </ul>
  </div>
</listLabel>
</template>

<script>
import { getSingerDetail } from "../../api/singer";
import listLabel from "../../baseComponents/list";
import { mapActions } from "Vuex";
export default {
  data() {
    return {
      albumlist: [],
      musicList: [],
      topid: this.$route.query.id
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      var _this = this;
      getSingerDetail(this.topid).then(res => {
        _this.albumlist = res.data.albumlist[0];
        _this.musicList = res.data.list;
      });
    });
  },
  components: {
    listLabel
  },
  methods: {
    ...mapActions({
      addPlayList: "addPlayList"
    }),
    onRefresh: function(done) {
      done();
    },
    onInfinite: function(done) {
      done();
    },
    back: function() {
      this.$router.back();
    },
    resetSong: function(rSong) {
      let songInfo = {
        imgID: rSong.musicData.albumid,
        imgName: rSong.musicData.albumname,
        songId: rSong.musicData.songid,
        songDuration: rSong.musicData.interval,
        songName: rSong.musicData.songname,
        singerId: rSong.musicData.singer[0].id,
        singerName: rSong.musicData.singer[0].name,
        songType: rSong.musicData.type
      };
      this.addPlayList(songInfo);
    }
  }
};
</script>

<style scoped>
.topinfo-img {
  float: left;
  width: 40%;
  margin: 10px 0;
}
.music {
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
  color: #e9e9e9;
}
</style>