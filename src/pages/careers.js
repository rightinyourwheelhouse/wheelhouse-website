import React from 'react';

import {
  Section,
  Container,
  LightContent,
} from '../components/layoutComponents';
import NavBar from '../components/NavBar';
import SEO from '../components/SEO';
import SubTitle from '../components/SubTitle';

import Layout from '../layouts/Default';

import BlogOverview from '../modules/BlogOverview';

import colors from '../styles/colors';

import navigation from '../data/navigation';

const IndexPage = () => (
  <Layout>
    <SEO title="Careers" />
    <NavBar items={navigation} />

    <Section>
      <Container>
        <SubTitle>Careers</SubTitle>
        <h1>
          Our core
          {' '}
          <br />
          {' '}
          foundations
        </h1>
      </Container>
    </Section>
    <Section background={colors.backgroundSecundary}>
      <Container>
        <LightContent>
          <BlogOverview />
        </LightContent>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
