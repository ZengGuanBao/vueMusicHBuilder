export default {
  setPlayList (state) {
    state.playList = list
  },
  addPlayList (state, song) {
    for (var index = 0; index < state.playList.length; index++) {
      if( index in state.playList && state.playList[index] === song ) {
        console.log(song)
      } 
    }
    state.playList.push(song)
    state.playSong = song
    window.localStorage.setItem('playList', JSON.stringify(state.playList))
  },
  setPlaying (state) {
    state.playing = !state.playing
  },
  setPlayVolume (state, num) {
    state.playVolume = num
  }
}
