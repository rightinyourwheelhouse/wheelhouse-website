import React from 'react';

import { Section, Container, LightContent } from '~components/layoutComponents';
import SEO from '~components/SEO';
import { gridLayouts } from '~components/InsightsGrid';

import Layout from '~layouts/default';

import BlogOverview from '~modules/BlogOverview';
import Navigation from '~modules/Navigation';
import RadioRaccoons from '~modules/RadioRaccoons';
import RecommendationsOverview from '~modules/RecommendationsOverview';
import InsightsOverview from '~modules/InsightsOverview';

import colors from '~styles/colors';

const InsightsPage = () => (
  <Layout>
    <SEO title="Wheelhouse Insights and inspiration" description="Take a look at what keeps us occupied and what inspires us." />
    <Navigation />

    <Section>
      <Container>
        <InsightsOverview count={4} />
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
        <InsightsOverview layout={gridLayouts.COLUMN} skip={4} />
      </Container>
    </Section>
  </Layout>
);

export default InsightsPage;
