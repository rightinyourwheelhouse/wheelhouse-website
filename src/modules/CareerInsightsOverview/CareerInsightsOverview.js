import PropTypes from 'prop-types';
import React, { memo } from 'react';

import CareerInsightsGrid, {
  gridLayouts,
} from '~components/CareerInsightsGrid';
import { useInsightsOverview } from '~services/insights/useInsightsOverview';

function CareerInsightsOverview({ skip, count, current, layout }) {
  const [insights] = useInsightsOverview({ count, current, skip });

  return <CareerInsightsGrid items={insights} layout={layout} />;
}

CareerInsightsOverview.propTypes = {
  count: PropTypes.number,
  current: PropTypes.string,
  layout: PropTypes.oneOf(
    Object.keys(gridLayouts).map(key => gridLayouts[key]),
  ),
  skip: PropTypes.number,
};

CareerInsightsOverview.defaultProps = {
  count: null,
  current: null,
  layout: gridLayouts.HIGHLIGHT,
  skip: 0,
};

export default memo(CareerInsightsOverview);
