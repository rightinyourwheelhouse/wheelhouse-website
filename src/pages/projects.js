import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Content from '~components/Content';
import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';
import SubTitle from '~components/SubTitle';
import Layout from '~layouts/default';
import Navigation from '~modules/Navigation';
import OpenSourceProjectsForPage from '~modules/OpenSourceProjectsForPage/OpenSourceProjectsForPage';

function ProjectsPage({
  data: {
    pagesJson: { seo },
  },
}) {
  return (
    <Layout>
      <Seo title={seo.title} description={seo.description} image={seo.image} />
      <Navigation />
      <Section>
        <Container>
          <SubTitle>projects</SubTitle>
          <h2>Our open-source projects!</h2>
          <Content>
            <p>
              At Wheelhouse, we encourage everyone to be creative and to create
              fun projects so we can learn from each other. This helps us for
              keeping our team up-to-date. With these projects we can expirement
              with all the latest technologies.
            </p>
          </Content>
        </Container>
        <Container>
          <OpenSourceProjectsForPage />
        </Container>
      </Section>
    </Layout>
  );
}

ProjectsPage.propTypes = {
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

export default ProjectsPage;

export const privacyPolicyQuery = graphql`
  query ProjectsPage {
    pagesJson(page: { eq: "projects" }) {
      seo {
        ...seo
      }
    }
  }
`;
