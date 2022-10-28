import { f as filteredPosts } from './posts-7e218f09-aa4e2717.js';
import './index-93f54841-a6e0bf82.js';
import './nao-robot-f364d80f-a14c5047.js';
import 'stream';
import 'util';

const prerender = true;
async function GET() {
  const body = Object.keys(filteredPosts).slice(0, 4).map((index) => {
    const { slug, title, date, excerpt, tags, readingTime } = filteredPosts[index];
    return {
      slug,
      title,
      date,
      excerpt,
      tags,
      readingTime
    };
  });
  return {
    status: 200,
    body: JSON.stringify(body)
  };
}

export { GET, prerender };
//# sourceMappingURL=posts.json-e24c43bd.js.map
