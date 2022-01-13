import PropTypes from 'prop-types';
import React, { memo } from 'react';

import colors from '~styles/colors';

import { BadgeContainer } from './badge.styles';

function Badge({ background, children, color }) {
  return (
    <BadgeContainer background={background} color={color}>
      {children}
    </BadgeContainer>
  );
}

Badge.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  color: PropTypes.string,
};

Badge.defaultProps = {
  background: colors.textPrimary900,
  color: colors.textPrimary100,
};

export default memo(Badge);
