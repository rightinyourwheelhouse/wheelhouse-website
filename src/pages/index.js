import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const IndexPage = () => (
  <Layout>
    <SEO
      title="TODO_SEO_TITLE"
      description="TODO_SEO_DESCRIPTION"
    />
    <Navigation />

    <Section>
      <Container>
        <Content>
          TODO_SITE_CONTENT
        </Content>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
