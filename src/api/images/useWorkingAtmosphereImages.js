import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allFile(
      sort: { fields: name, order: DESC }
      filter: { relativeDirectory: { eq: "working-atmosphere" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export const useWorkingAtmosphereImages = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query);

  const images = useMemo(() => {
    const nodes = edges.map(({ node }) => ({ ...node }));

    return nodes;
  }, [edges]);

  return images;
};
