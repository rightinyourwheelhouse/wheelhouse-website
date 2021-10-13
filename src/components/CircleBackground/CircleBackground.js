import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { CircleBackgroundContainer } from './circleBackground.styles';

import colors from '~styles/colors';

const CircleBackground = ({ background, children, foreground, size }) => (
  <CircleBackgroundContainer
    background={background}
    foreground={foreground}
    size={size}
  >
    {children}
  </CircleBackgroundContainer>
);

CircleBackground.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  foreground: PropTypes.string,
  size: PropTypes.string,
};

CircleBackground.defaultProps = {
  background: colors.backgroundPrimary100,
  foreground: colors.textPrimary100,
  size: '30px',
};

export default memo(CircleBackground);
