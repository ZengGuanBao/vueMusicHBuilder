<template>
  <div class="routernav">
  	<router-link to="/">首页</router-link>
    <router-link to="/recommend">推荐</router-link>
    <router-link to="/ranking/newRanking">排行榜</router-link>
    <router-link to="/singer">歌手</router-link>
    <router-link to="/search">搜索</router-link>
  </div>
</template>

<script>
export default {
  name: 'routernav'
}
</script>

<style scoped>
.routernav{
	width: 100%;
	height: 40px;
	overflow: hidden;
}
.routernav a{
  display: block;
	float: left;
	width: 20%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 16px;
}
</style>