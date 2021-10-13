/* eslint-disable no-param-reassign */
import { createRemoteFileNode } from 'gatsby-source-filesystem';

export async function importBlogImages(node, { createNode }, store, cache) {
  const {
    internal: { type },
  } = node;

  if (type !== 'FeedBlog') {
    return;
  }

  const {
    enclosure: { url },
  } = node;

  const fileNode = await createRemoteFileNode({
    cache,
    createNode,
    createNodeId: id => `blog-image-${id}`,
    store,
    url,
  });

  if (fileNode) {
    node.image___NODE = fileNode.id;
  }
}
