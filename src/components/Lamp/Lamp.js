import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { LampContainer, Cable, Bulb } from './lamp.styles';

const Lamp = () => (
  <LampContainer>
    <Cable />
    <Bulb />
  </LampContainer>
);

Lamp.propTypes = {};

export default memo(Lamp);
