import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

import { shuffle, mode } from '~utils/array';

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
          extension
          childImageSharp {
            fluid(maxWidth: 1000) {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export const useWorkingAtmosphereImages = (
  count,
  shuffled = true,
  fixedAR = false,
) => {
  const {
    allFile: { edges },
  } = useStaticQuery(query);

  const images = useMemo(() => {
    let nodes = edges.map(({ node }) => ({ ...node }));

    if (fixedAR) {
      const mostCommonAspectRatio = mode(
        nodes.map(
          ({
            childImageSharp: {
              fluid: { aspectRatio },
            },
          }) => aspectRatio,
        ),
      );

      nodes = nodes.filter(
        ({
          childImageSharp: {
            fluid: { aspectRatio },
          },
        }) => aspectRatio === mostCommonAspectRatio,
      );
    }

    if (shuffled) {
      nodes = shuffle(nodes);
    }

    if (count) {
      return nodes.slice(0, count);
    }

    return nodes;
  }, [count, edges, fixedAR, shuffled]);

  return images;
};
