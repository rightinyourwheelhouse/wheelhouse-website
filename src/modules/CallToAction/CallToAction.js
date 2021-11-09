import { XIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

import {
  CTAContainer,
  CTACartoon,
  CTAContent,
  CTAText,
  CTATitle,
  CTABody,
  CTAClose,
} from './callToAction.styles';

import Button from '~components/Button';

function CallToAction() {
  const [ctaStatus, setCtaStatus] = useState(false);

  useEffect(() => {
    checkLocal();
  }, [ctaStatus]);

  function checkLocal() {
    if (sessionStorage.getItem('cta') === null) {
      setTimeout(() => {
        setCtaStatus(true);
      }, 5000);
    }
  }

  function handleClose() {
    sessionStorage.setItem('cta', true);
    setCtaStatus(false);
  }

  return (
    <div
      style={
        ctaStatus
          ? { transition: 'all 0.2s ease-in', opacity: 1 }
          : { transition: 'all 0.2s ease-in', opacity: 0 }
      }
    >
      <CTAContainer>
        <CTAContent>
          <CTAText>
            <CTAClose onClick={() => handleClose()}>
              <XIcon width="24" />
            </CTAClose>
            <CTATitle>Hey! Welcome to the Wheelhouse website!</CTATitle>
            <CTABody>
              If you are interested in Wheelhouse we would love to get to know
              you better!
            </CTABody>
            <Link to="/conversational">
              <Button>Let&apos;s talk</Button>
            </Link>
          </CTAText>

          <CTACartoon
            src="assets/olivier-cartoon-cta.png"
            alt="Rafael Cartoon"
          />
        </CTAContent>
      </CTAContainer>
    </div>
  );
}

export default CallToAction;
