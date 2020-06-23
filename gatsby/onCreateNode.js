/* eslint-disable no-param-reassign */

async function onCreateNode({ node }) {
  console.log('node', node);
  console.log(node.internal.type);
}

module.exports = onCreateNode;
