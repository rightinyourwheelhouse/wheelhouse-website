/* eslint-disable react/no-danger */
import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import {
  Section,
  Container,
  LightContent,
} from '~components/layoutComponents';
import Content from '~components/Content';
import SEO from '~components/SEO';
import SubTitle from '~components/SubTitle';

import Layout from '~layouts/default';

import ApplyForm from '~modules/ApplyForm';
import GeneralOnboarding from '~modules/GeneralOnboarding';
import JobOverview from '~modules/JobOverview';
import Navigation from '~modules/Navigation';
import OpenSource from '~modules/OpenSource';
import WorkingAtmosphereGallery from '~modules/WorkingAtmosphereGallery';

import colors from '~styles/colors';

const FadingSection = styled.div`
  filter: ${({ visible }) => (visible ? 'blur(0)' : 'blur(10px)')};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const Career = ({
  data: {
    career: {
      city, description, id, requirements, title,
    },
  },
}) => {
  const [formIsVisible, setFormVisibility] = useState(true);
  const handleFormClicked = useCallback(() => {
    setFormVisibility(false);
  }, []);

  return (
    <Layout>
      <SEO
        title={`Vacancy ${title} at Wheelhouse ${city}`}
        description={description}
      />

      <Navigation
        baseBackgroundColor={colors.backgroundPrimary100}
        baseColor={colors.textPrimary100}
        baseHoverColor={colors.primary}
        hamburgerColor={colors.textPrimary100}
      />

      <Section background={colors.backgroundPrimary100}>
        <Container>
          <LightContent>
            <article>
              <SubTitle>{city}</SubTitle>
              <h1>{title}</h1>
              <Content>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </Content>
            </article>
          </LightContent>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubTitle>career</SubTitle>
          <h2>Your foundations</h2>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: requirements }} />
          </Content>
        </Container>
      </Section>

      <WorkingAtmosphereGallery />

      <FadingSection visible={formIsVisible}>
        <Section>
          <Container>
            <Content>
              <SubTitle>Apply</SubTitle>
              <h2>Do we have your attention?</h2>
              <ApplyForm handleFormClicked={handleFormClicked} />
            </Content>
          </Container>
        </Section>
      </FadingSection>

      <GeneralOnboarding showInitialStage={false} hidden={formIsVisible}>
        <h2>Get in touch with us</h2>
      </GeneralOnboarding>

      <Section background={colors.backgorundPrimary200}>
        <Container>

          <SubTitle>careers</SubTitle>
          <h2>Other career opportunities</h2>

          <JobOverview current={id} />
        </Container>
      </Section>
      <Section>
        <Container>
          <OpenSource />
        </Container>
      </Section>
      <Section />
    </Layout>
  );
};

Career.propTypes = {
  data: PropTypes.shape({
    career: PropTypes.shape({
      city: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      requirements: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    career(slug: { eq: $slug }) {
      id
      city
      description
      requirements
      title
    }
  }
`;

export default memo(Career);
