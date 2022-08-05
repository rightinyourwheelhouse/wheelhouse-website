import PropTypes from 'prop-types';
import React, { memo } from 'react';

import colors from '~styles/colors';

import { CardContainer } from './cardCase.style';

function CardCase({ background, children, foreground }) {
  return (
    <CardContainer background={background} foreground={foreground}>
      {children}
    </CardContainer>
  );
}

CardCase.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  foreground: PropTypes.string,
};

CardCase.defaultProps = {
  background: colors.backgroundPrimary800,
  foreground: colors.textPrimary900,
};

export default memo(CardCase);
