const SET_NAVIGATION = 'SET_NAVIGATION'
const state = {
  next: undefined,
  previous: undefined,
}

const mutations = {
  SET_NAVIGATION(state) {
    // state.example = someVal
    state.next = ""
  },
}

const actions = ({commit}) => {
  commit(SET_NAVIGATION)
}

export default {
  state,
  mutations,
  actions,
  // getters,
}
