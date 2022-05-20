import { Link } from 'gatsby';
import React, { memo } from 'react';

import { Container } from '~components/layoutComponents';
import Stack from '~components/Stack';
import TwoColumns from '~components/TwoColumns';
import Raccoons from '~images/raccoons.svg';
import OnboardingCta from '~modules/OnboardingCta';

import { useNavigation } from '~services/navigation/useNavigation';
import { useOfficeOverview } from '~services/office/useOfficeOverview';

import {
  FooterContainer,
  RaccoonsBlock,
  Title,
  LinksContainer,
} from './footer.styles';

function Footer() {
  const navigationItems = useNavigation();
  const offices = useOfficeOverview();

  return (
    <>
      <OnboardingCta />
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
                  <p>
                    <a href="tel:+32479559012">+32479559012</a>
                  </p>
                  <RaccoonsBlock>
                    <p>part of</p>
                    <a
                      rel="noreferrer noopener"
                      href="https://www.raccoons.be/"
                    >
                      <Raccoons />
                    </a>
                  </RaccoonsBlock>
                </LinksContainer>
              </div>
              <div>
                <TwoColumns firstColumnWidth="30%">
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
                      <Link to="/conversational">Contact</Link>
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

            {offices.map(({ street, city }, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i}>
                {street}, {city}
              </p>
            ))}
            <p className="disclaimer">
              <Link to="/privacy-policy" href="/">
                Privacy policy
              </Link>
            </p>
          </Stack>
        </Container>
      </FooterContainer>
    </>
  );
}

export default memo(Footer);
