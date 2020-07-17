import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

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

const Opening = ({ active, metaData, onAdvance }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = metaData.map((text) => (
    <AnimatedFrame key={uuid()} delay={DELAY}>
      <h3>{text}</h3>
    </AnimatedFrame>
  ));

  useEffect(() => {
    if (active && currentFrame === frames.length - 1) {
      const timer = setTimeout(() => {
        onAdvance();
      }, DELAY);
      return () => clearTimeout(timer);
    }

    if (active && currentFrame < frames.length - 1) {
      const timer = setTimeout(() => {
        setCurrentFrame(currentFrame + 1);
      }, DELAY);
      return () => clearTimeout(timer);
    }

    return () => {};
  }, [active, currentFrame]);

  const CurrentFrame = useMemo(() => {
    // We don't want to hide the component when we're done since it otherwise causes weird offset
    if (active || currentFrame === frames.length - 1) {
      return frames[currentFrame];
    }

    return ' ';
  }, [active, currentFrame]);

  return <>{CurrentFrame}</>;
};

Opening.propTypes = {
  active: PropTypes.bool,
  metaData: PropTypes.array,
  onAdvance: PropTypes.func,
};

Opening.defaultProps = {
  active: false,
  metaData: [],
  onAdvance: () => {},
};

export default Opening;
