import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Button from '~components/Button';

import {
  CookieConsentSimpleContainer,
  ConsentHeader,
  ConsentActions,
  ConsentContentSimple,
} from './cookieConsentSimple.styles';

import colors from '~styles/colors';

const CookieConsent = ({
  onUpdate, onCustomize, privacyUrl,
}) => {
  const handleAccept = useCallback(
    () => {
      onUpdate(true);
    },
    [onUpdate],
  );

  return (
    <CookieConsentSimpleContainer>
      <ConsentHeader>Experience more through cookies</ConsentHeader>
      <ConsentContentSimple>
        <p>
          We use cookies or similar technologies as specified in our
          {' '}
          <Link to={privacyUrl}>
            privacy policy
          </Link>
        </p>
      </ConsentContentSimple>
      <ConsentActions>
        <div>
          <Button background={colors.backgroundPrimary600} onClick={onCustomize} name="customize">
            Learn more and customize
          </Button>
        </div>
        <div>
          <Button onClick={handleAccept} name="accept">
            Accept all
          </Button>
        </div>
      </ConsentActions>
    </CookieConsentSimpleContainer>
  );
};

CookieConsent.propTypes = {
  onCustomize: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  privacyUrl: PropTypes.string,
};

CookieConsent.defaultProps = {
  privacyUrl: '/privacy-policy',
};

export default memo(CookieConsent);
