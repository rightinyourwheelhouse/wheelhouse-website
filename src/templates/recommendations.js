/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import readingTime from 'reading-time';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';
import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import Info from '~components/Info';
import SEO from '~components/SEO';
import Share from '~components/Share';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import JobOverview from '~modules/JobOverview';
import RecommendationsOverview from '~modules/RecommendationsOverview';
import Navigation from '~modules/Navigation';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

import { toShortDate } from '~utils/date';

import colors from '~styles/colors';
import spacing from '~styles/spacing';

const isWindowContext = typeof window !== 'undefined';

export const OrderedList = styled.ol`
  margin: ${spacing.big} 0;

  li {
    margin-bottom: ${spacing.large};
    padding-bottom: ${spacing.large};

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  a {
    text-decoration: underline;
    color: ${colors.textPrimary};

    &:hover {
      color: ${colors.primary};
    }
  }

  span {
    display: block;
    margin-top: 12px;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
  }

  blockquote {
    margin-top: 1em;
    margin-bottom: 0;

    * {
      font-size: 1.1rem;
    }
  }
`;

const Recommendations = ({
  data: {
    recommendationsJson: {
      id,
      date,
      author,
      title,
      items,
      tags,
      description,
      introduction,
      slot,
      image,
    },
  },
}) => {
  const { text: time } = readingTime(introduction + slot);
  const url = isWindowContext && window.location.href;

  return (
    <Layout>
      <SEO title={`${title} | from ${author}`} description={title} />

      <Navigation />

      <Section>
        <Container>
          <Content>
            <h2>{title}</h2>
            <Info author={author} date={toShortDate(date)} readTime={time}>
              <Share url={url} />
            </Info>
          </Content>
        </Container>
      </Section>

      {image && (
        <Section space="12px">
          <Container>
            <Img fluid={image.childImageSharp.fluid} />
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <Content>
            <ReactMarkdown source={introduction} />
            <OrderedList>
              {items.map(
                ({
                  author: itemAuthor,
                  title: itemTitle,
                  url: itemUrl,
                  description: itemDescription,
                }) => (
                  <li>
                    <a href={itemUrl} target="_blank" rel="nofollow noreferrer">
                      {itemTitle}
                    </a>
                    {itemAuthor && (
                    <span>
                      Author:
                      {' '}
                      {itemAuthor}
                    </span>
                    )}
                    <blockquote>
                      <ReactMarkdown source={itemDescription} />
                    </blockquote>
                  </li>
                )
              )}
            </OrderedList>
            <ReactMarkdown source={slot} />
            <Info author={author} date={toShortDate(date)} readTime={time}>
              <Share url={url} />
            </Info>
          </Content>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubTitle>Recommendations</SubTitle>
          <h2>More Recommendations</h2>
          <RecommendationsOverview current={id} count={2} />
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
    </Layout>
  );
};

Recommendations.propTypes = {
  data: PropTypes.shape({
    recommendationsJson: PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}),
        }),
      }),
      introduction: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.string,
          description: PropTypes.string,
          title: PropTypes.string,
          url: PropTypes.string,
        })
      ),
      slot: PropTypes.string,
      tags: PropTypes.array,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($id: String!) {
    recommendationsJson(id: { eq: $id }) {
      id
      date
      author
      title
      items {
        title
        author
        url
        description
      }
      tags
      description
      introduction
      slot
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

export default memo(Recommendations);
