const Util = {
  leftDistance: (el) => {
    let left = el.offsetLeft
    let scrollLeft
    while (el.offsetParent) {
      el = el.offsetParent
      left += el.offsetLeft
    }
    scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft
    return left - scrollLeft
  },
  percentFormat: (percent) => {
    return (percent * 100).toFixed(2) + '%'
  }
}

function timeFormat(time) {
  let tempMin = parseInt(time / 60)
  let tempSec = parseInt(time % 60)
  let curMin = tempMin < 10 ? ('0' + tempMin) : tempMin
  let curSec = tempSec < 10 ? ('0' + tempSec) : tempSec
  return curMin + ':' + curSec
}

let playList = []
// function initializationPlayList ( playList ) {
if (window.localStorage.getItem('playList') === null) {
  playList = [{
    albumId: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000000jE4g74VS43p.jpg?max_age=2592000',
    albumName: '身边的故事',
    id: '108963136',
    playtime: '328',
    singerId: '12770',
    singerName: '赵雷',
    songName: '成都',
    type: 3
  }]
} else {
  playList = JSON.parse(window.localStorage.getItem('playList'))
}
// }
// initializationPlayList(playList)

export default {
  Util,
  timeFormat,
  playList
}
