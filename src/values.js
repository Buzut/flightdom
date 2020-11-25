/**
 * Value & content related functions
 *
 * @namespace Values
 */

/**
 * Get text content of a node (uses textContent)
 * @memberof Values
 * @param { HTMLElement } el
 * @return { String }
 */
function getText(el) {
    return el.textContent;
}

/**
 * Set text content of a node
 * @memberof Values
 * @param { HTMLElement } el
 * @param { String } text
 */
function setText(el, text) {
    el.textContent = text;
}

/**
 * Get a node's html
 * @memberof Values
 * @param { HTMLElement } el
 * @return { String }
 */
function getHTML(el) {
    return el.innerHTML;
}

/**
 * Get a node's html
 * @memberof Values
 * @param { HTMLElement } el
 * @param { String } html
 */
function setHTML(el, html) {
    el.innerHTML = html;
}

/**
 * Get an input/textarea's value
 * @memberof Values
 * @param { HTMLInputElement | HTMLTextAreaElement } el
 * @return { String }
 */
function getValue(el) {
    return el.value;
}

/**
 * Set an input/textarea's value
 * @memberof Values
 * @param { HTMLInputElement | HTMLTextAreaElement } el
 * @param { String } val
 */
function setValue(el, val) {
    el.value = val;
}

export {
    getText,
    setText,
    getHTML,
    setHTML,
    getValue,
    setValue
};
