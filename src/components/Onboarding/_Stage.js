import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { StageContainer, StageContent } from './_stage.styles';

const Stage = ({
  Component,
  active,
  metaData,
  onAdvance,
  onValueChange,
  ...props
}) => (
  <StageContainer visible={active} {...props}>
    <Component
      active={active}
      onAdvance={onAdvance}
      onValueChange={onValueChange}
      metaData={metaData}
    />
  </StageContainer>
);

Stage.propTypes = {
  Component: PropTypes.func.isRequired,
  active: PropTypes.bool,
  metaData: PropTypes.array,
  onAdvance: PropTypes.func,
  onValueChange: PropTypes.func,
};

Stage.defaultProps = {
  active: false,
  metaData: [],
  onAdvance: () => {},
  onValueChange: () => {},
};

export default memo(Stage);
