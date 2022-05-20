import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '~components/Button';
import Content from '~components/Content';
import {
  Section,
  Container,
  ContrastColor,
} from '~components/layoutComponents';
import Seo from '~components/SEO';
import SubTitle from '~components/SubTitle';
import Summary from '~components/Summary';
import TwoColumns from '~components/TwoColumns';

import Layout from '~layouts/default';

import InsightsOverview from '~modules/InsightsOverview';
import Navigation from '~modules/Navigation';
import OfficeOverview from '~modules/OfficeOverview';

import OpenSource from '~modules/OpenSource';
import WelcomeHero from '~modules/WelcomeHero';
import WheelhouseDescription from '~modules/WheelhouseDescription';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

import colors from '~styles/colors';

import WheelhouseClients from '../modules/WheelhouseClients';

const ImageContainer = styled.div`
  --height: 350px;

  overflow: hidden;
  height: var(--height);
  width: 100%;
  overflow: hidden;
  position: relative;

  div {
    height: 100%;
    width: 100%;
  }
`;

function IndexPage({
  data: {
    pagesJson: { seo },
  },
}) {
  return (
    <Layout>
      <Seo title={seo.title} description={seo.description} image={seo.image} />

      <Navigation logoInitiallyHidden />

      <WelcomeHero />

      <Section>
        <Container>
          <Content>
            <WheelhouseDescription />
          </Content>
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
                    {
                      disabled: true,
                      label: 'Make plans for world domination',
                    },
                    { disabled: true, label: 'Quick and dirty' },
                    { disabled: true, label: 'Prototyping' },
                    {
                      disabled: true,
                      label: 'Leave unfinished burgers behind',
                    },
                  ]}
                />
              </div>
            </TwoColumns>
          </ContrastColor>
        </Container>
      </Section>

      <Section>
        <Container>
          <WheelhouseClients />
        </Container>
      </Section>

      <Section>
        <Container>
          <TwoColumns>
            <div>
              <ImageContainer>
                <StaticImage
                  src="../images/general/opportunities.jpg"
                  alt="oppurtunities"
                />
              </ImageContainer>
              <h3>Our job opportunities</h3>
              <p>
                We are looking for new colleagues in different disciplines. Are
                you our next team member?
              </p>
              <Button as={Link} to="/careers">
                Careers
              </Button>
            </div>
            <div>
              <ImageContainer>
                <StaticImage
                  src="../images/general/wheelhouse.jpg"
                  alt="team"
                />
              </ImageContainer>
              <h3>About</h3>
              <p>
                We are a bunch of people with a major common javascript passion.
              </p>
              <Button as={Link} to="/team">
                Team
              </Button>
            </div>
          </TwoColumns>
        </Container>
      </Section>

      <WorkingAtmosphereHorizontal />

      <Section>
        <Container>
          <SubTitle>Blog</SubTitle>
          <h2>Some of our insights</h2>
          <InsightsOverview count={2} />
          <Button
            as={Link}
            to="/insights"
            color={colors.textPrimary100}
            colorHover={colors.textPrimary100}
            background={colors.primary}
            backgroundHover={colors.primary}
          >
            See our insights
          </Button>
        </Container>
      </Section>

      <Section background={colors.backgroundPrimary100}>
        <Container>
          <ContrastColor color={colors.backgroundPrimary100}>
            <OpenSource />
          </ContrastColor>
        </Container>
      </Section>

      <Section>
        <Container>
          <OfficeOverview />
        </Container>
      </Section>
    </Layout>
  );
}

IndexPage.propTypes = {
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

export default IndexPage;

export const IndexPageQuery = graphql`
  query landinPage {
    pagesJson(page: { eq: "landing" }) {
      title
      body
      seo {
        ...seo
      }
    }
  }
`;
