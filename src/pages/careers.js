import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import CardCareers from '~components/CardCareers';
import Content from '~components/Content';
import { gridLayouts } from '~components/InsightsGrid';
import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import InsightsOverview from '~modules/InsightsOverview';
import JobOverview from '~modules/JobOverview';
import Navigation from '~modules/Navigation';

const CareersPage = ({
  data: {
    pagesJson: { seo },
  },
}) => (
  <Layout>
    <Seo title={seo.title} description={seo.description} image={seo.image} />

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
            projects while our team is trained to keep up-to-date with the
            latest technologies. At Wheelhouse, we help you develop your talents
            so that you can build a high-quality career path.
          </p>
        </Content>
      </Container>
    </Section>
    <Section>
      <Container>
        <SubTitle>careers</SubTitle>
        <h2>Profiles we&apos;re looking for</h2>

        <JobOverview />
      </Container>
    </Section>
    <Section>
      <Container>
        <CardCareers>
          <h2>Wheelhouse insights</h2>
          <InsightsOverview count={3} layout={gridLayouts.COLUMN} />
        </CardCareers>
      </Container>
    </Section>
  </Layout>
);

CareersPage.propTypes = {
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
