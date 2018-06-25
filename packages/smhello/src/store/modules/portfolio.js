// TODO: Remove, this will be loaded from API
const portfolio = require("../../data/portfolio.json");

// TODO: Remove, this will be loaded from API
const fetchportfolio = new Promise(resolve => {
  setTimeout(() => {
    resolve(portfolio);
  });
});
//-----------
/**
 * This is the state for "policy sets", which are sets of policies of a particular
 * type, i.e. life, auto, etc. Each policy set that is selected into the workflow
 * has active=true; active policy sets are transferExisting=true/false depending
 * on the user's choice; and then additional information collected about each
 * policy is also stored.
 */
export default {
  namespaced: true,
  state: {
    portfolio: {}
  },
  getters: {
    //activeCount: state => Object.values(state).filter(p => p.active).length,
    /**
     * Gets a particular policy by policy type id
     * @return {Object}
     */
    get: state => pageType => state.portfolio[pageType]
  },
  mutations: {
    /**
     * Assign the policy sets
     * @param {[type]} state      [description]
     * @param {[type]} policySets [description]
     */
    setportfolio(state, portfolio) {
      state.portfolio = portfolio;
      //console.log(portfolio);
    },
  },
  actions: {
    async init({ commit }) {
      const response = await fetchportfolio;
      commit("setportfolio", response);
    }
  }
};
