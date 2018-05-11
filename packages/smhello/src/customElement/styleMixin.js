/**
 * This mixin should be applied to any component that includes style, to
 * allow that style to be properly injected at the root of the shadow dom.
 * @type {Object}
 */

 export default {
    inject: {
       /**
        * Call to apply styles to root element
        * @type {Function}
        */
        injectStylesAtRoot: {
          default: null
        },
        /**
         * Component-global styles can be injected by the root, they show up here
         * @type {Object}
         */
         $globalStyle: {
           default: null
         }
     },

     mounted() {
       // kgw
       if(this.injectStylesAtRoot && this.$style) {
         this.injectStylesAtRoot(this.$style);
       }
     }
 };
