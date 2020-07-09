import React, { memo } from 'react';

import { Link } from 'gatsby';
import { Container } from '~components/layoutComponents';
import Stack from '~components/Stack';
import TwoColumns from '~components/TwoColumns';

import Raccoons from '~images/raccoons.svg';

import { useNavigation } from '~api/navigation/useNavigation';

import {
  FooterContainer,
  RaccoonsBlock,
  Title,
  LinksContainer,
} from './footer.styles';

const Footer = () => {
  const navigationItems = useNavigation();

  return (
    <FooterContainer>
      <Container>
        <Stack>
          <h2>Get in touch and let us work together</h2>
          <TwoColumns>
            <div>
              <LinksContainer>
                <p>
                  <a href="mailto:hello@wheelhouse.be">hello@wheelhouse.be</a>
                </p>
                <RaccoonsBlock>
                  <p>part of</p>
                  <a rel="noreferrer noopener" href="https://www.raccoons.be/">
                    <Raccoons />
                  </a>
                </RaccoonsBlock>
              </LinksContainer>
            </div>
            <div>
              <TwoColumns>
                <div>
                  <LinksContainer>
                    <Title>Social</Title>
                    <a
                      href="https://www.facebook.com/wheelhouse.be/"
                      rel="noopeener noreferrer"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.linkedin.com/company/wheelhouse-be/"
                      rel="noopeener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/wheelhouse.be/"
                      rel="noopeener noreferrer"
                    >
                      Instagram
                    </a>
                  </LinksContainer>
                </div>
                <div>
                  <LinksContainer>
                    <Title>Navigation</Title>
                    {navigationItems.map(({ href, title }) => (
                      <Link key={title} to={href}>
                        {title}
                      </Link>
                    ))}
                    <Link to="/careers">Careers</Link>
                    <a
                      href="https://github.com/rightinyourwheelhouse/wheelhouse-website"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Github
                    </a>
                  </LinksContainer>
                </div>
              </TwoColumns>
            </div>
          </TwoColumns>
          <p>
            Gaston Geenslaan 11 B4 - 3001 Leuven
            {' '}
            <a href="tel:+32479559012">+32479559012</a>
          </p>
          <p className="disclaimer">
            <a href="/">Privacy policy</a>
          </p>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default memo(Footer);
