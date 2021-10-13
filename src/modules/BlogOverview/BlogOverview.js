import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { useBlogOverview } from '~api/insights/useBlogOverview';
import InsightsGrid, { gridLayouts } from '~components/InsightsGrid';

const BlogOverview = ({ count, current, layout }) => {
  const [blogItems] = useBlogOverview({ count, current });

  return <InsightsGrid items={blogItems} layout={layout} />;
};

BlogOverview.propTypes = {
  count: PropTypes.number,
  current: PropTypes.string,
  layout: PropTypes.oneOf(
    Object.keys(gridLayouts).map(key => gridLayouts[key]),
  ),
};

BlogOverview.defaultProps = {
  count: null,
  current: null,
  layout: gridLayouts.SUMMARY,
};

export default memo(BlogOverview);
