/**
 * Id, class and attribute related functions
 *
 * @namespace Attributes
 */

/**
 * Check if an element has a given class
 * @memberof Attributes
 * @param { Element } el
 * @param { String } className
 * @return { Bool }
 */
function hasClass(el, className) {
    return el.classList.contains(className);
}

/**
 * Add a class to an element
 * @memberof Attributes
 * @param { Element } el
 * @param { String } className
 */
function addClass(el, className) {
    el.classList.add(className);
}

/**
 * Remove a class from an element
 * @memberof Attributes
 * @param { Element } el
 * @param { String } className
 */
function removeClass(el, className) {
    el.classList.remove(className);
}

/**
 * Toggle a class on an element
 * @memberof Attributes
 * @param { Element } el
 * @param { String } className
 */
function toggleClass(el, className) {
    if (hasClass(el, className)) removeClass(el, className);
    else addClass(el, className);
}

/**
 * Check if an element has a given attribute
 * @memberof Attributes
 * @param { Element } el
 * @param { String } attr
 * @return { Bool }
 */
function hasAttribute(el, attr) {
    return el.hasAttribute(attr);
}

/**
 * Get an attribute's value from an element
 * @memberof Attributes
 * @param { Element } el
 * @param { String } attr The attribute's name
 * @return { String }
 */
function getAttribute(el, attr) {
    return el.getAttribute(attr);
}

/**
 * Add or set an attribute on an element
 * @memberof Attributes
 * @param { Element } el
 * @param { String } attr The attribute's name
 * @param { String } val The attribute's value
 */
function setAttribute(el, attr, val) {
    el.setAttribute(attr, val);
}

/**
 * Remove an attribute from an element
 * @memberof Attributes
 * @param { Element } el
 * @param { String } attr The attribute's name
 */
function removeAttribute(el, attr) {
    el.removeAttribute(attr);
}

export {
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    hasAttribute,
    getAttribute,
    setAttribute,
    removeAttribute
};
