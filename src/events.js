/**
 * Event related functions
 *
 * @namespace Events
 */

/**
  * Trigger a click event on the specified element
  * @memberof Events
  * @param { HTMLElement } el
  */
function click(el) {
    el.click();
}

/**
 * Create a debounced version of the passed function
 * @memberof Events
 * @param { Function } fn Function to debounce
 * @param { Integer } delay Delay after which it'll be executed after the last call to de debounced function
 * @return { Function } Debounced function
 */
function debounce(fn, delay) {
    let timeout;

    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay);
    };
}

/**
 * @summary Set an event listener on an element
 * @description Most of the time on, off, all and once will be used with one of Element, Window or XMLHttpRequest
 * But other DOM objects (like AudioContext) implement EventTarget interface (addEventListener is used under the hood) and can be valid parameters
 * @memberof Events
 * @param { Element | Document | Window | XMLHttpRequest } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
function on(el, action, fn) {
    el.addEventListener(action, fn);
}

/**
 * @summary Set an event listener that triggers once on an element
 * @description Most of the time on, off, all and once will be used with one of Element, Window or XMLHttpRequest
 * But other DOM objects (like AudioContext) implement EventTarget interface (addEventListener is used under the hood) and can be valid parameters
 * @memberof Events
 * @param { Element | Document | Window | XMLHttpRequest } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
function once(el, action, fn) {
    el.addEventListener(action, fn, { once: true });
}

/**
 * @summary Remove an event listener from an element
 * @description Most of the time on, off, all and once will be used with one of Element, Window or XMLHttpRequest
 * But other DOM objects (like AudioContext) implement EventTarget interface (addEventListener is used under the hood) and can be valid parameters
 * @memberof Events
 * @param { Element | Document | Window | XMLHttpRequest } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
function off(el, action, fn) {
    el.removeEventListener(action, fn);
}

/**
 * Set an event listener on a collection of elements
 * @memberof Events
 * @param { Array.<Element | Document | Window | XMLHttpRequest> | NodeList.<Element | Document | Window | XMLHttpRequest> } els
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
function onAll(els, action, fn) {
    els.forEach(el => on(el, action, fn));
}

/**
 * Trigger a function when DOM is ready
 * @memberof Events
 * @param { Function }
 */
function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else on(document, 'DOMContentLoaded', fn);
}

export {
    click,
    debounce,
    on,
    once,
    off,
    onAll,
    ready
};
