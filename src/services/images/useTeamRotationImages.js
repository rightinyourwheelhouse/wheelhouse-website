import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

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

export function useTeamRotationImages() {
  const {
    allFile: { edges },
  } = useStaticQuery(query);

  const images = useMemo(() => {
    const nodes = edges.map(({ node }) => ({ ...node }));

    return nodes;
  }, [edges]);

  return images;
}
