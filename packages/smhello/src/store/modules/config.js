export default {
  namespaced: true,
  state: {
    /**
     * The environment, passed into the web component
     * @type {String}
     */
    environment: null,

    /**
     * The appContext passed in to the web component, with accessToken, clientId, and userId
     * @type {Object}
     */
    appContext: null,

    /**
     * The local development configuration
     */
    'development-local': {
      apiBaseUrl: 'http://localhost:5000'
    },

    /**
     * The development configuration
     * @type {Object}
     */
    development: {
      apiBaseUrl: 'https://move-api.development.verticalone.com/v1'
    },

    /**
     * The production configuration
     * @type {Object}
     */
    production: {
      apiBaseUrl: 'https://move-api.production.verticalone.com/v1'
    }
  },

  getters: {
    /**
     * Gets the configuration for the current environment
     * @param  {[type]} state Current state
     * @return {Object}       The config object for the current environment
     */
    current: state => state[state.environment]
  },

  mutations: {
    /**
     * Set the environment
     * @param {[type]} state       Current state
     * @param {[type]} environment The environment to assign, must match a section above
     */
    setEnvironment(state, environment) {
      state.environment = environment;
    },

    /**
     * Set the appContext
     * @param {[type]} state      Current state
     * @param {[type]} appContext The passed-in appContext
     */
    setAppContext(state, appContext) {
      state.appContext = appContext;
    }
  }
};
