import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allRecommendationsJson(filter: { live: { eq: true } }) {
      edges {
        node {
          id
          date
          author
          title
          items {
            title
            author
            url
            description
          }
          tags
          description
          introduction
          slot
          image {
            id
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export const useRecommendationsOverview = ({ count, current }) => {
  const {
    allRecommendationsJson: { edges },
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
