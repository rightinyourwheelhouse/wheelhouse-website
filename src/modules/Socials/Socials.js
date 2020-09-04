import React, { memo } from 'react';

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

import { SocialsContainer } from './socials.styles';

import colors from '~styles/colors';

const Socials = () => (
  <SocialsContainer>
    <li>
      <a
        href="https://www.facebook.com/TODO_COMPANY_NAME/"
        rel="noopeener noreferrer"
      >
        <FacebookIcon
          round
          bgStyle={{
            fill: colors.textLight,
          }}
          iconFillColor={colors.textPrimary}
        />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/TODO_COMPANY_NAME/"
        rel="noopeener noreferrer"
      >
        <LinkedinIcon
          round
          bgStyle={{
            fill: colors.textLight,
          }}
          iconFillColor={colors.textPrimary}
        />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/TODO_COMPANY_NAME"
        rel="noopeener noreferrer"
      >
        <TwitterIcon
          round
          bgStyle={{
            fill: colors.textLight,
          }}
          iconFillColor={colors.textPrimary}
        />
      </a>
    </li>
  </SocialsContainer>
);

export default memo(Socials);
