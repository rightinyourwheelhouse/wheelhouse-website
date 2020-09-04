import React, { memo, useMemo } from 'react';
import readingTime from 'reading-time';
import PropTypes from 'prop-types';

import InsightsGrid, { gridLayouts } from '~components/InsightsGrid';

import { useRecommendationsOverview } from '~api/insights/useRecommendationsOverview';

import { toKebab } from '~utils/string';
import { toShortDate } from '~utils/date';

const RecommendationsOverview = ({ count, current, layout }) => {
  const [allRecommendations] = useRecommendationsOverview({ count, current });

  const items = useMemo(
    () => allRecommendations.map(
      ({
        author, date, description, image, title, introduction, slot,
      }) => {
        const url = `/recommendations/${toKebab(title)}`;
        const { text: readTime } = readingTime(introduction + slot);

        return {
          author,
          date: toShortDate(date),
          description,
          image,
          readTime,
          title,
          type: 'recommendation',
          url,
        };
      }
    ),
    [allRecommendations]
  );

  return <InsightsGrid items={items} layout={layout} />;
};

RecommendationsOverview.propTypes = {
  count: PropTypes.number,
  current: PropTypes.string,
  layout: PropTypes.oneOf(Object.keys(gridLayouts).map((key) => gridLayouts[key])),
};

RecommendationsOverview.defaultProps = {
  count: null,
  current: null,
  layout: gridLayouts.HIGHLIGHT,
};

export default memo(RecommendationsOverview);
