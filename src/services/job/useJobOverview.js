import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

const query = graphql`
  query {
    allCareer {
      edges {
        node {
          id
          city
          title
          slug
        }
      }
    }
  }
`;

export const useJobOverview = ({ count, current = null } = {}) => {
  const {
    allCareer: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const nodes = edges
      .map(({ node }) => ({ ...node }))
      .filter(({ id }) => id !== current);

    if (count) {
      return nodes.slice(0, count);
    }

    return nodes;
  }, [edges, count, current]);

  return items;
};
