import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowIcon from '~images/icons/angle-left-solid.svg';
import CircleBackground from '~components/CircleBackground';

import { StageContainer } from './_stage.styles';

const IconContainer = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: -50px;
  opacity: 0.5;

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
          <IconContainer>
            <CircleBackground>
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
  onValueChange: PropTypes.func,
};

Stage.defaultProps = {
  action: null,
  active: false,
  onAdvance: () => {},
  onValueChange: () => {},
};

export default memo(Stage);
