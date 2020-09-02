import React, {
  memo, useState, useCallback, useEffect, useMemo,
} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactGA from 'react-ga';

import { CookieConsentContainer } from './cookieConsent.styles';

import CookieConsentSimple from '~components/CookieConsentSimple';
import CookieConsentAdvanced from '~components/CookieConsentAdvanced';

import { useCookie, setCookie } from '~hooks/useCookie';

const ANALYTICS_COOKIE_NAME = 'gdpr-google-analytics';

const cookies = [
  {
    description:
      'These bare minimum trackers are needed to ensure the website works.',
    label: 'Strictly necessary',
    name: 'strictly-necessary',
    required: true,
  },
  {
    description:
      'These trackers help us to measure traffic and analyze your behavior with the goal of improving our service.',
    label: 'measurement',
    name: ANALYTICS_COOKIE_NAME,
  },
];

const query = graphql`
  query {
    site {
      siteMetadata {
        trackingId
      }
    }
  }
`;

const debug = true;

const CookieConsent = () => {
  const {
    site: {
      siteMetadata: {
        trackingId,
      },
    },
  } = useStaticQuery(query);

  const [visible, setVisible] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [consentsCookieValue, setConsentsCookieValue] = useCookie(
    'gdpr-consents'
  );
  const [consents, setConsents] = useState([]);

  useEffect(() => {
    let values = [];

    if (consentsCookieValue === undefined || debug) {
      setVisible(true);
    }

    if (consentsCookieValue !== undefined) {
      values = JSON.parse(consentsCookieValue);
    }

    setConsents(values);
  }, [JSON.stringify(consentsCookieValue)]);

  const consentList = useMemo(() => {
    const list = [];

    cookies.forEach(({ name, ...rest }) => {
      const item = {
        ...rest,
        name,
        value: consents[name],
      };

      list.push(item);
    });

    return list;
  }, [JSON.stringify(consents)]);

  const onSave = useCallback(
    (cookiePreferences = undefined) => {
      let stringified = {};

      if (cookiePreferences !== undefined) {
        const toSave = {};

        cookiePreferences.forEach(({ name, value, required }) => {
          if (!required) {
            toSave[name] = value;
            setCookie(name, value.toString());

            if (value) {
              const prevValue = (consentsCookieValue !== undefined) && JSON.parse(consentsCookieValue)[name];

              if (name === ANALYTICS_COOKIE_NAME && !prevValue) {
                ReactGA.initialize(trackingId);
              }
            }
          }
        });

        stringified = JSON.stringify(toSave);
      }

      setVisible(false);
      setAdvanced(false);
      setConsentsCookieValue(stringified);
    },
    [JSON.stringify(consents), JSON.stringify(consentsCookieValue)]
  );

  const onUpdateAll = useCallback(
    (accepted, triggerSave = true) => {
      const updatedConsents = [];

      cookies.forEach(({ name, required, ...rest }) => {
        if (!required) {
          const item = {
            ...rest,
            name,
            value: accepted,
          };

          updatedConsents.push(item);
        }
      });

      setConsents(updatedConsents);
      setVisible(false);

      if (triggerSave) {
        onSave(updatedConsents, false);
      }
    },
    [JSON.stringify(consents)]
  );

  const onUpdate = useCallback((cookieName, value) => {
    setConsents((currentConsents) => {
      const updatedCookie = { ...currentConsents };
      updatedCookie[cookieName] = value;

      return updatedCookie;
    });
  }, []);

  const onToggleCustomize = useCallback(() => {
    setAdvanced((vb) => !vb);
  }, []);

  if (!visible) {
    return <></>;
  }

  return (
    <CookieConsentContainer>
      {!advanced && (
        <CookieConsentSimple
          onUpdate={onUpdateAll}
          onCustomize={onToggleCustomize}
        />
      )}
      {advanced && (
        <CookieConsentAdvanced
          cookies={consentList}
          onCancel={onToggleCustomize}
          onSave={onSave}
          onUpdate={onUpdate}
          onUpdateAll={onUpdateAll}
        />
      )}
    </CookieConsentContainer>
  );
};

export default memo(CookieConsent);
