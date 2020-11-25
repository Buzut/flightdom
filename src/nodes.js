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
    find,
    findAll,
    findChild,
    findChildren,
    getParent,
    getPrevious,
    getNext,
    remove,
    removeChild
};
