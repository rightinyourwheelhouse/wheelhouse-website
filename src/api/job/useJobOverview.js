import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allCareer {
      edges {
        node {
          city
          title
          slug
        }
      }
    }
  }
`;

export const useJobOverview = (count) => {
  const {
    allCareer: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const nodes = edges.map(({ node }) => ({ ...node }));

    if (count) {
      return nodes.slice(0, count);
    }

    return nodes;
  }, [edges, count]);

  return [items];
};
