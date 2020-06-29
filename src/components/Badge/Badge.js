import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { BadgeContainer } from './badge.styles';

import colors from '../../styles/colors';

const Badge = ({ background, children, color }) => (
  <BadgeContainer background={background} color={color}>
    {children}
  </BadgeContainer>
);

Badge.propTypes = {
  background: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Badge.defaultProps = {
  background: colors.accent,
  color: colors.textLight,
};

export default memo(Badge);
