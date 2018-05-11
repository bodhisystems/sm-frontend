import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import config from "./modules/config";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  plugins: [
    createPersistedState({
      key: "com.bodhisystems.smhello",
      paths: [""]
    })
  ],
  modules: {
    config
  }
});
