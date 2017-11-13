<template>
	<div class="ranking">
		<div class="rankingTab">
      <h2 class="index-list-anchor">新歌榜</h2>
      <div>
        <newRanking></newRanking>
      </div>
      <h2 class="index-list-anchor">总榜</h2>
      <div>
        <allRanking></allRanking>
      </div>
		</div>
    <bottom></bottom>
	</div>
</template>

<script>
import bottom from "@/components/footer/bottom";
import newRanking from "../components/ranking/newRanking";
import allRanking from "../components/ranking/allRanking";
export default {
  name: "ranking",
  components: {
    newRanking,
    allRanking,
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
</style>

