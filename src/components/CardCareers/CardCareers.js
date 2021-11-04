import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { CardContainer } from './cardcareers.style';

import colors from '~styles/colors';

function CardCareers({ background, children, foreground }) {
  return (
    <CardContainer background={background} foreground={foreground}>
      {children}
    </CardContainer>
  );
}

CardCareers.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  foreground: PropTypes.string,
};

CardCareers.defaultProps = {
  background: colors.backgroundPrimary800,
  foreground: colors.textPrimary900,
};

export default memo(CardCareers);
