import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';
import JobOverview from '~modules/JobOverview';

const IndexPage = () => (
  <Layout>
    <SEO title="Working as a javascript expert at Wheelhouse and expand our team" />
    <Navigation />

    <Section>
      <Container>
        <SubTitle>careers</SubTitle>
        <h2>Work with us</h2>

        <JobOverview />
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
