import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Content from '~components/Content';
import { Section, Container } from '~components/layoutComponents';
import Markdown from '~components/Markdown';
import Seo from '~components/SEO';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

import spacing from '~styles/spacing';

function PrivacyPolicyPage({
  data: {
    pagesJson: { title, body, seo },
  },
}) {
  return (
    <Layout>
      <Seo title={seo.title} description={seo.description} image={seo.image} />

      <Navigation />

      <Section>
        <Container offset={spacing.large}>
          <h2>{title}</h2>
          <Content>
            <Markdown>{body}</Markdown>
          </Content>
        </Container>
      </Section>
    </Layout>
  );
}

PrivacyPolicyPage.propTypes = {
  data: PropTypes.shape({
    pagesJson: PropTypes.shape({
      seo: PropTypes.shape({
        article: PropTypes.bool,
        description: PropTypes.string,
        image: PropTypes.shape({}),
        lang: PropTypes.string,
        meta: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string,
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
