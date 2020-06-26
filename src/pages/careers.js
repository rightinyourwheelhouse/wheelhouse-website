import React from 'react';

import { Section, Container } from '../components/layoutComponents';
import NavBar from '../components/NavBar';
import SEO from '../components/SEO';

import Layout from '../layouts/default';

import JobOverview from '../modules/JobOverview';

import navigation from '../data/navigation';

const IndexPage = () => (
  <Layout>
    <SEO title="Working as a javascript expert at Wheelhouse and expand our team" />
    <NavBar items={navigation} />

    <Section>
      <Container>
        <JobOverview />
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
