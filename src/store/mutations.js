export default {
  setPlayList (state) {
    state.playList = list
  },
  addPlayList (state, song) {
    if (JSON.stringify(state.playList).indexOf(JSON.stringify(song)) === -1) {
      state.playList.push(song)
      window.localStorage.setItem('playList', JSON.stringify(state.playList))
      state.isIndex = state.playList.length - 1
    }
  },
  setPlaying (state) {
    state.playing = !state.playing
  },
  setPlayVolume (state, num) {
    state.playVolume = num
  },
  setIsIndex (state) {
    if (state.isIndex === state.playList.length - 1) {
      state.isIndex = 0
    } else {
      state.isIndex += 1
    }
  },
  setIsIndexSelect (state, num) {
    state.isIndex = num
  },
  setIsPlay (state) {
    state.isPlay = !state.isPlay;
  },
  setIsPlayTrue (state) {
    state.isPlay = true
  },
  setIsPlayFalse (state) {
    state.isPlay = false
  }
}
