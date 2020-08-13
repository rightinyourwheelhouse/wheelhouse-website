import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import BlogOverview from '~modules/BlogOverview';
import Navigation from '~modules/Navigation';

const InsightsPage = () => (
  <Layout>
    <SEO title="Insights and blogposts from us" />
    <Navigation />

    <Section>
      <Container>
        <Content>
          <SubTitle>Blog</SubTitle>
          <h2>Writing talent</h2>
          <p>
            Some text about blogposts and why we like them
          </p>
          <BlogOverview />
        </Content>
      </Container>
    </Section>
  </Layout>
);

export default InsightsPage;
