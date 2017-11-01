<template>
	<div class="ranking">
		<div class="rankingTab">
			<router-link to="/ranking/newRanking">新歌榜</router-link>
    	<router-link to="/ranking/allRanking">总榜</router-link>
		</div>
		<router-view/>
    <bottom></bottom>
	</div>
</template>

<script>
import bottom from "@/components/footer/bottom";
export default {
  name: "ranking",
  components: {
    bottom
  },
  mounted: function() {
    this.$nextTick(function() {
      $(".ranking").css("height", $(window).height() - 84);
      $(window).resize(function() {
        $(".ranking").css("height", $(window).height() - 84);
      });
    });
  }
};
</script>

<style scoped>
.ranking {
  overflow-y: scroll;
  padding-bottom: 10px;
}
.ranking p {
  position: relative;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  font-size: 12px;
  border-top: 1px solid #e9e9e9;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  overflow: hidden;
}
.ranking p img {
  width: 48px;
  height: 48px;
  border: 1px solid red;
}
.ranking p span {
  padding: 10px 10px;
  font-size: 14px;
}
.rankingTab {
  text-align: center;
  position: fixed;
  top: 84px;
  left: 0;
  width: 100%;
  height: 38px;
}
.rankingTab a {
  display: inline-block;
  width: 49%;
  border-radius: 2px;
  font-size: 14px;
  height: 38px;
  line-height: 38px;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  background-color: #999;
}
</style>

