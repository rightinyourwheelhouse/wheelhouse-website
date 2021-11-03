import React, { memo } from 'react';

import { LampContainer, Cable, Bulb } from './lamp.styles';

function Lamp() {
  return (
    <LampContainer>
      <Cable />
      <Bulb />
    </LampContainer>
  );
}
export default memo(Lamp);
