/* eslint no-shadow:0*/
import * as types from './mutation-types'
import * as actions from './actions'
// import * as getters from './getters'

const state = {
  next: undefined,
  previous: undefined,
}

const mutations = {
  [types.SET_NAVIGATION](state) {
    // state.example = someVal
    state.next = ""
  },
}

export default {
  state,
  mutations,
  actions,
  // getters,
}
