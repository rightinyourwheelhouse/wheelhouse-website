import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { BadgeContainer } from './badge.styles';

const Badge = ({ children }) => (
  <BadgeContainer>
    {children}
  </BadgeContainer>
);

Badge.propTypes = {
  children: PropTypes.string.isRequired,
};

export default memo(Badge);
