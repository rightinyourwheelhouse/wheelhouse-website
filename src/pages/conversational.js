import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';
import Layout from '~layouts/default';
import ConversationalForm from '~modules/ConversationalForm';
import Navigation from '~modules/Navigation';

function ConversationalPage({
  data: {
    pagesJson: { seo, questions },
  },
}) {
  return (
    <Layout>
      <Seo title={seo.title} description={seo.description} image={seo.image} />
      <Navigation />

      <Section>
        <Container>
          <ConversationalForm questions={questions} />
        </Container>
      </Section>
    </Layout>
  );
}

ConversationalPage.propTypes = {
  data: PropTypes.shape({
    pagesJson: PropTypes.shape({
      seo: PropTypes.shape({
        article: PropTypes.bool,
        description: PropTypes.string,
        image: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            resize: PropTypes.shape({
              src: PropTypes.string,
            }),
          }),
        }),
        lang: PropTypes.string,
        meta: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ConversationalPage;

export const privacyPolicyQuery = graphql`
  query ConversationalPage {
    pagesJson(page: { eq: "conversational" }) {
      seo {
        ...seo
      }
      questions {
        id
        title
        blocks {
          title
          text
          input
          name
          placeholder
        }
        previousBtn
        nextBtnText
        image
        cartoon
      }
    }
  }
`;
