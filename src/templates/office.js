/* eslint-disable react/no-danger */
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

import Content from '~components/Content';
import { Section, Container } from '~components/layoutComponents';
import Seo from '~components/SEO';
import SubTitle from '~components/SubTitle';
import TwoColumns from '~components/TwoColumns';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const Office = ({
  data: {
    officesJson: { address, description, howToReach, mail, name, phone, image },
  },
}) => (
  <Layout>
    <Seo title={`Wheelhouse office in ${name}`} description={description} />

    <Navigation />

    <Section>
      <Container>
        <SubTitle>{Office}</SubTitle>
        <h1>{`Wheelhouse ${name}`}</h1>
        <Content>
          <TwoColumns>
            <div>
              <p>
                <a href={`mailto:${mail}`}>{mail}</a>
                <br />
                <a href={`tel:${phone}`}>{phone}</a>
              </p>
              <p>{address}</p>
            </div>
            <div>
              <ReactMarkdown children={description} />
            </div>
          </TwoColumns>
        </Content>
        <Img fluid={image.childImageSharp.fluid} alt={`${name} office`} />
        <Content>
          <h2>How to reach us</h2>
          <div>
            <ReactMarkdown children={howToReach} />
          </div>
        </Content>
      </Container>
    </Section>
  </Layout>
);

Office.propTypes = {
  data: PropTypes.shape({
    officesJson: PropTypes.shape({
      address: PropTypes.string,
      description: PropTypes.string,
      howToReach: PropTypes.string,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}),
        }),
      }),
      mail: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query ($id: String!) {
    officesJson(id: { eq: $id }) {
      name
      address
      mail
      phone
      description
      howToReach
      image {
        ...fluidImage
      }
    }
  }
`;

export default memo(Office);
