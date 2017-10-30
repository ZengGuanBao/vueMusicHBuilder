<template>
  <div class="search">
	search
  </div>
</template>

<script>
import {getLyric} from '../api/song'
export default {
  name: 'search',
  mounted: function () {
    this.$nextTick(function () {
      $('.search').css('height', $(window).height()-184)
      $(window).resize(function () {  
				$('.search').css('height', $(window).height()-184)
		  });
    })
  }
}
</script>

<style>
.singer {
	overflow-y: scroll;
}
</style>