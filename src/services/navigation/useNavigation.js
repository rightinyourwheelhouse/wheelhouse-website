import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

const query = graphql`
  query {
    allNavigationJson {
      edges {
        node {
          href
          title
        }
      }
    }
  }
`;

export const useNavigation = () => {
  const {
    allNavigationJson: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const nodes = edges.map(({ node }) => ({ ...node }));

    return nodes;
  }, [edges]);

  return items;
};
