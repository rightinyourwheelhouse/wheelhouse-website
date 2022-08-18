import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

import { toKebab } from '~utils/string';

const query = graphql`
  query {
    allBlogs: allHubspotPost(
      filter: {
        state: { eq: "PUBLISHED" }
        topics: { elemMatch: { slug: { eq: "wheelhouse" } } }
      }
    ) {
      edges {
        node {
          id
          author {
            name
          }
          published
          title
          summary
          published
          url
          body
          image {
            publicURL
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`;

export function useBlogOverview({ count = null, current = null }) {
  const {
    allBlogs: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const items = edges
      .map(
        ({
          node: {
            id,
            author: { name },
            title,
            body,
            image,
            published,
          },
        }) => {
          const readTime = `${Math.ceil(body.length / 5 / 180)} min`;
          const url = `/insights/${toKebab(title)}`;

          return {
            author: name,
            date: new Date(published),
            id,
            image,
            readTime,
            title,
            type: 'blog',
            url,
          };
        },
      )
      .filter(({ id }) => id !== current);

    if (count) {
      return items.slice(0, count);
    }

    return items;
  }, [edges, count, current]);

  return [items];
}
