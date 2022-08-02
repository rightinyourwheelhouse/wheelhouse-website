import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

import { toKebab } from '~utils/string';

const query = graphql`
  query {
    allCasesJson {
      edges {
        node {
          name
          street
          city
          phone
          mail
        }
      }
    }
  }
`;

export function useCaseOverview() {
  const {
    allCasesJson: { edges },
  } = useStaticQuery(query);

  const cases = useMemo(() => {
    const nodes = edges.map(({ node }) => ({
      ...node,
      slug: toKebab(node.name),
    }));

    return nodes;
  }, [edges]);

  return cases;
}
