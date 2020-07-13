import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { CardContainer } from './card.styles';
import colors from '~styles/colors';

const Card = ({ background, children, foreground }) => (
  <CardContainer background={background} foreground={foreground}>
    {children}
  </CardContainer>
);

Card.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  foreground: PropTypes.string,
};

Card.defaultProps = {
  background: colors.backgroundTertiary,
  foreground: colors.textPrimary,
};

export default memo(Card);
