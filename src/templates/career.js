/* eslint-disable react/no-danger */
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import styled from 'styled-components';

import Content from '~components/Content';
import {
  Section,
  Container,
  ContrastColor,
} from '~components/layoutComponents';
import Seo from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import JobOverview from '~modules/JobOverview';
import Navigation from '~modules/Navigation';
import OpenSource from '~modules/OpenSource';
import WorkingAtmosphereGallery from '~modules/WorkingAtmosphereGallery';

import colors from '~styles/colors';

import Button from '../components/Button';

function Career({
  data: {
    career: { city, description, id, requirements, title },
  },
}) {
  return (
    <Layout>
      <Seo
        title={`Vacancy ${title} at Wheelhouse ${city}`}
        description={description}
      />

      <Navigation
        baseBackgroundColor={colors.backgroundPrimary100}
        baseColor={colors.textPrimary100}
        baseHoverColor={colors.primary}
        hamburgerColor={colors.textPrimary100}
      />

      <Section background={colors.backgroundPrimary100}>
        <Container>
          <ContrastColor color={colors.backgroundPrimary100}>
            <article>
              <SubTitle>{city}</SubTitle>
              <h1>{title}</h1>
              <Content>
                <CareerContent>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </CareerContent>
              </Content>
            </article>
          </ContrastColor>
        </Container>
      </Section>

      {requirements ? (
        <Section>
          <Container>
            <SubTitle>career</SubTitle>
            <h2>Your foundations</h2>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: requirements }} />
            </Content>
          </Container>
        </Section>
      ) : (
        ''
      )}

      <WorkingAtmosphereGallery />

      <Section>
        <Container>
          <SubTitle>Apply</SubTitle>
          <h2>Do we have your attention?</h2>
          <p>
            Interested what you see? We would love to have a conversation with
            you.
          </p>
          <Button to="/conversational" as={Link}>
            {' '}
            Let&apos;s talk{' '}
          </Button>
        </Container>
      </Section>

      <Section background={colors.backgorundPrimary200}>
        <Container>
          <JobOverview
            title="Other career opportunities"
            subTitle="careers"
            current={id}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <OpenSource />
        </Container>
      </Section>
      <Section />
    </Layout>
  );
}

Career.propTypes = {
  data: PropTypes.shape({
    career: PropTypes.shape({
      city: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      requirements: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query ($slug: String!) {
    career(slug: { eq: $slug }) {
      id
      city
      description
      requirements
      title
    }
  }
`;

const CareerContent = styled.div`
  a {
    text-decoration: underline;
    text-underline-offset: 0.4rem;
    text-decoration-thickness: 0.1rem;
    font-weight: 400;
  }
  }
`;

export default memo(Career);
