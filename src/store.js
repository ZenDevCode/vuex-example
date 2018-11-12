import Vue from 'vue'
import Vuex from 'vuex'
import interactionStore from './stores/interaction'
import searchStore from './stores/search'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    interactions: interactionStore,
    search: searchStore
  },
})

