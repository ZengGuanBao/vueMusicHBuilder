<template>
	<div class="recommend" ref="recommend">
	    <ul>
	        <li class="item" v-for="(item,index) in topList"  :key="index">
	          <router-link :to="{path: '/recommend/musicList', query: {id: item.id}}">
	            <div class="icon">
	                <img width="100" height="100" v-bind:src="item.picUrl" />
	            </div>
	            <ul class="songlist">
	                <li class="song" v-for="(song,index) in item.songList" :key="index">
	                    <span>{{index + 1}}</span>
	                    <span>{{song.songname}}-{{song.singername}}</span>
	                </li>
	            </ul>
	          </router-link>
	        </li>
	    </ul>
	    <router-view/>
      <bottom></bottom>
	</div>
</template>
<script>
import {getTopList} from '../api/rank'
import bottom from '@/components/footer/bottom'
export default {
  name: 'recommend',
  data () {
    return {
      topList: []
    }
  },
  components: {
    bottom
  },
  mounted: function () {
    this.$nextTick(function () {
      $('.recommend').css('height', $(window).height()-84)
      $(window).resize(function () {  
        $('.recommend').css('height', $(window).height()-84)
      });
      var _this = this
      getTopList().then((res) => {
        _this.topList = res.data.topList
      })
    })
  }
}
</script>

<style>
@import "../assets/css/common.css";
.recommend{
  width: 100%;
  height: auto;
  font-size: 14px;
  background: #3E3E3E;
  overflow-y: scroll;
}
.recommend>ul{
  padding-top: 10px;
  padding-bottom: 10px
}
.recommend .item {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 10px;
  height: 100px;
}
.recommend .item a{
  width: 100%
}
.recommend .item:last-child{
  margin-bottom: 0;
}
.recommend .item .icon{
  -webkit-box-flex: 0;
      -ms-flex: 0 0 100px;
          flex: 0 0 100px;
  width: 100px;
  height: 100px;
  float: left;
}
.recommend .item .songlist{
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 0 20px;
  height: 100px;
  overflow: hidden;
  background: #333;
  color: rgba(255,255,255,0.3);
  font-size: 12px;
}
.recommend .item .songlist .song{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 26px;
}
</style>
