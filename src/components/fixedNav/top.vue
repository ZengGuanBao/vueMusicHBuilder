<template>
  <div class="top">
    <span class="fa-stack fa-lg music">
      <i class="fa fa-circle fa-stack-2x circleIcon"></i>
      <i class="fa fa-music fa-stack-1x musicIcon"></i>
    </span>
    <span class="title">仿QQ音乐</span>
  	<a href="https://github.com/ZengGuanBao/vueMusicHBuilder" target="_blank" class="git">欢迎<i class="fa fa-github fa-lg githubIcon"></i>star</a>
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style scoped>
@import "../../assets/fonts/font-awesome.min.css";
.top{
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #24292E;
  position: relative;
}
.top .music{
  position: absolute;
  top: 3px;
  left: 5px;
}
.circleIcon{
  color: #F5CD19;
  line-height: 44px;
}
.musicIcon{
  color: #2DB573;
  line-height: 42px;
}
.top .title{
  display: inline-block;
  height: 44px;
  line-height: 44px;
  color: #fff;
  font-size: 20px;
  text-align: left;
  padding-left: 50px
}
.top .git{
  position: absolute;
  top: 0;
  right: 10px;
  color: #fff
}
.githubIcon{
  margin:0 2px;
  color: #fff
}
</style>