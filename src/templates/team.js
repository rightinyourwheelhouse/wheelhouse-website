/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import styled from 'styled-components';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';
import Image from '~components/Image';

import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';

import Layout from '~layouts/default';

const isWindowContext = typeof window !== 'undefined';

export const Name = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  max-width: 100%;
  top: var(--spacing-default);
  transform: translateX(-50%);
  left: 50%;
  color: var(--color-text-primary-100);
  z-index: 99;
  margin-bottom: var(--spacing-default);
`;

const Team = ({
  data: {
    employee: {
      excerpt,
      id,
      frontmatter: { name, role, image },
      rawMarkdownBody,
    },
  },
}) => {
  const url = isWindowContext && window.location.href;

  return (
    <Layout>
      <SEO
        title={`${name} ${role}`}
        description={excerpt}
        image={image}
        url={url}
      />

      <Navigation />

      <Section overflow="visible">
        <Container relative overflow="visible">
          <Name>{name}</Name>
          <Content centered width="700px">
            <Image image={image} alt={name} />
          </Content>
        </Container>
      </Section>

      <Section>
        <Container>
          <Content>
            <Markdown source={rawMarkdownBody} />
          </Content>
        </Container>
      </Section>

      <Section>
        <Container>
          <TeamOverview current={id} />
        </Container>
      </Section>
    </Layout>
  );
};

Team.propTypes = {
  data: PropTypes.shape({
    employee: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({}),
            resize: PropTypes.shape({
              src: PropTypes.string,
            }),
          }),
        }),
        name: PropTypes.string,
        role: PropTypes.string,
      }),
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Team;

export const query = graphql`
  query($id: String!) {
    employee: markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      excerpt
      frontmatter {
        name
        image: detailImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 900) {
              src
            }
          }
        }
        role
      }
    }
  }
`;
