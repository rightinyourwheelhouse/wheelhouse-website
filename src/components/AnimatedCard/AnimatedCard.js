import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import { isBrowser } from '~utils/browser';

const height = isBrowser ? window.innerHeight : 0;
const width = isBrowser ? window.innerWidth : 0;

const calc = (x, y) => [-(y - height / 2) / 20, (x - width / 3) / 20, 1.1];
const trans = (x, y, s) => `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AnimatedCard = ({ children }) => {
  const [props, set] = useSpring(() => ({
    config: { friction: 40, mass: 5, tension: 350 },
    xys: [0, 0, 1],
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </animated.div>
  );
};

AnimatedCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]).isRequired,
};

export default memo(AnimatedCard);
