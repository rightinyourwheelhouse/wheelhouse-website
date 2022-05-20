import React, { memo } from 'react';

import { WheelhouseDescriptionContainer } from './wheelhouseDescription.styles';

function WheelhouseDescription() {
  return (
    <WheelhouseDescriptionContainer>
      <h1>We&apos;re javascript experts</h1>
      <h2>About wheel&shy;house</h2>
      <p>
        We are a team of passionate JavaScript developers, working together to
        exchange our expertise with our customers by delivering digital software
        products. We are strong believers of cultivating a culture of supportive
        learning and knowledge exchange.
      </p>
    </WheelhouseDescriptionContainer>
  );
}

export default memo(WheelhouseDescription);
