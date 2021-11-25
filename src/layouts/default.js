import PropTypes from 'prop-types';
import React from 'react';

import Footer from '~components/Footer';

import CookieConsent from '~modules/CookieConsent';
import { GlobalStyle } from '~styles/GlobalStyle';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <CookieConsent />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
