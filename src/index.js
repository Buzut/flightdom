export * from './attributes';
export * from './nodes';
export * from './events';
export * from './styles';
export * from './values';

/**
 * Check if all DOM elements exist, call fn with said els if they exist
 * @param { Function } fn
 * @param { ...HTMLElement | ...NodeList }
 */
export function callFnWDomElsIfExist(fn, ...els) {
    let call = true;

    els.forEach((el) => {
        if (!el) call = false;
        else if (NodeList.prototype.isPrototypeOf(el) && !el.length) call = false; // eslint-disable-line
    });

    if (call) fn(...els);
}

/**
 * Trigger a smooth scroll to element
 * @param { Element } target
 */
export function smoothScrollTo(target) {
    target.scrollIntoView({ behavior: 'smooth' });
}
