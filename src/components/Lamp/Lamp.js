import React, { memo } from 'react';

import { LampContainer, Cable, Bulb } from './lamp.styles';

const Lamp = () => (
  <LampContainer>
    <Cable />
    <Bulb />
  </LampContainer>
);

export default memo(Lamp);
