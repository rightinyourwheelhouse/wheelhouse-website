import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';

import ConsentList from './_ConsentList';

import {
  CookieConsentActions,
  CookieConsentAdvancedContainer,
  CookieConsentContent,
  CookieConsentOptions,
  CookieConsentHeader,
  Overlay,
} from './cookieConsentAdvanced.styles';

import Button from '~components/Button';

import colors from '~styles/colors';

function CookieConsentAdvanced({
  cookies,
  onCancel,
  onUpdate,
  onUpdateAll,
  onSave,
  privacyUrl,
}) {
  const handleRejectAll = useCallback(() => {
    onUpdateAll(false);
  }, [onUpdateAll]);

  const handleAcceptAll = useCallback(() => {
    onUpdateAll(true);
  }, [onUpdateAll]);

  const handleSave = useCallback(() => {
    onSave(cookies);
  }, [cookies, onSave]);

  return (
    <div>
      <Overlay />
      <CookieConsentAdvancedContainer>
        <CookieConsentHeader>
          <Button
            onClick={onCancel}
            background={colors.backgroundPrimary900}
            backgroundHover={colors.backgroundPrimary900}
            border={colors.textPrimary900}
            color={colors.textPrimary900}
          >
            Go back
          </Button>
          <Button
            as={Link}
            to={privacyUrl}
            background={colors.backgroundPrimary900}
            backgroundHover={colors.backgroundPrimary900}
            color={colors.textPrimary900}
          >
            See cookie policy
          </Button>
        </CookieConsentHeader>
        <CookieConsentContent>
          <h2>Tracking preferences</h2>
          <p>
            The following panel allows you to customize your consent preferences
            for any tracking technology used to help us achieve the features and
            activities described below. To learn more about how these trackers
            help us and how they work, refer to the cookie policy.
          </p>
        </CookieConsentContent>
        <CookieConsentActions>
          <Button
            background={colors.backgroundPrimary800}
            color={colors.textPrimary900}
            onClick={handleRejectAll}
            name="rejectAll"
          >
            Reject all
          </Button>
          <Button onClick={handleAcceptAll} name="acceptAll">
            Accept all
          </Button>
        </CookieConsentActions>
        <CookieConsentOptions>
          <ConsentList cookies={cookies} onChange={onUpdate} />
        </CookieConsentOptions>
        <CookieConsentActions>
          <Button onClick={handleSave} name="save">
            Save and continue
          </Button>
        </CookieConsentActions>
      </CookieConsentAdvancedContainer>
    </div>
  );
}

CookieConsentAdvanced.propTypes = {
  cookies: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      required: PropTypes.bool,
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  ),
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onUpdateAll: PropTypes.func.isRequired,
  privacyUrl: PropTypes.string,
};

CookieConsentAdvanced.defaultProps = {
  cookies: [],
  privacyUrl: '/privacy-policy',
};

export default memo(CookieConsentAdvanced);
