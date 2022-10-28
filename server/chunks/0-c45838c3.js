import { c as create_ssr_component, a as add_attribute } from './index-93f54841-a6e0bf82.js';
import { k as keywords } from './meta-a90a5c6c-3a1eec77.js';

const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<meta name="${"keywords"}"${add_attribute("content", keywords.join(", "), 0)} data-svelte="svelte-cp3p9w">`, ""}


${slots.default ? slots.default({}) : ``}`;
});

var __layout_svelte = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _layout
});

const index = 0;
const file = 'immutable/pages/__layout.svelte-0c7ac15e.js';
const imports = ["immutable/pages/__layout.svelte-0c7ac15e.js","immutable/chunks/index-2b41e3ee.js","immutable/chunks/meta-a90a5c6c.js"];
const stylesheets = ["immutable/assets/app-c6ee87d6.css"];

export { file, imports, index, __layout_svelte as module, stylesheets };
//# sourceMappingURL=0-c45838c3.js.map
