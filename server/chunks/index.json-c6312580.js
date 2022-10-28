import { f as filteredPosts } from './posts-7e218f09-aa4e2717.js';
import './index-93f54841-a6e0bf82.js';
import './nao-robot-f364d80f-a14c5047.js';
import 'stream';
import 'util';

async function GET() {
  const body = Object.keys(filteredPosts).map((index) => {
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

export { GET };
//# sourceMappingURL=index.json-c6312580.js.map
