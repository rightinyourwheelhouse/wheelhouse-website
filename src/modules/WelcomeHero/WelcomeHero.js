import React, { memo } from 'react';

import { Container } from '../../components/layoutComponents';
import Button from '../../components/Button';
import DamnBigTitle from '../../components/text/DamnBigTitle';
import ColorSpinner from '../../components/ColorSpinner';
import MarkWithContent from '../../components/MarkWithContent';
import Stack from '../../components/Stack';

import TeamRotation from '../TeamRotation';

import { WelcomeHeroContainer } from './welcomeHero.styles';

import colors from '../../styles/colors';

import Logo from '../../images/wheelhouse.svg';

const WelcomeHero = () => (
  <WelcomeHeroContainer>
    <Container>
      <Stack space="32px">
        <ColorSpinner>
          <Logo />
        </ColorSpinner>
        <DamnBigTitle>
          Hi! We&apos;re
          {' '}
          <br />
          Wheelhouse
        </DamnBigTitle>
        <div>
          We are a
          {' '}
          <MarkWithContent
            text="team"
          >
            <TeamRotation />
          </MarkWithContent>
          {' '}
          of passionate JavaScript developers, eager to exchange our expertise
          to eachother and our customers.
          <Button color={colors.accent}>Meet us</Button>
        </div>
      </Stack>
    </Container>
  </WelcomeHeroContainer>
);

export default memo(WelcomeHero);
