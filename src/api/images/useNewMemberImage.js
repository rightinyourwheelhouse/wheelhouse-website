import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    file(name: { eq: "new-member" }) {
      relativePath
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export const useNewMemberImage = () => {
  const { file } = useStaticQuery(query);

  return file;
};
