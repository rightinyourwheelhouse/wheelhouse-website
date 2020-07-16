import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { toKebab } from '~utils/string';

const query = graphql`
  query {
    allOfficesJson {
      edges {
        node {
          name
          address
          phone
          mail
        }
      }
    }
  }
`;

export const useOfficeOverview = () => {
  const {
    allOfficesJson: { edges },
  } = useStaticQuery(query);

  const offices = useMemo(() => {
    const nodes = edges.map(({ node }) => ({ ...node, slug: toKebab(node.name) }));

    return nodes;
  }, [edges]);

  return offices;
};
