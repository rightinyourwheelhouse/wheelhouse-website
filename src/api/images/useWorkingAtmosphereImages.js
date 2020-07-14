import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { shuffle } from '~utils/array';

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
            fluid(maxWidth: 500) {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export const useWorkingAtmosphereImages = (count, shuffled = true) => {
  const {
    allFile: { edges },
  } = useStaticQuery(query);

  const images = useMemo(() => {
    let nodes = edges.map(({ node }) => ({ ...node }));

    if (shuffled) {
      nodes = shuffle(nodes);
    }

    if (count) {
      return nodes.slice(0, count);
    }

    return nodes;
  }, [edges]);

  return images;
};
