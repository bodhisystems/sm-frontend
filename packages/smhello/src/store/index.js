import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import navigation from './modules/navigation'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  plugins: [
    createPersistedState({
      key: "smhello",
      paths: ["portfolio"]
    })
  ],
  modules: {
    navigation,
    portfolio
  }
})
