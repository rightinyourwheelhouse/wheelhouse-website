import React from 'react';
import PropTypes from 'prop-types';
import SubTitle from '../../SubTitle';
import Button from '../../Button';

import colors from '../../../styles/colors';

import { StageContainer } from './Stage.styles';

const Opening = ({
  advance,
  position,
}) => (
  <StageContainer position={position}>
    <div>
      <SubTitle>Your name</SubTitle>
      <h2>Tell us who you are!</h2>
    </div>

    <input type="text" placeholder="John Doe" />

    <Button color={colors.primary} onClick={advance}>
      Continue...
    </Button>
  </StageContainer>
);

Opening.propTypes = {
  position: PropTypes.number,
  advance: PropTypes.func,
};

Opening.defaultProps = {
  position: 0,
  advance: () => {},
};

export default Opening;
