import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Layout from '~layouts/default';

import { Section, Container } from '~components/layoutComponents';
import SEO from '~components/SEO';
import Button from '~components/Button';

import Navigation from '~modules/Navigation';
import colors from '~styles/colors';

export const OuterContainer = styled.div`
  margin-top: 300px;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="You got lost on your way to our website" />
    <Navigation
      hamburgerColor={colors.textPrimary100}
      baseBackgroundColor={colors.backgroundPrimary100}
      baseColor={colors.textPrimary100}
      baseHoverColor={colors.primary}
    />

    <Section background={colors.backgroundPrimary100}>
      <Container height="50vh">
        <OuterContainer>
          <h1>404 page?</h1>
          <h2>Can't find the page</h2>

          <p>Find your way back to the website</p>
          <Button as={Link} to="/" backgroundHover={colors.secundary}>Hold my hand</Button>
        </OuterContainer>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
