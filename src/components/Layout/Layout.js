import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../styles/GlobalStyle';

import Footer from '../Footer';

import navigation from '../../data/navigation';

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
