import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '~styles/GlobalStyle';

import Footer from '~components/Footer';
import CookieConsentOptions from '~modules/CookieConsentOptions';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />

    <CookieConsentOptions />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
