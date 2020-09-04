import React, { memo, useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { Container } from '~components/layoutComponents';
import Button from '~components/Button';
import MarkWithContent from '~components/MarkWithContent';

import {
  WelcomeHeroContainer, MaskContainer, InnerContainer, InnerContent,
} from './welcomeHero.styles';

import TeamRotation from '~modules/TeamRotation';

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
            color={colors.textPrimary100}
            colorHover={colors.textPrimary100}
            backgroundHover={colors.accent}
            to="/team"
            as={Link}
          >
            Meet us
          </Button>
          <div>
            get to know our
            {' '}
            <MarkWithContent text="team">
              <TeamRotation />
            </MarkWithContent>
          </div>
        </InnerContent>
      </Container>
    </WelcomeHeroContainer>
  );
};

export default memo(WelcomeHero);
