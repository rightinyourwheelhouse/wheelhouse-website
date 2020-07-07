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

  return { members, name };
};
