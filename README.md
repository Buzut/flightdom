# ƒdom
ƒdom, or functional dom, is a super lightweight functional API to work with the DOM.

## <name id="why"/> Why use it?
Let's admit it, we've dropped jQuery but we sometimes miss it. DOM's native API is very verbose and cumbersome to work with.

Moreover, it doesn't play nice with functional programming. That's exactly what this library aims at: providing a light and functional way to work with the DOM.

ƒdom works really well with [Ramda](https://ramdajs.com/). But fear not, there's no need to be a functional programmer to enjoy its ease of use. And let's face it, it's more about convenience than pure functional programming, we're mutating the DOM.

### <name id="simple"/> Super simple
See for yourself:

```
import { find, findAll, addClass, onAll } from 'ƒdom';

const lightbox = find('.lightbox');
addClass(lightbox, 'active');

// even more powerful
const lightboxes = findAll('.lightbox');
onAll(lightboxes, 'click', (e) => addClass(e.target, 'active'));
```

See, it's super easy and straightforward. There's absolutely no functional shenanigans involved. Now, for a second, just picture yourself doing the same thing with the native DOM API… Yes, long and painful.

### <name id="powerful"/> And yet super powerful
Now if you insist, here's how wonderful it can get with some of Ramda's magic. Let's say we're building a function to manage some tabbed navigation:

```
import partialRight from 'ramda/es/partialRight';
import unary from 'ramda/es/unary';
import { find, addClass, removeClass, onAll } from 'ƒdom';

/**
 * Init tabs
 * @param { NodeList } panelTabs
 * @param { NodeList } panels
 */
function initTabs(panelTabs, panels) {
    const addActive = unary(partialRight(addClass, ['active']));
    const removeActive = unary(partialRight(removeClass, ['active']));

    onAll(panelTabs, 'click', (e) => {
        e.preventDefault();

        panelTabs.forEach(removeActive);
        addActive(e.target);

        panels.forEach(removeActive);
        addActive(find(e.target.hash));
    });
}
```

Again, no worries if functional flavor is not your cup of tea. ƒdom is built to accomodate everyone's taste.

This is the reason why it only involves simple functions, without making them overly functional. Just good ol' functions, ready to be used in whatever flavor you like them most.

No built-in currying or data last, but ready to be augmented!

## <name id="usage"/> Usage
You might have noticed, the library is an ES module, nevertheless it also supports CommonJS. So you can either `import` or `require` with the tool of your choice.

```
const ƒdom = require('ƒdom');

// or

import * from 'ƒdom';

// or

import { find, findAll, … } from 'ƒdom'; // this is the preferred way
```
