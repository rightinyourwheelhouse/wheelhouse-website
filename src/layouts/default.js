import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '~styles/GlobalStyle';

import Footer from '~components/Footer';
import CookieConsent from '~modules/CookieConsent';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />

    <CookieConsent />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
