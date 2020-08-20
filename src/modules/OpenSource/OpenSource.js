import React, { memo } from 'react';

import { OpenSourceContainer } from './openSource.styles';

import Button from '~components/Button';

import Github from '~images/github.svg';
import colors from '~styles/colors';

const OpenSource = () => (
  <OpenSourceContainer>
    <h2>Have you seen this cat?</h2>
    <Github />
    <p>
      We decided to make our website sourcecode public. We also try to make our
      entire team use it as a playground and contribute to make the website
      reflect who we really are.
    </p>
    <Button
      backgroundHover={colors.secundary}
      colorHover={colors.textLight}
      as="a"
      href="https://github.com/rightinyourwheelhouse/wheelhouse-website"
      target="_blank"
      rel="noreferrer nofollow"
    >
      Check it out
    </Button>
  </OpenSourceContainer>
);

export default memo(OpenSource);
