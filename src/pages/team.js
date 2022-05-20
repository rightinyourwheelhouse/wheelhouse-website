import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '~components/Button';
import Card from '~components/Card';
import Content from '~components/Content';
import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import JobOverview from '~modules/JobOverview';
import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';
import WorkingAtmosphereGallery from '~modules/WorkingAtmosphereGallery';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

function TeamPage({
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
          <Content>
            <SubTitle>team</SubTitle>
            <h2>Feeling at home</h2>
            <p>
              Our door is always open to new enthusiastic colleagues. We welcome
              you to a fun family where everyone feels comfortable and supports
              each other. Our passionate team will gladly guide you through
              Wheelhouse!
            </p>
            <Button as={Link} to="/careers">
              View open positions
            </Button>
          </Content>
        </Container>
      </Section>

      <WorkingAtmosphereHorizontal />

      <Section>
        <Container>
          <TeamOverview />
          <Card>
            <h2>Do you want to join us?</h2>
            <p>
              We improve the quality of our service and solutions by
              continuously focusing on improvement. We carefully analyse and
              monitor all projects while our team is trained to keep up-to-date
              with the latest technologies. At Wheelhouse, we help you develop
              your talents so that you can build a high-quality career path.
            </p>
            <Button as={Link} to="/careers">
              Check our job openings
            </Button>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubTitle>careers</SubTitle>
          <h2>Work with us</h2>

          <JobOverview />
        </Container>
      </Section>
      <WorkingAtmosphereGallery />
    </Layout>
  );
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    seo: PropTypes.shape({
      article: PropTypes.bool,
      description: PropTypes.string,
      image: PropTypes.shape({}),
      lang: PropTypes.string,
      meta: PropTypes.arrayOf(PropTypes.object),
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default TeamPage;

export const teamPageQuery = graphql`
  query teamPage {
    pagesJson(page: { eq: "team" }) {
      seo {
        ...seo
      }
    }
  }
`;
