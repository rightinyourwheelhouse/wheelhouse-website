import { Link } from 'gatsby';
import React, { memo } from 'react';

import Button from '~components/Button';

import Github from '~images/github.svg';

import { Cta, OpenSourceContainer } from './openSource.styles';

const OpenSource = () => (
  <OpenSourceContainer>
    <h2>Have you seen this cat?</h2>
    <Github />
    <p>
      We decided to make our website source code public. We also try to make our
      entire team use it as a playground and contribute to make the website
      reflect who we really are.
    </p>
    <Button
      as="a"
      href="https://github.com/rightinyourwheelhouse/wheelhouse-website"
      target="_blank"
      rel="noreferrer nofollow"
    >
      Check our Github
    </Button>
    <Cta>
      Or take a look at the{' '}
      <Link to="/projects"> projects from our wheelies </Link>
    </Cta>
  </OpenSourceContainer>
);

export default memo(OpenSource);
