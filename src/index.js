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
 * Get the first matching child element
 * @param { HTMLElement } el
 * @param { String } selector CSS selector
 * @return { HTMLElement }
 */
export function findChild(el, selector) {
    return el.querySelector(selector);
}

/**
 * Get all the matching children elements
 * @param { HTMLElement } el
 * @param { String } selector CSS selector
 * @return { NodeList }
 */
export function findChildren(el, selector) {
    return el.querySelectorAll(selector);
}

/**
 * Get the element's parent
 * @param { HTMLElement } el
 * @return { HTMLElement }
 */
export function getParent(el) {
    return el.parentNode;
}

/**
 * Get the element's previous sibling
 * @param { HTMLElement } el
 * @return { HTMLElement }
 */
export function getPrevious(el) {
    return el.previousElementSibling;
}

/**
 * Get the element's next sibling
 * @param { HTMLElement } el
 * @return { HTMLElement }
 */
export function getNext(el) {
    return el.nextElementSibling;
}

/**
 * Remove element from the DOM
 * @param { HTMLElement } el
 */
export function remove(el) {
    el.remove();
}

/**
 * Remove child element from the DOM and return it
 * @param { HTMLElement } parent
 * @param { HTMLElement } child
 * @return { HTMLElement }
 */
export function removeChild(parent, child) {
    return parent.removeChild(child);
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
 * Toggle a class on an element
 * @param { HTMLElement } el
 * @param { String } className
 */
export function toggleClass(el, className) {
    if (hasClass(el, className)) removeClass(el, className);
    else addClass(el, className);
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
 * Get text content of a node (uses textContent)
 * @param { HTMLElement } el
 * @return { String }
 */
export function getText(el) {
    return el.textContent;
}

/**
 * Set text content of a node
 * @param { HTMLElement } el
 * @param { String } text
 */
export function setText(el, text) {
    el.textContent = text;
}

/**
 * Get a node's html
 * @param { HTMLElement } el
 * @return { String }
 */
export function getHTML(el) {
    return el.innerHTML;
}

/**
 * Get a node's html
 * @param { HTMLElement } el
 * @param { String } html
 */
export function setHTML(el, html) {
    el.innerHTML = html;
}

/**
 * Get an input/textarea's value
 * @param { HTMLInputElement | HTMLTextAreaElement } el
 * @return { String }
 */
export function getValue(el) {
    return el.value;
}

/**
 * Set an input/textarea's value
 * @param { HTMLInputElement | HTMLTextAreaElement } el
 * @param { String } val
 */
export function setValue(el, val) {
    el.value = val;
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
 * Set an event listener that triggers once on an element
 * @param { HTMLElement } el
 * @param { String } action The event to listen to
 * @param { Function } fn Function to execute when event triggers
 */
export function once(el, action, fn) {
    el.addEventListener(action, fn, { once: true });
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

/**
 * Trigger a smooth scroll to element
 * @param { HTMLElement } target
 */
export function smoothScrollTo(target) {
    target.scrollIntoView({ behavior: 'smooth' });
}
