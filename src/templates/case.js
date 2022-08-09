/* eslint-disable react/no-danger */
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

import Content from '~components/Content';
import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

import AuthorInfo from '../components/AuthorInfo';
import ImageTitle from '../components/ImageTitle';
import Share from '../components/Share';

const isWindowContext = typeof window !== 'undefined';

function Case({
  data: {
    casesJson: { title, body, image, company },
  },
}) {
  const time = `${Math.ceil(body.length / 5 / 180)} min`;
  const url = isWindowContext && window.location.href;

  return (
    <Layout>
      <Seo title={`${title}`} description={body} />

      <Navigation />

      <Section>
        <ImageTitle
          image={
            <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} />
          }
        >
          <SubTitle>Case</SubTitle>
          <h1>{title}</h1>
          <AuthorInfo author={company} readTime={time}>
            <Share url={url} />
          </AuthorInfo>
        </ImageTitle>
        <Container>
          <Content>
            <ReactMarkdown className="markdown">{body}</ReactMarkdown>
          </Content>
        </Container>
      </Section>
    </Layout>
  );
}

Case.propTypes = {
  data: PropTypes.shape({
    casesJson: PropTypes.shape({
      image: PropTypes.shape({}),
      title: PropTypes.string,
      body: PropTypes.string,
      company: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query ($id: String!) {
    casesJson(id: { eq: $id }) {
      title
      body
      company
      image {
        ...fluidImage
      }
    }
  }
`;

export default memo(Case);
