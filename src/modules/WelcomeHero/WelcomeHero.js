import { Link } from 'gatsby';
import React, { memo, useEffect, useState } from 'react';

import Button from '~components/Button';
import { Container } from '~components/layoutComponents';
import MarkWithContent from '~components/MarkWithContent';

import Blob from '~images/blobs/1.svg';
import Welcome from '~images/blobs/welcome.svg';
import TeamRotation from '~modules/TeamRotation';

import {
  WelcomeHeroContainer,
  MaskContainer,
  InnerContainer,
  InnerContent,
} from './welcomeHero.styles';

function WelcomeHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <WelcomeHeroContainer>
      <Container relative>
        <InnerContainer loaded={loaded}>
          <MaskContainer loaded={loaded}>
            <Blob />
            <Blob />
            <Blob />
            <Blob />
            <Blob />
            <Blob />
            <Blob />
          </MaskContainer>
          <Welcome />
        </InnerContainer>
        <InnerContent centered>
          <Button to="/team" as={Link}>
            Meet us
          </Button>
          <div>
            get to know our{' '}
            <MarkWithContent text="team">
              <TeamRotation />
            </MarkWithContent>
          </div>
        </InnerContent>
      </Container>
    </WelcomeHeroContainer>
  );
}

export default memo(WelcomeHero);
