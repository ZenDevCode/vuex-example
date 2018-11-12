import axios from 'axios';

export default {
  state: {
    q: null,
    results: [],
  },
  mutations: {
    setSearch(state, search) {
      state.q = search.q;
      state.results = search.results;
    },
  },
  actions: {
    runSearch(context, q) {
      return axios.get(`https://api.duckduckgo.com/?q=${q}&format=json`).then((results) => {
        this.commit('setSearch', {q, results: results.data});
      });
    }
  },
}


