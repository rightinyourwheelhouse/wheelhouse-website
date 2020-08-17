import React, { memo, useMemo } from 'react';
import readingTime from 'reading-time';
import PropTypes from 'prop-types';

import StickyAside from '~components/StickyAside';

import { useRecommendationsOverview } from '~api/insights/useRecommendationsOverview';

import { toKebab } from '~utils/string';
import { toShortDate } from '~utils/date';

const RecommendationsOverview = ({ count, current }) => {
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
          url,
        };
      }
    ),
    [allRecommendations]
  );

  return <StickyAside items={items} />;
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
