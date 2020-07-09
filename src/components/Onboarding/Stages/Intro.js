import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { StageContainer } from './Stage.styles';

const DELAY = 4000;

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
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    (
      <AnimatedFrame key="frame-1" delay={DELAY}>
        <h1>Hi!</h1>
      </AnimatedFrame>
    ),
    (
      <AnimatedFrame key="frame-2" delay={DELAY}>
        <h2>We&apos;re very excited to have you here...</h2>
      </AnimatedFrame>
    ),
    (
      <AnimatedFrame key="frame-3" delay={DELAY}>
        <h2>And we&apos;re also very excited to tell you more about us.</h2>
      </AnimatedFrame>
    ),
  ];

  useEffect(() => {
    if (currentFrame === frames.length - 1) {
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
};

Opening.defaultProps = {
  advance: () => {},
  visible: false,
};

export default Opening;
