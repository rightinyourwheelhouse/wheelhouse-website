import React, {
  memo, useCallback, useState, useMemo,
} from 'react';
import readingTime from 'reading-time';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Stack from '~components/Stack';
import Info from '~components/Info';

import {
  RecommendationsItemContainer,
  RecommendationsContainer,
  RecommendationsImage,
} from './recommendationsOverview.styles';

import { useRecommendationsOverview } from '~api/insights/useRecommendationsOverview';

import { toKebab } from '~utils/string';
import { toShortDate } from '~utils/date';

const RecommendationsOverview = ({ count, current }) => {
  const [allRecommendations] = useRecommendationsOverview({ count, current });
  const [firstItemHeight, setfirstItemHeight] = useState(0);

  const recommendations = useMemo(
    () => [...allRecommendations.slice(1, allRecommendations.length)],
    [allRecommendations]
  );

  const {
    image: firstItemImage,
    title: firstItemTitle,
    description: firstItemDescription,
    date: firstItemDate,
    author: firstItemAuthor,
    introduction: firstItemIntroduction,
    slot: firstItemSlot,
  } = allRecommendations[0] || {};

  const firstItemUrl = `/recommendations/${toKebab(firstItemTitle)}`;
  const { text: firstItemReadingTime } = readingTime(
    firstItemIntroduction + firstItemSlot
  );

  const refCallback = useCallback((node) => {
    if (node) {
      setfirstItemHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <RecommendationsContainer>
      <div>
        {firstItemTitle && (
          <RecommendationsItemContainer
            height={firstItemHeight}
            className="sticky"
          >
            <div ref={refCallback}>
              <Stack>
                {firstItemImage && (
                  <Link to={firstItemUrl}>
                    <RecommendationsImage>
                      <Img fluid={firstItemImage.childImageSharp.fluid} />
                    </RecommendationsImage>
                  </Link>
                )}
                <Link to={firstItemUrl}>
                  <h3>{firstItemTitle}</h3>
                </Link>
                <p>{firstItemDescription}</p>

                <Info
                  date={toShortDate(firstItemDate)}
                  author={firstItemAuthor}
                  readTime={firstItemReadingTime}
                />
              </Stack>
            </div>
          </RecommendationsItemContainer>
        )}
      </div>
      <div>
        {recommendations.map(
          ({
            title: itemTitle,
            date: itemDate,
            author: itemAuthor,
            description: itemDescription,
            introduction: itemIntroduction,
            slot: itemSlot,
            image: itemImage,
          }) => {
            const itemUrl = `/recommendations/${toKebab(itemTitle)}`;
            const { text: itemReadingTime } = readingTime(
              itemIntroduction + itemSlot
            );

            return (
              <RecommendationsItemContainer key={itemTitle}>
                <Stack>
                  {itemImage && (
                    <Link to={itemUrl}>
                      <RecommendationsImage>
                        <Img fluid={itemImage.childImageSharp.fluid} />
                      </RecommendationsImage>
                    </Link>
                  )}
                  <Link to={itemUrl}>
                    <h3>{itemTitle}</h3>
                  </Link>
                  <p>{itemDescription}</p>

                  <Info
                    date={toShortDate(itemDate)}
                    author={itemAuthor}
                    readTime={itemReadingTime}
                  />
                </Stack>
              </RecommendationsItemContainer>
            );
          }
        )}
      </div>
    </RecommendationsContainer>
  );
};

RecommendationsOverview.propTypes = {
  count: PropTypes.number,
  current: PropTypes.string,
};

RecommendationsOverview.defaultProps = {
  count: null,
  current: null,
};

export default memo(RecommendationsOverview);
