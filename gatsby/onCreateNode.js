import { importBlogImages } from './helpers/blog';

export default async function ({
  node, actions, store, cache,
}) {
  await importBlogImages(node, actions, store, cache);
}
