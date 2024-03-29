import React, { memo } from 'react';

import Button from '~components/Button';

import RadioRaccoonsLogo from '~images/radio-raccoons.svg';
import colors from '~styles/colors';

import { OuterContainer } from './radioRaccoons.styles';

function RadioRaccoons() {
  return (
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
        backgroundHover={colors.textPrimary100}
        colorHover={colors.textPrimary900}
        as="a"
        href="https://radio.raccoons.be/"
        rel="nofollow noreferrer"
        target="_blank"
      >
        Listen to the podcast
      </Button>
    </OuterContainer>
  );
}

export default memo(RadioRaccoons);
