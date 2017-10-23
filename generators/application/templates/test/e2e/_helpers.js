/*eslint-env node*/

module.exports = {
  eScrollTo: s =>
    `window.scroll(0,f(document.querySelector(${s})));function f(o){var c=0;if (o.offsetParent){do {c+=o.offsetTop;} while (o=o.offsetParent);return [c];}};`
};
