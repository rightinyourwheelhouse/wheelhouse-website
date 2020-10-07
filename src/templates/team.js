/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Section,
  Container,
  ContrastColor,
} from '~components/layoutComponents';
import Content from '~components/Content';
import Cinemagraph from '~components/Cinemagraph';
import Markdown from '~components/Markdown';
import SEO from '~components/SEO';
import Image from '~components/Image';
import TwoColumns from '~components/TwoColumns';
import QAndA from '~components/QAndA';

import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';

import Layout from '~layouts/default';

import spacing from '~styles/spacing';
import colors from '~styles/colors';

import { COMPANY_NAME } from '~data/company';

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
      frontmatter: {
        name, role, detailImage, qAndA,
      },
      rawMarkdownBody,
    },
  },
}) => {
  const url = isWindowContext && window.location.href;

  return (
    <Layout>
      <SEO
        title={`${name} - ${role} at ${COMPANY_NAME}`}
        description={excerpt}
        image={detailImage.image}
        url={url}
      />

      <Navigation
        baseBackgroundColor={colors.backgroundPrimary100}
        baseColor={colors.textPrimary100}
        baseHoverColor={colors.primary}
        hamburgerColor={colors.textPrimary100}
      />

      <Section overflow="visible" background={colors.backgroundPrimary100}>
        <Container width="1600px" offset={spacing.large}>
          <ContrastColor color={colors.backgroundPrimary100}>
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
          </ContrastColor>
        </Container>
      </Section>

      <Section>
        <Container>
          <TwoColumns>
            <div />
            <div>
              <Markdown source={rawMarkdownBody} />
            </div>
          </TwoColumns>
        </Container>
      </Section>

      {
        qAndA && (
        <Section>
          <Container>
            <QAndA items={qAndA} />
          </Container>
        </Section>
        )
      }

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
        qAndA: {
          ...QAndA.propTypes,
        },
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
        qAndA {
          q
          a
        }
        role
      }
    }
  }
`;
