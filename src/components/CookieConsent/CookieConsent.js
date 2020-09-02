import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Button from '~components/Button';

import {
  CookieConsentContainer,
  ConsentHeader,
  ConsentActions,
  ConsentContent,
} from './cookieConsent.styles';

import colors from '~styles/colors';

const CookieConsent = ({
  onUpdate, onCustomize, privacyUrl,
}) => {
  const handleReject = useCallback(
    () => {
      onUpdate(false);
    },
    [onUpdate],
  );

  const handleAccept = useCallback(
    () => {
      onUpdate(true);
    },
    [onUpdate],
  );

  return (
    <CookieConsentContainer>
      <ConsentHeader>Experience more through cookies</ConsentHeader>
      <ConsentContent>
        <p>
          We use cookies or similar technologies as specified in our
          {' '}
          <Link to={privacyUrl}>
            privacy policy
          </Link>
        </p>
      </ConsentContent>
      <ConsentActions>
        <div>
          <Button background={colors.backgroundPrimary600} onClick={onCustomize} name="customize">
            Learn more and customize
          </Button>
        </div>
        <div>
          <Button onClick={handleReject} name="reject">
            Reject
          </Button>
          <Button onClick={handleAccept} name="accept">
            Accept
          </Button>
        </div>
      </ConsentActions>
    </CookieConsentContainer>
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
