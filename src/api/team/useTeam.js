import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    teamJson {
      members {
        name
        description
        role
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