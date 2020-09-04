import React from 'react';

import { Section, Container, LightContent } from '~components/layoutComponents';
import SEO from '~components/SEO';
import { gridLayouts } from '~components/InsightsGrid';

import Layout from '~layouts/default';

import BlogOverview from '~modules/BlogOverview';
import Navigation from '~modules/Navigation';
import RadioRaccoons from '~modules/RadioRaccoons';
import RecommendationsOverview from '~modules/RecommendationsOverview';

import colors from '~styles/colors';

const InsightsPage = () => (
  <Layout>
    <SEO title="Wheelhouse Insights and inspiration" description="Take a look at what keeps us occupied and what inspires us." />
    <Navigation />

    <Section>
      <Container>
        <RecommendationsOverview />
      </Container>
    </Section>
    <Section background={colors.quaternary}>
      <Container>
        <LightContent>
          <RadioRaccoons />
        </LightContent>
      </Container>
    </Section>
    <Section>
      <Container>
        <BlogOverview layout={gridLayouts.COLUMN} />
      </Container>
    </Section>
  </Layout>
);

export default InsightsPage;
