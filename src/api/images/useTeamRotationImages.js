import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allFile(
      sort: { fields: name, order: DESC }
      filter: { relativeDirectory: { eq: "team-rotation" } }
    ) {
      edges {
        node {
          id
          name
          extension
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export const useTeamRotationImages = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query);

  const images = useMemo(() => {
    const nodes = edges.map(({ node }) => ({ ...node }));

    return nodes;
  }, [edges]);

  return images;
};
