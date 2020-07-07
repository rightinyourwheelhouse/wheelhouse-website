import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import SEO from '~components/SEO';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';

import navigation from '~data/navigation';

const TeamPage = () => (
  <Layout>
    <SEO title="Wheelhouse consist of these people" />
    <Navigation items={navigation} />

    <Section>
      <Container>
        <TeamOverview />
      </Container>
    </Section>
  </Layout>
);

export default TeamPage;
