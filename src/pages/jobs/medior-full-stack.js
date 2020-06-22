import React from 'react';

import NavBar from '../../components/NavBar';
import SEO from '../../components/SEO';

import Layout from '../../layouts/Career';

import navigation from '../../data/navigation';

const IndexPage = () => (
  <Layout>
    <SEO title="Medior full stack developer" />
    <NavBar items={navigation} />

  </Layout>
);

export default IndexPage;
