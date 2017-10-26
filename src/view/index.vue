<template>
  <div class="index">
  	<a @click="playSongs()">播放歌曲</a>
  	<router-link to="/mvList">mv列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted: function () {
    this.$nextTick(function () {
      $('.index').css('height', $(window).height()-84)
      $(window).resize(function () {  
				$('.index').css('height', $(window).height()-84)
		  });
    })
  },
  methods: {
  	playSongs: function () {
  		document.getElementById("audioPlay").style.display = 'block'
  		document.getElementById("playAudio").play()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>