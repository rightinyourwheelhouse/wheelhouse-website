import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import { Section, Container, ContrastColor } from '~components/layoutComponents';
import Content from '~components/Content';
import Button from '~components/Button';
import Card from '~components/Card';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';
import Summary from '~components/Summary';
import TwoColumns from '~components/TwoColumns';

import Layout from '~layouts/default';

import JobOverview from '~modules/JobOverview';
import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';
import WorkingAtmosphereGallery from '~modules/WorkingAtmosphereGallery';

import colors from '~styles/colors';

const TeamPage = ({
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
            We improve the quality of our service and solutions by continuously
            focusing on improvement. We carefully analyse and monitor all
            projects while our team is trained to keep up-to-date with the
            latest technologies. At Wheelhouse, we help you develop your talents
            so that you can build a high-quality career path.
          </p>
          <Button as={Link} to="/careers">
            Check our job openings
          </Button>
        </Card>
      </Container>
    </Section>

    <Section background={colors.backgroundPrimary100}>
      <Container>
        <ContrastColor color={colors.backgroundPrimary100}>
          <TwoColumns>
            <div>
              <Summary
                title="What we do"
                items={[
                  { label: 'Think about UX' },
                  { label: 'Coach and code' },
                  { label: 'Love clean code' },
                  { label: 'Bring added value with design' },
                  { label: 'Make existing teams stronger' },
                  { label: 'Turn spaghetti into code' },
                ]}
              />
            </div>
            <div>
              <Summary
                title="What we don't do"
                items={[
                  { disabled: true, label: 'Make false promises' },
                  { disabled: true, label: 'Give up' },
                  { disabled: true, label: 'Make plans for world domination' },
                  { disabled: true, label: 'Quick and dirty' },
                  { disabled: true, label: 'Prototyping' },
                  { disabled: true, label: 'Leave unfinished burgers behind' },
                ]}
              />
            </div>
          </TwoColumns>
        </ContrastColor>
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

TeamPage.propTypes = {
  data: PropTypes.shape({
    seo: PropTypes.shape({
      ...SEO.propTypes,
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
