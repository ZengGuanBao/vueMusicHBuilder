<template>
  <div class="singer">
    <ul v-for="(singers,index) in newSingersData">
      <h2 class="index-list-anchor">{{singers.serial}}</h2>
      <li class="index-list-item" v-for="(singerItem,index) in singers.name" :key="index" >
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
      singers: [],
      newSingersData: [
        {serial: "A",name: []},
        {serial: "B",name: []},
        {serial: "C",name: []},
        {serial: "D",name: []},
        {serial: "E",name: []},
        {serial: "F",name: []},
        {serial: "G",name: []},
        {serial: "H",name: []},
        {serial: "I",name: []},
        {serial: "J",name: []},
        {serial: "K",name: []},
        {serial: "L",name: []},
        {serial: "M",name: []},
        {serial: "N",name: []},
        {serial: "O",name: []},
        {serial: "P",name: []},
        {serial: "Q",name: []},
        {serial: "R",name: []},
        {serial: "S",name: []},
        {serial: "T",name: []},
        {serial: "U",name: []},
        {serial: "V",name: []},
        {serial: "W",name: []},
        {serial: "X",name: []},
        {serial: "Y",name: []},
        {serial: "Z",name: []}
      ]
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
        res.data.list.forEach( el => {
          switch (el.Findex) {
            case "A":
              _this.newSingersData[0].name.push(el)
              break;
            case "B":
              _this.newSingersData[1].name.push(el)
              break;
            case "C":
              _this.newSingersData[2].name.push(el)
              break; 
            case "D":
              _this.newSingersData[3].name.push(el)
              break;
            case "E":
              _this.newSingersData[4].name.push(el)
              break;
            case "F":
              _this.newSingersData[5].name.push(el)
              break;
            case "G":
              _this.newSingersData[6].name.push(el)
              break;
            case "H":
              _this.newSingersData[7].name.push(el)
              break;
            case "I":
              _this.newSingersData[8].name.push(el)
              break;
            case "J":
              _this.newSingersData[9].name.push(el)
              break;
            case "K":
              _this.newSingersData[10].name.push(el)
              break;
            case "L":
              _this.newSingersData[11].name.push(el)
              break;
            case "M":
              _this.newSingersData[12].name.push(el)
              break;
            case "N":
              _this.newSingersData[13].name.push(el)
              break;
            case "O":
              _this.newSingersData[14].name.push(el)
              break;
            case "P":
              _this.newSingersData[15].name.push(el)
              break;
            case "Q":
              _this.newSingersData[16].name.push(el)
              break;
            case "R":
              _this.newSingersData[17].name.push(el)
              break;
            case "S":
              _this.newSingersData[18].name.push(el)
              break;
            case "T":
              _this.newSingersData[19].name.push(el)
              break;
            case "U":
              _this.newSingersData[20].name.push(el)
              break; 
            case "V":
              _this.newSingersData[21].name.push(el)
              break;
            case "W":
              _this.newSingersData[22].name.push(el)
              break;
            case "X":
              _this.newSingersData[23].name.push(el)
              break; 
            case "Y":
              _this.newSingersData[24].name.push(el)
              break;
            case "Z":
              _this.newSingersData[25].name.push(el)
              break;                   
            default:
              break;
          }
        });
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
		width: 48px;
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
		width: 50px
	}
	
	.singer_list__title a {
		color: #333;
		font-weight: normal
	}
   .index-list-anchor {
    padding: 16px 16px 10px;
    line-height: 1;
    font-size: 14px;
    color: #999;
    background: #f7f7f7;
}
 .index-list-item {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 1px;
    font-size: 14px;
    color: #333;
}
</style>
