import path from 'path';
import { toKebab } from '../src/utils/string';

export default async function createPages({ actions: { createPage }, graphql }) {
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
  data.allFeedBlog.edges.forEach(({ node: { id, title } }) => {
    const slug = toKebab(title);
    createPage({
      component: path.resolve('src/templates/blog.js'),
      context: { id },
      path: `/blog/${slug}`,
    });
  });
}
