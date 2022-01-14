import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

import { toKebab } from '~utils/string';

const query = graphql`
  query {
    allFeedBlog(filter: { categories: { eq: "Wheelhouse" } }) {
      edges {
        node {
          id
          title
          pubDate
          link
          content {
            encoded
          }
          creator
          enclosure {
            url
          }
          image {
            extension
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`;

export function useBlogOverview({ count = null, current = null }) {
  const {
    allFeedBlog: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const items = edges
      .map(
        ({
          node: {
            id,
            creator: author,
            title,
            content: { encoded },
            pubDate,
            image,
          },
        }) => {
          const readTime = `${Math.ceil(encoded.length / 5 / 180)} min`;
          const url = `/insights/${toKebab(title)}`;
          const date = new Date(pubDate).toString();

          return {
            author,
            date,
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
