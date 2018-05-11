import Vue from "vue";
import Router from "vue-router";

// disable annoying warning
Vue.config.productionTip = false;

// makes <router-view> available
Vue.use(Router);

// register a default translate function
Vue.filter("translate", value => value);

// list the various components here so we're not warned about them in tests
