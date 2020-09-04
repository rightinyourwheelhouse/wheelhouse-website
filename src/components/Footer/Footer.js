import React, { memo } from 'react';
import Link from 'gatsby-link';

import { Container } from '~components/layoutComponents';

import { useNavigation } from '~api/navigation/useNavigation';

import {
  FooterContainer,
  Title,
  LinksContainer,
  ContentContainer,
  Disclaimer,
} from './footer.styles';

import Socials from '~modules/Socials';

import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '~data/company';

const Footer = () => {
  const navigationItems = useNavigation();

  return (
    <FooterContainer>
      <Container>
        <ContentContainer>
          <div>
            <h2>Let's get connected</h2>
          </div>
          <div>
            <LinksContainer>
              <Title>Links</Title>
              {navigationItems.map(({ href, title }) => (
                <Link key={title} to={href}>
                  {title}
                </Link>
              ))}
            </LinksContainer>
          </div>
          <div>
            <Title>Office</Title>
            <p>{COMPANY_ADDRESS}</p>
          </div>
        </ContentContainer>
        <ContentContainer>
          <div>
            <Socials />
          </div>
          <div>
            <Disclaimer>
              Or contact us at:
              {' '}
              <br />
              <a href={`tel:${COMPANY_PHONE}`}>{COMPANY_PHONE}</a>
              <br />
              <a href={`mailto:${COMPANY_EMAIL}`}>
                {COMPANY_EMAIL}
              </a>
            </Disclaimer>
            <Disclaimer>Part of raccoons</Disclaimer>
          </div>
          <div />
        </ContentContainer>
      </Container>
    </FooterContainer>
  );
};

export default memo(Footer);
