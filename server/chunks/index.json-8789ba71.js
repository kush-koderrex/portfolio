import { f as filteredPosts } from './posts-7e218f09-aa4e2717.js';
import './index-93f54841-a6e0bf82.js';
import './nao-robot-f364d80f-a14c5047.js';
import 'stream';
import 'util';

const prerender = true;
function GET({ params }) {
  const post = filteredPosts.find((x) => x.slug === params.slug);
  if (post) {
    return {
      status: 200,
      body: post
    };
  }
  return {
    status: 404
  };
}

export { GET, prerender };
//# sourceMappingURL=index.json-8789ba71.js.map
