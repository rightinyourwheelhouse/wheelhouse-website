import React, { memo } from 'react';

import { WheelhouseDescriptionContainer } from './wheelhouseDescription.styles';

const WheelhouseDescription = () => (
  <WheelhouseDescriptionContainer>
    <h1>We're javascript experts</h1>
    <h2>About wheel&shy;house</h2>
    <p>
      We are a team of passionate JavaScript developers, working together to
      exchange our expertise with our customers by delivering digital software
      products. We are strong believers of cultivating a culture of supportive
      learning and knowledge exchange.
    </p>
    <p>
      We provide technical design and development of unique web applications for
      a variety of customers. We guide your organization from front-end to
      back-end. More specifically, we design a middleware architecture that
      fully fits the needs of your application through front-end frameworks and
      back-end technologies.
    </p>
  </WheelhouseDescriptionContainer>
);

export default memo(WheelhouseDescription);
