import React from 'react';
import { Link } from 'gatsby';

import { Section, Container, LightContent } from '~components/layoutComponents';
import Button from '~components/Button';
import SEO from '~components/SEO';
import TwoColumns from '~components/TwoColumns';
import Image from '~components/Image';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';
import WelcomeHero from '~modules/WelcomeHero';
import BlogOverview from '~modules/BlogOverview';

import colors from '~styles/colors';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation
      baseBackgroundColor={colors.primary}
      baseColor={colors.textLight}
      logoInitiallyHidden
    />
    <WelcomeHero />
    <Section>
      <Container>
        <TwoColumns>
          <div>
            <Image filename="working-atmosphere/working-atmosphere-9.jpg" alt="oppurtunities" />
            <h3>Our job opportunities</h3>
            <p>
              We are looking for new colleagues in different disciplines. Might
              you be our next team member?
            </p>
            <Button as={Link} to="/careers">Careers</Button>
          </div>
          <div>
            <Image filename="wheelhouse.jpg" alt="team" />
            <h3>About</h3>
            <p>
              We're a bunch of people with a major common javascript passion.
            </p>
            <Button as={Link} to="/team">Team</Button>
          </div>
        </TwoColumns>
      </Container>
    </Section>
    <Section background={colors.backgroundSecundary}>
      <Container>
        <LightContent>
          <BlogOverview />
        </LightContent>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
