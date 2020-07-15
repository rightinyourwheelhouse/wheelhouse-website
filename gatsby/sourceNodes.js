/* eslint-disable no-param-reassign */
import getRecruiteeData from './helpers/recruitee';

async function sourceNodes({ actions, createNodeId, createContentDigest }) {
  await getRecruiteeData(actions, createNodeId, createContentDigest);
}

module.exports = sourceNodes;
