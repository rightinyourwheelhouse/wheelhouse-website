import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import SEO from '~components/SEO';
import Content from '~components/Content';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="TODO_COMPANY_NAME website privacy policy" description="just another privacy policy" />
    <Navigation />

    <Section>
      <Container>
        <Content>
          <p>Privacy policy comes here</p>
        </Content>
      </Container>
    </Section>
  </Layout>
);

export default PrivacyPolicyPage;
