import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    file(name: { eq: "new-member" }) {
      relativePath
      extension
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
  }
`;

export function useNewMemberImage() {
  const { file } = useStaticQuery(query);

  return file;
}
