require('dotenv').config();
const axios = require('axios');

if (!process.env.RECRUITEE_TOKEN) {
  throw new Error("Couldn't find env variable RECRUITEE_TOKEN!");
}

export async function getRecruiteeData(actions, createNodeId, createContentDigest) {
  const { createNode } = actions;

  const RECRUITEE_API_PATH = 'https://api.recruitee.com/c/raccoons/offers';

  const {
    data: { offers },
  } = await axios.get(RECRUITEE_API_PATH, {
    headers: {
      Authorization: `Bearer ${process.env.RECRUITEE_TOKEN}`,
    },
  });

  const wheelhouseData = await Promise.all(
    offers
      .filter(
        ({ department, status }) => department === 'Wheelhouse' && status === 'published'
      )
      .map(async (offer) => {
        const { id } = offer;
        const RECRUITEE_OFFER_PATH = `${RECRUITEE_API_PATH}/${id}`;

        const {
          data: {
            offer: {
              city, description, requirements, title,
            },
          },
        } = await axios.get(RECRUITEE_OFFER_PATH, {
          headers: {
            Authorization: `Bearer ${process.env.RECRUITEE_TOKEN}`,
          },
        });

        return {
          ...offer,
          city,
          description,
          requirements,
          title,
        };
      })
  );

  wheelhouseData.forEach(
    async ({
      city, id, slug, requirements, description, title,
    }) => {
      const data = {
        city,
        description,
        id: createNodeId(`${id}`),
        offerId: id,
        requirements,
        slug,
        title,
      };

      createNode({
        ...data,
        internal: {
          content: JSON.stringify(data),
          contentDigest: createContentDigest(data),
          type: 'career',
        },
      });
    }
  );
}
