/**
 * Getting, removing and setting elements (or their info) related functions
 *
 * @namespace Nodes
 */

/**
 * Append one or more elements to a parent node
 * @memberof Nodes
 * @param { ParentNode } parent
 * @param { ...Node | ...String } child
 * @return { Node }
 */
function append(parent, ...child) {
    return parent.append(child);
}

/**
 * Clone the provided node
 * @memberof Nodes
 * @param { Node } el Node to be cloned
 * @param { Bool } [deep=true]
 * @return { Node }
 */
function clone(el, deep = true) {
    return el.cloneNode(deep);
}

/**
 * Create the HTML element specified by tagName
 * @memberof Nodes
 * @param { String } tagName The tag name of the element to create
 * @return { Element }
 */
function create(tagName) {
    return document.createElement(tagName);
}

/**
 * Insert an HTML string at "position" relative to the parent element
 * @memberof Nodes
 * @param { Element } el
 * @param { String("beforebegin", "afterbegin", "beforeend", "afterend") } position
 * @param { String } text
 */
function insertHTML(el, position, text) {
    el.insertAdjacentHTML(position, text);
}

/**
 * Get the first matching element
 * @memberof Nodes
 * @param { String } selector CSS selector
 * @return { HTMLElement }
 */
function find(selector) {
    return document.querySelector(selector);
}

/**
 * Get all the matching elements
 * @memberof Nodes
 * @param { String } selector CSS selector
 * @return { NodeList }
 */
function findAll(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Get the first matching child element
 * @memberof Nodes
 * @param { Document } el
 * @param { String } selector CSS selector
 * @return { HTMLElement }
 */
function findChild(el, selector) {
    return el.querySelector(selector);
}

/**
 * Get all the matching children elements
 * @memberof Nodes
 * @param { Document } el
 * @param { String } selector CSS selector
 * @return { NodeList }
 */
function findChildren(el, selector) {
    return el.querySelectorAll(selector);
}

/**
 * Get the element's parent
 * @memberof Nodes
 * @param { Node } el
 * @return { HTMLElement }
 */
function getParent(el) {
    return el.parentNode;
}

/**
 * Get the element's previous sibling
 * @memberof Nodes
 * @param { Element } el
 * @return { HTMLElement }
 */
function getPrevious(el) {
    return el.previousElementSibling;
}

/**
 * Get the element's next sibling
 * @memberof Nodes
 * @param { Element } el
 * @return { HTMLElement }
 */
function getNext(el) {
    return el.nextElementSibling;
}

/**
 * Get the element's coordinates (one side or all sides at once)
 * @memberof Nodes
 * @param { Element } el
 * @param { String("top", "right", "bottom", "left") } [side] Specify the side of which to get the coordinate, or omit the parameter to get an object with all sides
 * @return { Number | Object } Coordinates in pixels
 */
function getCoordinates(el, angle) {
    const rect = el.getBoundingClientRect();
    if (angle === 'top') return rect.top;
    if (angle === 'bottom') return rect.bottom;
    if (angle === 'left') return rect.left;
    if (angle === 'right') return rect.right;

    return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left
    };
}

/**
 * @summary Get the element's width
 * @description There are several ways of computing an element width:
 * layout vs rendered width and with or without the element's borders.
 * For that matter, this functions supports offsetWidth, clientWidth, scrollWidth and getBoundingClientRect (default).
 * getBoundingClientRect is used by default but this can by modified by providing one of the above method name
 * @memberof Nodes
 * @param { Element } el
 * @param { String("offsetWidth", "clientWidth", "scrollWidth", "getBoundingClientRect") } [method] Specify an alternate method to use for computation
 * @return { Number } Size in pixels
 */
function getWidth(el, method) {
    if (method === 'offsetWidth') return el.offsetWidth;
    if (method === 'clientWidth') return el.clientWidth;
    if (method === 'scrollWidth') return el.scrollWidth;
    return el.getBoundingClientRect().width;
}

/**
 * @summary Get the element's height
 * @description There are several ways of computing an element height:
 * layout vs rendered width, with or without the element's borders.
 * For that matter, this functions supports offsetHeight, clientHeight, scrollHeight and getBoundingClientRect (default).
 * getBoundingClientRect is used by default but this can by modified by providing one of the above method name
 * @memberof Nodes
 * @param { Element } el
 * @param { String("offsetWidth", "clientWidth", "scrollWidth", "getBoundingClientRect") } [method] Specify an alternate method to use for computation
 * @return { Number } Size in pixels
 */
function getHeight(el, method = 'boundingClient') {
    if (method === 'offsetHeight') return el.offsetHeight;
    if (method === 'clientHeight') return el.clientHeight;
    if (method === 'scrollHeight') return el.scrollHeight;
    return el.getBoundingClientRect().height;
}

/**
 * Remove element from the DOM
 * @memberof Nodes
 * @param { Node } el
 */
function remove(el) {
    el.remove();
}

/**
 * Remove child element from the DOM and return it
 * @memberof Nodes
 * @param { HTMLElement } parent
 * @param { HTMLElement } child
 * @return { HTMLElement }
 */
function removeChild(parent, child) {
    return parent.removeChild(child);
}

export {
    append,
    clone,
    create,
    insertHTML,
    find,
    findAll,
    findChild,
    findChildren,
    getParent,
    getPrevious,
    getNext,
    getCoordinates,
    getWidth,
    getHeight,
    remove,
    removeChild
};
