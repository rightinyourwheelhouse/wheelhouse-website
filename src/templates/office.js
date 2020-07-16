/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Section, Container } from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const Office = ({
  data: {
    officesJson: {
      address, description, howToReach, mail, name, phone,
    },
  },
}) => (
  <Layout>
    <SEO
      title={`Our office at ${name}`}
      description={description}
    />

    <Navigation />

    <Section>
      <Container>
        <SubTitle>{Office}</SubTitle>
        <h1>{`Wheelhouse ${name}`}</h1>
        <Content>
          content
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
      mail: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($id: String!) {
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
