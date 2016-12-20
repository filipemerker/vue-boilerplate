import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    lists: {
      posts: [],
      images: []
    }
  },

  actions: {
    FETCH_ITEMS: ({ commit, state }, { section, type }) => {
      return api[section].get[type]()
        .then(payload => commit('SET_LIST', { type, data: payload.data }))
    }
  },

  mutations: {

    SET_LIST: (state, { type, data }) => {
      state.lists[type] = data
    }

  },

  getters: {

  }
})

export default store
