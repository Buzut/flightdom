/**
 * Style related functions
 *
 * @namespace Styles
 */

/**
 * Get the computed style for an element's style property
 * @memberof Styles
 * @param { Element } el
 * @param { String } proptName CSS property name
 * @return { String }
 */
function getStyle(el, proptName) {
    return getComputedStyle(el)[proptName];
}

/**
 * Set an element's style
 * @memberof Styles
 * @param { HTMLElement } el
 * @param { String } proptName CSS property name
 * @param { String } proptVal CSS property value
 */
function setStyle(el, proptName, proptVal) {
    el.style[proptName] = proptVal;
}

export {
    getStyle,
    setStyle
};
