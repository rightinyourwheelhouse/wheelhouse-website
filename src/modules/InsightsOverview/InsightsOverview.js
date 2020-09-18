import React, { memo } from 'react';
import PropTypes from 'prop-types';

import InsightsGrid, { gridLayouts } from '~components/InsightsGrid';

import { useInsightsOverview } from '~api/insights/useInsightsOverview';

const InsightsOverview = ({
  skip, count, current, layout,
}) => {
  const [insights] = useInsightsOverview({ count, current, skip });

  return <InsightsGrid items={insights} layout={layout} />;
};

InsightsOverview.propTypes = {
  count: PropTypes.number,
  current: PropTypes.string,
  layout: PropTypes.oneOf(
    Object.keys(gridLayouts).map((key) => gridLayouts[key])
  ),
  skip: PropTypes.number,
};

InsightsOverview.defaultProps = {
  count: null,
  current: null,
  layout: gridLayouts.HIGHLIGHT,
  skip: 0,
};

export default memo(InsightsOverview);
