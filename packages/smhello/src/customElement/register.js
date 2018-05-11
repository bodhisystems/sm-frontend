import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import styleMixin from "./styleMixin";

/**
 * Register a custom element
 *
 * @param {[type]}    Component               [description]
 * @param {[type]}    componentName           [description]
 * @param {[Object]}  [props={}]              [description]
 * @param {[Array]}   [mixins=[]]             [description]
 * @param {[type]}    [routerFactory=null]    [description]
 * @param {[Boolean]} [useShadowDom=true]     [description]
 * @param {[Boolean]} [useStyleMixin=true]    [description]
 *
 */

export default function register(
  Component,
  {
    componentName,
    props = {},
    mixins = [],
    routerFactory = null,
    useShadowDom = true,
    useStyleMixin = true
  }
) {
  /**
   * This is the component definition that will either be registered directly
   * with Vue or registered as a custom element using shadow dom. We support
   * both modes because the Vue devtools don't work for content in the
   * shadow dom
   * @type {Object}
   */
   const component = {
     // include any mixins
     mixins,

     // use passed in props plus add some that we always need
     props: Object.assign(props, {
       /**
        * The base url for the component router
        * @type {String}
        */
        routerBase: {
          type: String,
          default: "/"
        },

        /**
         * The router mode, either hash or history
         * @type {String}
         */
         routerMode: {
           type: String,
           default: "hash"
         }
     }),

     data() {
       return {
         /**
          * Tracks the styles that have been injected here already
          * @type {Set}
          */
          usedInjectors: new Set(),

          /**
           * A subclass that is created to combine the passed in class with
           * the router that is constructed from the props
           * @type {[type]}
           */
           subclass: Vue.extend({
             render: createElement => createElement(Component),
             router: routerFactory(this.routerBase, this.routerMode)
           })
       };
     },

     render(createElement) {
       // render the subclass
       return createElement(this.$data.subclass);
     },

     methods: {
       /**
        * This injects a passed-in style to this element if this
        * is the first time that a style has been passed in
        * @param {[type]} style [description]
        * @param {[type]}       [description]
        */
        injectStyles(style){
          // eslint-disable-next-line no-underscore-dangle
          const injector = style.__inject__;
          if(injector){
            if(!this.usedInjectors.has(injector)){
              injector(this.$el);
              this.usedInjectors.add(injector);
            }
          }
        }
     },

     provide() {
       // inject the style injector to be used by child components
       return {
         injectStylesAtRoot: this.injectStyles.bind(this)
       };
     }
   };

   // register the element
   if(useShadowDom){
     // register the component as a custom element, in shadow dom
     customElements.define(componentName, wrap(Vue, component));
   } else {
     // register the component normally
     Vue.component(componentName, component);
   }

   // global mixin that causes styles to be applied to shadow dom root
   if(useStyleMixin){
     Vue.mixin(styleMixin);
   }
}
