/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import Cinemagraph from '~components/Cinemagraph';
import Markdown from '~components/Markdown';
import SEO from '~components/SEO';
import Image from '~components/Image';
import TwoColumns from '~components/TwoColumns';

import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';

import Layout from '~layouts/default';

import spacing from '~styles/spacing';

const isWindowContext = typeof window !== 'undefined';

export const GeneralInfoContainer = styled.div`
  padding-top: var(--spacing-large);

  h2 {
    max-width: unset;
  }
`;

const Team = ({
  data: {
    employee: {
      excerpt,
      id,
      frontmatter: { name, role, detailImage },
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
        image={detailImage.image}
        url={url}
      />

      <Navigation />

      <Section overflow="visible">
        <Container width="1600px" offset={spacing.large}>
          <TwoColumns>
            <div>
              <Container centered>
                <GeneralInfoContainer>
                  <h2>{name}</h2>
                  <h3>{role}</h3>
                </GeneralInfoContainer>
              </Container>
            </div>
            <div>
              <Cinemagraph
                image={detailImage.image}
                alt={name}
                movie={detailImage.cinemagraph}
              />
            </div>
          </TwoColumns>
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
        detailImage: PropTypes.shape({
          image: PropTypes.shape({
            ...Image.propTypes,
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
        detailImage {
          image {
            extension
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
              resize(width: 900) {
                src
              }
            }
          }
          cinemagraph {
            publicURL
          }
        }
        role
      }
    }
  }
`;
