/* eslint-disable react/no-danger */
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

import { useTeamRecommendations } from '~api/team/useTeamRecommendations';
import Button from '~components/Button';
import Cinemagraph from '~components/Cinemagraph';
import Content from '~components/Content';
import { Section, Container } from '~components/layoutComponents';
import Markdown from '~components/Markdown';
import OpenSourceLink from '~components/OpenSourceLink';
import OrderedList from '~components/OrderedList';
import QAndA from '~components/QAndA';
import Recommendation from '~components/Recommendation';
import Seo from '~components/SEO';

import { COMPANY_NAME } from '~data/company';
import Layout from '~layouts/default';
import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';

import spacing from '~styles/spacing';

const isWindowContext = typeof window !== 'undefined';

const HeaderContainer = styled.div`
    h2 {
      font-size: 40px;
      text-transform: unset;
      padding-bottom: var(--spacing-default);
      position: relative;
      margin-bottom: var(--spacing-default);

      &:after {
        content: "";
        height: 2px;
        width: 75px;
        background: var(--color-text-primary-900);
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

const Team = ({
  data: {
    employee: {
      excerpt,
      id,
      frontmatter: {
        name,
        role,
        detailImage,
        qAndA,
        description,
        openSourceProject,
      },
      rawMarkdownBody,
    },
  },
}) => {
  const url = isWindowContext && window.location.href;
  const [recommendations] = useTeamRecommendations(name);

  return (
    <Layout>
      <Seo
        title={`${name} - ${role} at ${COMPANY_NAME}`}
        description={excerpt}
        image={detailImage.image}
        url={url}
      />

      <Navigation />

      <Section>
        <Container offset={spacing.large}>
          <HeaderContainer>
            <div>
              <Cinemagraph
                image={detailImage.image}
                alt={name}
                movie={detailImage.movingPicture}
              />
            </div>
            <Content>
              <h2>
                {name} {description}.
              </h2>
              <p>
                {name} is a {role} at Wheelhouse
              </p>
              <Markdown source={rawMarkdownBody} />
            </Content>
          </HeaderContainer>
        </Container>
      </Section>

      {qAndA && (
        <Section>
          <Container>
            <h2>Q&A</h2>
            <Content>
              <p>
                To get to know who we are and what kind of person we are, we ask
                a few questions. Here are the questions and answers of {name}
              </p>
            </Content>
          </Container>
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
                  ),
                )}
              </OrderedList>
            </Content>
          </Container>
          <Container centered>
            <Button to="/insights" as={Link}>
              See more insights
            </Button>
          </Container>
        </Section>
      )}

      {openSourceProject && (
        <Section>
          <Container>
            <Content>
              <h2> Open Source Projects </h2>
              <OpenSourceLink items={openSourceProject} />
            </Content>
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
            alt: PropTypes.string.isRequired,
            bw: PropTypes.bool,
            filename: PropTypes.string,
            image: PropTypes.shape({}),
            offset: PropTypes.string,
            src: PropTypes.string,
          }),
        }),
        name: PropTypes.string,
        qAndA: PropTypes.arrayOf(
          PropTypes.shape({
            a: PropTypes.string,
            q: PropTypes.string,
          }),
        ),
        role: PropTypes.string,
      }),
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Team;

export const query = graphql`
  query ($id: String!) {
    employee: markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      excerpt
      frontmatter {
        description
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
        openSourceProject {
          description
          title
          url
          site_name
          imageWithAlt {
            alt
            image
          }
        }
        role
      }
    }
  }
`;
