import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          ...fluidImage
        }
      }
    }
  }
`;

export const useImage = (filename, src) => {
  const {
    allFile: { edges },
  } = useStaticQuery(query);

  const image = useMemo(
    () => edges
      .map(({ node }) => ({ ...node }))
      .find(({ relativePath }) => relativePath.includes(src || filename)),
    [edges]
  );

  return image;
};
