/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import {
  Section,
  Container,
  LightContent,
} from '~components/layoutComponents';
import Card from '~components/Card';
import Content from '~components/Content';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import ApplyForm from '~modules/ApplyForm';
import JobOverview from '~modules/JobOverview';
import Navigation from '~modules/Navigation';
import OpenSource from '~modules/OpenSource';
import WorkingAtmosphereGallery from '~modules/WorkingAtmosphereGallery';

import colors from '~styles/colors';
import spacing from '~styles/spacing';

const Career = ({
  data: {
    career: {
      city, description, id, requirements, title,
    },
  },
}) => (
  <Layout>
    <SEO
      title={`Vacancy ${title} at Wheelhouse ${city}`}
      description={description}
    />

    <Navigation
      baseBackgroundColor={colors.backgroundSecundary}
      baseColor={colors.textLight}
      baseHoverColor={colors.primary}
    />

    <Section background={colors.backgroundSecundary}>
      <Container>
        <LightContent>
          <article>
            <SubTitle>{city}</SubTitle>
            <h1>{title}</h1>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Content>
          </article>
        </LightContent>
      </Container>
    </Section>

    <Section>
      <Container>
        <SubTitle>career</SubTitle>
        <h2>Your foundations</h2>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: requirements }} />
        </Content>
      </Container>
    </Section>

    <WorkingAtmosphereGallery />

    <Section>
      <Container>
        <Content>
          <SubTitle>Apply</SubTitle>
          <h2>Do we have your attention?</h2>
          <ApplyForm vacancy={`${title} at ${city}`} />
        </Content>
      </Container>
    </Section>

    <Section background={colors.backgroundTertiary}>
      <Container>

        <SubTitle>careers</SubTitle>
        <h2>Other career opportunities</h2>

        <JobOverview current={id} />
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
  query($slug: String!) {
    career(slug: { eq: $slug }) {
      id
      city
      description
      requirements
      title
    }
  }
`;

export default memo(Career);
