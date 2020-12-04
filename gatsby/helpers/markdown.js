/* eslint-disable no-param-reassign */
const { createFilePath } = require('gatsby-source-filesystem');

export async function createMarkdownSlugs(node, { createNodeField }, getNode) {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ getNode, node });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
}
