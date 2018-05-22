// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// import icons we use
import Icon from "vue-awesome/components/Icon";
import BounceLoader from 'vue-spinner/src/BounceLoader'
// import the custom element registration function, this is separated out so
// that we can someday share it in a library, to be used by multiple ui
// components that follow this same pattern
import { registerCustomElement } from "./customElement";

import baseCss from "./assets/scss/base.scss";
import vendorCss from "./assets/scss/vendor.scss";
import mainCss from "./assets/scss/main.scss";
import Component from './Component';
import routerFactory from './router';
import store from './store';
import "./i18n";
import {VueMasonryPlugin} from 'vue-masonry';
import VueScrollactive from 'vue-scrollactive';
import VueAnimateNumber from 'vue-animate-number';
import BackToTop from 'vue-backtotop'

Vue.use(VueMasonryPlugin)
Vue.use(VueScrollactive)
Vue.use(VueAnimateNumber)
Vue.use(BackToTop)

// register the vue-awesome icon component
Vue.component("icon", Icon);
Vue.component("bounce-loader", BounceLoader);
// perform basic store initialization, i.e. loading partners, etc.
// store.dispatch('shared/init');

// the component name to register
const componentName = "v1-smhello";

//Vue.config.productionTip = false
// determine if we're in development mode
const isDevelopment = process.env.NODE_ENV === "development";

// register the component
registerCustomElement(Component, {
    // this is the name by which the custom element will be referenced in markup
    componentName,

    // don't use shadow dom in development mode, so that we can use Vue devtools
    useShadowDom: !isDevelopment,

    // used to construct a router, is passed routerBase and routerMode
    routerFactory,

    // additional props for the custom element
    props: {
      config: {
        type: String,
        default: "development"
      },
      appContext: {
        type: Object
      }
    },

    mixins: [
      {
        store,

        methods: {
          // when app context is set we can initialize the move state
          handleAppContext(appContext) {
            if (appContext) {
              // set the app context
              this.$store.commit("config/setAppContext", appContext);

              // initialize other modules now that we have app context, which
              // allows us to make authorized API calls

            }
          }
        },

        watch: {
          appContext(value) {
            // this will be called if appContext is set from script, as it must be
            // when consumed as a standard custom element
            this.handleAppContext(value);
          }
        },

        created() {
          // set the config environment
          this.$store.commit("config/setEnvironment", this.config);

          // call this in case appContext was set directly in markup
          this.handleAppContext(this.appContext);
        },

        mounted() {
          // inject styles
          this.injectStyles(baseCss);
          this.injectStyles(vendorCss);
          this.injectStyles(mainCss);

          // if (isDevelopment) {
          //   this.injectStyles(devCss);
          // }
        }
      }
    ]
});


// global event bus
Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus
  },
})

const bus = new Vue({})

// if in development mode, inject the component into the dom
if (isDevelopment) {
  // eslint-disable-next-line no-new
  new Vue({
    el: "#app",
    template: `<div><${componentName} id="component" config="development-local" :app-context="appContext" /></div>`,
    data: {
      bus,
    },
    computed: {
      appContext() {
        return {
          userId: "hudeomah@gmail.com",
          accessToken: "accessToken",
          clientId: "clientId"
        };
      }
    }
  });
}
