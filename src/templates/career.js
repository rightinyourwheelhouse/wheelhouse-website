/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import {
  Section,
  Container,
  LightContent,
} from '../components/layoutComponents';
import BlogText from '../components/BlogText';
import SEO from '../components/SEO';
import SubTitle from '../components/SubTitle';

import Layout from '../layouts/default';

import Navigation from '../modules/Navigation';

import navigation from '../data/navigation';

import colors from '../styles/colors';

const Career = ({
  data: {
    career: {
      city, description, requirements, title,
    },
  },
}) => (
  <Layout>
    <SEO
      title={`Vacancy ${title} at Wheelhouse ${city}`}
      description={description}
    />

    <Navigation items={navigation} />
    <Section>
      <Container>
        <SubTitle>{city}</SubTitle>
        <h1>{title}</h1>
        <BlogText>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </BlogText>
      </Container>
    </Section>
    <Section background={colors.backgroundSecundary}>
      <Container>
        <LightContent>
          <SubTitle>career</SubTitle>
          <h2>Your foundations</h2>
          <BlogText>
            <div dangerouslySetInnerHTML={{ __html: requirements }} />
          </BlogText>
        </LightContent>
      </Container>
    </Section>
  </Layout>
);

Career.propTypes = {
  data: PropTypes.shape({
    career: PropTypes.shape({
      city: PropTypes.string,
      description: PropTypes.string,
      requirements: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    career(slug: { eq: $slug }) {
      city
      description
      requirements
      title
    }
  }
`;

export default memo(Career);
