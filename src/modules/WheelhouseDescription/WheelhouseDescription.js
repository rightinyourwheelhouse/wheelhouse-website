import React, { memo } from 'react';

import { WheelhouseDescriptionContainer } from './wheelhouseDescription.styles';

const WheelhouseDescription = () => (
  <WheelhouseDescriptionContainer>
    <h1>We're javascript experts</h1>
    <h2>About wheelhouse</h2>
    <p>
      We are a team of passionate JavaScript developers, working together to
      exchange our expertise to our customers by delivering digital software
      products. We are strong believers of cultivating a culture of supportive
      learning and knowledge exchange.
    </p>
    <p>
      We provide technical design and development of unique web applications for
      a variety of challenging customers. We guide your organization from front
      end to back end: through front-end frameworks and back-end technologies,
      we design a middleware architecture that fully fits the needs of your
      application.
    </p>
  </WheelhouseDescriptionContainer>
);

export default memo(WheelhouseDescription);
