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
      $('.index').css('height', $(window).height()-84)
      $(window).resize(function () {  
				$('.index').css('height', $(window).height()-84)
		  });
    })
  }
}
</script>

<style>
.singer {
	overflow-y: scroll;
	padding-bottom: 100px;
}
</style>