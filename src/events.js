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
  * Set focus on the specified element
  * @memberof Events
  * @param { HTMLElement } el
  */
function focus(el) {
    el.focus();
}

/**
  * Return target event
  * @memberof Events
  * @param { Event } e
  * @return { EventTarget }
  */
function getEventTarget(e) {
    return e.target;
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
 * @param { String } action The event to remove
 * @param { Function } fn Function to remove on the given event
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
 * Remove an event listener from a collection of elements
 * @memberof Events
 * @param { Array.<Element | Document | Window | XMLHttpRequest> | NodeList.<Element | Document | Window | XMLHttpRequest> } els
 * @param { String } action The event to remove
 * @param { Function } fn Function to remove on the given event
 */
function offAll(els, action, fn) {
    els.forEach(el => off(el, action, fn));
}

/**
  * Prevent default event from happening
  * @memberof Events
  * @param { Event } e
  */
function preventDefault(e) {
    e.preventDefault();
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
    focus,
    getEventTarget,
    on,
    once,
    off,
    onAll,
    offAll,
    preventDefault,
    ready
};
