/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import {
  Section,
  Container,
  ContrastColor,
} from '~components/layoutComponents';
import Button from '~components/Button';
import Cinemagraph from '~components/Cinemagraph';
import Content from '~components/Content';
import Image from '~components/Image';
import Markdown from '~components/Markdown';
import OrderedList from '~components/OrderedList';
import QAndA from '~components/QAndA';
import Recommendation from '~components/Recommendation';
import SEO from '~components/SEO';
import TwoColumns from '~components/TwoColumns';

import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';

import Layout from '~layouts/default';

import spacing from '~styles/spacing';
import colors from '~styles/colors';
import breakpoints from '~styles/breakpoints';

import { COMPANY_NAME } from '~data/company';

import { useTeamRecommendations } from '~api/team/useTeamRecommendations';

const isWindowContext = typeof window !== 'undefined';

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--spacing-default) / 2 * -1);

  > div {
    margin: calc(var(--spacing-default) / 2);
    flex-basis: 40%;
    flex-grow: 1;

    span {
      font-size: 1.5em;
      text-transform: uppercase;
    }

    h2 {
      text-transform: unset;
    }

    &:last-child {
      flex-basis: 0;
      flex-grow: 999;
      min-width: calc(50% - var(--spacing-default));
    }
  }
`;

const GeneralInfoContainer = styled.div`
  @media screen and (min-width: ${breakpoints.medium}) {
    padding-top: var(--spacing-large);
  }

  > div {
    padding: 0;
  }

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
  const [recommendations] = useTeamRecommendations(name);

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
        <Container width="1800px" offset={spacing.large}>
          <ContrastColor color={colors.backgroundPrimary100}>
            <HeaderContainer>
              <GeneralInfoContainer>
                <Container centered>
                  <span>TEAM</span>
                  <h2>
                    {name}
                    ,
                    {' '}
                    {role}
                  </h2>
                </Container>
              </GeneralInfoContainer>
              <div>
                <Cinemagraph
                  image={detailImage.image}
                  alt={name}
                  movie={detailImage.movingPicture}
                />
              </div>
            </HeaderContainer>
          </ContrastColor>
        </Container>
      </Section>

      <Section>
        <Container>
          <TwoColumns firstColumnWidth="30%">
            <div />
            <div>
              <Markdown source={rawMarkdownBody} />
            </div>
          </TwoColumns>
        </Container>
      </Section>

      {qAndA && (
        <Section>
          <Container offset={spacing.large}>
            <QAndA items={qAndA} />
          </Container>
        </Section>
      )}

      {recommendations.length > 0 && (
        <Section>
          <Container>
            <Content>
              <h2>Latest recommendations</h2>
              <OrderedList>
                {recommendations.map(
                  ({
                    author: itemAuthor,
                    title: itemTitle,
                    url: itemUrl,
                    description: itemDescription,
                  }) => (
                    <Recommendation
                      author={itemAuthor}
                      title={itemTitle}
                      url={itemUrl}
                      description={itemDescription}
                      key={itemTitle}
                    />
                  )
                )}
              </OrderedList>
            </Content>
          </Container>
          <Container centered>
            <Button to="/insights" as={Link}>See more insights</Button>
          </Container>
        </Section>
      )}

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
        qAndA: PropTypes.arrayOf(
          PropTypes.shape({
            a: PropTypes.string,
            q: PropTypes.string,
          })
        ),
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
          movingPicture {
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
