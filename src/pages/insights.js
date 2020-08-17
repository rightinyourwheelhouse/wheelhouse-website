import React from 'react';

import { Section, Container, LightContent } from '~components/layoutComponents';
import SEO from '~components/SEO';

import Layout from '~layouts/default';

import BlogOverview from '~modules/BlogOverview';
import RecommendationsOverview from '~modules/RecommendationsOverview';
import Navigation from '~modules/Navigation';

import colors from '~styles/colors';

const InsightsPage = () => (
  <Layout>
    <SEO title="Insights and blogposts from us" />
    <Navigation />

    <Section>
      <Container>
        <RecommendationsOverview />
      </Container>
    </Section>
    <Section background={colors.quaternary}>
      <Container>
        <LightContent>
          <h2>Something about radio raccoons</h2>
        </LightContent>
      </Container>
    </Section>
    <Section>
      <Container>
        <BlogOverview layout="highlight" />
      </Container>
    </Section>
  </Layout>
);

export default InsightsPage;
