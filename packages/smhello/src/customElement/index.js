/**
 * This module supports custom elements with router and other support, broken
 * out separately so we can put it in a shared library at some point
 */

 import registerCustomElement from './register';
 import customElementStyleMixin from './styleMixin';

 export { registerCustomElement, customElementStyleMixin };
