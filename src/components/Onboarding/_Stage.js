import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { StageContainer } from './_stage.styles';

const Stage = ({
  Component,
  action,
  active,
  onAdvance,
  onValueChange,
  ...props
}) => {
  const handleAdvance = useCallback(
    () => {
      onAdvance();

      if (action) {
        action();
      }
    },
    [onAdvance, action],
  );

  return (
    <StageContainer visible={active} {...props}>
      <Component
        active={active}
        onAdvance={handleAdvance}
        onValueChange={onValueChange}
        {...props}
      />
    </StageContainer>
  );
};

Stage.propTypes = {
  Component: PropTypes.func.isRequired,
  action: PropTypes.func,
  active: PropTypes.bool,
  onAdvance: PropTypes.func,
  onValueChange: PropTypes.func,
};

Stage.defaultProps = {
  action: null,
  active: false,
  onAdvance: () => {},
  onValueChange: () => {},
};

export default memo(Stage);
