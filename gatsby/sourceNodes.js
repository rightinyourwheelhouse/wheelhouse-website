/* eslint-disable no-param-reassign */
require('dotenv').config();

const getRecruiteeData = require('./helpers/recruitee');

async function sourceNodes({ actions, createNodeId, createContentDigest }) {
  await getRecruiteeData(actions, createNodeId, createContentDigest);
}

module.exports = sourceNodes;
