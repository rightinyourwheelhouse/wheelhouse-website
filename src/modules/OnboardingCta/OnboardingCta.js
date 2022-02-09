import { Link } from 'gatsby';
import * as React from 'react';

import Button from '~components/Button';

import * as S from './onboardingCta.styles';

function OnboardingCta() {
  return (
    <div>
      <S.Content>
        <S.Text>
          <S.Title>Hey! Welcome to the Wheelhouse website!</S.Title>
          <S.Body>
            If you are interested in Wheelhouse we would love to get to know you
            better!
          </S.Body>
          <Link to="/conversational">
            <Button>Let&apos;s talk</Button>
          </Link>
        </S.Text>

        <S.Cartoon
          src="/assets/olivier-cartoon-cta.png"
          alt="Olivier Cartoon"
        />
      </S.Content>
    </div>
  );
}

export default OnboardingCta;
