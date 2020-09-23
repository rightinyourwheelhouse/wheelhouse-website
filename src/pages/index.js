import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const IndexPage = ({
  data: {
    pagesJson: { seo },
  },
}) => (
  <Layout>
    <SEO title={seo.title} description={seo.description} image={seo.image} />
    <Navigation />

    <Section>
      <Container>
        <Content>TODO_SITE_CONTENT</Content>
      </Container>
    </Section>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    pagesJson: PropTypes.shape({
      seo: PropTypes.shape({
        ...SEO.propTypes,
      }),
    }),
  }).isRequired,
};

export default IndexPage;

export const landingPageQuery = graphql`
  query LandingPage {
    pagesJson(page: { eq: "landing" }) {
      seo {
        ...seo
      }
    }
  }
`;
