/**
 * Event related functions
 *
 * @namespace Behaviours
 */

/**
 * Check whether required DOM elements exist, if so, call fn with provided els
 * @memberof Behaviours
 * @param { Function } fn Function to be called if elements exist
 * @param { Array.<HTMLElement | NodeList> } required All elements in this array are required to exist, otherwise fn won't be called
 * @param { Array.<HTMLElement | NodeList> } [optional] These are optional elements that will be passed to fn if it's called
 */
function callFnWithElementsIfExist(fn, required, optional = []) {
    let call = true;

    required.forEach((el) => {
        if (!el) call = false;
        else if (NodeList.prototype.isPrototypeOf(el) && !el.length) call = false; // eslint-disable-line
    });

    if (call) fn(...required, ...optional);
}

/**
 * Create a debounced version of the passed function
 * @memberof Behaviours
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
 * Trigger a smooth scroll to element
 * @param { Element } target
 * @memberof Behaviours
 */
function smoothScrollTo(target) {
    target.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Create a thottled version of the passed function
 * @memberof Behaviours
 * @param { Function } fn Function to throttle
 * @param { Integer } delay Minimum allowed interval of time between two calls of the function
 * @return { Function } Throttled function
 */
function throttle(delay, fn) {
    let wait = false;
    let toExec;

    return () => {
        if (wait) {
            if (toExec) clearTimeout(toExec);

            toExec = setTimeout(fn, delay);
            return;
        }

        if (toExec) clearTimeout(toExec);
        fn();
        wait = true;

        setTimeout(() => {
            wait = false;
        }, delay);
    };
}

export {
    callFnWithElementsIfExist,
    debounce,
    smoothScrollTo,
    throttle
};
