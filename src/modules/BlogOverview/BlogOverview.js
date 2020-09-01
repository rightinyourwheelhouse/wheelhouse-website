import React, { memo, useMemo } from 'react';
import readingTime from 'reading-time';
import PropTypes from 'prop-types';

import InsightsGrid, { gridLayouts } from '~components/InsightsGrid';

import { useBlogOverview } from '~api/insights/useBlogOverview';

import { toKebab } from '~utils/string';
import { toShortDate } from '~utils/date';

const BlogOverview = ({ count, current, layout }) => {
  const [originalBlogItems] = useBlogOverview({ count, current });

  const blogItems = useMemo(() => originalBlogItems.map(({
    creator: author,
    title,
    content: { encoded },
    pubDate,
    image,
  }) => {
    const { text: time } = readingTime(encoded);
    const url = `/insights/${toKebab(title)}`;
    const dte = new Date(pubDate);

    return {
      author,
      date: toShortDate(dte),
      image,
      readTime: time,
      title,
      type: 'blog',
      url,
    };
  }), [originalBlogItems]);

  return (
    <InsightsGrid items={blogItems} layout={layout} />
  );
};

BlogOverview.propTypes = {
  count: PropTypes.number,
  current: PropTypes.string,
  layout: PropTypes.oneOf(Object.keys(gridLayouts).map((key) => gridLayouts[key])),
};

BlogOverview.defaultProps = {
  count: null,
  current: null,
  layout: gridLayouts.SUMMARY,
};

export default memo(BlogOverview);
