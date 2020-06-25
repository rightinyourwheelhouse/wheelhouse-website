import React, { memo } from 'react';

import { Container } from '../layoutComponents';
import Stack from '../Stack';

import Raccoons from '../../images/raccoons.svg';

import { FooterContainer, TwoColumns, RaccoonsBlock } from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <Container>
      <Stack>
        <h2>Get in touch and let us work together</h2>
        <TwoColumns>
          <div>
            <p>
              <a href="mailto:hello@wheelhouse.be">hello@wheelhouse.be</a>
              {' '}
              <br />
              <a href="tel:+32479559012">+32479559012</a>
            </p>
            <p>
              Gaston Geenslaan 11 B4
              {' '}
              <br />
              3001 Leuven
            </p>
          </div>
          <div>
            <a href="https://www.facebook.com/wheelhouse.be/" rel="noopeener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/company/wheelhouse-be/" rel="noopeener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/wheelhouse.be/" rel="noopeener noreferrer">Instagram</a>
          </div>
        </TwoColumns>
        <RaccoonsBlock>
          <p>part of</p>
          <a rel="noreferrer noopener" href="https://www.raccoons.be/">
            <Raccoons />
          </a>
        </RaccoonsBlock>
      </Stack>
    </Container>

  </FooterContainer>
);

export default memo(Footer);
