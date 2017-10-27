<template>
	<div class="ranking">
		<div class="">
			<router-link to="/ranking/newRanking">新歌榜</router-link>
    		<router-link to="/ranking/allRanking">总榜</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
export default {
  name: 'ranking',
  mounted: function () {
    this.$nextTick(function () {
      $('.ranking').css('height', $(window).height()-84)
      $(window).resize(function () {  
		$('.ranking').css('height', $(window).height()-84)
	  });
    })
  }
}
</script>

<style scoped>
.ranking{
	overflow-y: scroll;
	padding-bottom: 110px;
}
.ranking p{
	position: relative;
	height: 50px;
	line-height: 50px;
	padding: 0 15px;
	font-size: 12px;
	border-top: 1px solid #E9E9E9;
	cursor: pointer;
	transition: 0.2s;
	-webkit-transition: 0.2s;
	-moz-transition: 0.2s;
	overflow: hidden;
}
.ranking p img{
  width: 48px;
  height: 48px;
  border: 1px solid red;
}
.ranking p span{
  padding: 10px 10px;
  font-size: 14px
}
</style>

