import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageviews: 0,
    clicks: 0,
    search: {
      q: null,
      results: [],
    },
  },
  getters: {
    actions: (state) => {
      return state.pageviews + state.clicks;
    }
  },
  mutations: {
    addPageview(state) {
      state.pageviews += 1;
    },
    addClick(state) {
      state.clicks += 1;
    },
    setSearch(state, search) {
      state.search.q = search.q;
      state.search.results = search.results;
    },
  },
  actions: {
    runSearch(context, q) {
      return axios.get(`https://api.duckduckgo.com/?q=${q}&format=json`).then((results) => {
        this.commit('setSearch', {q, results: results.data});
      });
    }
  },
})

