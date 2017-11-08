function lodePlayList() {
  let playList = []
  if (window.localStorage.getItem('playList') === null) {
    playList = [{
      imgID: "1666157",
      imgName: "无法长大",
      songId: "108963136",
      songDuration: "328",
      songName: "成都",
      singerId: "12770",
      singerName: "赵雷",
      songType: 0
    }]
    return playList
  } else {
    playList = JSON.parse(window.localStorage.getItem('playList'))
    return playList
  }
}

function timeFormat(time) {
  let tempMin = parseInt(time / 60)
  let tempSec = parseInt(time % 60)
  let curMin = tempMin < 10 ? ('0' + tempMin) : tempMin
  let curSec = tempSec < 10 ? ('0' + tempSec) : tempSec
  return curMin + ':' + curSec
}

function percentFormat (percent) {
  return (percent * 100).toFixed(2) + '%'
}

function leftDistance (el) {
  let left = el.offsetLeft
  let scrollLeft
  while (el.offsetParent) {
    el = el.offsetParent
    left += el.offsetLeft
  }
  scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft
  return left - scrollLeft
}

function lodeSearchHistory() {
  let searchHistory = ''
  if (window.localStorage.getItem('searchHistory') === null) {
    searchHistory = ''
    return searchHistory
  } else {
    searchHistory = window.localStorage.getItem('searchHistory')
    return searchHistory
  }
}

// albumId: "139643",//albumid
// albumName: "身边的故事",//albumname
// id: "1913719",//songid
// playtime: "268",//interval
// singerId: "12770",//singer[0].id
// singerName: "关喆",//singer[0].name
// songName: "想你的夜",//songname
// type: 3 //type

export default {
  lodePlayList,
  timeFormat,
  percentFormat,
  leftDistance,
  lodeSearchHistory
}
