import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import readingTime from 'reading-time';

import { toKebab } from '~utils/string';

const query = graphql`
  query {
    allRecommendationsJson(
      filter: { live: { eq: true } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          date
          author
          title
          items {
            title
            author
            url
            description
            pickedBy
          }
          tags
          description
          introduction
          slot
          image {
            id
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export const useRecommendationsOverview = ({
  count = null,
  current = null,
} = {}) => {
  const {
    allRecommendationsJson: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    const nodes = edges
      .map(
        ({
          node: {
            author,
            date,
            description,
            id,
            image,
            items,
            introduction,
            slot,
            title,
          },
        }) => {
          const url = `/recommendations/${toKebab(title)}`;
          const { text: readTime } = readingTime(introduction + slot);

          return {
            author,
            date,
            description,
            id,
            image,
            items,
            readTime,
            title,
            type: 'recommendation',
            url,
          };
        }
      )
      .filter(({ id }) => id !== current);

    if (count) {
      return nodes.slice(0, count);
    }

    return nodes;
  }, [edges, count]);

  return [items];
};
