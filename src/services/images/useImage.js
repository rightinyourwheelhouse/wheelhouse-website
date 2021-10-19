import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

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
    () =>
      edges
        .map(({ node }) => ({ ...node }))
        .find(({ relativePath }) => relativePath.includes(src || filename)),
    [edges, filename, src],
  );

  return image;
};
