<template>
  <listLabel :onRefresh="onRefresh" :onInfinite="onInfinite" :title="topinfo.ListName" :back="back">
    <div slot="topInfo">
      <img class="topinfo-img" :src="topinfo.pic_v12" alt="">
      <div class="count_box__desc">排行榜<span class="count_box__number">共100首</span></div>
    </div>
    <div slot="listContent">
      <ul>
        <li class="music" v-for="(song,index) in musicList" :key="index" @click="resetSong(song)">
          <span>{{index + 1}}</span>
          <span>{{song.data.songname}}-{{song.data.singer[0].name}}--{{song.data.albumname}}</span>
        </li>
      </ul>
    </div>
  </listLabel>
</template>

<script>
import { getMusicList } from "../../api/rank";
import listLabel from "../../baseComponents/list";
import { mapActions } from "Vuex";
export default {
  name: "music-list",
  data() {
    return {
      topinfo: {},
      musicList: [],
      topid: this.$route.query.id,
      isDirection: false
    };
  },
  components: {
    listLabel
  },
  mounted: function() {
    this.$nextTick(function() {
      var _this = this;
      getMusicList(this.topid).then(res => {
        _this.topinfo = res.topinfo;
        _this.musicList = res.songlist;
      });
    });
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
        imgID: rSong.data.albumid,
        imgName: rSong.data.albumname,
        songId: rSong.data.songid,
        songDuration: rSong.data.interval,
        songName: rSong.data.songname,
        singerId: rSong.data.singer[0].id,
        singerName: rSong.data.singer[0].name,
        songType: rSong.data.type
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
.back i {
  margin-top: 12px;
}
</style>
