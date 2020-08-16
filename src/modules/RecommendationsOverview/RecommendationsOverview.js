import React, { memo } from 'react';
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
  const [recommendations] = useRecommendationsOverview({ count, current });

  return (
    <RecommendationsContainer>
      <div>
        {recommendations.map(
          ({
            title, date, author, description, introduction, slot, image,
          }) => {
            const url = `/recommendations/${toKebab(title)}`;
            const { text: time } = readingTime(introduction + slot);

            return (
              <RecommendationsItemContainer>
                <Stack>
                  {image && (
                  <Link key={title} to={url}>
                    <RecommendationsImage>
                      <Img fluid={image.childImageSharp.fluid} />
                    </RecommendationsImage>
                  </Link>
                  )}
                  <Link key={title} to={url}>
                    <h3>{title}</h3>
                  </Link>
                  <p>{description}</p>

                  <Info
                    date={toShortDate(date)}
                    author={author}
                    readTime={time}
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
