import React from 'react';

import Layout from '~layouts/default';

import { Section, Container } from '~components/layoutComponents';
import SEO from '~components/SEO';

import Navigation from '~modules/Navigation';

import navigation from '~data/navigation';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navigation items={navigation} />

    <Section>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
