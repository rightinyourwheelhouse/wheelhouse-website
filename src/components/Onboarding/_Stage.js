import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowIcon from '~images/icons/angle-left-solid.svg';
import CircleBackground from '~components/CircleBackground';

import { StageContainer } from './_stage.styles';

const IconContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  opacity: 0.2;
  cursor: pointer;

  svg {
    fill: white;
    width: 30%;
  }
`;

const Stage = ({
  Component,
  action,
  active,
  onAdvance,
  onReturn,
  onValueChange,
  isFirst,
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
      {
        isFirst ? '' : (
          <IconContainer title="View previous panel again" onClick={onReturn}>
            <CircleBackground size="20px">
              <ArrowIcon />
            </CircleBackground>
          </IconContainer>
        )
      }

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
  isFirst: PropTypes.bool.isRequired,
  onAdvance: PropTypes.func,
  onReturn: PropTypes.func,
  onValueChange: PropTypes.func,
};

Stage.defaultProps = {
  action: null,
  active: false,
  onAdvance: () => {},
  onReturn: () => {},
  onValueChange: () => {},
};

export default memo(Stage);
