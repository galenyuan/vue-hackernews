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
    FETCH_ID_DATA: ({ commit }) => {
      return new Promise((resolve, reject) => {
        fetchNewsIdList().then(ids => {
          commit('SET_IDS', { ids })
          resolve()
        })
      })
    },
    FETCH_ACTIVE_NEWS: ({ commit }, page) => {
      const state = store.state
      const start = (page - 1) * state.itemsPerPage
      const end = page * state.itemsPerPage
      const ids = state.ids.slice(start, end)
      fetchNewsList(ids).then(news => {
        commit('SET_NEWS', { news })
      })
    },
    GO_TO_PAGE: ({ commit }, page) => {
      commit('SET_PAGE', { page })
    }
  },

  mutations: {
    SET_IDS (state, { ids }) {
      state.ids = ids
    },
    SET_NEWS (state, { news }) {
      state.news = news
    },
    SET_PAGE (state, { page }) {
      state.currentPage = page
    }
  }
})

export default store
