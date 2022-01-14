import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

const query = graphql`
  query {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
      nodes {
        base
        relativePath
        ...fluidImage
      }
    }
  }
`;

export function useImage(filename, src) {
  const {
    allFile: { nodes },
  } = useStaticQuery(query);

  const image = useMemo(
    () =>
      nodes
        .map(node => ({ ...node }))
        .find(({ relativePath }) => relativePath.includes(src || filename)),
    [nodes, filename, src],
  );

  return image;
}
