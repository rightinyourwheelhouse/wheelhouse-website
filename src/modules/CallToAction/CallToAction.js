import { Link } from 'gatsby';
import React from 'react';

import {
  CTAContainer,
  CTACartoon,
  CTAContent,
  CTAText,
  CTATitle,
  CTABody,
} from './callToAction.styles';

import Button from '~components/Button';

function CallToAction() {
  return (
    <CTAContainer>
      <CTAContent>
        <CTAText>
          <CTATitle>Hey! Welcome to the Wheelhouse website!</CTATitle>
          <CTABody>
            If you are interested in Wheelhouse we would love to get to know you
            better!
          </CTABody>
          <Link to="/conversational">
            <Button>Let&apos;s talk</Button>
          </Link>
        </CTAText>
        <CTACartoon src="assets/olivier-cartoon-cta.png" alt="Rafael Cartoon" />
      </CTAContent>
    </CTAContainer>
  );
}

export default CallToAction;
