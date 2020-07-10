import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { StageContainer } from './Stage.styles';

const DELAY = 2000;

const AnimatedFrame = styled.div`
  @keyframes smooth-talking {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: smooth-talking ${({ delay }) => delay / 1000}s forwards;
`;

const Opening = ({
  advance,
  visible,
  metaData,
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = metaData.map((text) => (
    <AnimatedFrame key={uuid()} delay={DELAY}>
      <h1>{text}</h1>
    </AnimatedFrame>
  ));

  useEffect(() => {
    if (visible && currentFrame === frames.length - 1) {
      const timer = setTimeout(() => {
        advance();
      }, DELAY);
      return () => clearTimeout(timer);
    }

    if (visible && currentFrame < frames.length - 1) {
      const timer = setTimeout(() => {
        setCurrentFrame(currentFrame + 1);
      }, DELAY);
      return () => clearTimeout(timer);
    }

    return () => {};
  }, [visible, currentFrame]);

  const CurrentFrame = useMemo(() => {
    // We don't want to hide the component when we're done since it otherwise causes weird offset
    if (visible || currentFrame === frames.length - 1) {
      return frames[currentFrame];
    }

    return ' ';
  }, [visible, currentFrame]);

  return (
    <StageContainer visible={visible}>
      {CurrentFrame}
    </StageContainer>
  );
};

Opening.propTypes = {
  advance: PropTypes.func,
  visible: PropTypes.bool,
  metaData: PropTypes.array,
};

Opening.defaultProps = {
  advance: () => {},
  visible: false,
  metaData: [],
};

export default Opening;
