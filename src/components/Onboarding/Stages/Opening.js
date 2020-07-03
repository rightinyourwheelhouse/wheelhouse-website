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
      <SubTitle>Get in touch</SubTitle>
      <h2>Play your part in our story</h2>
    </div>

    <Button color={colors.primary} onClick={advance}>
      Get in touch
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
