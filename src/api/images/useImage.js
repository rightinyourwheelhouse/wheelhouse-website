import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "general" } }) {
      edges {
        node {
          relativePath
          ...fluidImage
        }
      }
    }
  }
`;

export const useImage = (filename) => {
  const {
    allFile: { edges },
  } = useStaticQuery(query);

  const image = useMemo(
    () => edges
      .map(({ node }) => ({ ...node }))
      .find(({ relativePath }) => relativePath.includes(filename)),
    [edges]
  );

  return image;
};
