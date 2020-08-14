import React, { memo } from 'react';
import readingTime from 'reading-time';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Stack from '~components/Stack';

import { RecommendationsItemContainer, RecommendationsContainer } from './recommendationsOverview.styles';

import { useBlogOverview } from '~api/insights/useBlogOverview';

import { toKebab } from '~utils/string';

const RecommendationsOverview = ({ count, current }) => {
  const [insights] = useBlogOverview({ count, current });

  return (
    <RecommendationsContainer>
      <Stack space="60px">
        <div>
          {insights.map(({ title, content: { encoded } }) => {
            const { text: time } = readingTime(encoded);
            const url = `/recommendations/${toKebab(title)}`;

            return (
              <Link key={title} to={url} rel="noopener noreferrer" target="_blank">
                <RecommendationsItemContainer>
                  <h3>{title}</h3>
                  <p>{time}</p>
                </RecommendationsItemContainer>
              </Link>
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
