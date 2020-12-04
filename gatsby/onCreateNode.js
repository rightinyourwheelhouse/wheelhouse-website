import { importBlogImages } from './helpers/blog';
import { createMarkdownSlugs } from './helpers/markdown';

export default async function ({
  node, actions, store, cache, getNode,
}) {
  await createMarkdownSlugs(node, actions, getNode);
  await importBlogImages(node, actions, store, cache);
}
