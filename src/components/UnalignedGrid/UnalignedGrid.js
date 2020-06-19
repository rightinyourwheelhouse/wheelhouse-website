import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { UnalignedGridContainer, UnalignedItem, Column } from './unalignedGrid.styles';

const UnalignedGrid = ({ children }) => {
  const firstColumn = [];
  const secondColumn = [];

  const halfwayThroughIndex = Math.floor(children.length / 2);

  React.Children.map(children, (child, i) => {
    const clonedChild = React.cloneElement(child);

    // eslint-disable-next-line react/no-array-index-key
    const el = <UnalignedItem key={i}>{clonedChild}</UnalignedItem>;
    if (i >= halfwayThroughIndex) {
      return secondColumn.push(el);
    }

    return firstColumn.push(el);
  });

  return (
    <UnalignedGridContainer>
      <Column>
        {firstColumn}
      </Column>
      <Column>
        {secondColumn}
      </Column>
    </UnalignedGridContainer>
  );
};

UnalignedGrid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default memo(UnalignedGrid);
