import * as types from './mutation-types'

export default {
  [types.ADD_PLAYLIST](state, song) {
    state.playList.push(song);
  },
  [types.INITIALIZE_PLAYLIST](state) {
    state.playList = [{
      albumId: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000000jE4g74VS43p.jpg?max_age=2592000',
      albumName: '身边的故事',
      id: '108963136',
      playtime: '328',
      singerId: '12770',
      singerName: '赵雷',
      songName: '成都',
      type: 3
    }];
		state.currentIndex = -1;
		state.playing = false;
		state.playVolume = 0;
		state.searchHistory = '';
	}
}