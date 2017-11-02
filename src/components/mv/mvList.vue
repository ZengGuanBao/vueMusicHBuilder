<template>
  <div class="mvListView">
    <router-view/>
    <div class="main">
      <!-- 标签筛选 -->
      <div class="mod_tag" id="mv_tags">
        <div>
          <span>地区:</span>
          <select>
            <option  v-for="areaA in tagArea" v-bind:data-id="areaA.id" @click="tagSelect(0,areaA.id)">{{areaA.title}}</option>
          </select>
          <!-- <h3>地区</h3> -->
          <!-- <a v-for="areaA in tagArea" v-bind:data-id="areaA.id" @click="tagSelect(0,areaA.id)">{{areaA.title}}</a> -->
        </div>
        <div>
          <span>类型:</span>
          <select>
            <option v-for="tagA in tagTag" v-bind:data-id="tagA.id" @click="tagSelect(1,tagA.id)">{{tagA.title}}</option>
          </select>
          <!-- <h3>类型</h3>
          <a v-for="tagA in tagTag" v-bind:data-id="tagA.id" @click="tagSelect(1,tagA.id)">{{tagA.title}}</a> -->
        </div>
        <div>
          <span>年份:</span>
          <select>
            <option v-for="yearA in tagYear" v-bind:data-id="yearA.id" @click="tagSelect(2,yearA.id)">{{yearA.title}}</option>
          </select>
          <!-- <h3>年份</h3>
          <a v-for="yearA in tagYear" v-bind:data-id="yearA.id" @click="tagSelect(2,yearA.id)">{{yearA.title}}</a> -->
        </div>
      </div>
      <div class="mod_part_detail">
        <div class="part_detail__hd">
          <h2 class="">全部MV</h2>
          <div class="part_switch" aria-label="排列方式">
            <a href="javascript:;" class="" data-sort="1" @click="tagSelect(3,1)">最新</a>
            <a href="javascript:;" class="" data-sort="2" @click="tagSelect(3,2)">最热</a>
          </div>
        </div>
        <div class="mod_mv">
          <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
            <ul class="mv_list__list" id="mv_list">
              <li v-for="mvVideo in mvList">
                <router-link :to="{path: '/mvList/mvPlay', query: {id: mvVideo.vid}}">
                  <img :src="mvVideo.picurl" />
                  <p><span>{{mvVideo.mvtitle}}</span></p>
                  <p><span v-for="singername in mvVideo.singers">{{singername.name}}/</span></p>
                  <p><span>{{(mvVideo.listennum/10000).toFixed(2)}}万</span><span>{{mvVideo.publictime}}</span></p>
                </router-link>
              </li>
            </ul>
          </Scroll>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Scroll from "./scroll";
export default {
  name: "mvListView",
  data() {
    return {
      vid: "w00248krew5",
      videoSrc: "",
      mvList: [],
      tagArea: [],
      tagTag: [],
      tagYear: [],
      sortType: 2,
      yearTit: 0,
      areaTit: 0,
      tagTit: 0,
      pagenoTit: 0,
      pagecountTit: 20,
      taglistTit: 1,
      switchShow: false
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.cartView();
    });
  },
  components: {
    Scroll
  },
  methods: {
    cartView: function(done) {
      var _this = this;
      $.ajax({
        type: "get",
        async: false,
        url:
          "https://c.y.qq.com/v8/fcg-bin/getmv_by_tag?g_tk=5381&jsonpCallback=getMvlist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&utf8=1&type=" +
          _this.sortType +
          "&year=" +
          _this.yearTit +
          "&area=" +
          _this.areaTit +
          "&tag=" +
          _this.tagTit +
          "&pageno=" +
          _this.pagenoTit +
          "&pagecount=" +
          _this.pagecountTit +
          "&taglist=" +
          _this.taglistTit,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "getMvlist",
        //scriptCharset: 'GBK', //设置编码，否则会乱码
        success: function(data) {
          _this.mvList = data.data.mvlist;
          if (data.data.taglist != undefined) {
            _this.tagArea = data.data.taglist.area;
            _this.tagTag = data.data.taglist.tag;
            _this.tagYear = data.data.taglist.year;
          }
          console.log(data);
          if (done != undefined) {
            done();
          }
        },
        error: function() {
          alert("fail");
        }
      });
    },
    //选择条件更新视图
    tagSelect: function(num, val) {
      switch (num) {
        case 0:
          this.areaTit = val;
          break;
        case 1:
          this.tagTit = val;
          break;
        case 2:
          this.yearTit = val;
          break;
        case 3:
          this.sortType = val;
          break;
      }
      this.taglistTit = 0;
      this.cartView();
    },
    onRefresh: function(done) {
      this.taglistTit = 0;
      this.cartView();
      done();
    },
    onInfinite: function(done) {
      this.taglistTit = 0;
      this.pagecountTit += 2;
      this.cartView(done);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
#mv_tags{
  overflow: hidden;
}
#mv_tags div{
  float: left;
}
</style>