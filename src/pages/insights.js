import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { gridLayouts } from '~components/InsightsGrid';
import {
  Section,
  Container,
  ContrastColor,
} from '~components/layoutComponents';
import Seo from '~components/SEO';

import Layout from '~layouts/default';

import InsightsOverview from '~modules/InsightsOverview';
import Navigation from '~modules/Navigation';
import RadioRaccoons from '~modules/RadioRaccoons';

import colors from '~styles/colors';

const InsightsPage = ({
  data: {
    pagesJson: { seo },
  },
}) => (
  <Layout>
    <Seo title={seo.title} description={seo.description} image={seo.image} />

    <Navigation />

    <Section>
      <Container>
        <InsightsOverview count={3} />
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
        <InsightsOverview layout={gridLayouts.COLUMN} skip={3} />
      </Container>
    </Section>
  </Layout>
);

InsightsPage.propTypes = {
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
