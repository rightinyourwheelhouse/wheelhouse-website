/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';

import Navigation from '~modules/Navigation';

import Layout from '~layouts/default';

import { getHtmlExcerpt } from '~utils/string';

const isWindowContext = typeof window !== 'undefined';

const Blog = ({
  data: {
    feedBlog: {
      title,
      link,
      content: { encoded },
      image: {
        childImageSharp: {
          resize: { src },
        },
      },
    },
  },
}) => {
  const url = isWindowContext && window.location.href;

  return (
    <Layout>
      <SEO
        title={`${title}`}
        description={getHtmlExcerpt(encoded)}
        image={src}
        url={url}
        article
      />

      <Navigation />

      <Section>
        <Container>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: encoded }} />
          </Content>
        </Container>
      </Section>

      <link rel="canonical" href={link} />
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
      id: PropTypes.string,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}),
          resize: PropTypes.shape({
            src: PropTypes.string,
          }),
        }),
      }),
      isoDate: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($id: String!) {
    feedBlog(id: { eq: $id }) {
      id
      creator
      isoDate(formatString: "D MMM YYYY")
      title
      link
      content {
        encoded
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
          resize(width: 900) {
            src
          }
        }
      }
    }
  }
`;

export default memo(Blog);
