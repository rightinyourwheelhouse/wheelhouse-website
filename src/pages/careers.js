import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { gridLayouts } from '~components/InsightsGrid';
import { Section, Container } from '~components/layoutComponents';
import Card from '~components/Card';
import Content from '~components/Content';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';
import JobOverview from '~modules/JobOverview';
import InsightsOverview from '~modules/InsightsOverview';

const CareersPage = ({
  data: {
    pagesJson: {
      seo,
    },
  },
}) => (
  <Layout>
    <SEO title={seo.title} description={seo.description} image={seo.image} />

    <Navigation />

    <Section>
      <Container>
        <Content>
          <SubTitle>Careers</SubTitle>
          <h2>What we have to offer</h2>
          <p>
            At Wheelhouse, we encourage everyone to think and work on our
            strategy. Initiative and new insights are stimulated to deliver a
            valuable solution together.
          </p>
          <p>
            We make sure there is room for personal growth and we try to get you
            to achieve your ambitions.
          </p>
          <p>
            We improve the quality of our service and solutions by continuously
            focusing on improvement. We carefully analyse and monitor all
            projects while our team is trained to keep up-to-date with the latest technologies. At
            Wheelhouse, we help you develop your talents so that you can build a
            high-quality career path.
          </p>
        </Content>
      </Container>
    </Section>
    <Section>
      <Container>
        <SubTitle>careers</SubTitle>
        <h2>Profiles we're looking for</h2>

        <JobOverview />
      </Container>
    </Section>
    <Section>
      <Container>
        <Card>
          <h2>Wheelhouse insights</h2>
          <InsightsOverview count={3} layout={gridLayouts.COLUMN} />
        </Card>
      </Container>
    </Section>
  </Layout>
);

CareersPage.propTypes = {
  data: PropTypes.shape({
    pagesJson: PropTypes.shape({
      seo: PropTypes.shape({
        ...SEO.propTypes,
      }),
    }),
  }).isRequired,
};

export default CareersPage;

export const privacyPolicyQuery = graphql`
  query CareersPage {
    pagesJson(page: { eq: "careers" }) {
      seo {
        ...seo
      }
    }
  }
`;
