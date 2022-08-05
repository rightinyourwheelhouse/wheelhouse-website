import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

import CaseCard from '../components/CardCase';
import { ImageContainer } from '../components/ImageTitle/imageTitle.styles';
import WheelhouseClients from '../modules/WheelhouseClients/WheelhouseClients';
import { useCaseOverview } from '../services/case/useCaseOverview';

function CasesPage({
  data: {
    pagesJson: { seo },
  },
}) {
  const cases = useCaseOverview();
  return (
    <Layout>
      <Seo title={seo.title} description={seo.description} image={seo.image} />

      <Navigation />

      <Section>
        <Container>
          <WheelhouseClients />
        </Container>
      </Section>
      <Container>
        {cases.map(
          ({ title, company, backgroundColor, banner, color, slug }) => (
            <div key={title}>
              <Link to={`/cases/${slug}`} key={slug}>
                <CaseCard
                  background={backgroundColor}
                  foreground={color}
                  key={title}
                >
                  <div className="body">
                    <div>
                      <span>{company}</span>
                      <h2>{title}</h2>
                    </div>
                    <h3>Read more</h3>
                  </div>
                  <ImageContainer>
                    {banner && (
                      <GatsbyImage
                        image={banner?.childImageSharp?.gatsbyImageData}
                        alt={title}
                      />
                    )}
                  </ImageContainer>
                </CaseCard>
              </Link>
            </div>
          ),
        )}
      </Container>
    </Layout>
  );
}

CasesPage.propTypes = {
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

export default CasesPage;

export const privacyPolicyQuery = graphql`
  query CasesPage {
    pagesJson(page: { eq: "cases" }) {
      seo {
        ...seo
      }
    }
  }
`;
