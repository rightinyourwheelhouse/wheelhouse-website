/* eslint-disable no-param-reassign */
require('dotenv').config();
const axios = require('axios');

async function sourceNodes({ actions, createNodeId, createContentDigest }) {
  const { createNode } = actions;

  const RECRUITEE_API_PATH = 'https://api.recruitee.com/c/raccoons/offers';

  const {
    data: { offers },
  } = await axios.get(RECRUITEE_API_PATH, {
    headers: {
      Authorization: `Bearer ${process.env.RECRUITEE_TOKEN}`,
    },
  });

  const wheelhouseData = offers.filter(
    ({ department, status }) => department === 'Wheelhouse' && status === 'published'
  );

  wheelhouseData.forEach(({ id, slug }) => {
    const data = {
      id: createNodeId(`${id}`),
      offerId: id,
      slug,
    };

    createNode(({
      ...data,
      internal: {
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data),
        type: 'career',
      },
    }));
  });
}

module.exports = sourceNodes;
