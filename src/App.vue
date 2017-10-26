<template>
  <div id="app">
    <top></top>
    <routernav></routernav>
    	<router-view/>
    <audioPlayer></audioPlayer>
  </div>
</template>

<script>
import top from '@/components/fixedNav/top'
import routernav from '@/components/fixedNav/routernav'
import audioPlayer from '@/components/audio/audioPlayer'
export default {
  name: 'app',
  components: {
    top,
    routernav,
    audioPlayer
  }
}
</script>

<style>
@import "assets/css/common.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
