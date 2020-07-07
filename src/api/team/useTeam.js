import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    teamJson {
      members {
        name
        image {
          id
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export const useTeam = () => {
  const {
    teamJson: { name, members },
  } = useStaticQuery(query);

  const team = useMemo(() => {
    const nodes = members.map(({ node }) => ({ ...node }));

    return { members: nodes, name };
  }, [members]);

  return team;
};
