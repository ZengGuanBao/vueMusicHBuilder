import fun from "../assets/js/common";

const state = {
  playList: fun.lodePlayList(),
  playSong: {},
  audioShow: true,
  playVolume: 1,
  searchHistory: fun.lodeSearchHistory()
}

export default state
