import { graphql } from 'gatsby';

export const seo = graphql`
  fragment seo on PagesJsonSeo {
    title
    description
    image {
      childImageSharp {
        resize(width: 900) {
          src
        }
      }
    }
  }
`;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
