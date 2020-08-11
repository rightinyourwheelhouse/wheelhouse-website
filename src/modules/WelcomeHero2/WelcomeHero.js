import React, { memo, useEffect, useState } from 'react';

import { Container } from '~components/layoutComponents';
import Button from '~components/Button';

import {
  WelcomeHeroContainer, MaskContainer, InnerContainer, InnerContent,
} from './welcomeHero.styles';

import colors from '~styles/colors';

import Blob from '~images/blobs/1.svg';
import Welcome from '~images/blobs/welcome.svg';

const WelcomeHero = () => {
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
          <Button
            background={colors.primary}
            color={colors.textLight}
            colorHover={colors.textLight}
            backgroundHover={colors.accent}
          >
            Meet us
          </Button>
        </InnerContent>
      </Container>
    </WelcomeHeroContainer>
  );
};

export default memo(WelcomeHero);
