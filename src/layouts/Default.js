import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../styles/GlobalStyle';

import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />

    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
