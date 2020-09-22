import path from 'path';
import { toKebab } from '../src/utils/string';

export default async function createPages({
  actions: { createPage },
  graphql,
}) {
  const { data } = await graphql(`
    query {
      allRecommendationsJson(filter: { live: { eq: true } }) {
        edges {
          node {
            id
            title
          }
        }
      }
      allOfficesJson {
        edges {
          node {
            id
            name
          }
        }
      }
      allFeedBlog(filter: { categories: { eq: "Wheelhouse" } }) {
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

  const {
    allRecommendationsJson,
    allCareer,
    allOfficesJson,
    allFeedBlog,
  } = data;

  // recommendations
  allRecommendationsJson.edges.forEach(({ node: { id, title } }) => {
    const slug = toKebab(title);

    createPage({
      component: path.resolve('src/templates/recommendations.js'),
      context: { id },
      path: `/recommendations/${slug}`,
    });
  });

  // offices
  allOfficesJson.edges.forEach(({ node: { id, name } }) => {
    const slug = toKebab(name);

    createPage({
      component: path.resolve('src/templates/office.js'),
      context: { id },
      path: `/offices/${slug}`,
    });
  });

  // Careers
  allCareer.edges.forEach(({ node: { slug } }) => {
    createPage({
      component: path.resolve('src/templates/career.js'),
      context: { slug },
      path: `/careers/${slug}`,
    });
  });

  // blog
  allFeedBlog.edges.forEach(({ node: { id, title } }) => {
    const slug = toKebab(title);
    createPage({
      component: path.resolve('src/templates/blog.js'),
      context: { id },
      path: `/insights/${slug}`,
    });
  });
}
