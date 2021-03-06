import { useState } from 'react';

export const setCookie = (name, value, options) => {
  const optionsWithDefaults = {
    days: 7,
    path: '/',
    ...options,
  };

  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5
  ).toUTCString();

  if (typeof document !== 'undefined') {
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=${optionsWithDefaults.path}`;
  }
};

export const getCookie = (name) => {
  if (typeof document !== 'undefined') {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
  }
};

export const useCookie = (key, initialValue) => {
  const [item, setItem] = useState(() => getCookie(key) || initialValue);

  const updateItem = (value, options) => {
    setItem(value);
    setCookie(key, value, options);
  };

  return [item, updateItem];
};
