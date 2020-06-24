import React from 'react';

import {
  Section,
  Container,
  LightContent,
} from '../components/layoutComponents';
import NavBar from '../components/NavBar';
import SEO from '../components/SEO';
import SubTitle from '../components/SubTitle';

import Layout from '../layouts/default';

import JobOverview from '../modules/JobOverview';

import colors from '../styles/colors';

import navigation from '../data/navigation';

const IndexPage = () => (
  <Layout>
    <SEO title="Careers" />
    <NavBar items={navigation} />

    <Section>
      <Container>
        <JobOverview />
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
