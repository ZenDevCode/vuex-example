export default {
  state: {
    pageviews: 0,
    clicks: 0,
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
  },
}
