export * from './attributes';
export * from './nodes';
export * from './events';
export * from './styles';
export * from './values';


/**
 * Check whether required DOM elements exist, if so, call fn with provided els
 * @param { Function } fn
 * @param { Array.<HTMLElement | NodeList> } required All elements in this array are required to exist, otherwise fn won't be called
 * @param { Array.<HTMLElement | NodeList> } [optional] These are optional elements that will be passed to fn if it's called
 */
export function callFnWithElementsIfExist(fn, required, optional = []) {
    let call = true;

    required.forEach((el) => {
        if (!el) call = false;
        else if (NodeList.prototype.isPrototypeOf(el) && !el.length) call = false; // eslint-disable-line
    });

    if (call) fn(...required, ...optional);
}

/**
 * Trigger a smooth scroll to element
 * @param { Element } target
 */
export function smoothScrollTo(target) {
    target.scrollIntoView({ behavior: 'smooth' });
}
