import React, { memo } from 'react';

import { OpenSourceContainer } from './openSource.styles';

import Button from '~components/Button';
import Stack from '~components/Stack';

import Github from '~images/github.svg';
import colors from '~styles/colors';

const OpenSource = () => (
  <OpenSourceContainer>
    <h2>Do you know this cat?</h2>
    <Github />
    <p>
      something about open sourcing the website
    </p>
    <Button backgroundHover={colors.backgroundPrimary} colorHover={colors.textPrimary} as="a" href="/">Check it out</Button>
  </OpenSourceContainer>
);

export default memo(OpenSource);
