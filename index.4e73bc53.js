!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o),o.register("kMC0W",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var t,n=(t=o("8NIkP"))&&t.__esModule?t:{default:t}})),o.register("8NIkP",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}})),o.register("7AJDX",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,r){if(!e)return;if("string"==typeof e)return n.default(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n.default(e,r)};var t,n=(t=o("8NIkP"))&&t.__esModule?t:{default:t}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")};var a={};function l(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,r,t){r&&l(e.prototype,r);t&&l(e,t);return e};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return i.default(e)||c.default(e)||s.default(e)||d.default()};var i=p(o("kMC0W")),c=p(o("7AJDX")),d=p(o("8CtQK")),s=p(o("auk6i"));function p(e){return e&&e.__esModule?e:{default:e}}function v(){var r=new Array(9).fill().map((function(){return new Array(9).fill(null)}));return y(r),function(r){var t=30,n=e(f)(r).map((function(r){return e(f)(r)})),o=0;for(;o<t;){var u=Math.floor(9*Math.random()),a=Math.floor(9*Math.random());null!==n[u][a]&&(n[u][a]=null,o++)}return n}(r)}function y(e){var r=b(e);if(!r)return!0;for(var t=function(){for(var e=[1,2,3,4,5,6,7,8,9],r=e.length-1;r>=0;r--){var t,n=Math.floor(Math.random()*(r+1));t=[e[n],e[r]],e[r]=t[0],e[n]=t[1]}return e}(),n=0;n<t.length;n++)if(_(e,r.row,r.column,t[n])){if(e[r.row][r.column]=t[n],y(e))return!0;e[r.row][r.column]=null}}function b(e){for(var r=0;r<9;r++)for(var t=0;t<9;t++)if(null===e[r][t])return{row:r,column:t};return null}function _(e,r,t,n){return function(e,r,t,n){for(var o=0;o<9;o++)if(e[o][t]===n&&o!==r)return!1;return!0}(e,r,t,n)&&function(e,r,t,n){for(var o=0;o<9;o++)if(e[r][o]===n&&o!==t)return!1;return!0}(e,r,t,n)&&function(e,r,t,n){for(var o=r-r%3,u=t-t%3,a=o;a<o+3;a++)for(var l=u;l<u+3;l++)if(e[a][l]===n&&a!==r&&l!==t)return!1;return!0}(e,r,t,n)}new(function(){"use strict";function r(){e(u)(this,r),this.grid=v()}return e(a)(r,[{key:"hasEmptyCells",value:function(){return Boolean(b(this.grid))}}]),r}())}();
//# sourceMappingURL=index.4e73bc53.js.map