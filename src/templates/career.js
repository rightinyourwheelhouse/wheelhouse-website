/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import {
  Section,
  Container,
  LightContent,
} from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

import colors from '~styles/colors';

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

    <Navigation />
    <Section>
      <Container>
        <SubTitle>{city}</SubTitle>
        <h1>{title}</h1>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Content>
      </Container>
    </Section>
    <Section background={colors.backgroundSecundary}>
      <Container>
        <LightContent>
          <SubTitle>career</SubTitle>
          <h2>Your foundations</h2>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: requirements }} />
          </Content>
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
