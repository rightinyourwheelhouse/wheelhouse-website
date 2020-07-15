import React from 'react';
import { Link } from 'gatsby';

import { Section, Container, LightContent } from '~components/layoutComponents';
import Button from '~components/Button';
import SEO from '~components/SEO';
import TwoColumns from '~components/TwoColumns';
import Image from '~components/Image';
import SubTitle from '~components/SubTitle';
import Card from '~components/Card';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';
import WelcomeHero from '~modules/WelcomeHero';
import BlogOverview from '~modules/BlogOverview';
import JobOverview from '~modules/JobOverview';
import OpenSource from '~modules/OpenSource';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

import colors from '~styles/colors';
import spacing from '~styles/spacing';

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
        <SubTitle>Blog</SubTitle>
        <h2>Some insight in how we think</h2>
        <BlogOverview count={2} />
        <Button
          as={Link}
          to="/"
          color={colors.textLight}
          colorHover={colors.textLight}
          background={colors.primary}
          backgroundHover={colors.accent}
        >
          Discover more
        </Button>
      </Container>
      <Container offset={spacing.large}>
        <Card>
          <h2>Javascript expertise</h2>
          <p>Something about our amazing tech stack</p>
        </Card>
      </Container>
    </Section>

    <Section background={colors.backgroundSecundary}>
      <Container>
        <LightContent>
          <OpenSource />
        </LightContent>
      </Container>
    </Section>

    <Section>
      <Container>
        <TwoColumns>
          <div>
            <Image filename="opportunities.jpg" alt="oppurtunities" />
            <h3>Our job opportunities</h3>
            <p>
              We are looking for new colleagues in different disciplines. Might
              you be our next team member?
            </p>
            <Button as={Link} to="/careers">
              Careers
            </Button>
          </div>
          <div>
            <Image filename="wheelhouse.jpg" alt="team" />
            <h3>About</h3>
            <p>
              We are a bunch of people with a major common javascript passion.
            </p>
            <Button as={Link} to="/team">
              Team
            </Button>
          </div>
        </TwoColumns>
      </Container>
    </Section>

    <WorkingAtmosphereHorizontal />

    <Section>
      <Container>
        <JobOverview />
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
