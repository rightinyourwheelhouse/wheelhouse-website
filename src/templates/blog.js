/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import {
  Section,
  Container,
} from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const Blog = ({
  data: {
    feedBlog: {
      title,
      content: {
        encoded,
      },
    },
  },
}) => (
  <Layout>
    <SEO
      title={`Vacancy ${title} at Wheelhouse ${title}`}
      description={title}
    />

    <Navigation />
    <Section>
      <Container>
        <SubTitle>Blog</SubTitle>
        <h1>{title}</h1>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: encoded }} />
        </Content>
      </Container>
    </Section>

  </Layout>
);

Blog.propTypes = {
  data: PropTypes.shape({
    feedBlog: PropTypes.shape({
      content: PropTypes.shape({
        encoded: PropTypes.string,
      }),
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($id: String!) {
    feedBlog(id: { eq: $id }) {
      title
      content {
        encoded
      }
    }
  }
`;

export default memo(Blog);
