import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Section, Container } from '~components/layoutComponents';
import SEO from '~components/SEO';
import Content from '~components/Content';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const PrivacyPolicyPage = ({
  data: {
    pagesJson: { seo },
  },
}) => (
  <Layout>
    <SEO title={seo.title} description={seo.description} image={seo.image} />

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

PrivacyPolicyPage.propTypes = {
  data: PropTypes.shape({
    pagesJson: PropTypes.shape({
      seo: PropTypes.shape({
        ...SEO.propTypes,
      }),
    }),
  }).isRequired,
};

export default PrivacyPolicyPage;

export const privacyPolicyQuery = graphql`
  query PrivacyPolicyPage {
    pagesJson(page: { eq: "privacyPolicy" }) {
      seo {
        ...seo
      }
    }
  }
`;
