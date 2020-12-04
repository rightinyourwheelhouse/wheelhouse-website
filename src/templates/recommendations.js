/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import readingTime from 'reading-time';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Markdown from '~components/Markdown';
import { gridLayouts } from '~components/InsightsGrid';
import { Section, Container } from '~components/layoutComponents';
import AuthorInfo from '~components/AuthorInfo';
import Content from '~components/Content';
import OrderedList from '~components/OrderedList';
import Recommendation from '~components/Recommendation';
import SEO from '~components/SEO';
import Share from '~components/Share';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import JobOverview from '~modules/JobOverview';
import InsightsOverview from '~modules/InsightsOverview';
import Navigation from '~modules/Navigation';
import WorkingAtmosphereHorizontal from '~modules/WorkingAtmosphereHorizontal';

import { toShortDate } from '~utils/date';
import { getMarkdownExcerpt } from '~utils/string';

const isWindowContext = typeof window !== 'undefined';

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
      image,
    },
  },
}) => {
  const { text: time } = readingTime(introduction + slot);
  const url = isWindowContext && window.location.href;

  return (
    <Layout>
      <SEO
        title={`${title} | from ${author}`}
        description={getMarkdownExcerpt(introduction)}
        image={image}
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
            {introduction && <Markdown source={introduction} />}
            <OrderedList>
              {items.map(
                ({
                  author: itemAuthor,
                  title: itemTitle,
                  url: itemUrl,
                  description: itemDescription,
                  pickedBy,
                }) => (
                  <Recommendation
                    author={itemAuthor}
                    title={itemTitle}
                    url={itemUrl}
                    description={itemDescription}
                    key={itemTitle}
                    pickedBy={pickedBy}
                  />
                )
              )}
            </OrderedList>
            {slot && <Markdown source={slot} />}
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
        pickedBy
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
