import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import Button from '~components/Button';
import Lamp from '~components/Lamp';
import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';
import colors from '~styles/colors';

export const OuterContainer = styled.div`
  margin-top: 300px;
`;

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="404: Not found"
      description="You got lost on your way to our website"
    />
    <Navigation
      hamburgerColor={colors.textPrimary100}
      baseBackgroundColor={colors.backgroundPrimary100}
      baseColor={colors.textPrimary100}
      baseHoverColor={colors.primary}
    />

    <Lamp />

    <Section background={colors.backgroundPrimary100}>
      <Container height="50vh">
        <OuterContainer>
          <h1>Are you lost?</h1>
          <h2>4 oh 4</h2>

          <p>It sure is dark here...</p>
          <Button as={Link} to="/">
            Hold my hand
          </Button>
        </OuterContainer>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
