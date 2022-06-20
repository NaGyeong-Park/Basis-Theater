import Vue from 'vue'
import Vuex from 'vuex'

import movies from './modules/movies'
import accounts from './modules/accounts'
import articles from './modules/articles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movies, accounts, articles,
  },
})
