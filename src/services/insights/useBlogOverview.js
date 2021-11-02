import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';
import readingTime from 'reading-time';

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
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
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
    const nodes = edges
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
          const { text: time } = readingTime(encoded);
          const url = `/insights/${toKebab(title)}`;
          const date = new Date(pubDate).toString();

          return {
            author,
            date,
            id,
            image,
            readTime: time,
            title,
            type: 'blog',
            url,
          };
        },
      )
      .filter(({ id }) => id !== current);

    if (count) {
      return nodes.slice(0, count);
    }

    return nodes;
  }, [edges, count, current]);

  return [items];
}
