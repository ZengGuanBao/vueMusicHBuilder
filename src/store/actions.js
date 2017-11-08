export const setPlayList = ({ commit }) => {
  commit('setPlayList') 
}

export const addPlayList = ({ commit }, {song} ) => {
  console.log(song)
  let songInfo = {
    imgID: song.data.albumid,
    imgName: song.data.albumname,
    songId: song.data.songid,
    songDuration: song.data.interval,
    songName: song.data.songname,
    singerId: song.data.singer[0].id,
    singerName: song.data.singer[0].name,
    songType: song.data.type
  }
  console.log(songInfo)
  commit('addPlayList', songInfo)
}

export const setPlaying = ({ commit }) => {
  commit('setPlaying') 
}

export const setPlayVolume = ({ commit } , num) => {
  commit('setPlayVolume' , num) 
}

