import React from 'react';
import { Link } from 'gatsby';

import { Section, Container, LightContent } from '~components/layoutComponents';
import Button from '~components/Button';
import Content from '~components/Content';
import SEO from '~components/SEO';
import TwoColumns from '~components/TwoColumns';
import Image from '~components/Image';
import SubTitle from '~components/SubTitle';
import Card from '~components/Card';

import Layout from '~layouts/default';

import InsightsOverview from '~modules/InsightsOverview';
import Navigation from '~modules/Navigation';
import OfficeOverview from '~modules/OfficeOverview';
import OpenSource from '~modules/OpenSource';
import WelcomeHero from '~modules/WelcomeHero';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';
import WheelhouseDescription from '~modules/WheelhouseDescription';

import colors from '~styles/colors';
import spacing from '~styles/spacing';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Great javascript experts to strengthen your team"
      description="Wheelhouse works alongside your team to help strengthen your business. We share our knowledge to help your project go to the next level."
    />
    <Navigation logoInitiallyHidden />

    <WelcomeHero />

    <Section>
      <Container>
        <Content>
          <WheelhouseDescription />
        </Content>
      </Container>
    </Section>

    <Section>
      <Container>
        <TwoColumns>
          <div>
            <Image filename="opportunities.jpg" alt="oppurtunities" />
            <h3>Our job opportunities</h3>
            <p>
              We are looking for new colleagues in different disciplines. Are
              you our next team member?
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
        <SubTitle>Blog</SubTitle>
        <h2>Some of our insights</h2>
        <InsightsOverview count={2} />
        <Button
          as={Link}
          to="/insights"
          color={colors.textPrimary100}
          colorHover={colors.textPrimary100}
          background={colors.primary}
          backgroundHover={colors.primary}
        >
          See our insights
        </Button>
      </Container>
      <Container offset={spacing.large}>
        <Card>
          <h2>Javascript expertise</h2>
          <p>
            Wheelhouse works alongside your team to help strengthen your
            business. We share our knowledge to help your project go to the next
            level.
          </p>
        </Card>
      </Container>
    </Section>

    <Section background={colors.backgroundPrimary100}>
      <Container>
        <LightContent>
          <OpenSource />
        </LightContent>
      </Container>
    </Section>

    <Section>
      <Container>
        <OfficeOverview />
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
