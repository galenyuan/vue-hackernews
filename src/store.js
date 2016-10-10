import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsIdList, fetchNewsList } from './services/News'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentPage: 1,
    itemsPerPage: 20,
    ids: [],
    news: [],
    newsCache: {}
  },

  actions: {
    FETCH_ID_DATA: ({ commit }, callback) => {
      fetchNewsIdList().then(ids => {
        commit('SET_IDS', { ids })
        if (callback) callback()
      })
    },
    FETCH_ACTIVE_NEWS: ({ commit }) => {
      const state = store.state
      const start = (state.currentPage - 1) * state.itemsPerPage
      const end = state.currentPage * state.itemsPerPage
      const ids = state.ids.slice(start, end)
      fetchNewsList(ids).then(news => {
        commit('SET_NEWS', { news })
      })
    }
  },

  mutations: {
    SET_IDS (state, { ids }) {
      state.ids = ids
    },
    SET_NEWS (state, { news }) {
      state.news = news
    }
  },

  getters: {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds (state) {
      const { activeType, itemsPerPage, lists } = state
      const page = Number(state.route.params.page) || 1
      if (activeType) {
        const start = (page - 1) * itemsPerPage
        const end = page * itemsPerPage
        return lists[activeType].slice(start, end)
      } else {
        return []
      }
    },

    // items that should be currently displayed.
    // this Array may not be fully fetched.
    activeItems (state, getters) {
      return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    }
  }
})

export default store
