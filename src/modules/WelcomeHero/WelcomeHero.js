import { Link } from 'gatsby';
import React, { memo, useEffect, useState } from 'react';

import Button from '~components/Button';
import { Container } from '~components/layoutComponents';

import Blob from '~images/blobs/1.svg';
import Welcome from '~images/blobs/welcome.svg';

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
        </InnerContent>
      </Container>
    </WelcomeHeroContainer>
  );
}

export default memo(WelcomeHero);
