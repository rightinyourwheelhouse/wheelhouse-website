import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

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

export function useRecommendationsOverview({
  count = null,
  current = null,
} = {}) {
  const {
    allRecommendationsJson: { edges },
  } = useStaticQuery(query);

  const selectedItems = useMemo(() => {
    const items = edges
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
          const introductionLength = introduction?.length || 0;
          const slotLength = slot?.length || 0;
          const readTime = `${Math.ceil(
            (introductionLength + slotLength) / 5 / 180,
          )} min`;

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
        },
      )
      .filter(({ id }) => id !== current);

    if (count) {
      return items.slice(0, count);
    }

    return items;
  }, [edges, count, current]);

  return [selectedItems];
}
