import PropTypes from 'prop-types';
import React, { memo } from 'react';

import colors from '~styles/colors';

import { CircleBackgroundContainer } from './circleBackground.styles';

function CircleBackground({ background, children, foreground, size }) {
  return (
    <CircleBackgroundContainer
      background={background}
      foreground={foreground}
      size={size}
    >
      {children}
    </CircleBackgroundContainer>
  );
}

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
