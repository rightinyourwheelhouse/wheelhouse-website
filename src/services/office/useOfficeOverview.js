import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

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

export function useOfficeOverview() {
  const {
    allOfficesJson: { edges },
  } = useStaticQuery(query);

  const offices = useMemo(() => {
    const nodes = edges.map(({ node }) => ({
      ...node,
      slug: toKebab(node.name),
    }));

    return nodes;
  }, [edges]);

  return offices;
}
