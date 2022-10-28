import { _ as __vite_glob_0_0, a as __vite_glob_0_1 } from './nao-robot-f364d80f-a14c5047.js';
import { c as create_ssr_component, v as validate_component, m as missing_component } from './index-93f54841-a6e0bf82.js';

const allPosts = Object.assign({ "../../lib/posts/kivy-python.md": __vite_glob_0_0, "../../lib/posts/nao-robot.md": __vite_glob_0_1 });
let posts = [];
for (let path in allPosts) {
  const post = allPosts[path];
  const slug = post.metadata.slug;
  const p = { post, slug };
  posts.push(p);
}
function load({ params }) {
  const { slug } = params;
  const filteredPost = posts.find((p) => {
    return p.slug.toLowerCase() === slug.toLowerCase();
  });
  return {
    props: {
      page: filteredPost.post.default
    }
  };
}
const Index_blog_article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  return `${validate_component(page || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
});

var index_blogArticle_svelte = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Index_blog_article,
  load: load
});

const index = 6;
const file = 'immutable/pages/_slug_/index@blog-article.svelte-92f114d5.js';
const imports = ["immutable/pages/_slug_/index@blog-article.svelte-92f114d5.js","immutable/chunks/index-2b41e3ee.js"];
const stylesheets = ["immutable/assets/index@blog-article-a16516b5.css"];

export { file, imports, index, index_blogArticle_svelte as module, stylesheets };
//# sourceMappingURL=6-e36e98aa.js.map
