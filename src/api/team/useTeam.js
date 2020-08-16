import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allTeamJson {
      edges {
        node {
          name
          description
          role
          image {
            id
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          visible
        }
      }
    }
  }
`;

export const useTeam = (name, includeInvisible = false) => {
  const {
    allTeamJson: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    let nodes = edges.map(({ node }) => ({ ...node }));

    if (name) {
      nodes = nodes.filter(({ name: n }) => name === n);
    }

    if (!includeInvisible) {
      nodes = nodes.filter(({ visible }) => !!visible);
    }

    return nodes;
  }, [edges]);

  if (name) {
    return items.length > 0 ? items[0] : null;
  }

  return items;
};
