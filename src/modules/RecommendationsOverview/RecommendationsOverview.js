import React, { memo } from 'react';
import readingTime from 'reading-time';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Stack from '~components/Stack';

import Info from '~components/Info';

import { RecommendationsItemContainer, RecommendationsContainer } from './recommendationsOverview.styles';

import { useRecommendationsOverview } from '~api/insights/useRecommendationsOverview';

import { toKebab } from '~utils/string';
import { toShortDate } from '~utils/date';

const RecommendationsOverview = ({ count, current }) => {
  const [recommendations] = useRecommendationsOverview({ count, current });

  return (
    <RecommendationsContainer>
      <Stack space="60px">
        <div>
          {recommendations.map(({
            title, date, author, description,
          }) => {
            const url = `/recommendations/${toKebab(title)}`;

            return (
              <RecommendationsItemContainer>
                <Stack>
                  <Info date={toShortDate(date)} author={author} readTime="2 min read" />
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <Link key={title} to={url}>
                    read more...
                  </Link>
                </Stack>
              </RecommendationsItemContainer>
            );
          })}
        </div>
      </Stack>
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
