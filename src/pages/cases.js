import {graphql, Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';
import WheelhouseClients from "../modules/WheelhouseClients/WheelhouseClients";
import CaseCard from "../components/CardCase";
import {useCaseOverview} from "../services/case/useCaseOverview";
import Button from "../components/Button/Button";

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
        <Section>
          <Container>
              {cases.map(({ name, street, city, slug, mail, phone }) => (
                  <CaseCard background={"linear-gradient(83deg, rgba(59,6,163,1) 0%, rgba(25,0,74,1) 100%)"} foreground={"#fff"} key={name}>
                      <h2>{name}</h2>
                      <Link to={`/cases/${slug}`} key={slug}>
                          <h3>Read more</h3>
                      </Link>
                  </CaseCard>
              ))}
          </Container>
        </Section>
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
