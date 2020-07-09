import React from 'react';
import PropTypes from 'prop-types';
import SubTitle from '../../SubTitle';
import Button from '../../Button';

import { StageContainer } from './Stage.styles';

const Opening = ({
  advance,
  visible,
}) => (
  <StageContainer visible={visible}>
    <div>
      <SubTitle>Get in touch</SubTitle>
      <h2>Play your part in our story</h2>
    </div>

    <Button onClick={advance}>
      Get in touch
    </Button>
  </StageContainer>
);

Opening.propTypes = {
  advance: PropTypes.func,
  visible: PropTypes.bool,
};

Opening.defaultProps = {
  advance: () => {},
  visible: false,
};

export default Opening;
