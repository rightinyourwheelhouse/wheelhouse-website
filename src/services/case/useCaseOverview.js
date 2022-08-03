import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

import { toKebab } from '~utils/string';

const query = graphql`
  query {
    allCasesJson {
      edges {
        node {
          title
          backgroundColor
          color
          company
          banner {
            ...fluidImage
          }
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
      slug: toKebab(node.title),
    }));

    return nodes;
  }, [edges]);

  return cases;
}
