/**
 * Event related functions
 *
 * @namespace Events
 */

/**
 * Set an event listener on an element
 * @memberof Events
 * @param { HTMLElement } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
function on(el, action, fn) {
    el.addEventListener(action, fn);
}

/**
 * Set an event listener that triggers once on an element
 * @memberof Events
 * @param { HTMLElement } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
function once(el, action, fn) {
    el.addEventListener(action, fn, { once: true });
}

/**
 * Remove an event listener from an element
 * @memberof Events
 * @param { HTMLElement } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
function off(el, action, fn) {
    el.removeEventListener(action, fn);
}

/**
 * Set an event listener on a collection of elements
 * @memberof Events
 * @param { Array | NodeList } els
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
    on,
    once,
    off,
    onAll,
    ready
};
