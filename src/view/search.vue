<template>
  <div class="search">
    <div class="mod_search_bar">
      <form class="searchform" method="get" action="#" onsubmit="return false">
        <i class="fa fa-search fa-lg icon_search"></i>
        <input class="searchInput" v-model="query" type="search" placeholder="搜索歌曲、歌单、专辑">
        <i class="fa fa-trash-o fa-lg icon_delete"></i>
      </form>
    </div>
    <h3 class="result_tit">热门搜索</h3>
    <div class="result_tags">
      <a class="" v-for="key in hotkey">{{key.k}}</a>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import { getHotKey, search } from "../api/search"
import bottom from '@/components/footer/bottom'
export default {
  name: "search",
  data() {
    return {
      hotkey: [],
      query: "中国新歌声第二季",
      page: 1,
      zhida: 1,
      perpage: 20
    };
  },
  components: {
    bottom
  },
  mounted: function() {
    this.$nextTick(function() {
      $(".search").css("height", $(window).height() - 84);
      $(window).resize(function() {
        $(".search").css("height", $(window).height() - 84);
      });
      var _this = this;
      getHotKey().then(res => {
        _this.hotkey = res.data.hotkey;
        console.log(res);
      });
      search(this.query, this.page, this.zhida, this.perpage).then(res => {
        console.log(res);
      });
      $(".searchInput").bind("input propertychange", function() {
        console.log(_this.query);
        if (_this.query != null) {
          search(this.query, this.page, this.zhida, this.perpage).then(res => {
            console.log(res);
          });
        }
      });
    });
  }
};
</script>

<style>
.search {
  width: 100%;
  overflow-y: scroll;
}
.mod_search_bar {
  width: 100%;
  background: #f4f4f4;
  padding: 10px;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: center;
  position: relative;
}
.mod_search_bar .icon_search {
  position: absolute;
  top: 12px;
  left: 10px;
  width: 18px;
  height: 20px;
  line-height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgba(0, 0, 0, 0.3);
}
.mod_search_bar .icon_delete {
  position: absolute;
  top: 16px;
  right: 12px;
  width: 18px;
  height: 18px;
  color: rgba(0, 0, 0, 0.3);
}
.mod_search_bar .searchform{
  width: 100%;
}
.mod_search_bar .searchInput {
  display: inline-block;
  margin-left: 20px;
  height: 20px;
  line-height: 20px;
  width: 80%;
  color: rgba(0, 0, 0, 0.3);
  border: none;
  font-size: 14px;
}

.result_tit {
  display: block;
  font-size: 1.17em;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 8px;
}
.result_tags a {
  display: inline-block;
  font-size: 14px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 99px;
  word-break: keep-all;
  margin-bottom: 10px;
  margin-right: 14px;
}
</style>