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
      allCasesJson {
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
      allEmployees: allMarkdownRemark(
        filter: {
          frontmatter: {
            templateKey: { eq: "employees" }
            visible: { eq: true }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      allBlogs: allHubspotPost(
        filter: {
          state: { eq: "PUBLISHED" }
          topics: { elemMatch: { slug: { eq: "wheelhouse" } } }
        }
      ) {
        edges {
          node {
            id
            title
            author {
              name
            }
            topics {
              name
            }
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `);

  const {
    allRecommendationsJson,
    allCareer,
    allOfficesJson,
    allCasesJson,
    allEmployees,
    allBlogs,
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

  allCasesJson.edges.forEach(({ node: { id, title } }) => {
    const slug = toKebab(title);

    createPage({
      component: path.resolve('src/templates/case.js'),
      context: { id },
      path: `/cases/${slug}`,
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

  allBlogs.edges.forEach(({ node: { id, title } }) => {
    const slug = toKebab(title);
    createPage({
      component: path.resolve('src/templates/blog.js'),
      context: { id },
      path: `/insights/${slug}`,
    });
  });

  // employees
  allEmployees.edges.forEach(
    ({
      node: {
        id,
        fields: { slug },
      },
    }) => {
      createPage({
        component: path.resolve('src/templates/team.js'),
        context: { id },
        path: `${slug}`,
      });
    },
  );
}
