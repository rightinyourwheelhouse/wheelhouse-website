/* eslint-disable react/no-danger */
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import readingTime from 'reading-time';

import AuthorInfo from '~components/AuthorInfo';
import Content from '~components/Content';
import ImageTitle from '~components/ImageTitle';
import { gridLayouts } from '~components/InsightsGrid';
import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';
import Share from '~components/Share';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import InsightsOverview from '~modules/InsightsOverview';
import JobOverview from '~modules/JobOverview';

import Navigation from '~modules/Navigation';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

import { getHtmlExcerpt } from '~utils/string';
import 'highlight.js/styles/github-dark.css';

const isWindowContext = typeof window !== 'undefined';
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('scss', scss);

const Blog = ({
  data: {
    feedBlog: {
      id,
      creator,
      isoDate,
      title,
      link,
      content: { encoded },
      image,
    },
  },
}) => {
  const { text: time } = readingTime(encoded);
  const url = isWindowContext && window.location.href;

  useEffect(() => {
    hljs.configure({ cssSelector: 'pre' });
    const brPlugin = {
      'before:highlightBlock': ({ block }) => {
        block.innerHTML = block.innerHTML
          .replace(/\n/g, '')
          .replace(/<br[ /]*>/g, '\n');
      },
      'after:highlightBlock': ({ result }) => {
        result.value = result.value.replace(/\n/g, '<br>');
      },
    };
    hljs.addPlugin(brPlugin);
    hljs.highlightAll();
  }, []);

  return (
    <Layout>
      <Seo
        title={`${title}`}
        description={getHtmlExcerpt(encoded)}
        image={image}
        url={url}
        article
      />

      <Navigation />

      <Section>
        <ImageTitle image={<Img fluid={image.childImageSharp.fluid} />}>
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
          <InsightsOverview
            current={id}
            count={3}
            layout={gridLayouts.COLUMN}
          />
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
  query ($id: String!) {
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
