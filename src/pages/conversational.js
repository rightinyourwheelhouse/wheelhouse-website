/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';
import Layout from '~layouts/default';
import ConversationalForm from '~modules/ConversationalForm';
import Navigation from '~modules/Navigation';

import Content from '../components/Content/Content';
import SubTitle from '../components/SubTitle/SubTitle';
import ApplyForm from '../modules/ApplyForm';
import { Disclaimer } from '../modules/ApplyForm/applyForm.styles';
import OfficeOverview from '../modules/OfficeOverview/OfficeOverview';

function ConversationalPage({
  data: {
    pagesJson: { seo, questions },
  },
}) {
  const [isConversational, setIsConversational] = useState(true);
  return (
    <Layout>
      <Seo title={seo.title} description={seo.description} image={seo.image} />
      <Navigation />

      <Section>
        <Container>
          <Content />
          {isConversational ? (
            <>
              <ConversationalForm questions={questions} />
              <Disclaimer>
                In a rush?
                <a
                  onClick={() => {
                    setIsConversational(prevCheck => !prevCheck);
                  }}
                >
                  {' '}
                  I want to use a simple form
                </a>
                .
              </Disclaimer>
            </>
          ) : (
            <>
              <SubTitle>Contact</SubTitle>
              <h2>Apply now</h2>
              <ApplyForm />
              <Disclaimer>
                Want to try our conversational onboarding?
                <a
                  onClick={() => {
                    setIsConversational(prevCheck => !prevCheck);
                  }}
                >
                  {' '}
                  Let&apos;s talk
                </a>
                .
              </Disclaimer>
            </>
          )}

          <Content />
          <OfficeOverview />
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
        image: PropTypes.shape({}),
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
          names
          placeholder
        }
        previousBtn
        nextBtnText
        image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        cartoon
      }
    }
  }
`;
