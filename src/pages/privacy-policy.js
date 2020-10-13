import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Markdown from '~components/Markdown';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

import spacing from '~styles/spacing';

const PrivacyPolicyPage = ({
  data: {
    pagesJson: {
      title,
      body,
      seo,
    },
  },
}) => (
  <Layout>
    <SEO title={seo.title} description={seo.description} image={seo.image} />

    <Navigation />

    <Section>
      <Container offset={spacing.large}>
        <h2>{title}</h2>
        <Content>
          <Markdown source={body} />
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
      title
      body
      seo {
        ...seo
      }
    }
  }
`;
