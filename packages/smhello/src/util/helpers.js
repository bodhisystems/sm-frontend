/**
* Add a class to an element.
*
* @param {Element} Element
* @param {String} Class
*
*/
export const addClass = (el, className) => {
  if (el && el.classList) {
    el.classList.add(className)
  } else if (el && !el.classList) {
    el.className += className
  }
}


/**
* Remove a class from an element.
*
* @param {Element} Element
* @param {String} Class
*/
export const removeClass = (el, className) => {
  if (el && el.classList) {
    el.classList.remove(className)
  } else if (el && !el.classList) {
    /* eslint-disable prefer-template */
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
  }
}


/**
 * Check if an element has a class.
 *
 * @param {Element} Element
 * @param {String} Class
 */
export const hasClass = (el, className) => {
  return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1
}


/**
 * Add a class if it doesn't exist, remove it if it does.
 *
 * @param {Element} Element
 * @param {String} Class
 */
export const toggleClass = (el, className) => {
  if (hasClass(el, className)) {
    removeClass(el, className)
  } else {
    addClass(el, className)
  }
}
