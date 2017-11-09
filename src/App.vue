<template>
  <div id="app">
    <top></top>
    <routernav></routernav>
    <router-view/>
    <customAudio></customAudio>
  </div>
</template>

<script>
import top from '@/components/fixedNav/top'
import routernav from '@/components/fixedNav/routernav'
import customAudio from '@/components/audio/customAudio'
export default {
  name: 'app',
  components: {
    top,
    routernav,
    customAudio,
  }
}
</script>

<style>
@import "assets/css/common.css";
#app {
  font-family: poppin,Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
