<template>
  <div class="singer">
    <ul v-for="(singerItem,index) in singers">
        <li>
          <router-link :to="{path: '/singer/singerDetail', query: {id: singerItem.Fsinger_id}}">
            <img class="singer_list__pic" v-bind:src="'https://y.gtimg.cn/music/photo_new/T001R150x150M000' + singerItem.Fsinger_mid + '.jpg?max_age=2592000'" alt="Fsinger_name">
            <span class="name">{{singerItem.Fsinger_name}}</span>
          </router-link>
        </li>
    </ul>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import {getSingerList} from '../api/singer'
import bottom from '@/components/footer/bottom'
export default {
  name: 'singer',
  data () {
    return {
      singers: []
    }
  },
  components: {
    bottom
  },
  mounted: function () {
    this.$nextTick(function () {
    	$('.singer').css('height', $(window).height()-84)
      $(window).resize(function () {  
				$('.singer').css('height', $(window).height()-84)
		  });
      var _this = this
      getSingerList().then((res) => {
        _this.singers = res.data.list
        console.log(res.data.list)
      })
    })
  }
}
</script>
<style>
	.singer {
		overflow-y: scroll;
	}
	
	.singer_list__pic {
		width: 100px;
		border-radius: 999px
	}
	
	.box {
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: space-between;
	}
	
	.box-item {
		flex-basis: 100%;
		justify-content: center;
		flex: 1;
		background-color: #fbfbfd;
		margin: 0 5%;
		max-width: 50%
	}
	
	.box-item img {
		width: 100%
	}
	
	.singer_list__title a {
		color: #333;
		font-weight: normal
	}
</style>
