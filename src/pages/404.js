import React from 'react';

import Layout from '../layouts/default';

import { Section, Container } from '../components/layoutComponents';
import NavBar from '../components/NavBar';

import SEO from '../components/SEO';

import navigation from '../data/navigation';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NavBar items={navigation} />

    <Section>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
