/**
 * Get the first matching element
 * @param { String } selector CSS selector
 * @return { HTMLElement }
 */
export function find(selector) {
    return document.querySelector(selector);
}

/**
 * Get all the matching elements
 * @param { String } selector CSS selector
 * @return { NodeList }
 */
export function findAll(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Check if an element has a given class
 * @param { HTMLElement } el
 * @param { String } className
 * @return { Bool }
 */
export function hasClass(el, className) {
    return el.classList.contains(className);
}

/**
 * Add a class to an element
 * @param { HTMLElement } el
 * @param { String } className
 */
export function addClass(el, className) {
    el.classList.add(className);
}

/**
 * Remove a class from an element
 * @param { HTMLElement } el
 * @param { String } className
 */
export function removeClass(el, className) {
    el.classList.remove(className);
}

/**
 * Check if an element has a given attribute
 * @param { HTMLElement } el
 * @param { String } attr
 * @return { Bool }
 */
export function hasAttribute(el, attr) {
    return el.hasAttribute(attr);
}

/**
 * Get an attribute's value from an element
 * @param { HTMLElement } el
 * @param { String } attr The attribute's name
 * @return { String }
 */
export function getAttribute(el, attr) {
    return el.getAttribute(attr);
}

/**
 * Add or set an attribute on an element
 * @param { HTMLElement } el
 * @param { String } attr The attribute's name
 * @param { String } val The attribute's value
 */
export function setAttribute(el, attr, val) {
    el.setAttribute(attr, val);
}

/**
 * Remove an attribute from an element
 * @param { HTMLElement } el
 * @param { String } attr The attribute's name
 */
export function removeAttribute(el, attr) {
    el.removeAttribute(attr);
}

/**
 * Get the computed style for an element's style property
 * @param { HTMLElement } el
 * @param { String } proptName CSS property name
 * @return { String }
 */
export function getStyle(el, proptName) {
    return getComputedStyle(el)[proptName];
}

/**
 * Set an element's style
 * @param { HTMLElement } el
 * @param { String } proptName CSS property name
 * @param { String } proptVal CSS property value
 */
export function setStyle(el, proptName, proptVal) {
    el.style[proptName] = proptVal;
}

/**
 * Set an event listener on an element
 * @param { HTMLElement } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
export function on(el, action, fn) {
    el.addEventListener(action, fn);
}

/**
 * Remove an event listener from an element
 * @param { HTMLElement } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
export function off(el, action, fn) {
    el.removeEventListener(action, fn);
}

/**
 * Set an event listener on a collection of elements
 * @param { Array | NodeList } els
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
export function onAll(els, action, fn) {
    els.forEach(el => on(el, action, fn));
}

/**
 * Trigger a function when DOM is ready
 * @param { Function }
 */
export function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else on(document, 'DOMContentLoaded', fn);
}

/**
 * Check if all DOM elements exist, call fn with said els if they exist
 * @param { Function } fn
 * @param { ...HTMLElement | ...NodeList }
 */
export function callFnWDomElsIfExist(fn, ...els) {
    let call = true;

    els.forEach((el) => {
        if (NodeList.prototype.isPrototypeOf(el) && !el.length) call = false; // eslint-disable-line
        else if (!el) call = false;
    });

    if (call) fn(...els);
}
