import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    file(name: { eq: "new-member" }) {
      relativePath
      extension
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export function useNewMemberImage() {
  const { file } = useStaticQuery(query);

  return file;
}
