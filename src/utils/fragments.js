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
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;
