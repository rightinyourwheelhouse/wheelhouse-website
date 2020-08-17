import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allFeedBlog(filter: { categories: { eq: "Wheelhouse" } }) {
      edges {
        node {
          id
          title
          pubDate
          link
          content {
            encoded
          }
          creator
          enclosure {
            url
          }
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export const useBlogOverview = ({ count, current }) => {
  const {
    allFeedBlog: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const nodes = edges
      .map(({ node }) => ({ ...node }))
      .filter(({ id }) => id !== current);

    if (count) {
      return nodes.slice(0, count);
    }

    return nodes;
  }, [edges, count]);

  return [items];
};
