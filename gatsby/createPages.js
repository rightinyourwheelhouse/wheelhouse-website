require('dotenv').config();

const path = require('path');

async function createPages({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allCareer {
        edges {
          node {
            slug
            offerId
          }
        }
      }
    }
  `);

  data.allCareer.edges.forEach(({ node: { slug } }) => {
    actions.createPage({
      component: path.resolve('src/templates/career.js'),
      context: { slug },
      path: `/careers/${slug}`,
    });
  });
}

module.exports = createPages;
