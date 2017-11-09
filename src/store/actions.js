export const setPlayList = ({ commit }) => {
  commit('setPlayList') 
}

export const addPlayList = ({ commit }, {song} ) => {
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
  commit('addPlayList', songInfo)
  commit('setIsIndexPlay')
}
export const setIsIndex = ({ commit }) => {
  commit('setIsIndex')
}
export const setIsIndexSelect = ({ commit }, {num}) => {
  commit('setIsIndexSelect',num)
  
}

export const setPlaying = ({ commit }) => {
  commit('setPlaying') 
}

export const setPlayVolume = ({ commit } , num) => {
  commit('setPlayVolume' , num) 
}

// 播放按钮(判断是否处于播放)
export const setIsPlay = ({commit}) => {
  commit('setIsPlay')
}
export const setIsPlayTrue = ({commit}) => {
  commit('setIsPlayTrue')
}
export const setIsPlayFalse = ({commit}) => {
  commit('setIsPlayFalse')
}
