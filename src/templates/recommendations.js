/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import readingTime from 'reading-time';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';
import { gridLayouts } from '~components/InsightsGrid';
import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import AuthorInfo from '~components/AuthorInfo';
import SEO from '~components/SEO';
import Share from '~components/Share';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import JobOverview from '~modules/JobOverview';
import RecommendationsOverview from '~modules/RecommendationsOverview';
import Navigation from '~modules/Navigation';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

import { toShortDate } from '~utils/date';

const isWindowContext = typeof window !== 'undefined';

export const OrderedList = styled.ol`
  margin: var(--spacing-extra-large) 0;

  li {
    margin-bottom: var(--spacing-large);
    padding-bottom: var(--spacing-large);

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  a {
    text-decoration: underline;
    color: var(--color-text-primary-900);

    &:hover {
      color: var(--color-primary);
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
      introduction,
      slot,
      image: {
        childImageSharp: {
          fluid,
          resize: { src },
        },
      },
    },
  },
}) => {
  const { text: time } = readingTime(introduction + slot);
  const url = isWindowContext && window.location.href;

  return (
    <Layout>
      <SEO
        title={`${title} | from ${author}`}
        description={title}
        image={src}
        url={url}
        article
      />

      <Navigation />

      <Section>
        <Container>
          <Content>
            <h2>{title}</h2>
            <AuthorInfo
              author={author}
              date={toShortDate(date)}
              readTime={time}
            >
              <Share url={url} />
            </AuthorInfo>
          </Content>
        </Container>
      </Section>

      {fluid && (
        <Section space="12px">
          <Container>
            <Img fluid={fluid} />
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
                  <li key={itemTitle}>
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
          </Content>
          <AuthorInfo
            full
            author={author}
            date={toShortDate(date)}
            readTime={time}
          >
            <Share url={url} />
          </AuthorInfo>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubTitle>Recommendations</SubTitle>
          <h2>More Recommendations</h2>
          <RecommendationsOverview
            current={id}
            count={2}
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
          resize: PropTypes.shape({ src: PropTypes.string }),
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
      introduction
      slot
      image {
        childImageSharp {
          fluid(maxWidth: 1200) {
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

export default memo(Recommendations);
