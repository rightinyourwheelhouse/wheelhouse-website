/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import readingTime from 'reading-time';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import ImageTitle from '~components/ImageTitle';
import Info from '~components/Info';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const Blog = ({
  data: {
    feedBlog: {
      creator,
      isoDate,
      title,
      content: { encoded },
      image: {
        childImageSharp: { fluid },
      },
    },
  },
}) => {
  const { text: time } = readingTime(encoded);

  return (
    <Layout>
      <SEO
        title={`Vacancy ${title} at Wheelhouse ${title}`}
        description={title}
      />

      <Navigation />

      <Section>
        <ImageTitle image={<Img fluid={fluid} />}>
          <SubTitle>Blog</SubTitle>
          <h1>{title}</h1>
          <Info title={creator} description={`${isoDate} · ${time}`} />
        </ImageTitle>
        <Container>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: encoded }} />
          </Content>
        </Container>
      </Section>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    feedBlog: PropTypes.shape({
      content: PropTypes.shape({
        encoded: PropTypes.string,
      }),
      creator: PropTypes.string,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}),
        }),
      }),
      isoDate: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($id: String!) {
    feedBlog(id: { eq: $id }) {
      creator
      isoDate(formatString: "D MMM YYYY")
      title
      content {
        encoded
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export default memo(Blog);
