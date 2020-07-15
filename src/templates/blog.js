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

import JobOverview from '~modules/JobOverview';
import BlogOverview from '~modules/BlogOverview';
import Navigation from '~modules/Navigation';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

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

      <Section>
        <Container>
          <SubTitle>Blog</SubTitle>
          <h2>More blog articles</h2>
          <BlogOverview current={id} count={2} />
        </Container>
      </Section>

      <WorkingAtmosphereHorizontal />

      <Section>
        <Container>
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
        }
      }
    }
  }
`;

export default memo(Blog);
