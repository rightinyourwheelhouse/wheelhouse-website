import path from 'path';
import { toKebab } from '../src/utils/string';

async function createPages({ actions: { createPage }, graphql }) {
  const { data } = await graphql(`
    query {
      allFeedBlog {
        edges {
          node {
            id
            title
          }
        }
      }
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

  // Careers
  data.allCareer.edges.forEach(({ node: { slug } }) => {
    createPage({
      component: path.resolve('src/templates/career.js'),
      context: { slug },
      path: `/careers/${slug}`,
    });
  });

  // blog
  data.allFeedBlog.edges.forEach(({ node: { title } }) => {
    const slug = toKebab(title);
    createPage({
      component: path.resolve('src/templates/career.js'),
      context: { slug },
      path: `/blog/${slug}`,
    });
  });
}

module.exports = createPages;
