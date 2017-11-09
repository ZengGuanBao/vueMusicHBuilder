import fun from "../assets/js/common";

const state = {
  playList: fun.lodePlayList(),
  isIndex: 0,
  isPlay: true,
  audioShow: true,
  playVolume: 1,
  searchHistory: fun.lodeSearchHistory()
}

export default state
