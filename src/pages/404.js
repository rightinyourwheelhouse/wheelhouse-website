import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Layout from '~layouts/default';

import { Section, Container } from '~components/layoutComponents';
import SEO from '~components/SEO';
import Button from '~components/Button';

import Lamp from '~components/Lamp';

import Navigation from '~modules/Navigation';
import colors from '~styles/colors';

export const OuterContainer = styled.div`
  margin-top: 300px;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="You got lost on your way to our website" />
    <Navigation
      hamburgerColor={colors.textLight}
      baseBackgroundColor={colors.backgroundSecundary}
      baseColor={colors.textLight}
      baseHoverColor={colors.primary}
    />

    <Lamp />

    <Section background="#000">
      <Container height="50vh">
        <OuterContainer>
          <h1>Are you lost?</h1>
          <h2>4 oh 4</h2>

          <p>It sure is dark here...</p>
          <Button as={Link} to="/" backgroundHover={colors.secundary}>Hold my hand</Button>
        </OuterContainer>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
