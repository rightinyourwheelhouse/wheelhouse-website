/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import readingTime from 'reading-time';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import ImageTitle from '~components/ImageTitle';
import AuthorInfo from '~components/AuthorInfo';
import SEO from '~components/SEO';
import Share from '~components/Share';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import JobOverview from '~modules/JobOverview';
import InsightsOverview from '~modules/InsightsOverview';
import Navigation from '~modules/Navigation';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

import { getHtmlExcerpt } from '~utils/string';

import { gridLayouts } from '~components/InsightsGrid';

const isWindowContext = typeof window !== 'undefined';

const Blog = ({
  data: {
    feedBlog: {
      id,
      creator,
      isoDate,
      title,
      link,
      content: { encoded },
      image: {
        childImageSharp: {
          fluid,
          resize: { src },
        },
      },
    },
  },
}) => {
  const { text: time } = readingTime(encoded);
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
        <ImageTitle image={<Img fluid={fluid} />}>
          <SubTitle>Blog</SubTitle>
          <h1>{title}</h1>
          <AuthorInfo author={creator} date={isoDate} readTime={time}>
            <Share url={url} />
          </AuthorInfo>
        </ImageTitle>
        <Container>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: encoded }} />
          </Content>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubTitle>insights</SubTitle>
          <h2>More insights</h2>
          <InsightsOverview current={id} count={3} layout={gridLayouts.COLUMN} />
        </Container>
      </Section>

      <WorkingAtmosphereHorizontal />

      <Section>
        <Container>
          <SubTitle>careers</SubTitle>
          <h2>Work with us</h2>

          <JobOverview />
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
          resize(width: 900, quality: 90) {
            src
          }
        }
      }
    }
  }
`;

export default memo(Blog);
