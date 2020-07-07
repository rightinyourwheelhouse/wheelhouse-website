import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    file(relativePath: { eq: "assets/daren-2.jpg" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export const useImage = (path) => {
  const {
    allFile: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const nodes = edges.map(({ node }) => ({ ...node }));

    return nodes;
  }, [edges]);

  return [items];
};
