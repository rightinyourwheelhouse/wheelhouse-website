import { Link } from 'gatsby';
import React, { memo } from 'react';

import {
  FooterContainer,
  RaccoonsBlock,
  Title,
  LinksContainer,
} from './footer.styles';

import { useNavigation } from '~api/navigation/useNavigation';
import { useOfficeOverview } from '~api/office/useOfficeOverview';
import { Container } from '~components/layoutComponents';
import Stack from '~components/Stack';
import TwoColumns from '~components/TwoColumns';

import Raccoons from '~images/raccoons.svg';

const Footer = () => {
  const navigationItems = useNavigation();
  const offices = useOfficeOverview();

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
                    <a
                      href="https://brainhouse.be"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Internships
                    </a>
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

          {offices.map(({ address, phone }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i}>
              {address} <a href={`tel:${phone}`}>{phone}</a>
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
  );
};

export default memo(Footer);
