import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Section, Container, ContrastColor } from '~components/layoutComponents';
import SEO from '~components/SEO';
import { gridLayouts } from '~components/InsightsGrid';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';
import RadioRaccoons from '~modules/RadioRaccoons';
import InsightsOverview from '~modules/InsightsOverview';

import colors from '~styles/colors';

const InsightsPage = ({
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
        <InsightsOverview count={4} />
      </Container>
    </Section>
    <Section background={colors.quaternary}>
      <Container>
        <ContrastColor color={colors.quaternary}>
          <RadioRaccoons />
        </ContrastColor>
      </Container>
    </Section>
    <Section>
      <Container>
        <InsightsOverview layout={gridLayouts.COLUMN} skip={4} />
      </Container>
    </Section>
  </Layout>
);

InsightsPage.propTypes = {
  data: PropTypes.shape({
    pagesJson: PropTypes.shape({
      seo: PropTypes.shape({
        ...SEO.propTypes,
      }),
    }),
  }).isRequired,
};

export default InsightsPage;

export const InsightsPageQuery = graphql`
  query blogPage {
    pagesJson(page: { eq: "blog" }) {
      seo {
        ...seo
      }
    }
  }
`;
