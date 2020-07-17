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
        }
      }
    }
  }
`;

export const useTeam = () => {
  const {
    allTeamJson: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const nodes = edges.map(({ node }) => ({ ...node }));

    return nodes;
  }, [edges]);

  return items;
};
