import React, { memo } from 'react';

import { OuterContainer } from './radioRaccoons.styles';

import Button from '~components/Button';

import RadioRaccoonsLogo from '~images/radio-raccoons.svg';
import colors from '~styles/colors';

const RadioRaccoons = () => (
  <OuterContainer>
    <RadioRaccoonsLogo />
    <p>Radio Raccoons is a podcast from our very own business group.</p>
    <p>
      Each episode contains an expert answering questions about the most
      important new technologies.
    </p>
    <Button
      background={colors.textPrimary100}
      color={colors.textPrimary900}
      backgroundHover={colors.textPrimary900}
      colorHover={colors.textPrimary100}
      as="a"
      href="https://radio.raccoons.be/"
      rel="nofollow noreferrer"
      target="_blank"
    >
      Listen to the podcast
    </Button>
  </OuterContainer>
);

export default memo(RadioRaccoons);
