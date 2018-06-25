// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue', 'jest', 'json'],
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.

  // 'airbnb-base',
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'prettier',
    'plugin:jest/recommended'
  ],
  // extends: ['eslint:recommended', 'prettier', 'plugin:vue/essential', 'plugin:jest/recommended'],

  env: {
    browser: true,
    jest: true
  },
  // required to lint *.vue files
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  globals: {
    process: true
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    /*
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    */
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: false,
        // ignorePropertyModificationsFor: [
        //   'state', // for vuex state
        //   'acc', // for reduce accumulators
        //   'e' // for e.returnvalue
        // ]
      }
    ],
    // allow console and debugger in development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow optionalDependencies
    /*
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    */
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
