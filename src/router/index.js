import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import recommend from '@/view/recommend'
import ranking from '@/view/ranking'
import singer from '@/view/singer'
import search from '@/view/search'
import musicList from '@/components/music-list/music-list'
import mvList from '@/components/mv/mvList'
import mvPlay from '@/components/mv/mvPlay'
import singerDetail from '@/components/singer/singerDetail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mvList',
      name: 'mvList',
      component: mvList,
      children: [{
        path: '/mvList/mvPlay',
        name: 'mvPlay',
        component: mvPlay
      }]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend,
      children: [{
        path: '/recommend/musicList',
        name: 'musicList',
        component: musicList
      }]
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      children: [{
          path: '/singer/singerDetail',
          name: 'singerDetail',
          component: singerDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})