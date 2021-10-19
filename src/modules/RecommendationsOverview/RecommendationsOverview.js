import PropTypes from 'prop-types';
import React, { memo } from 'react';

import InsightsGrid, { gridLayouts } from '~components/InsightsGrid';
import { useRecommendationsOverview } from '~services/insights/useRecommendationsOverview';

const RecommendationsOverview = ({ count, current, layout }) => {
  const [recommendations] = useRecommendationsOverview({ count, current });

  return <InsightsGrid items={recommendations} layout={layout} />;
};

RecommendationsOverview.propTypes = {
  count: PropTypes.number,
  current: PropTypes.string,
  layout: PropTypes.oneOf(
    Object.keys(gridLayouts).map(key => gridLayouts[key]),
  ),
};

RecommendationsOverview.defaultProps = {
  count: null,
  current: null,
  layout: gridLayouts.HIGHLIGHT,
};

export default memo(RecommendationsOverview);
