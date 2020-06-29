import React from 'react';

import {
  Section,
  Container,
  LightContent,
} from '../components/layoutComponents';
import Button from '../components/Button';
import GalleryItem from '../components/GalleryItem';
import NavBar from '../components/NavBar';
import SEO from '../components/SEO';
import SubTitle from '../components/SubTitle';
import UnalignedGrid from '../components/UnalignedGrid';

import Layout from '../layouts/default';

import WelcomeHero from '../modules/WelcomeHero';
import BlogOverview from '../modules/BlogOverview';

import colors from '../styles/colors';

import navigation from '../data/navigation';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar
      baseBackgroundColor={colors.primary}
      baseColor={colors.textLight}
      items={navigation}
      logoInitiallyHidden
    />
    <WelcomeHero />
    <Section>
      <Container>
        <SubTitle>Work</SubTitle>
        <h2>
          Projects
          {' '}
          <br />
          {' '}
          we worked on
        </h2>
        <UnalignedGrid>
          <GalleryItem
            to="/"
            image="https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
            title="case study x"
            description="react project for customer x"
          />
          <GalleryItem
            to="/"
            image="https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
            title="case study x"
            description="react project for customer x"
          />
          <GalleryItem
            to="/"
            image="https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
            title="case study x"
            description="react project for customer x"
          />
          <GalleryItem
            to="/"
            image="https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
            title="case study x"
            description="react project for customer x"
          />
        </UnalignedGrid>
      </Container>
      <Container centered>
        <Button>See more of this</Button>
      </Container>
    </Section>
    <Section background={colors.backgroundSecundary}>
      <Container>
        <LightContent>
          <BlogOverview />
        </LightContent>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
