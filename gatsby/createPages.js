import path from 'path';
import { toKebab } from '../src/utils/string';

export default async function createPages({
  actions: { createPage },
  graphql,
}) {
  const { data } = await graphql(`
    query {
      allFeedBlog(filter: { categories: { eq: "TODO_COMPANY_NAME" } }) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  const {
    allFeedBlog,
  } = data;

  // blog
  allFeedBlog.edges.forEach(({ node: { id, title } }) => {
    const slug = toKebab(title);
    createPage({
      component: path.resolve('src/templates/blog.js'),
      context: { id },
      path: `/blog/${slug}`,
    });
  });
}
